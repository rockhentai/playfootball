function getPlatform() {
  var e = {
      versions: function() {
        var e = navigator.userAgent,
          t = navigator.appVersion;
        return {
          trident: e.indexOf("Trident") > -1,
          presto: e.indexOf("Presto") > -1,
          webKit: e.indexOf("AppleWebKit") > -1,
          gecko: e.indexOf("Gecko") > -1 && e.indexOf("KHTML") == -1,
          mobile: !!e.match(/AppleWebKit.*Mobile.*/),
          ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
          android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,
          iPhone: e.indexOf("iPhone") > -1,
          iPad: e.indexOf("iPad") > -1,
          webApp: e.indexOf("Safari") == -1
        }
      }(),
      language: (navigator.browserLanguage || navigator.language).toLowerCase()
    },
    t;
  if (e.versions.mobile) {
    var n = navigator.userAgent.toLowerCase();
    n.match(/MicroMessenger/i) == "micromessenger" ? t = "wechat" : n.match(/WeiBo/i) == "weibo" ? t = "weibo" : n.match(/QQ/i) == "qq" ? t = "qq" : t = "other"
  } else t = "pc";
  return {
    versions: e.versions,
    platform: t
  }
}

function iOSQQ() {
  var e = getPlatform();
  return e.platform !== "qq" || !e.versions.ios ? !1 : !0
}
var Slam = {};
Slam.VER = "1.7.6", Slam.Event = {
  GAME_INIT: "gameInit",
  GAME_START: "gameStart",
  GAME_OVER: "gameOver",
  GAME_SCORE: "gameScore",
  ROUND_START: "roundStart",
  TIME_UP: "timeUp",
  CUT_SCENES_COMPLETE: "cutScenesComplete",
  SCORE_ADD: "scoreAdd"
}, Slam.Preload = {
  _queue: null,
  _images: [{
    id: "ball",
    src: "ball.jpg"
  }, {
    id: "dial",
    src: "dial.png"
  }, {
    id: "indicator",
    src: "indicator.png"
  }, {
    id: "circle",
    src: "circle.png"
  }, {
    id: "track",
    src: "track.png"
  }, {
    id: "bar",
    src: "bar.png"
  }, {
    id: "mark",
    src: "mark.png"
  }, {
    id: "round",
    src: "round.png"
  }, {
    id: "round_1",
    src: "round_1.png"
  }, {
    id: "round_2",
    src: "round_2.png"
  }, {
    id: "round_3",
    src: "round_3.png"
  }, {
    id: "tutorial_1",
    src: "tutorial_1.png"
  }, {
    id: "tutorial_2",
    src: "tutorial_2.png"
  }, {
    id: "tutorial_3",
    src: "tutorial_3.png"
  }, {
    id: "jifenpai_0",
    src: "jifenpai_0.jpg"
  }, {
    id: "jifenpai_1",
    src: "jifenpai_1.jpg"
  }, {
    id: "jifenpai_2",
    src: "jifenpai_2.jpg"
  }, {
    id: "jifenpai_3",
    src: "jifenpai_3.jpg"
  }, {
    id: "jifenpai_4",
    src: "jifenpai_4.jpg"
  }, {
    id: "jifenpai_5",
    src: "jifenpai_5.jpg"
  }, {
    id: "jifenpai_6",
    src: "jifenpai_6.jpg"
  }, {
    id: "jifenpai_7",
    src: "jifenpai_7.jpg"
  }, {
    id: "jifenpai_8",
    src: "jifenpai_8.jpg"
  }, {
    id: "jifenpai_9",
    src: "jifenpai_9.jpg"
  }, {
    id: "bg",
    src: "background.jpg"
  }],
  _fonts: [{
    id: "helvetiker",
    src: "helvetiker_regular.typeface.json"
  }],
  _objs: [],
  _sounds: [{
    id: "bgm",
    src: "bgm.mp3"
  }],
  init: function() {
    this._queue = new createjs.LoadQueue(!0), this._queue.loadManifest(this._images, !1, "textures/")
  },
  load: function(e, t) {
    this._queue || Slam.Preload.init(), e && this._queue.on("progress", e, this), t && this._queue.on("complete", t, this), this._queue.load()
  },
  soundLoaded: function(e) {
    console.log(e);
    var t = createjs.Sound.play(e.src);
    t.stop()
  },
  getQueue: function() {
    return this._queue
  },
  getResult: function(e) {
    return this._queue.getResult(e)
  }
}, Slam.Music = function(e) {
  var t = this,
    n = null,
    r = null,
    i = !1,
    s = {
      interrupt: createjs.Sound.INTERRUPT_NONE,
      loop: -1
    };
  t.init = function(e) {
    createjs.Sound.alternateExtensions = ["mp3"], r = createjs.proxy(t.soundLoaded, this), createjs.Sound.addEventListener("fileload", r), createjs.Sound.registerSound(e)
  }, t.soundLoaded = function(e) {
    n = createjs.Sound.play(e.src, s), i || t.stop()
  }, t.play = function() {
    return n ? (n.play(s), !0) : !1
  }, t.stop = function() {
    return n ? (n.stop(), !0) : !1
  }, t.init(e)
}, Slam.Music.prototype.constructor = Slam.Music, Slam.main = function(e) {
  function U() {
    var e = H.createStatic(new Ammo.btStaticPlaneShape(new Ammo.btVector3(0, 1, 0), 0), new THREE.Vector3(0, 0, 0), .7);
    L.children[0].children[1].material.transparent = !0, L.children[0].children[1].position.y++;
    var n = H.createStatic(new Ammo.btBoxShape(new Ammo.btVector3(c * .5, h * .5, p * .5)), new THREE.Vector3(d, v + h / 2, m), .7),
      r = new Ammo.btCompoundShape,
      i = 10;
    for (var s = 0; s < i; s++) {
      var o = new Ammo.btTransform,
        u = Math.PI * 2 * (s / i);
      o.setOrigin(new Ammo.btVector3(Math.cos(u) * g, 0, Math.sin(u) * g));
      var a = new Ammo.btSphereShape(y);
      r.addChildShape(o, a)
    }
    var f = H.createStatic(r, new THREE.Vector3(b, w, E), .7);
    if (iOSQQ()) t.addNet(O);
    else {
      H.addSoft(O);
      for (var l = 2; l < 11; l++) O.userData.physicsBody.appendAnchor(l * 11, f, !1, .5)
    }
    t.start(1), t.dispatchEvent({
      type: Slam.Event.GAME_INIT
    }), t.control(), tt()
  }

  function z(e) {
    P = !0, F = new THREE.Clock, O.visible = !1, $()
  }

  function W() {
    var e = new THREE.AmbientLight(16777215, 1);
    T.add(e);
    var t = new THREE.SpotLight(16777215, 1.5, 0, Math.PI / 3, .5, 2);
    t.position.set(0, 800, 0), t.lookAt(new THREE.Vector3(0, 0, 549.532)), T.add(t), spotLight2 = new THREE.SpotLight(16777215, 2, 700, Math.PI / 3, .5, 2), spotLight2.position.set(d, v + 100, m - 300), T.add(spotLight2), spotLight3 = new THREE.SpotLight(16777215, 2, 700, Math.PI / 3, .5, 2), spotLight3.position.set(d, v - 100, m - 300), T.add(spotLight3);
    var n = new THREE.Object3D;
    n.position.set(d, v, m), T.add(n), spotLight2.target = n, spotLight3.target = n
  }

  function X(e, t, n, r, i, s) {
    var o = new THREE.SpotLight(n, r, 0, s * Math.PI / 180, (s - i) / s, 2);
    o.position.copy(e), o.lookAt(t), o.castShadow = !0, T.add(o)
  }

  function V(e, t, n, r, i, s) {
    var o = new THREE.DirectionalLight(n, r);
    o.position.copy(e), o.lookAt(t), o.castShadow = !0, T.add(o)
  }

  function $() {
    var e = H.getRigid();
    for (var t in e) {
      if (isNaN(t)) continue;
      var n = e[t];
      H.remove(n), T.remove(n)
    }
    H.clear()
  }

  function J(e) {
    t.start(++B)
  }

  function K() {
    if (!F) return;
    var e = Math.floor(I - F.getElapsedTime());
    if (e < 0) {
      t.shoot(), t.dispatchEvent({
        type: Slam.Event.TIME_UP
      }), F = null, P = !1, j.stop();
      var n = j.getElapsedTime();
      n < 1 ? setTimeout(J, 2500) : setTimeout(J, 1e3);
      return
    }
    Q(e)
  }

  function Q(e) {
    var t = new THREE.Texture(Slam.Preload.getResult("jifenpai_" + Math.floor(e % 10)));
    t.needsUpdate = !0;
    var n = new THREE.Texture(Slam.Preload.getResult("jifenpai_" + Math.floor(e / 10)));
    n.needsUpdate = !0, A.children[0].getObjectByName("gewei").material.map = t, A.children[0].getObjectByName("shiwei").material.map = n
  }

  function G(e) {
    e.preventDefault(), e.stopPropagation(), P && t.intend()
  }

  function Y(e) {
    e.preventDefault(), e.stopPropagation(), C.ballMove(e.touches[0].clientX, e.touches[0].clientY)
  }

  function Z(e) {
    e.preventDefault(), e.stopPropagation(), C.skip(), P && t.shoot()
  }

  function et(e, t, i) {
    var s = {};
    s.x = e / n * 2 - 1, s.y = -(t / r) * 2 + 1;
    var o = new THREE.Ray;
    o.origin.setFromMatrixPosition(x.matrixWorld), o.direction.set(s.x, s.y, .5).unproject(x).sub(o.origin).normalize();
    var u = new THREE.Plane(new THREE.Vector3(0, 0, -1), i),
      a = o.intersectPlane(u);
    return a
  }

  function tt() {
    requestAnimationFrame(tt), K();
    var e = _.getDelta();
    D && D.update(), H && H.update(e * 2), C && C.update(), x.position.copy(C.getEye());
    var n = H.getRigid();
    for (var r in n) {
      var i = n[r],
        s = i.shot();
      if (s == -1) H.remove(i), T.remove(i);
      else if (s > 0) {
        B == 1 ? s = 10 : B == 2 ? s = 20 : B == 3 && (s = 30), M += s;
        var o = {
          score: s,
          total: M
        };
        O.visible = !0, iOSQQ() && (t.scoreAdd(), i.shutFriction()), t.dispatchEvent({
          type: Slam.Event.SCORE_ADD,
          data: o
        })
      }
    }
    TWEEN.update(), R && R.update(), N.clear(), N.render(T, x)
  }
  var t = this,
    n = 0,
    r = 0,
    s = 0,
    o = 397.774,
    u = 228.858,
    a = 0,
    f = 45.079,
    l = 1382.846,
    c = 192.258,
    h = 113.083,
    p = 9.25,
    d = 0,
    v = 304.868,
    m = 768.416,
    g = 26.217,
    y = 2.842,
    b = 0,
    w = 326.713,
    E = 725.599,
    S = 20,
    x = null,
    T = null,
    N = null,
    C = null,
    k = null,
    L = null,
    A = null,
    O = null,
    M = 0,
    _ = null,
    D = null,
    P = !1,
    H, B = 1,
    j = null,
    F = null,
    I = 30,
    q = null,
    R = null;
  t.init = function(e) {
    n = window.innerWidth, r = window.innerHeight, x = new THREE.PerspectiveCamera(70, n / r, 1, 1500), x.position.set(s, o, u), x.lookAt(new THREE.Vector3(a, f, l)), T = new THREE.Scene, W(), N = new THREE.WebGLRenderer({
      canvas: e,
      antialias: !0
    }), N.autoClear = !1, N.setClearColor(0), N.setPixelRatio(window.devicePixelRatio), N.setSize(n, r)
  }, t.launch = function() {
    _ = new THREE.Clock, j = new THREE.Clock(!1);
    var e = new THREE.Texture(Slam.Preload.getResult("bg"));
    e.needsUpdate = !0;
    var t = new THREE.Mesh(new THREE.PlaneGeometry(1024, 1024), new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      map: e
    }));
    t.scale.set(1.6, .85, 1), t.rotation.y = Math.PI, t.position.set(0, 400, 1407.983), T.add(t);
    var n = 3;
    L = new Model.main, L.addEventListener(Model.Event.MODEL_LOADED, function(e) {
      var t = e.obj;
      if (t && t.children)
        for (i in t.children) {
          var r = t.children[i];
          r.name && r.name == "baixian001" && (r.material.transparent = !0, r.position.y += 1)
        }
      n--, n == 0 && U()
    }), L.load("models/floor/"), A = new Model.main, A.addEventListener(Model.Event.MODEL_LOADED, function(e) {
      var t = e.obj;
      if (t && t.children)
        for (i in t.children) {
          var r = t.children[i];
          r.name && r.name == "lanban" && (r.material.transparent = !0)
        }
      n--, n == 0 && U()
    }), A.load("models/stands/"), A.position.set(d, v, m);
    var r = new THREE.BufferGeometryLoader;
    r.load("models/net.json", function(e) {
      e.translate(b - y / 2, w, E);
      var t = new THREE.MeshLambertMaterial({
        color: 16777215,
        transparent: !0,
        opacity: .1
      });
      O = new THREE.Mesh(e, t), O.mass = 100, O.pressure = 100, T.add(O), n--, n == 0 && U()
    }, function(e) {
      console.log(e.loaded / e.total * 100 + "% loaded")
    }, function(e) {
      console.log("An error happened")
    }), C = new Slam.Person, C.addEventListener(Slam.Event.CUT_SCENES_COMPLETE, z), x.lookAt(new THREE.Vector3(a, f, l)), T.add(C, L, A), H = new Slam.Physics
  }, t.addNet = function(e) {
    var t = e.geometry.attributes.position.array,
      n = Math.round(t.length / 3),
      r = new Ammo.btCompoundShape;
    for (var i = 0; i < n; i++) {
      var s = t[i * 3 + 0],
        o = t[i * 3 + 1],
        u = t[i * 3 + 2],
        a = new Ammo.btTransform;
      a.setOrigin(new Ammo.btVector3(s, o, u));
      var f = new Ammo.btSphereShape(.2);
      r.addChildShape(a, f)
    }
    var e = H.createStatic(r, new THREE.Vector3, .1)
  }, t.start = function(e) {
    P = !1, F = null, B = e, isNaN(B) && (B = 1);
    if (B > 3) {
      C.stop(), $(), t.dispatchEvent({
        type: Slam.Event.GAME_OVER,
        data: M
      });
      return
    }
    C.round(B), t.dispatchEvent({
      type: Slam.Event.ROUND_START,
      data: B
    }), Q(30), x.position.copy(C.getEye())
  }, t.replay = function() {
    M = 0, t.start(1)
  }, t.control = function() {
    N.domElement.addEventListener("touchstart", G, !1), N.domElement.addEventListener("touchmove", Y, !1), N.domElement.addEventListener("touchend", Z, !1), N.domElement.addEventListener("mousedown", G, !1), N.domElement.addEventListener("mouseup", Z, !1);
    return
  }, t.intend = function() {
    C.ready()
  }, t.shoot = function() {
    var e = C.go();
    if (e) {
      var t = new Slam.Ball;
      t.position.copy(C.getBall()), T.add(t), t.createPhysics(), H.add(t), t.shoot(new THREE.Vector3(b, w, E), e), j.start()
    }
  }, t.testShoot = function(e) {
    k = new Slam.Ball, k.position.copy(C.getHand()), T.add(k), k.createPhysics(), H.add(k), k.shoot(new THREE.Vector3(b, w, E), e)
  }, t.scoreAdd = function() {
    var e = (new TWEEN.Tween(O.scale)).delay(40).to({
        x: .99,
        z: .99
      }, 40),
      t = (new TWEEN.Tween(O.scale)).to({
        x: 1.01,
        z: 1.01
      }, 120).yoyo(!0).repeat(3),
      n = (new TWEEN.Tween(O.scale)).to({
        x: 1,
        z: 1
      }, 40);
    e.chain(t), t.chain(n), e.start()
  }, t.init(e)
}, Object.assign(Slam.main.prototype, THREE.EventDispatcher.prototype), Slam.main.prototype.constructor = Slam.main, Slam.Person = function() {
  function M() {
    S.visible = !0, S.position.set(0, 0, 0), (new TWEEN.Tween(S.position)).to(new THREE.Vector3(i, s, o), L).easing(TWEEN.Easing.Quadratic.Out).onComplete(_).start()
  }

  function _(e) {
    T = !0
  }

  function D(t) {
    x == 1 ? b.show() : (x == 2 || x == 3) && w.show(), M(), e.dispatchEvent({
      type: Slam.Event.CUT_SCENES_COMPLETE
    })
  }
  var e = this,
    t = 0,
    n = 357.9966,
    r = -220,
    i = 0,
    s = 150,
    o = 10,
    u = 0,
    a = 200,
    f = 10,
    l = 80,
    c = 100,
    h = 10,
    p = 549.532,
    d = 449.532,
    v = 0,
    m = 250,
    g = 80,
    y = 20,
    b = null,
    w = null,
    E = null,
    S = null,
    x = 1,
    T = !1,
    N = !1;
  _dis = 0, _speed = .04;
  var C = null,
    k = 1.5,
    L = 500,
    A = .5,
    O = null;
  e.init = function() {
    THREE.Object3D.call(e), C = new THREE.Clock(!1), E = new Slam.CutScenes, E.rotation.y = Math.PI, E.position.set(v, m, g), E.addEventListener(Slam.Event.CUT_SCENES_COMPLETE, D), b = new Slam.Dash, b.hide(), b.rotation.y = Math.PI, b.position.set(u, a, f), w = new Slam.Power, w.frustumCulled = !1, w.hide(), w.rotation.y = Math.PI, w.position.set(l, c, h), S = new Slam.Ball, e.add(E, b, w, S)
  }, e.getEye = function() {
    e.getWorldPosition(new THREE.Vector3(0, 0, 0));
    var t = new THREE.Vector3(0, n, r);
    return e.localToWorld(t)
  }, e.getHand = function() {
    e.getWorldPosition(new THREE.Vector3(0, 0, 0));
    var t = new THREE.Vector3(i, s, o);
    return e.localToWorld(t)
  }, e.getBall = function() {
    return e.getWorldPosition(new THREE.Vector3(0, 0, 0)), e.localToWorld(S.position)
  }, e.ballMove = function(e, t) {
    if (x != 3) return;
    O && (S.position.x += parseInt(O - e)), O = e
  }, e.round = function(t) {
    x = parseInt(t), e.position.x = 0, x < 1 && (x = 1), x > 3 && (x = 3);
    if (x == 1) e.position.z = p;
    else if (x == 2 || x == 3) e.position.z = d;
    w.hide(), b.hide(), C.stop(), S.visible = !1, E.show(t)
  }, e.stop = function() {
    x = 0
  }, e.skip = function() {
    E.skip()
  }, e.ready = function() {
    T && (T = !1, N = !0)
  }, e.go = function() {
    O = null;
    if (!N) return !1;
    N = !1;
    var e = new THREE.Vector3;
    if (x == 1) {
      var t = b.getVal();
      e.x = Math.sin(t) * 50, e.y = 300, e.z = 100
    } else if (x == 2 || x == 3) {
      var n = w.getVal();
      e.x = 0, e.y = 210 + 100 * n, e.z = 150
    }
    return S.visible = !1, C.start(), e
  }, e.update = function() {
    C.running && C.getElapsedTime() >= k && (C.stop(), M()), N ? (_dis += _speed, _dis >= 1 && (_dis = 1, _speed *= -1), _dis <= -1 && (_dis = -1, _speed *= -1), x == 1 ? b.setVal(_dis * Math.PI / 2) : (x == 2 || x == 3) && w.setVal(Math.abs(_dis))) : x == 3 && (e.position.x += A, Math.abs(e.position.x) > 100 && (A *= -1))
  }, e.init()
}, Slam.Person.prototype = Object.create(THREE.Object3D.prototype), Slam.Person.prototype.constructor = Slam.Person, Slam.Dash = function() {
  function i(e) {
    var t = Slam.Preload.getResult(e),
      n = new THREE.Texture(t);
    n.needsUpdate = !0;
    var r = new THREE.SpriteMaterial({
        map: n,
        depthTest: !1
      }),
      i = new THREE.Sprite(r);
    return i.scale.x = t.width / 4, i.scale.y = t.height / 4, i
  }

  function s() {
    var e = Slam.Preload.getResult("indicator"),
      t = e.width / 4,
      n = e.height / 4,
      r = new THREE.Texture(e);
    r.needsUpdate = !0;
    var i = new THREE.MeshBasicMaterial({
      transparent: !0,
      map: r
    });
    i.depthTest = !1;
    var s = new THREE.PlaneGeometry(t, n);
    s.translate(0, n / 3, 0);
    var o = new THREE.Mesh(s, i);
    return o
  }
  var e = this,
    t = 16,
    n = null,
    r = 0;
  e.init = function() {
    THREE.Object3D.call(e), e.frustumCulled = !1, n = i("indicator");
    var r = i("dial");
    r.position.y = t;
    var s = i("circle");
    s.position.z++, e.add(r, n, s)
  }, e.setVal = function(e) {
    r = e, n.material.rotation = r
  }, e.getVal = function() {
    return r
  }, e.show = function() {
    e.visible = !0
  }, e.hide = function() {
    e.visible = !1
  }, e.init()
}, Slam.Dash.prototype = Object.create(THREE.Object3D.prototype), Slam.Dash.prototype.constructor = Slam.Dash, Slam.Power = function() {
  function c(e) {
    var t = Slam.Preload.getResult(e),
      n = new THREE.Texture(t);
    n.needsUpdate = !0;
    var r = new THREE.SpriteMaterial({
        map: n,
        depthTest: !1
      }),
      i = new THREE.Sprite(r);
    return i.scale.x = t.width / 2, i.scale.y = t.height / 2, i.position.y = t.height / 4, i
  }
  var e = this,
    t = 3,
    n = 105,
    r = 5,
    i = 63,
    s = 10,
    o = 120,
    u = 20,
    a = null,
    f = null,
    l = 0;
  e.init = function() {
    THREE.Object3D.call(e);
    var r = c("track"),
      s = c("mark");
    f = c("bar"), f.scale.y = o, f.position.y = i, f.position.z--, f.material.map.wrapS = THREE.ClampToEdgeWrapping, f.material.map.wrapT = THREE.ClampToEdgeWrapping, f.material.map.repeat.set(1, o), s.position.x = t, s.position.y = n, e.add(f, r, s)
  }, e.setVal = function(e) {
    l = e, f.material.map.offset = new THREE.Vector2(0, -o * l)
  }, e.getVal = function() {
    return l
  }, e.show = function() {
    e.visible = !0
  }, e.hide = function() {
    e.visible = !1
  }, e.init()
}, Slam.Power.prototype = Object.create(THREE.Object3D.prototype), Slam.Power.prototype.constructor = Slam.Power, Slam.Ball = function() {
  function f() {
    var e = Slam.Preload.getResult("ball"),
      r = new THREE.Texture(e);
    r.needsUpdate = !0;
    var i = new THREE.MeshLambertMaterial({
      lightMapIntensity: 0
    });
    i.map = r;
    var s = new THREE.SphereGeometry(t, n, n);
    s.rotateZ(-Math.PI / 2), s.rotateX(Math.PI / 4);
    var o = new THREE.Mesh(s, i);
    return o
  }
  var e = this,
    t = 12.3,
    n = 20,
    r = 3e4,
    i = 300,
    s = 2,
    o = new THREE.Vector3,
    u = {
      INVALID: -1,
      NORMAL: 0,
      SHOT: 1
    },
    a = u.NORMAL;
  e.init = function() {
    THREE.Object3D.call(e);
    var t = f();
    e.add(t), r += (new Date).getTime()
  }, e.createPhysics = function() {
    var n = new Ammo.btSphereShape(t);
    n.setMargin(.05);
    var r = 10,
      i = new Ammo.btVector3(0, 0, 0);
    n.calculateLocalInertia(r, i);
    var s = new Ammo.btTransform;
    s.setIdentity();
    var o = e.position;
    s.setOrigin(new Ammo.btVector3(o.x, o.y, o.z));
    var u = new Ammo.btDefaultMotionState(s),
      a = new Ammo.btRigidBodyConstructionInfo(r, u, n, i);
    a.set_m_restitution(1);
    var f = new Ammo.btRigidBody(a);
    return f.setFriction(.5), e.userData.physicsBody = f, f
  }, e.shutFriction = function() {
    e.userData.physicsBody.setFriction(.1), e.userData.physicsBody.setRestitution(.1)
  }, e.shoot = function(t, n) {
    o = t;
    var r = new THREE.Vector3(t.x, e.y, t.z);
    e.position.distanceTo(r) > i ? s = 3 : s = 2, e.userData.physicsBody.setLinearVelocity(new Ammo.btVector3(n.x, n.y, n.z)), e.userData.physicsBody.setAngularVelocity(new Ammo.btVector3(10, 2, 0))
  }, e.shot = function() {
    if (a == u.NORMAL && (new Date).getTime() > r) return -1;
    if (a == u.NORMAL && e.position.distanceTo(o) < t) a = u.SHOT;
    else if (a == u.SHOT && o.y - e.position.y > t) return a = u.INVALID, s;
    return 0
  }, e.init()
}, Slam.Ball.prototype = Object.create(THREE.Object3D.prototype), Slam.Ball.prototype.constructor = Slam.Ball, Slam.CutScenes = function() {
  function f(e) {
    var t = Slam.Preload.getResult(e),
      n = new THREE.Texture(t);
    n.needsUpdate = !0;
    var r = new THREE.MeshBasicMaterial({
      transparent: !0,
      map: n,
      side: THREE.DoubleSide
    });
    r.depthTest = !1;
    var i = new THREE.PlaneGeometry(t.width, t.height),
      s = new THREE.Mesh(i, r);
    return s
  }

  function l(e) {
    var t = Slam.Preload.getResult(e),
      n = new THREE.Texture(t);
    n.needsUpdate = !0;
    var r = new THREE.SpriteMaterial({
        map: n,
        depthTest: !1
      }),
      i = new THREE.Sprite(r);
    return i.scale.x = t.width / 3, i.scale.y = t.height / 3, i
  }

  function c() {
    r.visible = !0, t.visible = !1, n.visible = !1, a = setTimeout(h, i)
  }

  function h() {
    clearTimeout(a), r.visible = !1, t.visible = !0, t.scale.set(.1, .1, .1), t.rotation.y = 0, n.visible = !1, n.scale.set(1, 1, 1), n.rotation.y = Math.PI * 3 / 2;
    var e = (new TWEEN.Tween(t.scale)).to({
        x: 1,
        y: 1,
        z: 1
      }, s).easing(TWEEN.Easing.Quadratic.Out),
      i = (new TWEEN.Tween(t.rotation)).to({
        y: Math.PI / 2
      }, o),
      u = (new TWEEN.Tween(n.rotation)).to({
        y: Math.PI * 2
      }, o),
      f = (new TWEEN.Tween(n.scale)).to({
        x: .1,
        y: .1,
        z: .1
      }, s).easing(TWEEN.Easing.Quadratic.In);
    e.chain(i), i.chain(u), u.chain(f), i.onComplete(function() {
      t.visible = !1, n.visible = !0
    }), f.onComplete(p), e.start()
  }

  function p(t) {
    n.visible = !1, r.visible = !1, e.dispatchEvent({
      type: Slam.Event.CUT_SCENES_COMPLETE
    })
  }
  var e = this,
    t = null,
    n = null,
    r = null,
    i = 1e4,
    s = 1e3,
    o = 300,
    u = null,
    a = 0;
  e.init = function() {
    THREE.Object3D.call(e), t = f("round"), n = new THREE.Object3D;
    var i = f("round_1");
    i.name = "n1";
    var s = f("round_2");
    s.name = "n2";
    var o = f("round_3");
    o.name = "n3", n.add(i, s, o), r = new THREE.Object3D;
    var u = new THREE.Sprite(new THREE.SpriteMaterial({
      color: 0,
      transparent: !0,
      opacity: .8
    }));
    u.scale.x = 600, u.scale.y = 800, u.position.z--;
    var a = l("tutorial_1");
    a.name = "t1";
    var c = l("tutorial_2");
    c.name = "t2";
    var h = l("tutorial_3");
    h.name = "t3", r.add(u, a, c, h), e.add(r, t, n)
  }, e.skip = function() {
    r.visible && h()
  }, e.show = function(e) {
    n.getObjectByName("n1").visible = !1, n.getObjectByName("n2").visible = !1, n.getObjectByName("n3").visible = !1, r.getObjectByName("t1").visible = !1, r.getObjectByName("t2").visible = !1, r.getObjectByName("t3").visible = !1, e >= 1 && e <= 3 && (n.getObjectByName("n" + e).visible = !0, r.getObjectByName("t" + e).visible = !0), c()
  }, e.init()
}, Slam.CutScenes.prototype = Object.create(THREE.Object3D.prototype), Slam.CutScenes.prototype.constructor = Slam.CutScenes, Slam.Physics = function() {
  function u() {
    var e = new Ammo.btDefaultCollisionConfiguration,
      n = new Ammo.btCollisionDispatcher(e),
      r = new Ammo.btDbvtBroadphase,
      i = new Ammo.btSequentialImpulseConstraintSolver;
    t = new Ammo.btDiscreteDynamicsWorld(n, r, i, e), t.setGravity(new Ammo.btVector3(0, o, 0))
  }

  function a() {
    var e = new Ammo.btSoftBodyRigidBodyCollisionConfiguration,
      n = new Ammo.btCollisionDispatcher(e),
      r = new Ammo.btDbvtBroadphase,
      i = new Ammo.btSequentialImpulseConstraintSolver,
      s = new Ammo.btDefaultSoftBodySolver;
    t = new Ammo.btSoftRigidDynamicsWorld(n, r, i, e, s), t.setGravity(new Ammo.btVector3(0, o, 0)), t.getWorldInfo().set_m_gravity(new Ammo.btVector3(0, o, 0))
  }

  function f(e) {
    var t = (new THREE.Geometry).fromBufferGeometry(e),
      n = t.mergeVertices(),
      r = l(t);
    h(e, r)
  }

  function l(e) {
    var t = e.vertices.length,
      n = e.faces.length,
      r = new THREE.BufferGeometry,
      i = new Float32Array(t * 3),
      s = new(n * 3 > 65535 ? Uint32Array : Uint16Array)(n * 3);
    for (var o = 0; o < t; o++) {
      var u = e.vertices[o],
        a = o * 3;
      i[a] = u.x, i[a + 1] = u.y, i[a + 2] = u.z
    }
    for (var o = 0; o < n; o++) {
      var f = e.faces[o],
        a = o * 3;
      s[a] = f.a, s[a + 1] = f.b, s[a + 2] = f.c
    }
    return r.setIndex(new THREE.BufferAttribute(s, 1)), r.addAttribute("position", new THREE.BufferAttribute(i, 3)), r
  }

  function c(e, t, n, r, i, s) {
    var o = 1e-6;
    return Math.abs(r - e) < o && Math.abs(i - t) < o && Math.abs(s - n) < o
  }

  function h(e, t) {
    var n = e.attributes.position.array,
      r = t.attributes.position.array,
      i = t.index.array,
      s = r.length / 3,
      o = n.length / 3;
    e.ammoVertices = r, e.ammoIndices = i, e.ammoIndexAssociation = [];
    for (var u = 0; u < s; u++) {
      var a = [];
      e.ammoIndexAssociation.push(a);
      var f = u * 3;
      for (var l = 0; l < o; l++) {
        var h = l * 3;
        c(r[f], r[f + 1], r[f + 2], n[h], n[h + 1], n[h + 2]) && a.push(h)
      }
    }
  }

  function p() {
    for (var e in s) {
      if (isNaN(e)) continue;
      var t = s[e],
        n = t.geometry,
        r = t.userData.physicsBody,
        i = n.attributes.position.array,
        o = n.attributes.normal.array,
        u = n.ammoIndexAssociation,
        a = r.get_m_nodes();
      for (var f in u) {
        if (isNaN(f)) continue;
        var l = a.at(f),
          c = l.get_m_x(),
          h = c.x(),
          p = c.y(),
          d = c.z(),
          v = l.get_m_n(),
          m = v.x(),
          g = v.y(),
          y = v.z(),
          b = u[f];
        for (var w in b) {
          if (isNaN(w)) continue;
          var E = b[w];
          i[E] = h, o[E] = m, E++, i[E] = p, o[E] = g, E++, i[E] = d, o[E] = y
        }
      }
      n.attributes.position.needsUpdate = !0, n.attributes.normal.needsUpdate = !0
    }
  }

  function d() {
    for (var e in i) {
      if (isNaN(e)) continue;
      var t = i[e],
        n = t.userData.physicsBody,
        s = n.getMotionState();
      if (s) {
        s.getWorldTransform(r);
        var o = r.getOrigin(),
          u = r.getRotation();
        t.position.set(o.x(), o.y(), o.z()), t.quaternion.set(u.x(), u.y(), u.z(), u.w())
      }
    }
  }
  var e = this,
    t = null,
    n = .05,
    r = null,
    i = [],
    s = [],
    o = -196;
  e.init = function() {
    THREE.Object3D.call(e), r = new Ammo.btTransform, a()
  }, e.createRigidBody = function(e, t, n, r, i, s, o) {
    r ? e.position.copy(r) : r = e.position, i ? e.quaternion.copy(i) : i = e.quaternion;
    var u = new Ammo.btTransform;
    u.setIdentity(), u.setOrigin(new Ammo.btVector3(r.x, r.y, r.z)), u.setRotation(new Ammo.btQuaternion(i.x, i.y, i.z, i.w));
    var a = new Ammo.btDefaultMotionState(u),
      f = new Ammo.btVector3(0, 0, 0);
    t.calculateLocalInertia(n, f);
    var l = new Ammo.btRigidBodyConstructionInfo(n, a, t, f),
      c = new Ammo.btRigidBody(l);
    return c.setFriction(.5), s && c.setLinearVelocity(new Ammo.btVector3(s.x, s.y, s.z)), o && c.setAngularVelocity(new Ammo.btVector3(o.x, o.y, o.z)), e.userData.physicsBody = c, e.userData.collided = !1, n > 0 && c.setActivationState(4), physicsWorld.addRigidBody(c), c
  }, e.createStatic = function(e, r, i) {
    e.setMargin(n);
    var s = 0,
      o = new Ammo.btVector3(0, 0, 0);
    e.calculateLocalInertia(s, o);
    var u = new Ammo.btTransform;
    u.setIdentity(), u.setOrigin(new Ammo.btVector3(r.x, r.y, r.z));
    var a = new Ammo.btDefaultMotionState(u),
      f = new Ammo.btRigidBodyConstructionInfo(s, a, e, o);
    f.set_m_restitution(i);
    var l = new Ammo.btRigidBody(f);
    return t.addRigidBody(l), l
  }, e.add = function(e) {
    t.addRigidBody(e.userData.physicsBody), i.push(e)
  }, e.remove = function(e) {
    t.removeRigidBody(e.userData.physicsBody)
  }, e.clear = function() {
    i = []
  }, e.getRigid = function() {
    return i
  }, e.addSoft = function(e) {
    var r = e.geometry,
      i = e.mass,
      o = e.pressure;
    f(r);
    var u = new Ammo.btSoftBodyHelpers,
      a = u.CreateFromTriMesh(t.getWorldInfo(), r.ammoVertices, r.ammoIndices, r.ammoIndices.length / 3, !0),
      l = a.get_m_cfg();
    l.set_viterations(40), l.set_piterations(40), l.set_collisions(17), l.set_kDF(.1), l.set_kDP(.01), l.set_kPR(o), a.get_m_materials().at(0).set_m_kLST(.9), a.get_m_materials().at(0).set_m_kAST(.9), a.setTotalMass(i, !1), Ammo.castObject(a, Ammo.btCollisionObject).getCollisionShape().setMargin(n), t.addSoftBody(a, 1, -1), e.userData.physicsBody = a, a.setActivationState(4), s.push(e)
  }, e.update = function(e) {
    t.stepSimulation(e, 10), p(), d()
  }, e.init()
}, Slam.Physics.prototype = Object.create(THREE.Object3D.prototype), Slam.Physics.prototype.constructor = Slam.Physics;
