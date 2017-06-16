/**
 * @return {?}
 */
function getPlatform() {
  var data = {
    versions : function() {
      /** @type {string} */
      var u = navigator.userAgent;
      /** @type {string} */
      var app = navigator.appVersion;
      return{
        trident : u.indexOf("Trident") > -1,
        presto : u.indexOf("Presto") > -1,
        webKit : u.indexOf("AppleWebKit") > -1,
        gecko : u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1,
        mobile : !!u.match(/AppleWebKit.*Mobile.*/),
        ios : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android : u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
        iPhone : u.indexOf("iPhone") > -1,
        iPad : u.indexOf("iPad") > -1,
        webApp : u.indexOf("Safari") == -1
      };
    }(),
    language : (navigator.browserLanguage || navigator.language).toLowerCase()
  };
  var config;
  if (data.versions.mobile) {
    /** @type {string} */
    var segment = navigator.userAgent.toLowerCase();
    if (segment.match(/MicroMessenger/i) == "micromessenger") {
      /** @type {string} */
      config = "wechat";
    } else {
      if (segment.match(/WeiBo/i) == "weibo") {
        /** @type {string} */
        config = "weibo";
      } else {
        if (segment.match(/QQ/i) == "qq") {
          /** @type {string} */
          config = "qq";
        } else {
          /** @type {string} */
          config = "other";
        }
      }
    }
  } else {
    /** @type {string} */
    config = "pc";
  }
  return{
    versions : data.versions,
    platform : config
  };
}
/**
 * @return {?}
 */
function iOSQQ() {
  var m = getPlatform();
  return m.platform !== "qq" || !m.versions.ios ? false : true;
}
var Slam = {};
Slam.VER = "1.7.6", Slam.Event = {
  GAME_INIT : "gameInit",
  GAME_START : "gameStart",
  GAME_OVER : "gameOver",
  GAME_SCORE : "gameScore",
  ROUND_START : "roundStart",
  TIME_UP : "timeUp",
  CUT_SCENES_COMPLETE : "cutScenesComplete",
  SCORE_ADD : "scoreAdd"
}, Slam.Preload = {
  _queue : null,
  _images : [{
    id : "ball",
    src : "ball.jpg"
  }, {
    id : "dial",
    src : "dial.png"
  }, {
    id : "indicator",
    src : "indicator.png"
  }, {
    id : "circle",
    src : "circle.png"
  }, {
    id : "track",
    src : "track.png"
  }, {
    id : "bar",
    src : "bar.png"
  }, {
    id : "mark",
    src : "mark.png"
  }, {
    id : "round",
    src : "round.png"
  }, {
    id : "round_1",
    src : "round_1.png"
  }, {
    id : "round_2",
    src : "round_2.png"
  }, {
    id : "round_3",
    src : "round_3.png"
  }, {
    id : "tutorial_1",
    src : "tutorial_1.png"
  }, {
    id : "tutorial_2",
    src : "tutorial_2.png"
  }, {
    id : "tutorial_3",
    src : "tutorial_3.png"
  }, {
    id : "jifenpai_0",
    src : "jifenpai_0.jpg"
  }, {
    id : "jifenpai_1",
    src : "jifenpai_1.jpg"
  }, {
    id : "jifenpai_2",
    src : "jifenpai_2.jpg"
  }, {
    id : "jifenpai_3",
    src : "jifenpai_3.jpg"
  }, {
    id : "jifenpai_4",
    src : "jifenpai_4.jpg"
  }, {
    id : "jifenpai_5",
    src : "jifenpai_5.jpg"
  }, {
    id : "jifenpai_6",
    src : "jifenpai_6.jpg"
  }, {
    id : "jifenpai_7",
    src : "jifenpai_7.jpg"
  }, {
    id : "jifenpai_8",
    src : "jifenpai_8.jpg"
  }, {
    id : "jifenpai_9",
    src : "jifenpai_9.jpg"
  }, {
    id : "bg",
    src : "background.jpg"
  }],
  _fonts : [{
    id : "helvetiker",
    src : "helvetiker_regular.typeface.json"
  }],
  _objs : [],
  _sounds : [{
    id : "bgm",
    src : "bgm.mp3"
  }],
  /**
   * @return {undefined}
   */
  init : function() {
    this._queue = new createjs.LoadQueue(true);
    this._queue.loadManifest(this._images, false, "textures/");
  },
  /**
   * @param {string} method
   * @param {Function} stream
   * @return {undefined}
   */
  load : function(method, stream) {
    if (!this._queue) {
      Slam.Preload.init();
    }
    if (method) {
      this._queue.on("progress", method, this);
    }
    if (stream) {
      this._queue.on("complete", stream, this);
    }
    this._queue.load();
  },
  /**
   * @param {Element} s
   * @return {undefined}
   */
  soundLoaded : function(s) {
    console.log(s);
    var event = createjs.Sound.play(s.src);
    event.stop();
  },
  /**
   * @return {?}
   */
  getQueue : function() {
    return this._queue;
  },
  /**
   * @param {string} name
   * @return {?}
   */
  getResult : function(name) {
    return this._queue.getResult(name);
  }
}, Slam.Music = function(name) {
  var self = this;
  /** @type {null} */
  var params = null;
  /** @type {null} */
  var completed = null;
  /** @type {boolean} */
  var i = false;
  var options = {
    interrupt : createjs.Sound.INTERRUPT_NONE,
    loop : -1
  };
  /**
   * @param {HTMLCanvasElement} src
   * @return {undefined}
   */
  self.init = function(src) {
    /** @type {Array} */
    createjs.Sound.alternateExtensions = ["mp3"];
    completed = createjs.proxy(self.soundLoaded, this);
    createjs.Sound.addEventListener("fileload", completed);
    createjs.Sound.registerSound(src);
  };
  /**
   * @param {Element} s
   * @return {undefined}
   */
  self.soundLoaded = function(s) {
    params = createjs.Sound.play(s.src, options);
    if (!i) {
      self.stop();
    }
  };
  /**
   * @return {?}
   */
  self.play = function() {
    return params ? (params.play(options), true) : false;
  };
  /**
   * @return {?}
   */
  self.stop = function() {
    return params ? (params.stop(), true) : false;
  };
  self.init(name);
}, Slam.Music.prototype.constructor = Slam.Music, Slam.main = function(options) {
  /**
   * @return {undefined}
   */
  function generateCollisionShape() {
    var e = store.createStatic(new Ammo.btStaticPlaneShape(new Ammo.btVector3(0, 1, 0), 0), new THREE.Vector3(0, 0, 0), 0.7);
    /** @type {boolean} */
    view.children[0].children[1].material.transparent = true;
    view.children[0].children[1].position.y++;
    var n = store.createStatic(new Ammo.btBoxShape(new Ammo.btVector3(c * 0.5, height * 0.5, p * 0.5)), new THREE.Vector3(scale, y + height / 2, roll), 0.7);
    var path = new Ammo.btCompoundShape;
    /** @type {number} */
    var b = 10;
    /** @type {number} */
    var a = 0;
    for (;a < b;a++) {
      var utrans = new Ammo.btTransform;
      /** @type {number} */
      var bisection = Math.PI * 2 * (a / b);
      utrans.setOrigin(new Ammo.btVector3(Math.cos(bisection) * radius, 0, Math.sin(bisection) * radius));
      var d = new Ammo.btSphereShape(s);
      path.addChildShape(utrans, d);
    }
    var resolved = store.createStatic(path, new THREE.Vector3(x, ypos, pZ), 0.7);
    if (iOSQQ()) {
      that.addNet(data);
    } else {
      store.addSoft(data);
      /** @type {number} */
      var appendAnchor = 2;
      for (;appendAnchor < 11;appendAnchor++) {
        data.userData.physicsBody.appendAnchor(appendAnchor * 11, resolved, false, 0.5);
      }
    }
    that.start(1);
    that.dispatchEvent({
      type : Slam.Event.GAME_INIT
    });
    that.control();
    render();
  }
  /**
   * @param {?} e
   * @return {undefined}
   */
  function mouseup(e) {
    /** @type {boolean} */
    P = true;
    getElapsedTime = new THREE.Clock;
    /** @type {boolean} */
    data.visible = false;
    enter();
  }
  /**
   * @return {undefined}
   */
  function init() {
    var label = new THREE.AmbientLight(16777215, 1);
    scene.add(label);
    var layer = new THREE.SpotLight(16777215, 1.5, 0, Math.PI / 3, 0.5, 2);
    layer.position.set(0, 800, 0);
    layer.lookAt(new THREE.Vector3(0, 0, 549.532));
    scene.add(layer);
    spotLight2 = new THREE.SpotLight(16777215, 2, 700, Math.PI / 3, 0.5, 2);
    spotLight2.position.set(scale, y + 100, roll - 300);
    scene.add(spotLight2);
    spotLight3 = new THREE.SpotLight(16777215, 2, 700, Math.PI / 3, 0.5, 2);
    spotLight3.position.set(scale, y - 100, roll - 300);
    scene.add(spotLight3);
    var sprite = new THREE.Object3D;
    sprite.position.set(scale, y, roll);
    scene.add(sprite);
    spotLight2.target = sprite;
    spotLight3.target = sprite;
  }
  /**
   * @param {?} deepDataAndEvents
   * @param {?} target
   * @param {Object} dataAndEvents
   * @param {string} material
   * @param {number} c
   * @param {number} a
   * @return {undefined}
   */
  function clone(deepDataAndEvents, target, dataAndEvents, material, c, a) {
    var object = new THREE.SpotLight(dataAndEvents, material, 0, a * Math.PI / 180, (a - c) / a, 2);
    object.position.copy(deepDataAndEvents);
    object.lookAt(target);
    /** @type {boolean} */
    object.castShadow = true;
    scene.add(object);
  }
  /**
   * @param {?} mergedBuffer
   * @param {?} vector
   * @param {Array} plane
   * @param {Array} material
   * @param {?} dataAndEvents
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  function threejs_init(mergedBuffer, vector, plane, material, dataAndEvents, deepDataAndEvents) {
    var object = new THREE.DirectionalLight(plane, material);
    object.position.copy(mergedBuffer);
    object.lookAt(vector);
    /** @type {boolean} */
    object.castShadow = true;
    scene.add(object);
  }
  /**
   * @return {undefined}
   */
  function enter() {
    var types = store.getRigid();
    var type;
    for (type in types) {
      if (isNaN(type)) {
        continue;
      }
      var name = types[type];
      store.remove(name);
      scene.remove(name);
    }
    store.clear();
  }
  /**
   * @param {?} total
   * @return {undefined}
   */
  function done(total) {
    that.start(++e);
  }
  /**
   * @return {undefined}
   */
  function draw() {
    if (!getElapsedTime) {
      return;
    }
    /** @type {number} */
    var _position = Math.floor(julianDay - getElapsedTime.getElapsedTime());
    if (_position < 0) {
      that.shoot();
      that.dispatchEvent({
        type : Slam.Event.TIME_UP
      });
      /** @type {null} */
      getElapsedTime = null;
      /** @type {boolean} */
      P = false;
      timer.stop();
      var n = timer.getElapsedTime();
      if (n < 1) {
        setTimeout(done, 2500);
      } else {
        setTimeout(done, 1E3);
      }
      return;
    }
    update(_position);
  }
  /**
   * @param {number} position
   * @return {undefined}
   */
  function update(position) {
    var tex = new THREE.Texture(Slam.Preload.getResult("jifenpai_" + Math.floor(position % 10)));
    /** @type {boolean} */
    tex.needsUpdate = true;
    var texture = new THREE.Texture(Slam.Preload.getResult("jifenpai_" + Math.floor(position / 10)));
    /** @type {boolean} */
    texture.needsUpdate = true;
    text.children[0].getObjectByName("gewei").material.map = tex;
    text.children[0].getObjectByName("shiwei").material.map = texture;
  }
  /**
   * @param {?} event
   * @return {undefined}
   */
  function eventHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    if (P) {
      that.intend();
    }
  }
  /**
   * @param {Object} e
   * @return {undefined}
   */
  function prevent(e) {
    e.preventDefault();
    e.stopPropagation();
    self.ballMove(e.touches[0].clientX, e.touches[0].clientY);
  }
  /**
   * @param {?} event
   * @return {undefined}
   */
  function show(event) {
    event.preventDefault();
    event.stopPropagation();
    self.skip();
    if (P) {
      that.shoot();
    }
  }
  /**
   * @param {?} event
   * @param {?} dataAndEvents
   * @param {?} TILE_SIZE
   * @return {?}
   */
  function determinePositionOnPlane2(event, dataAndEvents, TILE_SIZE) {
    var pair = {};
    /** @type {number} */
    pair.x = event / viewportWidth * 2 - 1;
    /** @type {number} */
    pair.y = -(dataAndEvents / viewportHeight) * 2 + 1;
    var circle = new THREE.Ray;
    circle.origin.setFromMatrixPosition(camera.matrixWorld);
    circle.direction.set(pair.x, pair.y, 0.5).unproject(camera).sub(circle.origin).normalize();
    var b = new THREE.Plane(new THREE.Vector3(0, 0, -1), TILE_SIZE);
    var bp = circle.intersectPlane(b);
    return bp;
  }
  /**
   * @return {undefined}
   */
  function render() {
    requestAnimationFrame(render);
    draw();
    var dt = clock.getDelta();
    if (vec) {
      vec.update();
    }
    if (store) {
      store.update(dt * 2);
    }
    if (self) {
      self.update();
    }
    camera.position.copy(self.getEye());
    var map = store.getRigid();
    var letter;
    for (letter in map) {
      var key = map[letter];
      var chunk = key.shot();
      if (chunk == -1) {
        store.remove(key);
        scene.remove(key);
      } else {
        if (chunk > 0) {
          if (e == 1) {
            /** @type {number} */
            chunk = 10;
          } else {
            if (e == 2) {
              /** @type {number} */
              chunk = 20;
            } else {
              if (e == 3) {
                /** @type {number} */
                chunk = 30;
              }
            }
          }
          d += chunk;
          var result = {
            score : chunk,
            total : d
          };
          /** @type {boolean} */
          data.visible = true;
          if (iOSQQ()) {
            that.scoreAdd();
            key.shutFriction();
          }
          that.dispatchEvent({
            type : Slam.Event.SCORE_ADD,
            data : result
          });
        }
      }
    }
    TWEEN.update();
    if (ea) {
      ea.update();
    }
    renderer.clear();
    renderer.render(scene, camera);
  }
  var that = this;
  /** @type {number} */
  var viewportWidth = 0;
  /** @type {number} */
  var viewportHeight = 0;
  /** @type {number} */
  var cacheKey = 0;
  /** @type {number} */
  var pdataOld = 397.774;
  /** @type {number} */
  var memory = 228.858;
  /** @type {number} */
  var pX = 0;
  /** @type {number} */
  var pY = 45.079;
  /** @type {number} */
  var z = 1382.846;
  /** @type {number} */
  var c = 192.258;
  /** @type {number} */
  var height = 113.083;
  /** @type {number} */
  var p = 9.25;
  /** @type {number} */
  var scale = 0;
  /** @type {number} */
  var y = 304.868;
  /** @type {number} */
  var roll = 768.416;
  /** @type {number} */
  var radius = 26.217;
  /** @type {number} */
  var s = 2.842;
  /** @type {number} */
  var x = 0;
  /** @type {number} */
  var ypos = 326.713;
  /** @type {number} */
  var pZ = 725.599;
  /** @type {number} */
  var S = 20;
  /** @type {null} */
  var camera = null;
  /** @type {null} */
  var scene = null;
  /** @type {null} */
  var renderer = null;
  /** @type {null} */
  var self = null;
  /** @type {null} */
  var marker = null;
  /** @type {null} */
  var view = null;
  /** @type {null} */
  var text = null;
  /** @type {null} */
  var data = null;
  /** @type {number} */
  var d = 0;
  /** @type {null} */
  var clock = null;
  /** @type {null} */
  var vec = null;
  /** @type {boolean} */
  var P = false;
  var store;
  /** @type {number} */
  var e = 1;
  /** @type {null} */
  var timer = null;
  /** @type {null} */
  var getElapsedTime = null;
  /** @type {number} */
  var julianDay = 30;
  /** @type {null} */
  var q = null;
  /** @type {null} */
  var ea = null;
  /**
   * @param {HTMLCanvasElement} options
   * @return {undefined}
   */
  that.init = function(options) {
    /** @type {number} */
    viewportWidth = window.innerWidth;
    /** @type {number} */
    viewportHeight = window.innerHeight;
    camera = new THREE.PerspectiveCamera(70, viewportWidth / viewportHeight, 1, 1500);
    camera.position.set(cacheKey, pdataOld, memory);
    camera.lookAt(new THREE.Vector3(pX, pY, z));
    scene = new THREE.Scene;
    init();
    renderer = new THREE.WebGLRenderer({
      canvas : options,
      antialias : true
    });
    /** @type {boolean} */
    renderer.autoClear = false;
    renderer.setClearColor(0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(viewportWidth, viewportHeight);
  };
  /**
   * @return {undefined}
   */
  that.launch = function() {
    clock = new THREE.Clock;
    timer = new THREE.Clock(false);
    var texture = new THREE.Texture(Slam.Preload.getResult("bg"));
    /** @type {boolean} */
    texture.needsUpdate = true;
    var head = new THREE.Mesh(new THREE.PlaneGeometry(1024, 1024), new THREE.MeshPhongMaterial({
      side : THREE.DoubleSide,
      map : texture
    }));
    head.scale.set(1.6, 0.85, 1);
    /** @type {number} */
    head.rotation.y = Math.PI;
    head.position.set(0, 400, 1407.983);
    scene.add(head);
    /** @type {number} */
    var n = 3;
    view = new Model.main;
    view.addEventListener(Model.Event.MODEL_LOADED, function(req) {
      var obj = req.obj;
      if (obj && obj.children) {
        for (i in obj.children) {
          var plane = obj.children[i];
          if (plane.name) {
            if (plane.name == "baixian001") {
              /** @type {boolean} */
              plane.material.transparent = true;
              plane.position.y += 1;
            }
          }
        }
      }
      n--;
      if (n == 0) {
        generateCollisionShape();
      }
    });
    view.load("models/floor/");
    text = new Model.main;
    text.addEventListener(Model.Event.MODEL_LOADED, function(req) {
      var obj = req.obj;
      if (obj && obj.children) {
        for (i in obj.children) {
          var plane = obj.children[i];
          if (plane.name) {
            if (plane.name == "lanban") {
              /** @type {boolean} */
              plane.material.transparent = true;
            }
          }
        }
      }
      n--;
      if (n == 0) {
        generateCollisionShape();
      }
    });
    text.load("models/stands/");
    text.position.set(scale, y, roll);
    var exports = new THREE.BufferGeometryLoader;
    exports.load("models/net.json", function(c) {
      c.translate(x - s / 2, ypos, pZ);
      var legMaterial = new THREE.MeshLambertMaterial({
        color : 16777215,
        transparent : true,
        opacity : 0.1
      });
      data = new THREE.Mesh(c, legMaterial);
      /** @type {number} */
      data.mass = 100;
      /** @type {number} */
      data.pressure = 100;
      scene.add(data);
      n--;
      if (n == 0) {
        generateCollisionShape();
      }
    }, function(status) {
      console.log(status.loaded / status.total * 100 + "% loaded");
    }, function(dataAndEvents) {
      console.log("An error happened");
    });
    self = new Slam.Person;
    self.addEventListener(Slam.Event.CUT_SCENES_COMPLETE, mouseup);
    camera.lookAt(new THREE.Vector3(pX, pY, z));
    scene.add(self, view, text);
    store = new Slam.Physics;
  };
  /**
   * @param {Object} event
   * @return {undefined}
   */
  that.addNet = function(event) {
    var array = event.geometry.attributes.position.array;
    /** @type {number} */
    var padLength = Math.round(array.length / 3);
    var data = new Ammo.btCompoundShape;
    /** @type {number} */
    var i = 0;
    for (;i < padLength;i++) {
      var x = array[i * 3 + 0];
      var h = array[i * 3 + 1];
      var z = array[i * 3 + 2];
      var points = new Ammo.btTransform;
      points.setOrigin(new Ammo.btVector3(x, h, z));
      var chunkEnd = new Ammo.btSphereShape(0.2);
      data.addChildShape(points, chunkEnd);
    }
    event = store.createStatic(data, new THREE.Vector3, 0.1);
  };
  /**
   * @param {number} dataAndEvents
   * @return {undefined}
   */
  that.start = function(dataAndEvents) {
    /** @type {boolean} */
    P = false;
    /** @type {null} */
    getElapsedTime = null;
    /** @type {number} */
    e = dataAndEvents;
    if (isNaN(e)) {
      /** @type {number} */
      e = 1;
    }
    if (e > 3) {
      self.stop();
      enter();
      that.dispatchEvent({
        type : Slam.Event.GAME_OVER,
        data : d
      });
      return;
    }
    self.round(e);
    that.dispatchEvent({
      type : Slam.Event.ROUND_START,
      data : e
    });
    update(30);
    camera.position.copy(self.getEye());
  };
  /**
   * @return {undefined}
   */
  that.replay = function() {
    /** @type {number} */
    d = 0;
    that.start(1);
  };
  /**
   * @return {undefined}
   */
  that.control = function() {
    renderer.domElement.addEventListener("touchstart", eventHandler, false);
    renderer.domElement.addEventListener("touchmove", prevent, false);
    renderer.domElement.addEventListener("touchend", show, false);
    renderer.domElement.addEventListener("mousedown", eventHandler, false);
    renderer.domElement.addEventListener("mouseup", show, false);
    return;
  };
  /**
   * @return {undefined}
   */
  that.intend = function() {
    self.ready();
  };
  /**
   * @return {undefined}
   */
  that.shoot = function() {
    var point = self.go();
    if (point) {
      var marker = new Slam.Ball;
      marker.position.copy(self.getBall());
      scene.add(marker);
      marker.createPhysics();
      store.add(marker);
      marker.shoot(new THREE.Vector3(x, ypos, pZ), point);
      timer.start();
    }
  };
  /**
   * @param {?} point
   * @return {undefined}
   */
  that.testShoot = function(point) {
    marker = new Slam.Ball;
    marker.position.copy(self.getHand());
    scene.add(marker);
    marker.createPhysics();
    store.add(marker);
    marker.shoot(new THREE.Vector3(x, ypos, pZ), point);
  };
  /**
   * @return {undefined}
   */
  that.scoreAdd = function() {
    var client = (new TWEEN.Tween(data.scale)).delay(40).to({
      x : 0.99,
      z : 0.99
    }, 40);
    var chain = (new TWEEN.Tween(data.scale)).to({
      x : 1.01,
      z : 1.01
    }, 120).yoyo(true).repeat(3);
    var self = (new TWEEN.Tween(data.scale)).to({
      x : 1,
      z : 1
    }, 40);
    client.chain(chain);
    chain.chain(self);
    client.start();
  };
  that.init(options);
}, Object.assign(Slam.main.prototype, THREE.EventDispatcher.prototype), Slam.main.prototype.constructor = Slam.main, Slam.Person = function() {
  /**
   * @return {undefined}
   */
  function init() {
    /** @type {boolean} */
    scope.visible = true;
    scope.position.set(0, 0, 0);
    (new TWEEN.Tween(scope.position)).to(new THREE.Vector3(pX, pY, z), transitionTime).easing(TWEEN.Easing.Quadratic.Out).onComplete(clone).start();
  }
  /**
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  function clone(dataAndEvents) {
    /** @type {boolean} */
    T = true;
  }
  /**
   * @param {?} ctx
   * @return {undefined}
   */
  function draw(ctx) {
    if (status == 1) {
      config.show();
    } else {
      if (status == 2 || status == 3) {
        c.show();
      }
    }
    init();
    self.dispatchEvent({
      type : Slam.Event.CUT_SCENES_COMPLETE
    });
  }
  var self = this;
  /** @type {number} */
  var t = 0;
  /** @type {number} */
  var delta = 357.9966;
  /** @type {number} */
  var pZ = -220;
  /** @type {number} */
  var pX = 0;
  /** @type {number} */
  var pY = 150;
  /** @type {number} */
  var z = 10;
  /** @type {number} */
  var cacheKey = 0;
  /** @type {number} */
  var pdataOld = 200;
  /** @type {number} */
  var memory = 10;
  /** @type {number} */
  var serverAttrs = 80;
  /** @type {number} */
  var udataCur = 100;
  /** @type {number} */
  var val = 10;
  /** @type {number} */
  var DEPTH = 549.532;
  /** @type {number} */
  var rz = 449.532;
  /** @type {number} */
  var cookieName = 0;
  /** @type {number} */
  var pdataCur = 250;
  /** @type {number} */
  var firstP = 80;
  /** @type {number} */
  var y = 20;
  /** @type {null} */
  var config = null;
  /** @type {null} */
  var c = null;
  /** @type {null} */
  var message = null;
  /** @type {null} */
  var scope = null;
  /** @type {number} */
  var status = 1;
  /** @type {boolean} */
  var T = false;
  /** @type {boolean} */
  var N = false;
  /** @type {number} */
  _dis = 0;
  /** @type {number} */
  _speed = 0.04;
  /** @type {null} */
  var timer = null;
  /** @type {number} */
  var k = 1.5;
  /** @type {number} */
  var transitionTime = 500;
  /** @type {number} */
  var deltaX = 0.5;
  /** @type {null} */
  var text = null;
  /**
   * @return {undefined}
   */
  self.init = function() {
    THREE.Object3D.call(self);
    timer = new THREE.Clock(false);
    message = new Slam.CutScenes;
    /** @type {number} */
    message.rotation.y = Math.PI;
    message.position.set(cookieName, pdataCur, firstP);
    message.addEventListener(Slam.Event.CUT_SCENES_COMPLETE, draw);
    config = new Slam.Dash;
    config.hide();
    /** @type {number} */
    config.rotation.y = Math.PI;
    config.position.set(cacheKey, pdataOld, memory);
    c = new Slam.Power;
    /** @type {boolean} */
    c.frustumCulled = false;
    c.hide();
    /** @type {number} */
    c.rotation.y = Math.PI;
    c.position.set(serverAttrs, udataCur, val);
    scope = new Slam.Ball;
    self.add(message, config, c, scope);
  };
  /**
   * @return {?}
   */
  self.getEye = function() {
    self.getWorldPosition(new THREE.Vector3(0, 0, 0));
    var interval = new THREE.Vector3(0, delta, pZ);
    return self.localToWorld(interval);
  };
  /**
   * @return {?}
   */
  self.getHand = function() {
    self.getWorldPosition(new THREE.Vector3(0, 0, 0));
    var particle = new THREE.Vector3(pX, pY, z);
    return self.localToWorld(particle);
  };
  /**
   * @return {?}
   */
  self.getBall = function() {
    return self.getWorldPosition(new THREE.Vector3(0, 0, 0)), self.localToWorld(scope.position);
  };
  /**
   * @param {Error} textAlt
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  self.ballMove = function(textAlt, dataAndEvents) {
    if (status != 3) {
      return;
    }
    if (text) {
      scope.position.x += parseInt(text - textAlt);
    }
    /** @type {Error} */
    text = textAlt;
  };
  /**
   * @param {number} type
   * @return {undefined}
   */
  self.round = function(type) {
    /** @type {number} */
    status = parseInt(type);
    /** @type {number} */
    self.position.x = 0;
    if (status < 1) {
      /** @type {number} */
      status = 1;
    }
    if (status > 3) {
      /** @type {number} */
      status = 3;
    }
    if (status == 1) {
      /** @type {number} */
      self.position.z = DEPTH;
    } else {
      if (status == 2 || status == 3) {
        /** @type {number} */
        self.position.z = rz;
      }
    }
    c.hide();
    config.hide();
    timer.stop();
    /** @type {boolean} */
    scope.visible = false;
    message.show(type);
  };
  /**
   * @return {undefined}
   */
  self.stop = function() {
    /** @type {number} */
    status = 0;
  };
  /**
   * @return {undefined}
   */
  self.skip = function() {
    message.skip();
  };
  /**
   * @return {undefined}
   */
  self.ready = function() {
    if (T) {
      /** @type {boolean} */
      T = false;
      /** @type {boolean} */
      N = true;
    }
  };
  /**
   * @return {?}
   */
  self.go = function() {
    /** @type {null} */
    text = null;
    if (!N) {
      return false;
    }
    /** @type {boolean} */
    N = false;
    var vars = new THREE.Vector3;
    if (status == 1) {
      var theta2 = config.getVal();
      /** @type {number} */
      vars.x = Math.sin(theta2) * 50;
      /** @type {number} */
      vars.y = 300;
      /** @type {number} */
      vars.z = 100;
    } else {
      if (status == 2 || status == 3) {
        var n = c.getVal();
        /** @type {number} */
        vars.x = 0;
        /** @type {number} */
        vars.y = 210 + 100 * n;
        /** @type {number} */
        vars.z = 150;
      }
    }
    return scope.visible = false, timer.start(), vars;
  };
  /**
   * @return {undefined}
   */
  self.update = function() {
    if (timer.running) {
      if (timer.getElapsedTime() >= k) {
        timer.stop();
        init();
      }
    }
    if (N) {
      _dis += _speed;
      if (_dis >= 1) {
        /** @type {number} */
        _dis = 1;
        _speed *= -1;
      }
      if (_dis <= -1) {
        /** @type {number} */
        _dis = -1;
        _speed *= -1;
      }
      if (status == 1) {
        config.setVal(_dis * Math.PI / 2);
      } else {
        if (status == 2 || status == 3) {
          c.setVal(Math.abs(_dis));
        }
      }
    } else {
      if (status == 3) {
        self.position.x += deltaX;
        if (Math.abs(self.position.x) > 100) {
          deltaX *= -1;
        }
      }
    }
  };
  self.init();
}, Slam.Person.prototype = Object.create(THREE.Object3D.prototype), Slam.Person.prototype.constructor = Slam.Person, Slam.Dash = function() {
  /**
   * @param {string} name
   * @return {?}
   */
  function update(name) {
    var c = Slam.Preload.getResult(name);
    var tex = new THREE.Texture(c);
    /** @type {boolean} */
    tex.needsUpdate = true;
    var params = new THREE.SpriteMaterial({
      map : tex,
      depthTest : false
    });
    var options = new THREE.Sprite(params);
    return options.scale.x = c.width / 4, options.scale.y = c.height / 4, options;
  }
  /**
   * @return {?}
   */
  function prepImage() {
    var imageData = Slam.Preload.getResult("indicator");
    /** @type {number} */
    var width = imageData.width / 4;
    /** @type {number} */
    var height = imageData.height / 4;
    var map = new THREE.Texture(imageData);
    /** @type {boolean} */
    map.needsUpdate = true;
    var material = new THREE.MeshBasicMaterial({
      transparent : true,
      map : map
    });
    /** @type {boolean} */
    material.depthTest = false;
    var geometry = new THREE.PlaneGeometry(width, height);
    geometry.translate(0, height / 3, 0);
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }
  var self = this;
  /** @type {number} */
  var ry = 16;
  /** @type {null} */
  var c = null;
  /** @type {number} */
  var angle = 0;
  /**
   * @return {undefined}
   */
  self.init = function() {
    THREE.Object3D.call(self);
    /** @type {boolean} */
    self.frustumCulled = false;
    c = update("indicator");
    var a = update("dial");
    /** @type {number} */
    a.position.y = ry;
    var b = update("circle");
    b.position.z++;
    self.add(a, c, b);
  };
  /**
   * @param {number} val
   * @return {undefined}
   */
  self.setVal = function(val) {
    /** @type {number} */
    angle = val;
    c.material.rotation = angle;
  };
  /**
   * @return {?}
   */
  self.getVal = function() {
    return angle;
  };
  /**
   * @return {undefined}
   */
  self.show = function() {
    /** @type {boolean} */
    self.visible = true;
  };
  /**
   * @return {undefined}
   */
  self.hide = function() {
    /** @type {boolean} */
    self.visible = false;
  };
  self.init();
}, Slam.Dash.prototype = Object.create(THREE.Object3D.prototype), Slam.Dash.prototype.constructor = Slam.Dash, Slam.Power = function() {
  /**
   * @param {string} name
   * @return {?}
   */
  function update(name) {
    var c = Slam.Preload.getResult(name);
    var tex = new THREE.Texture(c);
    /** @type {boolean} */
    tex.needsUpdate = true;
    var params = new THREE.SpriteMaterial({
      map : tex,
      depthTest : false
    });
    var options = new THREE.Sprite(params);
    return options.scale.x = c.width / 2, options.scale.y = c.height / 2, options.position.y = c.height / 4, options;
  }
  var self = this;
  /** @type {number} */
  var lon = 3;
  /** @type {number} */
  var ry = 105;
  /** @type {number} */
  var r = 5;
  /** @type {number} */
  var j = 63;
  /** @type {number} */
  var s = 10;
  /** @type {number} */
  var pdataOld = 120;
  /** @type {number} */
  var u = 20;
  /** @type {null} */
  var a = null;
  /** @type {null} */
  var data = null;
  /** @type {number} */
  var vRepeat = 0;
  /**
   * @return {undefined}
   */
  self.init = function() {
    THREE.Object3D.call(self);
    var a = update("track");
    var args = update("mark");
    data = update("bar");
    /** @type {number} */
    data.scale.y = pdataOld;
    /** @type {number} */
    data.position.y = j;
    data.position.z--;
    data.material.map.wrapS = THREE.ClampToEdgeWrapping;
    data.material.map.wrapT = THREE.ClampToEdgeWrapping;
    data.material.map.repeat.set(1, pdataOld);
    /** @type {number} */
    args.position.x = lon;
    /** @type {number} */
    args.position.y = ry;
    self.add(data, a, args);
  };
  /**
   * @param {number} inVal
   * @return {undefined}
   */
  self.setVal = function(inVal) {
    /** @type {number} */
    vRepeat = inVal;
    data.material.map.offset = new THREE.Vector2(0, -pdataOld * vRepeat);
  };
  /**
   * @return {?}
   */
  self.getVal = function() {
    return vRepeat;
  };
  /**
   * @return {undefined}
   */
  self.show = function() {
    /** @type {boolean} */
    self.visible = true;
  };
  /**
   * @return {undefined}
   */
  self.hide = function() {
    /** @type {boolean} */
    self.visible = false;
  };
  self.init();
}, Slam.Power.prototype = Object.create(THREE.Object3D.prototype), Slam.Power.prototype.constructor = Slam.Power, Slam.Ball = function() {
  /**
   * @return {?}
   */
  function threejs_init() {
    var image = Slam.Preload.getResult("ball");
    var texture = new THREE.Texture(image);
    /** @type {boolean} */
    texture.needsUpdate = true;
    var material = new THREE.MeshLambertMaterial({
      lightMapIntensity : 0
    });
    material.map = texture;
    var data = new THREE.SphereGeometry(r, segments, segments);
    data.rotateZ(-Math.PI / 2);
    data.rotateX(Math.PI / 4);
    var object = new THREE.Mesh(data, material);
    return object;
  }
  var self = this;
  /** @type {number} */
  var r = 12.3;
  /** @type {number} */
  var segments = 20;
  /** @type {number} */
  var otherVal = 3E4;
  /** @type {number} */
  var max = 300;
  /** @type {number} */
  var s = 2;
  var position = new THREE.Vector3;
  var that = {
    INVALID : -1,
    NORMAL : 0,
    SHOT : 1
  };
  /** @type {number} */
  var index = that.NORMAL;
  /**
   * @return {undefined}
   */
  self.init = function() {
    THREE.Object3D.call(self);
    var l = threejs_init();
    self.add(l);
    otherVal += (new Date).getTime();
  };
  /**
   * @return {?}
   */
  self.createPhysics = function() {
    var shape = new Ammo.btSphereShape(r);
    shape.setMargin(0.05);
    /** @type {number} */
    var mass = 10;
    var localInertia = new Ammo.btVector3(0, 0, 0);
    shape.calculateLocalInertia(mass, localInertia);
    var transform = new Ammo.btTransform;
    transform.setIdentity();
    var params = self.position;
    transform.setOrigin(new Ammo.btVector3(params.x, params.y, params.z));
    var motionState = new Ammo.btDefaultMotionState(transform);
    var rigidBodyInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, shape, localInertia);
    rigidBodyInfo.set_m_restitution(1);
    var circle = new Ammo.btRigidBody(rigidBodyInfo);
    return circle.setFriction(0.5), self.userData.physicsBody = circle, circle;
  };
  /**
   * @return {undefined}
   */
  self.shutFriction = function() {
    self.userData.physicsBody.setFriction(0.1);
    self.userData.physicsBody.setRestitution(0.1);
  };
  /**
   * @param {?} target
   * @param {?} point
   * @return {undefined}
   */
  self.shoot = function(target, point) {
    position = target;
    var next = new THREE.Vector3(target.x, self.y, target.z);
    if (self.position.distanceTo(next) > max) {
      /** @type {number} */
      s = 3;
    } else {
      /** @type {number} */
      s = 2;
    }
    self.userData.physicsBody.setLinearVelocity(new Ammo.btVector3(point.x, point.y, point.z));
    self.userData.physicsBody.setAngularVelocity(new Ammo.btVector3(10, 2, 0));
  };
  /**
   * @return {?}
   */
  self.shot = function() {
    if (index == that.NORMAL && (new Date).getTime() > otherVal) {
      return-1;
    }
    if (index == that.NORMAL && self.position.distanceTo(position) < r) {
      /** @type {number} */
      index = that.SHOT;
    } else {
      if (index == that.SHOT && position.y - self.position.y > r) {
        return index = that.INVALID, s;
      }
    }
    return 0;
  };
  self.init();
}, Slam.Ball.prototype = Object.create(THREE.Object3D.prototype), Slam.Ball.prototype.constructor = Slam.Ball, Slam.CutScenes = function() {
  /**
   * @param {string} name
   * @return {?}
   */
  function createElements(name) {
    var data = Slam.Preload.getResult(name);
    var texture = new THREE.Texture(data);
    /** @type {boolean} */
    texture.needsUpdate = true;
    var material = new THREE.MeshBasicMaterial({
      transparent : true,
      map : texture,
      side : THREE.DoubleSide
    });
    /** @type {boolean} */
    material.depthTest = false;
    var geometry = new THREE.PlaneGeometry(data.width, data.height);
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function create(name) {
    var c = Slam.Preload.getResult(name);
    var tex = new THREE.Texture(c);
    /** @type {boolean} */
    tex.needsUpdate = true;
    var params = new THREE.SpriteMaterial({
      map : tex,
      depthTest : false
    });
    var options = new THREE.Sprite(params);
    return options.scale.x = c.width / 3, options.scale.y = c.height / 3, options;
  }
  /**
   * @return {undefined}
   */
  function after() {
    /** @type {boolean} */
    map.visible = true;
    /** @type {boolean} */
    mesh.visible = false;
    /** @type {boolean} */
    p.visible = false;
    /** @type {number} */
    timeout = setTimeout(update, remaining);
  }
  /**
   * @return {undefined}
   */
  function update() {
    clearTimeout(timeout);
    /** @type {boolean} */
    map.visible = false;
    /** @type {boolean} */
    mesh.visible = true;
    mesh.scale.set(0.1, 0.1, 0.1);
    /** @type {number} */
    mesh.rotation.y = 0;
    /** @type {boolean} */
    p.visible = false;
    p.scale.set(1, 1, 1);
    /** @type {number} */
    p.rotation.y = Math.PI * 3 / 2;
    var callback = (new TWEEN.Tween(mesh.scale)).to({
      x : 1,
      y : 1,
      z : 1
    }, transitionTime).easing(TWEEN.Easing.Quadratic.Out);
    var self = (new TWEEN.Tween(mesh.rotation)).to({
      y : Math.PI / 2
    }, immediate);
    var parsed = (new TWEEN.Tween(p.rotation)).to({
      y : Math.PI * 2
    }, immediate);
    var data = (new TWEEN.Tween(p.scale)).to({
      x : 0.1,
      y : 0.1,
      z : 0.1
    }, transitionTime).easing(TWEEN.Easing.Quadratic.In);
    callback.chain(self);
    self.chain(parsed);
    parsed.chain(data);
    self.onComplete(function() {
      /** @type {boolean} */
      mesh.visible = false;
      /** @type {boolean} */
      p.visible = true;
    });
    data.onComplete(render);
    callback.start();
  }
  /**
   * @param {?} rows
   * @return {undefined}
   */
  function render(rows) {
    /** @type {boolean} */
    p.visible = false;
    /** @type {boolean} */
    map.visible = false;
    self.dispatchEvent({
      type : Slam.Event.CUT_SCENES_COMPLETE
    });
  }
  var self = this;
  /** @type {null} */
  var mesh = null;
  /** @type {null} */
  var p = null;
  /** @type {null} */
  var map = null;
  /** @type {number} */
  var remaining = 1E4;
  /** @type {number} */
  var transitionTime = 1E3;
  /** @type {number} */
  var immediate = 300;
  /** @type {null} */
  var u = null;
  /** @type {number} */
  var timeout = 0;
  /**
   * @return {undefined}
   */
  self.init = function() {
    THREE.Object3D.call(self);
    mesh = createElements("round");
    p = new THREE.Object3D;
    var l = createElements("round_1");
    /** @type {string} */
    l.name = "n1";
    var handler = createElements("round_2");
    /** @type {string} */
    handler.name = "n2";
    var one = createElements("round_3");
    /** @type {string} */
    one.name = "n3";
    p.add(l, handler, one);
    map = new THREE.Object3D;
    var line = new THREE.Sprite(new THREE.SpriteMaterial({
      color : 0,
      transparent : true,
      opacity : 0.8
    }));
    /** @type {number} */
    line.scale.x = 600;
    /** @type {number} */
    line.scale.y = 800;
    line.position.z--;
    var object = create("tutorial_1");
    /** @type {string} */
    object.name = "t1";
    var immediate = create("tutorial_2");
    /** @type {string} */
    immediate.name = "t2";
    var label = create("tutorial_3");
    /** @type {string} */
    label.name = "t3";
    map.add(line, object, immediate, label);
    self.add(map, mesh, p);
  };
  /**
   * @return {undefined}
   */
  self.skip = function() {
    if (map.visible) {
      update();
    }
  };
  /**
   * @param {number} t
   * @return {undefined}
   */
  self.show = function(t) {
    /** @type {boolean} */
    p.getObjectByName("n1").visible = false;
    /** @type {boolean} */
    p.getObjectByName("n2").visible = false;
    /** @type {boolean} */
    p.getObjectByName("n3").visible = false;
    /** @type {boolean} */
    map.getObjectByName("t1").visible = false;
    /** @type {boolean} */
    map.getObjectByName("t2").visible = false;
    /** @type {boolean} */
    map.getObjectByName("t3").visible = false;
    if (t >= 1) {
      if (t <= 3) {
        /** @type {boolean} */
        p.getObjectByName("n" + t).visible = true;
        /** @type {boolean} */
        map.getObjectByName("t" + t).visible = true;
      }
    }
    after();
  };
  self.init();
}, Slam.CutScenes.prototype = Object.create(THREE.Object3D.prototype), Slam.CutScenes.prototype.constructor = Slam.CutScenes, Slam.Physics = function() {
  /**
   * @return {undefined}
   */
  function RigidBody() {
    var collisionConfiguration = new Ammo.btDefaultCollisionConfiguration;
    var dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
    var broadphase = new Ammo.btDbvtBroadphase;
    var solver = new Ammo.btSequentialImpulseConstraintSolver;
    world = new Ammo.btDiscreteDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration);
    world.setGravity(new Ammo.btVector3(0, gy, 0));
  }
  /**
   * @return {undefined}
   */
  function ScenePhysics() {
    var collisionConfiguration = new Ammo.btSoftBodyRigidBodyCollisionConfiguration;
    var dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
    var broadphase = new Ammo.btDbvtBroadphase;
    var solver = new Ammo.btSequentialImpulseConstraintSolver;
    var s = new Ammo.btDefaultSoftBodySolver;
    world = new Ammo.btSoftRigidDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration, s);
    world.setGravity(new Ammo.btVector3(0, gy, 0));
    world.getWorldInfo().set_m_gravity(new Ammo.btVector3(0, gy, 0));
  }
  /**
   * @param {Object} key
   * @return {undefined}
   */
  function parse(key) {
    var camelKey = (new THREE.Geometry).fromBufferGeometry(key);
    var n = camelKey.mergeVertices();
    var v = parseModel(camelKey);
    add(key, v);
  }
  /**
   * @param {Object} data
   * @return {?}
   */
  function parseModel(data) {
    var width = data.vertices.length;
    var pl = data.faces.length;
    var that = new THREE.BufferGeometry;
    /** @type {Float32Array} */
    var vertices = new Float32Array(width * 3);
    var mat = new (pl * 3 > 65535 ? Uint32Array : Uint16Array)(pl * 3);
    /** @type {number} */
    var p = 0;
    for (;p < width;p++) {
      var v = data.vertices[p];
      /** @type {number} */
      var i = p * 3;
      vertices[i] = v.x;
      vertices[i + 1] = v.y;
      vertices[i + 2] = v.z;
    }
    /** @type {number} */
    p = 0;
    for (;p < pl;p++) {
      var f = data.faces[p];
      /** @type {number} */
      i = p * 3;
      mat[i] = f.a;
      mat[i + 1] = f.b;
      mat[i + 2] = f.c;
    }
    return that.setIndex(new THREE.BufferAttribute(mat, 1)), that.addAttribute("position", new THREE.BufferAttribute(vertices, 3)), that;
  }
  /**
   * @param {number} left
   * @param {number} val2
   * @param {number} y
   * @param {number} right
   * @param {number} val1
   * @param {number} h
   * @return {?}
   */
  function equals(left, val2, y, right, val1, h) {
    /** @type {number} */
    var CLICKBUSTER_THRESHOLD = 1E-6;
    return Math.abs(right - left) < CLICKBUSTER_THRESHOLD && (Math.abs(val1 - val2) < CLICKBUSTER_THRESHOLD && Math.abs(h - y) < CLICKBUSTER_THRESHOLD);
  }
  /**
   * @param {Object} element
   * @param {Object} e
   * @return {undefined}
   */
  function add(element, e) {
    var array = element.attributes.position.array;
    var results = e.attributes.position.array;
    var el = e.index.array;
    /** @type {number} */
    var endOffset = results.length / 3;
    /** @type {number} */
    var _len = array.length / 3;
    element.ammoVertices = results;
    element.ammoIndices = el;
    /** @type {Array} */
    element.ammoIndexAssociation = [];
    /** @type {number} */
    var offset = 0;
    for (;offset < endOffset;offset++) {
      /** @type {Array} */
      var fin = [];
      element.ammoIndexAssociation.push(fin);
      /** @type {number} */
      var i = offset * 3;
      /** @type {number} */
      var _i = 0;
      for (;_i < _len;_i++) {
        /** @type {number} */
        var l = _i * 3;
        if (equals(results[i], results[i + 1], results[i + 2], array[l], array[l + 1], array[l + 2])) {
          fin.push(l);
        }
      }
    }
  }
  /**
   * @return {undefined}
   */
  function update() {
    var type;
    for (type in types) {
      if (isNaN(type)) {
        continue;
      }
      var object = types[type];
      var geometry = object.geometry;
      var physicsBody = object.userData.physicsBody;
      var el = geometry.attributes.position.array;
      var array = geometry.attributes.normal.array;
      var map = geometry.ammoIndexAssociation;
      var res = physicsBody.get_m_nodes();
      var key;
      for (key in map) {
        if (isNaN(key)) {
          continue;
        }
        var camelKey = res.at(key);
        var vars = camelKey.get_m_x();
        var h = vars.x();
        var value = vars.y();
        var func = vars.z();
        var accResult = camelKey.get_m_n();
        var tmp = accResult.x();
        var html = accResult.y();
        var index = accResult.z();
        var val = map[key];
        var n;
        for (n in val) {
          if (isNaN(n)) {
            continue;
          }
          var id = val[n];
          el[id] = h;
          array[id] = tmp;
          id++;
          el[id] = value;
          array[id] = html;
          id++;
          el[id] = func;
          array[id] = index;
        }
      }
      /** @type {boolean} */
      geometry.attributes.position.needsUpdate = true;
      /** @type {boolean} */
      geometry.attributes.normal.needsUpdate = true;
    }
  }
  /**
   * @return {undefined}
   */
  function render() {
    var i;
    for (i in elems) {
      if (isNaN(i)) {
        continue;
      }
      var body = elems[i];
      var physicsBody = body.userData.physicsBody;
      var btResultShape = physicsBody.getMotionState();
      if (btResultShape) {
        btResultShape.getWorldTransform(utrans);
        var vars = utrans.getOrigin();
        var rotation = utrans.getRotation();
        body.position.set(vars.x(), vars.y(), vars.z());
        body.quaternion.set(rotation.x(), rotation.y(), rotation.z(), rotation.w());
      }
    }
  }
  var self = this;
  /** @type {null} */
  var world = null;
  /** @type {number} */
  var pathElement = 0.05;
  /** @type {null} */
  var utrans = null;
  /** @type {Array} */
  var elems = [];
  /** @type {Array} */
  var types = [];
  /** @type {number} */
  var gy = -196;
  /**
   * @return {undefined}
   */
  self.init = function() {
    THREE.Object3D.call(self);
    utrans = new Ammo.btTransform;
    ScenePhysics();
  };
  /**
   * @param {Object} self
   * @param {?} shape
   * @param {number} mass
   * @param {Object} point
   * @param {Object} params
   * @param {Object} details
   * @param {Object} description
   * @return {?}
   */
  self.createRigidBody = function(self, shape, mass, point, params, details, description) {
    if (point) {
      self.position.copy(point);
    } else {
      point = self.position;
    }
    if (params) {
      self.quaternion.copy(params);
    } else {
      params = self.quaternion;
    }
    var transform = new Ammo.btTransform;
    transform.setIdentity();
    transform.setOrigin(new Ammo.btVector3(point.x, point.y, point.z));
    transform.setRotation(new Ammo.btQuaternion(params.x, params.y, params.z, params.w));
    var motionState = new Ammo.btDefaultMotionState(transform);
    var localInertia = new Ammo.btVector3(0, 0, 0);
    shape.calculateLocalInertia(mass, localInertia);
    var rigidBodyInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, shape, localInertia);
    var monster = new Ammo.btRigidBody(rigidBodyInfo);
    return monster.setFriction(0.5), details && monster.setLinearVelocity(new Ammo.btVector3(details.x, details.y, details.z)), description && monster.setAngularVelocity(new Ammo.btVector3(description.x, description.y, description.z)), self.userData.physicsBody = monster, self.userData.collided = false, mass > 0 && monster.setActivationState(4), physicsWorld.addRigidBody(monster), monster;
  };
  /**
   * @param {?} shape
   * @param {?} point
   * @param {number} opt_attributes
   * @return {?}
   */
  self.createStatic = function(shape, point, opt_attributes) {
    shape.setMargin(pathElement);
    /** @type {number} */
    var mass = 0;
    var localInertia = new Ammo.btVector3(0, 0, 0);
    shape.calculateLocalInertia(mass, localInertia);
    var transform = new Ammo.btTransform;
    transform.setIdentity();
    transform.setOrigin(new Ammo.btVector3(point.x, point.y, point.z));
    var motionState = new Ammo.btDefaultMotionState(transform);
    var rigidBodyInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, shape, localInertia);
    rigidBodyInfo.set_m_restitution(opt_attributes);
    var body = new Ammo.btRigidBody(rigidBodyInfo);
    return world.addRigidBody(body), body;
  };
  /**
   * @param {?} data
   * @return {undefined}
   */
  self.add = function(data) {
    world.addRigidBody(data.userData.physicsBody);
    elems.push(data);
  };
  /**
   * @param {?} keepData
   * @return {undefined}
   */
  self.remove = function(keepData) {
    world.removeRigidBody(keepData.userData.physicsBody);
  };
  /**
   * @return {undefined}
   */
  self.clear = function() {
    /** @type {Array} */
    elems = [];
  };
  /**
   * @return {?}
   */
  self.getRigid = function() {
    return elems;
  };
  /**
   * @param {Object} data
   * @return {undefined}
   */
  self.addSoft = function(data) {
    var target = data.geometry;
    var m = data.mass;
    var activeClassName = data.pressure;
    parse(target);
    var utils = new Ammo.btSoftBodyHelpers;
    var vec = utils.CreateFromTriMesh(world.getWorldInfo(), target.ammoVertices, target.ammoIndices, target.ammoIndices.length / 3, true);
    var element = vec.get_m_cfg();
    element.set_viterations(40);
    element.set_piterations(40);
    element.set_collisions(17);
    element.set_kDF(0.1);
    element.set_kDP(0.01);
    element.set_kPR(activeClassName);
    vec.get_m_materials().at(0).set_m_kLST(0.9);
    vec.get_m_materials().at(0).set_m_kAST(0.9);
    vec.setTotalMass(m, false);
    Ammo.castObject(vec, Ammo.btCollisionObject).getCollisionShape().setMargin(pathElement);
    world.addSoftBody(vec, 1, -1);
    data.userData.physicsBody = vec;
    vec.setActivationState(4);
    types.push(data);
  };
  /**
   * @param {number} timeStep
   * @return {undefined}
   */
  self.update = function(timeStep) {
    world.stepSimulation(timeStep, 10);
    update();
    render();
  };
  self.init();
}, Slam.Physics.prototype = Object.create(THREE.Object3D.prototype), Slam.Physics.prototype.constructor = Slam.Physics;
