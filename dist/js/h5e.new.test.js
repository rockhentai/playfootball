function PxLoaderImage(e, t, n, r) {
  var i = this,
    s = null;
  this.img = new Image, r !== undefined && (this.img.crossOrigin = r), this.tags = t, this.priority = n;
  var o = function() {
      i.img.readyState === "complete" && (f(), s.onLoad(i))
    },
    u = function() {
      f(), s.onLoad(i)
    },
    a = function() {
      f(), s.onError(i)
    },
    f = function() {
      i.unbind("load", u), i.unbind("readystatechange", o), i.unbind("error", a)
    };
  this.start = function(t) {
    s = t, i.bind("load", u), i.bind("readystatechange", o), i.bind("error", a), i.img.src = e
  }, this.checkStatus = function() {
    i.img.complete && (f(), s.onLoad(i))
  }, this.onTimeout = function() {
    f(), i.img.complete ? s.onLoad(i) : s.onTimeout(i)
  }, this.getName = function() {
    return e
  }, this.bind = function(e, t) {
    i.img.addEventListener ? i.img.addEventListener(e, t, !1) : i.img.attachEvent && i.img.attachEvent("on" + e, t)
  }, this.unbind = function(e, t) {
    i.img.removeEventListener ? i.img.removeEventListener(e, t, !1) : i.img.detachEvent && i.img.detachEvent("on" + e, t)
  }
}(function(e, t) {
  e.h5e = {};
  var n = t("#h5e-node").attr("arg") || "{}";
  e.h5e.config = JSON.parse(n);
  if (typeof h5e.config.env == "undefined" || h5e.config.env == null || h5e.config.env === "") h5e.config.env = "pro";
  if (typeof h5e.config.debug == "undefined" || h5e.config.debug == null || h5e.config.debug === "") h5e.config.debug = !1
})(window, window.Zepto || window.jQuery),
function(e, t) {
  var n = function(t, n) {
    var r = e.config.env,
      i = {
        mock: {
          login: {
            getInfo: "../mock/login/getInfo.json",
            getMusicInfo: "../mock/login/getInfo.json"
          },
          register: {
            saveInfo: "../mock/register/saveInfo.json"
          },
          comment: {
            getComment: "../mock/comment/getComment.json",
            saveComment: "../mock/comment/saveComment.json"
          },
          redpacket: {
            draw: "../mock/redpacket/draw.json",
            take: "../mock/redpacket/take.json",
            save_user: "../mock/redpacket/save_user.json",
            get_appdrawstatus: "../mock/redpacket/get_appdrawstatus.json",
            query: "../mock/redpacket/query.json",
            get_drawnum: "../mock/redpacket/get_drawnum.json"
          },
          seckill: {
            get: "../mock/seckill/get.json",
            save_user: "../mock/seckill/save_user.json",
            query: "../mock/seckill/query.json"
          },
          weixin: {
            oauth: "http://beta.api.h5e.qq.com/weixin/oauth",
            authorize: "http://beta.api.h5e.qq.com/weixin/authorize"
          },
          countdown: {
            get: "../mock/countdown/get.json"
          },
          montage: {
            upload: "../mock/montage/upload.json"
          }
        },
        test: {
          login: {
            getInfo: "http://api.h5e.qq.com/user/get_info",
            getMusicInfo: "http://i.y.qq.com/portalcgi/fcgi-bin/music_mini_portal/fcg_getuser_infoEx.fcg"
          },
          register: {
            saveInfo: "http://api.h5e.qq.com/register/save_info"
          },
          comment: {
            getComment: "http://beta.api.h5e.qq.com/comment/get_list",
            saveComment: "http://beta.api.h5e.qq.com/comment/save_list",
            saveLike: "http://beta.api.h5e.qq.com/comment/like"
          },
          danmaku: {
            getRealTime: "http://beta.api.h5e.qq.com/danmaku/get_realtime",
            getDanmaku: "http://beta.api.h5e.qq.com/danmaku/get_live",
            saveDanmaku: "http://beta.api.h5e.qq.com/danmaku/save_live"
          },
          redpacket: {
            draw: "http://beta.api.h5e.qq.com/redpacket/draw",
            take: "http://beta.api.h5e.qq.com/redpacket/take",
            save_user: "http://beta.api.h5e.qq.com/redpacket/save_user",
            get_appdrawstatus: "http://beta.api.h5e.qq.com/redpacket/get_appdrawstatus",
            query: "http://beta.api.h5e.qq.com/redpacket/query",
            get_drawnum: "http://beta.api.h5e.qq.com/redpacket/get_drawnum"
          },
          seckill: {
            get: "http://beta.api.h5e.qq.com/seckill/get",
            save_user: "http://beta.api.h5e.qq.com/seckill/save_user",
            query: "http://beta.api.h5e.qq.com/seckill/query"
          },
          weixin: {
            oauth: "http://beta.api.h5e.qq.com/weixin/oauth",
            authorize: "http://beta.api.h5e.qq.com/weixin/authorize"
          },
          countdown: {
            get: "http://tams.qq.com/countdown/getCountdownInfo"
          },
          like: {
            get: "http://tams.qq.com/like/getLikeInfo",
            save: "http://tams.qq.com/like/saveLikeInfo"
          },
          vote: {
            get: "http://tams.qq.com/vote/getVoteWorkInfo",
            save: "http://tams.qq.com/vote/saveVoteWorkInfo"
          },
          switchstatus: {
            get: "http://tams.qq.com/swc/getStatus"
          },
          wxcard: {
            get: "http://tams.qq.com/card/getCoupon"
          },
          wxauth: {
            get: "http://tams.qq.com/wxauthorize/goWXAuthoriza"
          },
          live: {
            getStatus: "http://sh.act.qq.com/hddemo/kits/getActStatus",
            getFiles: "http://sh.act.qq.com/hddemo/kits/getFileWorks"
          },
          montage: {
            upload: "http://api.h5e.qq.com/montage/upload"
          }
        },
        pro: {
          login: {
            getInfo: "http://api.h5e.qq.com/user/get_info",
            getMusicInfo: "http://i.y.qq.com/portalcgi/fcgi-bin/music_mini_portal/fcg_getuser_infoEx.fcg"
          },
          register: {
            saveInfo: "http://api.h5e.qq.com/register/save_info"
          },
          comment: {
            getComment: "http://api.h5e.qq.com/comment/get_list",
            saveComment: "http://api.h5e.qq.com/comment/save_list",
            saveLike: "http://api.h5e.qq.com/comment/like"
          },
          danmaku: {
            getRealTime: "http://api.h5e.qq.com/danmaku/get_realtime",
            getDanmaku: "http://api.h5e.qq.com/danmaku/get_live",
            saveDanmaku: "http://api.h5e.qq.com/danmaku/save_live"
          },
          countdown: {
            get: "http://tams.qq.com/countdown/getCountdownInfo"
          },
          like: {
            get: "http://tams.qq.com/like/getLikeInfo",
            save: "http://tams.qq.com/like/saveLikeInfo"
          },
          vote: {
            get: "http://tams.qq.com/vote/getVoteWorkInfo",
            save: "http://tams.qq.com/vote/saveVoteWorkInfo"
          },
          switchstatus: {
            get: "http://tams.qq.com/swc/getStatus"
          },
          wxcard: {
            get: "http://tams.qq.com/card/getCoupon"
          },
          wxauth: {
            get: "http://tams.qq.com/wxauthorize/goWXAuthoriza"
          },
          live: {
            getStatus: "http://tams.qq.com/act/getActStatus",
            getFiles: "http://tams.qq.com/act/getFileWorks"
          },
          montage: {
            upload: "http://api.h5e.qq.com/montage/upload"
          }
        }
      };
    return i[r][t][n] || null
  };
  e.host = n
}(h5e, window.Zepto || window.jQuery),
function(e, t) {
  var n = function() {};
  n.prototype = {
    cookie: function(e, t, n) {
      if (typeof t == "undefined") {
        var a = null;
        if (document.cookie && document.cookie != "") {
          var f = document.cookie.split(";");
          for (var l = 0; l < f.length; l++) {
            var c = f[l].replace(/^\s*(.*?)\s*$/, "$1");
            if (c.substring(0, e.length + 1) == e + "=") {
              a = decodeURIComponent(c.substring(e.length + 1));
              break
            }
          }
        }
        return a
      }
      n = n || {}, t === null && (t = "", n.expires = -1);
      var r = "";
      if (n.expires && (typeof n.expires == "number" || n.expires.toUTCString)) {
        var i;
        typeof n.expires == "number" ? (i = new Date, i.setTime(i.getTime() + n.expires * 1e3)) : i = n.expires, r = "; expires=" + i.toUTCString()
      }
      var s = n.path ? "; path=" + n.path : "",
        o = n.domain ? "; domain=" + n.domain : "",
        u = n.secure ? "; secure" : "";
      document.cookie = [e, "=", encodeURIComponent(t), r, s, o, u].join("")
    },
    parse: function(e) {
      if (typeof e != "string" || !e) return null;
      if (window.JSON && window.JSON.parse) return window.JSON.parse(e);
      var t = /^[\],:{}\s]*$/,
        n = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        r = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        i = /(?:^|:|,)(?:\s*\[)+/g;
      if (t.test(e.replace(n, "@").replace(r, "]").replace(i, ""))) return (new Function("return " + e))();
      throw new Error("Invalid JSON: " + e)
    },
    formcheckById: function(e, n) {
      var r = t("#" + e).val();
      switch (n) {
        case "mobile":
          n = /^1[34578]\d{9}$/;
          break;
        case "email":
          n = /^[_.0-9a-z-]+@([0-9a-z][0-9a-z-]+.)+[a-z]{2,3}$/;
          break;
        default:
      }
      return !!r.match(n)
    },
    formcheckByVal: function(e, t) {
      switch (t) {
        case "mobile":
          t = /^1[34578]\d{9}$/;
          break;
        case "email":
          t = /^[_.0-9a-z-]+@([0-9a-z][0-9a-z-]+.)+[a-z]{2,3}$/;
          break;
        default:
      }
      return !!e.match(t)
    },
    alert: function(e) {
      t("body").append('<div class="h5e-util-alert-bg"><div class="h5e-util-alert"><div class="h5e-util-alert-text">' + e + "</div>" + '<button type="button" class="h5e-util-alert-confirm">\u786e\u5b9a</button>' + "</div>" + "</div>" + "</div>"), this.fullHeight(".h5e-util-alert-bg"), t(".h5e-util-alert-confirm").click(function() {
        t(".h5e-util-alert-bg").remove()
      })
    },
    log: function(e) {
      t("body").append('<div class="h5e-util-log">' + e + "</div>")
    },
    loading: function(e) {
      switch (e) {
        case "start":
          t("body").append('<div class="h5e-util-loading"><img src="http://appmedia.qq.com/media/h5e/common/loading.png" /></div>'), this.fullHeight(".h5e-util-loading");
          break;
        case "end":
          t(".h5e-util-loading").remove();
          break;
        default:
          this.alert("loading\u53c2\u6570\u9519\u8bef!")
      }
    },
    warning: function(e, n) {
      t("." + e).append('<div class="ui-tooltips ui-tooltips-warn"><div class="ui-tooltips-cnt ui-border-b"><i></i>' + n + "</div>" + "</div>")
    },
    fileWarning: function() {
      for (var t in config.file) e[config.file[t]] || this.warning("h5e-file-warning", "\u60a8\u6ca1\u6709\u5f15\u5165 h5e-" + config.file[t] + ".js")
    },
    zoom: function(e) {
      var n = t(window).width() / e;
      t("html").css("zoom", n)
    },
    fullHeight: function(e) {
      var n = document.documentElement.clientHeight,
        r = window.document.body.offsetHeight,
        i = t("body").css("zoom");
      n > r ? t(e).css("height", i ? n / i : n) : t(e).css("height", i ? r / i : r)
    },
    getQueryString: function(e) {
      var t = location.search.match(new RegExp("[?&]" + e + "=([^&]+)", "i"));
      return t == null || t.length < 1 ? "" : t[1]
    },
    urlDelArg: function(e) {
      return e.split("?")[0]
    },
    crossScreen: function() {
      t("body").append('<div id="orientLayer" class="mod-orient-layer"><div class="mod-orient-layer__content"><i class="icon mod-orient-layer__icon-orient"></i><div class="mod-orient-layer__desc">\u4e3a\u4e86\u66f4\u597d\u7684\u4f53\u9a8c\uff0c\u8bf7\u4f7f\u7528\u7ad6\u5c4f\u6d4f\u89c8</div></div></div>')
    },
    dateStrToObj: function(e) {
      var t = e.split(" ")[0],
        n = e.split(" ")[1],
        r, i, s, o, u, a;
      r = t.split("-")[0], i = t.split("-")[1] - 1, s = t.split("-")[2], o = n.split(":")[0], u = n.split(":")[1], a = n.split(":")[2];
      var f = new Date(r, i, s, o, u, a);
      return f
    },
    ua: function() {
      return function(e, t, n) {
        return {
          win32: n === "Win32",
          ie: /MSIE ([^;]+)/.test(e),
          ieMobile: window.navigator.msPointerEnabled,
          ieVersion: Math.floor((/MSIE ([^;]+)/.exec(e) || [0, "0"])[1]),
          ios: /iphone|ipad/gi.test(t),
          iphone: /iphone/gi.test(t),
          ipad: /ipad/gi.test(t),
          iosVersion: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(e) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || !1,
          safari: /Version\//gi.test(t) && /Safari/gi.test(t),
          uiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e),
          android: /android/gi.test(t),
          androidVersion: parseFloat("" + (/android ([0-9\.]*)/i.exec(e) || [0, ""])[1]),
          isMobile: /mobile/gi.test(e),
          chrome: /Chrome/gi.test(e),
          chromeVersion: parseInt((/Chrome\/([0-9]*)/gi.exec(e) || [0, 0])[1], 10),
          webkit: /AppleWebKit/.test(t),
          uc: t.indexOf("UCBrowser") !== -1,
          Browser: /Browser/gi.test(t),
          MiuiBrowser: /MiuiBrowser/gi.test(t),
          MicroMessenger: /MicroMessenger/gi.test(e),
          QQMusic: /qqmusic/gi.test(e),
          QQNews: /qqnews/gi.test(e),
          Pitu: /pitu/gi.test(e),
          QQ: /qq\//gi.test(e),
          TXADSDK: /tadchid/gi.test(e),
          TXADNews: /tadchid\/2/gi.test(e),
          TXVideo: /tadchid\/0/gi.test(e),
          Qzone: /qzone\//gi.test(e),
          canTouch: "ontouchstart" in document
        }
      }(navigator.userAgent, navigator.appVersion, navigator.platform)
    },
    loadScript: function(e, n, r, i, s) {
      var o = document.createElement("script");
      o.src = e;
      var u = document.getElementsByTagName("HEAD")[0].appendChild(o);
      if (i)
        for (var a in i) i.hasOwnProperty(a) && u.setAttribute(a, i[a]);
      t(o).on("load", function() {
        typeof n == "function" && n(), s && o.parentNode.removeChild(o)
      }), t(o).on("error", function() {
        typeof r == "function" && r(), s && o.parentNode.removeChild(o)
      })
    },
    htmldecode: function(e) {
      var t = document.createElement("div");
      return t.innerHTML = e, t.innerText || t.textContent
    },
    getACSRFToken: function() {
      var e = this.cookie("skey");
      if (e == null || e == "") e = this.cookie("lskey");
      e == null && (e = "");
      var t = 5381;
      for (var n = 0, r = e.length; n < r; ++n) t += (t << 5) + e.charAt(n).charCodeAt();
      return t & 2147483647
    },
    filterXss: function(e) {
      var t = e.replace(/\&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/,/g, "&#44;").replace(/\(/g, "&#40;").replace(/\)/g, "&#41;").replace(/\?/g, "&#63;").replace(/\*/g, "&#42;").replace(/\\/g, "&#92;").replace(/\+/g, "&#43;").replace(/\-/g, "&#45;");
      return t
    }
  }, e.util = new n
}(h5e, window.Zepto || window.jQuery),
function(e, t) {
  var n = {
      autoplay: !1,
      loop: !0,
      fadeIn: !0,
      preload: "auto",
      src: "http://"
    },
    r = function() {};
  r.prototype.init = function(e) {
    var r = this;
    this.option = t.extend({}, n, typeof e == "object" && e), this.option.position && this.option.element.css(this.option.position), this.start(), r.addEvent()
  }, r.prototype.start = function() {
    var t = this,
      n = {
        autoplay: t.option.autoplay,
        loop: t.option.loop,
        preload: t.option.preload,
        src: t.option.src
      };
    t._audio = new Audio;
    for (var r in n) n.hasOwnProperty(r) && r in t._audio && (t._audio[r] = n[r]);
    t._audio.load();
    var i = e.util.ua();
    this.option.autoplay && !i.TXVideo && !i.QQMusic && !i.safari ? (t._audio.play(), t._audio_play_flag = !0) : t._audio_play_flag = !1
  }, r.prototype.addEvent = function() {
    function i(t) {
      var n = e.option.element.find(".info");
      n.html(t), e.textInterval && clearTimeout(e.textInterval), n.removeClass("hide"), e.textInterval = setTimeout(function() {
        n.addClass("hide")
      }, 1e3)
    }
    var e = this,
      n = e.option.element.find(".info"),
      r = e.option.element.find(".icon");
    r.on("click", function(t) {
      t.preventDefault(), e._audio_play_flag ? e.stop() : e.play()
    }), t(e._audio).on("play", function() {
      r.addClass("rotate"), i("\u6253\u5f00")
    }), t(e._audio).on("pause", function() {
      r.removeClass("rotate"), i("\u5173\u95ed")
    })
  }, r.prototype.play = function() {
    var e = this;
    e._audio_play_flag = !0, e._audio && e._audio.play()
  }, r.prototype.stop = function() {
    var e = this;
    e._audio_play_flag = !1, e._audio && e._audio.pause()
  }, e.audio = new r
}(h5e, window.Zepto || window.jQuery),
function(e, t) {
  var n = [{
      text: 1,
      width: 2
    }, {
      text: 2,
      width: 2
    }, {
      text: 3,
      width: 2
    }, {
      text: 4,
      width: 2
    }, {
      text: 5,
      width: 2
    }, {
      text: 6,
      width: 2
    }, {
      text: 7,
      width: 2
    }, {
      text: 8,
      width: 2
    }, {
      text: 9,
      width: 2
    }, {
      text: 0,
      width: 2
    }, {
      text: "\u6e05\u9664",
      width: 5,
      color: "gray",
      callback: "delete"
    }, {
      text: "\u5b8c\u6210",
      width: 5,
      color: "blue",
      callback: "complete"
    }],
    r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Q", "W", "E", "R", "T", "Y", "U", {
      text: "I",
      color: "transparent",
      callback: null
    }, {
      text: "O",
      color: "transparent",
      callback: null
    }, "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", {
      text: "\u5220",
      color: "gray",
      callback: "delete"
    }, "Z", "X", "C", "V", "B", "N", "M", {
      text: "\u5b8c\u6210",
      width: 3,
      color: "blue",
      callback: "complete"
    }],
    i = [{
      text: 1,
      width: 2
    }, {
      text: 2,
      width: 2
    }, {
      text: 3,
      width: 2
    }, {
      text: 4,
      width: 2
    }, {
      text: 5,
      width: 2
    }, {
      text: 6,
      width: 2
    }, {
      text: 7,
      width: 2
    }, {
      text: 8,
      width: 2
    }, {
      text: 9,
      width: 2
    }, {
      text: 0,
      width: 2
    }, {
      text: "X",
      width: 2
    }, "", {
      text: "\u5b8c\u6210",
      width: 4,
      color: "blue",
      callback: "complete"
    }, "", {
      text: "\u5220",
      width: 2,
      color: "gray",
      callback: "delete"
    }],
    s = function(e, n, r) {
      if (!e) return null;
      var i = e,
        s = null,
        o = !1,
        u = null,
        a = null,
        f = null,
        l = null;
      return this.show = function(e) {
        var n = this;
        if (e) {
          o = !0, s.show(), s.removeAttr("style"), s.css("z-index", 99999), s.css("bottom", -s.height());
          var r = t(window).height();
          setTimeout(function() {
            s.css({
              "-webkit-transition": "all 0.3s"
            }), s.css("-webkit-transform", "translateY(-" + s.height() + "px)");
            var e = window.setInterval(function() {
              t(window).height() != r && (clearInterval(e), r = t(window).height(), s.removeAttr("style"), s.css("top", r - s.height()))
            }, 1);
            window.setTimeout(function() {
              clearInterval(e)
            }, 300)
          }, 1)
        } else {
          o = !1, s.removeAttr("style"), s.css("z-index", 88888), s.css("bottom", 0);
          var r = t(window).height();
          setTimeout(function() {
            s.css({
              "-webkit-transition": "all 0.3s"
            }), s.css("-webkit-transform", "translateY(" + s.height() + "px)");
            var e = window.setInterval(function() {
              t(window).height() != r && (clearInterval(e), r = t(window).height(), s.removeAttr("style"), s.hide())
            }, 1);
            window.setTimeout(function() {
              clearInterval(e)
            }, 300)
          }, 1), setTimeout(function() {
            o || s.hide()
          }, 500)
        }
      }, this.showCursor = function(e) {
        var n = this;
        e ? (clearInterval(u), clearInterval(a), this.calcCursorPosition(), t(".custom-keyboard-unique-cursor").hasClass("show") || t(".custom-keyboard-unique-cursor").addClass("show"), u = window.setInterval(function() {
          t(".custom-keyboard-unique-cursor").hasClass("show") ? t(".custom-keyboard-unique-cursor").removeClass("show") : t(".custom-keyboard-unique-cursor").addClass("show")
        }, 500), a = window.setInterval(function() {
          n.calcCursorPosition()
        }, 1)) : (clearInterval(u), clearInterval(a), t(".custom-keyboard-unique-cursor").hasClass("show") && t(".custom-keyboard-unique-cursor").removeClass("show"))
      }, this.calcCursorPosition = function() {
        var e = function(e) {
            var n = t("<span>").appendTo(document.body);
            n.html(e.val()).css("font", e.css("font"));
            var r = n.width();
            return n.remove(), r
          },
          n = document.body.scrollTop,
          r = i.get(0).getBoundingClientRect(),
          s = parseInt(i.css("font-size")),
          o = parseInt(i.width()),
          u = parseInt(i.height()),
          a = parseInt(i.css("padding-left")) ? parseInt(i.css("padding-left")) : 0,
          f = parseInt(i.css("padding-right")) ? parseInt(i.css("padding-right")) : 0,
          l = e(i);
        l < o - a - f ? t(".custom-keyboard-unique-cursor").css({
          top: (n ? n : 0) + r.top + ((u > 0 ? u : 1.14 * s) - s) / 2,
          left: r.left + a + l,
          height: s > 0 ? s : 16
        }) : t(".custom-keyboard-unique-cursor").css({
          top: (n ? n : 0) + r.top + ((u > 0 ? u : 1.14 * s) - s) / 2,
          left: r.left + o - f,
          height: s > 0 ? s : 16
        })
      }, this.format = function(e) {
        return e = e.map(function(e) {
          var t = typeof e.text == "undefined" || e.text == null ? e : e.text,
            n = typeof e.value == "undefined" || e.value == null ? t : e,
            r = e.callback;
          if (typeof r == "undefined") r = function(e) {
            var t = e.attr("maxlength");
            (!t || e.val().length < t) && e.val(e.val() + n)
          };
          else if (r == null) r = function() {};
          else if (typeof r == "string") switch (r) {
            case "delete":
              r = function(e) {
                e.val().length > 0 ? e.val(e.val().substring(0, e.val().length - 1)) : ""
              };
              break;
            case "complete":
              r = function(e) {
                e.trigger("blur")
              };
              break;
            default:
              r = function() {}
          }
          var i = e.width ? "width-" + e.width : "",
            s = e.color ? "color-" + e.color : "";
          return e = {}, e.text = t, e.value = n, e.callback = r, e.width = i, e.color = s, e
        }), e
      }, this.initKeyboard = function(e) {
        var n = this;
        e = this.format(e), s = t('<div class="custom-keyboard">').appendTo("body"), s.unbind("touchstart").bind("touchstart", function(e) {
          e.stopPropagation(), e.preventDefault()
        }), s.unbind("touchend").bind("touchend", function(e) {
          clearTimeout(l), f = null, e.stopPropagation(), e.preventDefault()
        }), t(".custom-keyboard-unique-cursor").length <= 0 && (cursorElement = t('<div class="custom-keyboard-unique-cursor" />').appendTo(t("body"))), e.map(function(e) {
          var n = t('<div class="custom-key ' + e.width + " " + e.color + " " + (e.text === "" ? "space" : "") + '">' + e.text + "</div>").appendTo(s);
          n.unbind("touchstart").bind("touchstart", function(t) {
            clearTimeout(l), l = window.setTimeout(function() {
              f = e
            }, 800)
          }), n.unbind("touchend").bind("touchend", function(t) {
            clearTimeout(l), f != null ? f = null : typeof e.callback == "function" && e.callback(i), typeof r == "function" && r(i), t.stopPropagation(), t.preventDefault()
          })
        }), s.hide(), i.unbind("focus").bind("focus", function(e) {
          n.show(!0), n.showCursor(!0), e.stopPropagation(), e.preventDefault()
        }), i.unbind("blur").bind("blur", function() {
          n.show(!1), n.showCursor(!1), event.stopPropagation(), event.preventDefault()
        }), window.setInterval(function() {
          f != null && typeof f.callback == "function" && f.callback(i)
        }, 100)
      }, this.initKeyboard(n), this
    },
    o = function() {};
  o.prototype.init = function(e, t, o) {
    e.attr("readonly", "readonly");
    switch (t) {
      case "MOBILE":
        return new s(e, n, o);
      case "PLATE":
        return new s(e, r, o);
      case "IDENTIFICATION_CARD":
        return new s(e, i, o);
      default:
        return new s(e, t, o)
    }
  }, e.keyboard = new o
}(h5e, window.Zepto || window.jQuery),
function(e, t) {
  var n = function() {
    this.options = {
      actId: "",
      time: 2e3,
      currentStatus: null,
      onChange: function() {},
      onComplete: function() {
        console.log("getstatus complete")
      },
      onError: function() {
        console.warn("getstatus error")
      }
    }
  };
  n.prototype.getStatus = function(n) {
    var r = this;
    n = t.extend({}, this.options, n);
    var i = function() {
      r.sync = window.setTimeout(function() {
        n.currentStatus != 2 && i()
      }, n.time), t.ajax({
        type: "GET",
        url: e.host("live", "getStatus"),
        data: {
          actId: n.actId,
          format: "jsonp"
        },
        dataType: "jsonp",
        json: "callback",
        success: function(e) {
          if (e.code == 0)
            if (typeof n.currentStatus == "object" || e.status != n.currentStatus) {
              switch (e.status) {
                case 0:
                  n.onBefore && n.onBefore();
                  break;
                case 1:
                  n.onLive && n.onLive();
                  break;
                case 2:
                  n.onAfter && n.onAfter();
                  break;
                default:
              }
              n.onComplete && typeof n.currentStatus == "object" ? n.onComplete(e.status) : n.onChange && n.onChange(e.status), n.currentStatus = e.status
            }
        },
        error: function() {
          n.onError && n.onError()
        }
      })
    };
    i()
  }, n.prototype.getFiles = function(n) {
    var r = this;
    n = t.extend({}, this.options, n), t.ajax({
      type: "GET",
      url: e.host("live", "getFiles"),
      data: {
        actId: n.actId,
        classId: n.classId,
        format: "jsonp"
      },
      dataType: "jsonp",
      json: "callback",
      success: function(e) {
        e.code == 0 ? n.callback && n.callback(e.data) : n.error && n.error()
      },
      error: function() {
        n.error && n.error()
      }
    })
  }, e.live = new n
}(h5e, window.Zepto || window.jQuery),
function(e) {
  function t(e) {
    e = e || {}, this.settings = e, e.statusInterval == null && (e.statusInterval = 5e3), e.loggingDelay == null && (e.loggingDelay = 2e4), e.noProgressTimeout == null && (e.noProgressTimeout = Infinity);
    var t = [],
      r = [],
      i, s = Date.now(),
      o = {
        QUEUED: 0,
        WAITING: 1,
        LOADED: 2,
        ERROR: 3,
        TIMEOUT: 4
      },
      u = function(e) {
        return e == null ? [] : Array.isArray(e) ? e : [e]
      };
    this.add = function(e) {
      e.tags = new n(e.tags), e.priority == null && (e.priority = Infinity), t.push({
        resource: e,
        status: o.QUEUED
      })
    }, this.addProgressListener = function(e, t) {
      r.push({
        callback: e,
        tags: new n(t)
      })
    }, this.addCompletionListener = function(e, t) {
      r.push({
        tags: new n(t),
        callback: function(t) {
          t.completedCount === t.totalCount && e(t)
        }
      })
    };
    var a = function(e) {
      e = u(e);
      var t = function(t) {
        var n = t.resource,
          r = Infinity;
        for (var i = 0; i < n.tags.length; i++)
          for (var s = 0; s < Math.min(e.length, r); s++) {
            if (n.tags.all[i] === e[s] && s < r) {
              r = s;
              if (r === 0) break
            }
            if (r === 0) break
          }
        return r
      };
      return function(e, n) {
        var r = t(e),
          i = t(n);
        return r < i ? -1 : r > i ? 1 : e.priority < n.priority ? -1 : e.priority > n.priority ? 1 : 0
      }
    };
    this.start = function(e) {
      i = Date.now();
      var n = a(e);
      t.sort(n);
      for (var r = 0, s = t.length; r < s; r++) {
        var u = t[r];
        u.status = o.WAITING, u.resource.start(this)
      }
      setTimeout(f, 100)
    };
    var f = function() {
      var n = !1,
        r = Date.now() - s,
        i = r >= e.noProgressTimeout,
        u = r >= e.loggingDelay;
      for (var a = 0, l = t.length; a < l; a++) {
        var c = t[a];
        if (c.status !== o.WAITING) continue;
        c.resource.checkStatus && c.resource.checkStatus(), c.status === o.WAITING && (i ? c.resource.onTimeout() : n = !0)
      }
      u && n && h(), n && setTimeout(f, e.statusInterval)
    };
    this.isBusy = function() {
      for (var e = 0, n = t.length; e < n; e++)
        if (t[e].status === o.QUEUED || t[e].status === o.WAITING) return !0;
      return !1
    };
    var l = function(e, n) {
      var i = null,
        u, a, f, l, h;
      for (u = 0, a = t.length; u < a; u++)
        if (t[u].resource === e) {
          i = t[u];
          break
        }
      if (i == null || i.status !== o.WAITING) return;
      i.status = n, s = Date.now(), f = e.tags.length;
      for (u = 0, a = r.length; u < a; u++) l = r[u], l.tags.length === 0 ? h = !0 : h = e.tags.intersects(l.tags), h && c(i, l)
    };
    this.onLoad = function(e) {
      l(e, o.LOADED)
    }, this.onError = function(e) {
      l(e, o.ERROR)
    }, this.onTimeout = function(e) {
      l(e, o.TIMEOUT)
    };
    var c = function(e, n) {
        var r = 0,
          i = 0,
          s, u, a, f;
        for (s = 0, u = t.length; s < u; s++) a = t[s], f = !1, n.tags.length === 0 ? f = !0 : f = a.resource.tags.intersects(n.tags), f && (i++, (a.status === o.LOADED || a.status === o.ERROR || a.status === o.TIMEOUT) && r++);
        n.callback({
          resource: e.resource,
          loaded: e.status === o.LOADED,
          error: e.status === o.ERROR,
          timeout: e.status === o.TIMEOUT,
          completedCount: r,
          totalCount: i
        })
      },
      h = this.log = function(e) {
        if (!window.console) return;
        var n = Math.round((Date.now() - i) / 1e3);
        window.console.log("PxLoader elapsed: " + n + " sec");
        for (var r = 0, s = t.length; r < s; r++) {
          var u = t[r];
          if (!e && u.status !== o.WAITING) continue;
          var a = "PxLoader: #" + r + " " + u.resource.getName();
          switch (u.status) {
            case o.QUEUED:
              a += " (Not Started)";
              break;
            case o.WAITING:
              a += " (Waiting)";
              break;
            case o.LOADED:
              a += " (Loaded)";
              break;
            case o.ERROR:
              a += " (Error)";
              break;
            case o.TIMEOUT:
              a += " (Timeout)"
          }
          u.resource.tags.length > 0 && (a += " Tags: [" + u.resource.tags.all.join(",") + "]"), window.console.log(a)
        }
      }
  }

  function n(e) {
    this.all = [], this.first = null, this.length = 0, this.lookup = {};
    if (e) {
      if (Array.isArray(e)) this.all = e.slice(0);
      else if (typeof e == "object")
        for (var t in e) e.hasOwnProperty(t) && this.all.push(t);
      else this.all.push(e);
      this.length = this.all.length, this.length > 0 && (this.first = this.all[0]);
      for (var n = 0; n < this.length; n++) this.lookup[this.all[n]] = !0
    }
  }
  n.prototype.intersects = function(e) {
    if (this.length === 0 || e.length === 0) return !1;
    if (this.length === 1 && e.length === 1) return this.first === e.first;
    if (e.length < this.length) return e.intersects(this);
    for (var t in this.lookup)
      if (e.lookup[t]) return !0;
    return !1
  }, typeof define == "function" && define.amd && define("PxLoader", [], function() {
    return t
  }), e.PxLoader = t
}(this), Date.now || (Date.now = function() {
    return (new Date).getTime()
  }), Array.isArray || (Array.isArray = function(e) {
    return Object.prototype.toString.call(e) === "[object Array]"
  }), PxLoader.prototype.addImage = function(e, t, n, r) {
    var i = new PxLoaderImage(e, t, n, r);
    return this.add(i), i.img
  }, typeof define == "function" && define.amd && define("PxLoaderImage", [], function() {
    return PxLoaderImage
  }),
  function(e, t) {
    var n = function() {
      this.completedCount = 0, this.parallelNum = 0, this.totleCount = 0, this.logoPic = "", this.bgPic = "", this.needLoadingLogo = !1, this.needLoadingBg = !1, this.handle = 0, this.callback = function() {}
    };
    n.prototype = {
      init: function(n) {
        var r = n.type ? n.type : 1,
          i = !0,
          s = n.backColor ? n.backColor : "#d35400",
          o = n.frontColor ? n.frontColor : "#fff",
          u = n.bgPicBlur ? n.bgPicBlur : 0,
          a = this._getTpl(r),
          f = n.files;
        this.logoPic = n.logoPic ? n.logoPic : "", this.bgPic = n.bgPic ? n.bgPic : "", this.totleCount = f.length;
        var l = n.parallelNum ? n.parallelNum : this.totleCount;
        this.parallelNum = l, this.callback = n.onComplete ? n.onComplete : function() {}, t(".h5e-loading").append(a), n.top && t(".h5e-loading .loading, .h5e-loading .percent").css({
          top: n.top
        }), n.percent === !1 && (i = !1), i || t(".percent").hide(), (r == 3 || r == 6) && this.logoPic && (this.needLoadingLogo = !0, this._setLogo(this.logoPic)), this.bgPic && (this.needLoadingBg = !0, this._setBgPic(this.bgPic, u), s = "#000"), this._setColor(r, s, o), e.util.cookie("loadinged") ? (t(".h5e-loading").hide(), this.callback()) : this._loader(f, 0)
      },
      _loader: function(n, r) {
        var i = this,
          s, o = new PxLoader;
        if (this.needLoadingLogo) {
          var u = new PxLoaderImage(this.logoPic);
          o.add(u), o.addCompletionListener(function() {
            i._loader(n, 0), i.needLoadingLogo = !1
          })
        } else if (this.needLoadingBg) {
          var u = new PxLoaderImage(this.bgPic);
          o.add(u), o.addCompletionListener(function() {
            i._loader(n, 0), i.needLoadingBg = !1
          })
        } else {
          r + this.parallelNum < this.totleCount ? s = r + this.parallelNum : s = this.totleCount;
          for (var a = r; a < s; a++) {
            var u = new PxLoaderImage(n[a]);
            o.add(u)
          }
          o.addProgressListener(function(n) {
            i.completedCount += 1;
            var r = Math.round(i.completedCount / i.totleCount * 100),
              s = parseInt(t(".percent").text()),
              o = parseInt(r);
            clearInterval(i.handle), i.handle = setInterval(function() {
              s += 1;
              if (s > o) return clearInterval(i.handle), !1;
              t(".percent").text(s + "%"), s == 100 && setTimeout(function() {
                t(".h5e-loading").hide(), e.util.cookie("loadinged", 1, {
                  expires: 300
                }), i.callback()
              }, 500)
            }, 30)
          }), o.addCompletionListener(function() {
            i._loader(n, r + i.parallelNum)
          }), n.length == 0 && (t(".h5e-loading").hide(), i.callback())
        }
        o.start()
      },
      _getTpl: function(e) {
        var t = [];
        return t[0] = "", t[1] = '<div class="loading type01"></div><div class="percent percent01">0%</div><div class="background"></div>', t[2] = '<div class="loading type02"></div><div class="percent percent02">0%</div><div class="background"></div>', t[3] = '<div class="loading type03"><div class="dot-div"><div class="dot"></div></div><div class="logo"><img /></div></div><div class="percent percent03">0%</div><div class="background"></div>', t[e]
      },
      _setColor: function(e, n, r) {
        t(".h5e-loading").css("background-color", n), t(".percent").css("color", r);
        switch (e) {
          case 8:
            this._setFalseCss(".type08 .sk-circle:before {background-color: " + r + "}");
            break;
          case 9:
            this._setFalseCss(".type09 .sk-child:before {background-color: " + r + "}");
            break;
          case 12:
            this._setFalseCss(".type12 .sk-cube:before {background-color: " + r + "}");
            break;
          default:
            t(".loading").css("background-color", r)
        }
        e == 5 && (t(".type05").find(".progress-track, .progress-cover").css("border-color", r), t(".type05").find(".progress-left, .progress-right").css("border-color", "#d35400"))
      },
      _setProgressRing: function(e) {
        var n = t(".type05"),
          r = n.find(".progress-cover").height();
        n.find(".progress-left").css({
          "-webkit-transform": "rotate(" + e * 3.6 + "deg)"
        });
        if (e > 50) {
          var i = "toggle";
          n.find(".progress-right").css({
            opacity: 1,
            animation: i,
            "animation-timing-function": "step-end"
          }), n.find(".progress-cover").css({
            opacity: 0,
            animation: i,
            "animation-timing-function": "step-start"
          })
        }
      },
      _setFalseCss: function(e) {
        var t = document.createElement("style");
        t.innerText = e, document.body.appendChild(t)
      },
      _setLogo: function(e) {
        t(".logo > img").attr("src", e)
      },
      _setBgPic: function(e, n) {
        var r = "url(" + e + ")",
          i = "blur(" + n + "px)";
        t(".background").css("background-image", r), n && t(".background").css("-webkit-filter", i)
      }
    }, e.loading = new n
  }(h5e, window.Zepto || window.jQuery),
  function(h5e, $) {
    var video = function() {
        var e = null;
        this.showLoginPanel = function() {
          if (typeof mraid == "undefined" || !mraid) return;
          mraid.extend.showLoginPanel("all", "showLoginPanelCallback")
        }, window.showLoginPanelCallback = function(t) {
          return typeof e == "string" ? (window.location.href = e, e = null) : window.location.reload(), t
        };
        var t = null,
          n = null;
        window.getLoginStatusCallback = function(e) {
          e = $.parseJSON(e);
          if (typeof t == "function") {
            var r = t;
            t = null, typeof e != "undefined" && e != null && typeof e.isLogin != "undefined" && e.isLogin != null ? e.isLogin === !0 || e.isLogin === "true" ? r(!0) : r(!1) : r(!1)
          }
          if (typeof n == "function") {
            var i = n;
            n = null, i(e)
          }
        }, this.login = function(t) {
          e = t, this.showLoginPanel()
        }, this.getLoginInfo = function(e) {
          n = e;
          if (typeof mraid == "undefined" || !mraid) return;
          mraid.extend.getLoginStatus("getLoginStatusCallback")
        }, this.isLogin = function(e) {
          t = e, this.getLoginInfo(null)
        }, this.logout = function() {
          t = null, n = null, this.showLoginPanel()
        }, this.getInfo = function(e) {
          var t = this;
          t.isLogin(function(n) {
            n ? t.getLoginInfo(function(t) {
              var n = "",
                r = "\u65e0",
                i = "",
                s = "";
              n = t.info.headImgUrl, r = t.info.nickname, t.accountFrom === "qq" ? (i = "qq", s = t.info.uid || t.info.uin) : t.accountFrom === "wx" && (i = "wx", s = t.info.openId);
              var o = h5e.util.ua();
              o.TXADNews ? e({
                isLogin: !0,
                platform: "news",
                accountType: i,
                account: s,
                name: r,
                head: n,
                response: t
              }) : e({
                isLogin: !0,
                platform: "video",
                accountType: i,
                account: s,
                name: r,
                head: n,
                response: t
              })
            }) : e({
              isLogin: !1,
              platform: "video"
            })
          })
        }
      },
      music = function() {
        window.WebViewJavascriptBridge.init(), this.isLogin = function(e) {
          var t = this.getToken() && this.getUin();
          return typeof e == "function" && e(t), t
        }, this.getUin = function() {
          var e = h5e.util.cookie("p_uin") || h5e.util.cookie("uin") || 0;
          return h5e.util.cookie("login_type") == 2 && (e = h5e.util.cookie("wxuin") || h5e.util.cookie("uin") || 0), e && (e.indexOf("o") == 0 && (e = e.substring(1, e.length)), !/^\d+$/.test(e) || e < 1e4 ? e = 0 : ("" + e).length < 14 && (e = parseInt(e, 10))), e
        }, this.getToken = function() {
          var e = 5381;
          if (h5e.util.cookie("login_type") != 1) return e;
          var t = h5e.util.cookie("skey") || h5e.util.cookie("qqmusic_key");
          for (var n = 0, r = t.length; n < r; ++n) e += (e << 5) + t.charCodeAt(n);
          return e & 2147483647
        }, this.getLoginInfo = function(e) {
          var t = this;
          $.ajax({
            type: "GET",
            url: h5e.host("login", "getMusicInfo"),
            dataType: "jsonp",
            data: {
              format: "jsonp",
              g_tk: t.getToken(),
              uin: t.getUin(),
              hostUin: "0",
              inCharset: "utf-8",
              outCharset: "utf-8",
              notice: "0",
              platform: "h5",
              needNewCode: "1",
              source: "4001"
            },
            jsonp: "jsonpCallback",
            error: function(e) {
              h5e.config.debug && alert(JSON.stringify(e)), h5e.util.alert("ajax error!")
            },
            success: function(t) {
              h5e.config.debug && alert(JSON.stringify(t)), typeof e == "function" && e(t)
            }
          })
        }, this.login = function(e) {
          window.WebViewJavascriptBridge.callHandler("JS_CMD_DO_LOGIN", {
            force: 1
          }, function(t) {
            typeof e == "string" ? window.location.href = e : window.location.reload()
          })
        }, this.logout = function() {
          window.location.reload()
        }, this.getInfo = function(e) {
          var t = this;
          t.isLogin(function(n) {
            n ? t.getLoginInfo(function(t) {
              var n = "",
                r = "\u65e0",
                i = "",
                s = "";
              r = h5e.util.htmldecode(t.data.nickname), n = t.data.face, s = t.data.uin, h5e.util.cookie("login_type") == 1 ? i = "qq" : h5e.util.cookie("login_type") == 2 && (i = "wx"), e({
                isLogin: !0,
                platform: "music",
                accountType: i,
                account: s,
                name: r,
                head: n,
                response: t
              })
            }) : e({
              isLogin: !1,
              platform: "music"
            })
          })
        }
      },
      news = function() {
        var e = null;
        window.QQNEWSLoginCallback = function(t) {
          return typeof e == "string" ? (window.location.href = e, e = null) : window.location.reload(), t
        }, window.QQNEWSLogoutCallback = function() {
          document.location.reload()
        }, this.getLoginInfo = function(e) {
          var t = this;
          $.ajax({
            type: "GET",
            url: h5e.host("login", "getInfo"),
            dataType: "jsonp",
            data: {
              app_id: h5e.config.appid,
              format: "jsonp"
            },
            error: function(e) {
              h5e.config.debug && alert(JSON.stringify(e)), h5e.util.alert("ajax error!")
            },
            success: function(t) {
              h5e.config.debug && alert(JSON.stringify(t)), typeof e == "function" && e(t)
            }
          })
        }, this.isLogin = function(e) {
          this.getLoginInfo(function(t) {
            t.code === 0 || t.code === "0" ? typeof e == "function" && e(!0) : typeof e == "function" && e(!1)
          })
        }, this.login = function(t) {
          e = t;
          var n = h5e.util.ua();
          n.ios && window.TencentNews && window.TencentNews.showNativeLoginWithType ? window.TencentNews.showNativeLoginWithType("qqorweixin", "QQNEWSLoginCallback", null) : n.android && window.TencentNews && window.TencentNews.showLoginWithType && window.TencentNews.showLoginWithType("qqorweixin", "QQNEWSLoginCallback")
        }, this.logout = function() {
          window.TencentNews && window.TencentNews.logout && (window.TencentNews.logout("weixin"), window.TencentNews.logout("qq", "QQNEWSLogoutCallback"))
        }, this.getInfo = function(e) {
          var t = this;
          t.isLogin(function(n) {
            n ? t.getLoginInfo(function(t) {
              var n = "",
                r = "\u65e0",
                i = "",
                s = "";
              n = t.data.data.head, r = t.data.data.name, i = t.data.data.accountType, s = t.data.data.account, e({
                isLogin: !0,
                platform: "news",
                accountType: i,
                account: s,
                name: r,
                head: n,
                response: t
              })
            }) : e({
              isLogin: !1,
              platform: "news"
            })
          })
        }
      },
      web = function() {
        this.defaults = {
          logo: "http://appmedia.qq.com/media/h5e/qqlogin/logo.png",
          redirect: "#"
        }, this.login = function(e, t) {
          this.defaults.redirect = e || this.defaults.redirect, this.defaults.logo = t || this.defaults.logo;
          var n = window.location.href,
            r = n.split("/"),
            i = "";
          for (var s in r) s < r.length - 2 && (i += r[s] + "/");
          var o, u = "";
          this.defaults.redirect.indexOf("http://") == 0 ? o = this.defaults.redirect : this.defaults.redirect === "#" ? o = n : o = i + "app/" + this.defaults.redirect, t && (u = "&hln_css=" + this.defaults.logo);
          var a = "https://ui.ptlogin2.qq.com/cgi-bin/login?appid=4007203&daid=310&s_url=" + o + "&style=9" + u;
          window.location.href = a
        }, this.logout = function(e) {
          h5e.util.cookie("uin", null, t), h5e.util.cookie("skey", null, t), h5e.util.cookie("luin", null, t), h5e.util.cookie("lskey", null, t);
          var t = {
            domain: "qq.com",
            path: "/"
          };
          h5e.util.cookie("uin", null, t), h5e.util.cookie("skey", null, t), h5e.util.cookie("luin", null, t), h5e.util.cookie("lskey", null, t), e == undefined ? window.location.reload() : typeof e == "string" ? e == "" ? window.location.reload() : window.location.href = e : e()
        }, this.isLogin = function(e) {
          var t = h5e.util.cookie("uin"),
            n = h5e.util.cookie("skey");
          return t &&
            t.length > 4 && n && n.length > 0 ? (typeof e == "function" && e(!0), !0) : (typeof e == "function" && e(!1), !1)
        }, this.getqq = function() {
          var e = h5e.util.cookie("uin");
          if (e == null) return 0;
          var t = e.substr(1);
          return t++, t--, t
        }, this.getLoginInfo = function(e) {
          var t = this;
          $.ajax({
            type: "GET",
            url: h5e.host("login", "getInfo"),
            dataType: "jsonp",
            data: {
              app_id: h5e.config.appid,
              format: "jsonp"
            },
            error: function(e) {
              h5e.config.debug && alert(JSON.stringify(e)), h5e.util.alert("ajax error!")
            },
            success: function(t) {
              t.code != 0 && t.code != "0" && h5e.util.alert(t.message), h5e.config.debug && alert(JSON.stringify(t)), typeof e == "function" && e(t)
            }
          })
        }, this.overwriteCookie = function() {
          var e = {
              domain: "qq.com",
              path: "/"
            },
            t = h5e.util.cookie("uin"),
            n = h5e.util.cookie("skey"),
            r = h5e.util.cookie("luin"),
            i = h5e.util.cookie("lskey");
          h5e.util.cookie("uin", t, e), h5e.util.cookie("skey", n, e), h5e.util.cookie("luin", r, e), h5e.util.cookie("lskey", i, e)
        }, this.showCookie = function() {
          var e = document.cookie;
          $(".console_cookie").text(e)
        }, this.getInfo = function(e) {
          var t = this;
          t.isLogin(function(n) {
            n ? t.getLoginInfo(function(t) {
              var n = "",
                r = "\u65e0",
                i = "",
                s = "";
              n = t.data.data.head, r = t.data.data.name, i = t.data.data.accountType, s = t.data.data.account, e({
                isLogin: !0,
                platform: "web",
                accountType: i,
                account: s,
                name: r,
                head: n,
                response: t
              })
            }) : e({
              isLogin: !1,
              platform: "web"
            })
          })
        }
      },
      loginLoadComplete = null,
      setLoginObject = function(type) {
        if (typeof type == "undefined" || type == null || type === "") type = "web";
        h5e.login.loginObject = eval("new " + type + "()"), typeof loginLoadComplete == "function" && loginLoadComplete()
      },
      init = function() {
        var e = "",
          t = h5e.util.ua();
        if (h5e.login.qqLoginOnly !== !0) switch (!0) {
          case t.TXADSDK:
          case t.TXVideo:
            e = "video";
            break;
          case t.QQMusic:
            e = "music";
            break;
          case t.QQNews:
            e = "news"
        }
        switch (e) {
          case "video":
            try {
              typeof mraid == "undefined" || !mraid ? h5e.util.loadScript("mraid.js", function() {
                setLoginObject(e)
              }, function() {
                setLoginObject()
              }) : setLoginObject(e)
            } catch (n) {
              setLoginObject()
            }
            break;
          case "music":
            try {
              typeof WebViewJavascriptBridge == "object" ? setLoginObject(e) : document.addEventListener("WebViewJavascriptBridgeReady", function(t) {
                setLoginObject(e)
              })
            } catch (n) {
              setLoginObject()
            }
            break;
          case "news":
            try {
              typeof TencentNews == "object" ? setLoginObject(e) : h5e.util.loadScript("http://mat1.gtimg.com/www/js/newsapp/jsapi/news.js?_tsid=1", function() {
                setLoginObject(e)
              }, function() {
                setLoginObject()
              })
            } catch (n) {
              setLoginObject()
            }
            break;
          default:
            setLoginObject()
        }
      };
    h5e.login = {
      qqLoginOnly: !0,
      init: function(e) {
        loginLoadComplete = e, init()
      },
      login: function(e) {
        typeof h5e.login.loginObject != "undefined" ? h5e.login.loginObject.login(e) : this.init(function() {
          h5e.login.loginObject.login(e)
        })
      },
      logout: function() {
        typeof h5e.login.loginObject != "undefined" ? h5e.login.loginObject.logout() : this.init(function() {
          h5e.login.loginObject.logout()
        })
      },
      getInfo: function(e) {
        typeof h5e.login.loginObject != "undefined" ? h5e.login.loginObject.getInfo(e) : this.init(function() {
          h5e.login.loginObject.getInfo(e)
        })
      }
    }
  }(h5e, window.Zepto || window.jQuery),
  function(e, t) {
    var n, r, i, s, o = null,
      u = null,
      a = null,
      f = null,
      l = function(e) {
        e && e.touches && e.touches[0] && (o = e.touches[0].clientX, u = e.touches[0].clientY, e.touches[1] && (a = e.touches[1].clientX, f = e.touches[1].clientY), r.map(function(e) {
          e.touch && (e.source_x = e.x, e.source_y = e.y, e.source_width = e.width, e.source_height = e.height, e.source_rotation = e.rotation)
        })), typeof i != "undefined" && i != null && (s = i), p.prototype.update()
      },
      c = function(e) {
        var t = n.getBoundingClientRect();
        if (e && e.touches && e.touches[0] && e.touches[1] && o && u && a && f) {
          if (e.touches[0].clientX <= 0 || e.touches[0].clientX >= t.width || e.touches[0].clientY <= 0 || e.touches[0].clientY >= t.height) return;
          if (e.touches[1].clientX <= 0 || e.touches[1].clientX >= t.width || e.touches[1].clientY <= 0 || e.touches[1].clientY >= t.height) return;
          var i = Math.sqrt(Math.pow(a - o, 2) + Math.pow(f - u, 2)),
            s = Math.sqrt(Math.pow(e.touches[1].clientX - e.touches[0].clientX, 2) + Math.pow(e.touches[1].clientY - e.touches[0].clientY, 2)),
            l = s * 1 / i,
            c = Math.atan2(f - u, a - o),
            h = Math.atan2(e.touches[1].clientY - e.touches[0].clientY, e.touches[1].clientX - e.touches[0].clientX),
            d = (h - c) * 180 / Math.PI;
          r.map(function(e) {
            if (e.touch) {
              if (e.touch == 1 || !(e.touch instanceof Object && e.touch.width === !1)) e.width = e.source_width * l;
              if (e.touch == 1 || !(e.touch instanceof Object && e.touch.height === !1)) e.height = e.source_height * l;
              if (e.touch == 1 || !(e.touch instanceof Object && e.touch.rotation === !1)) e.rotation = e.source_rotation + d
            }
          })
        } else if (e && e.touches && e.touches[0] && o && u) {
          if (e.touches[0].clientX <= 0 || e.touches[0].clientX >= t.width || e.touches[0].clientY <= 0 || e.touches[0].clientY >= t.height) return;
          if (!n) return;
          var v = (e.touches[0].clientX - o) * n.width / t.width,
            m = (e.touches[0].clientY - u) * n.height / t.height;
          r.map(function(e) {
            if (e.touch) {
              if (e.touch == 1 || !(e.touch instanceof Object && e.touch.x === !1)) e.x = e.source_x + v;
              if (e.touch == 1 || !(e.touch instanceof Object && e.touch.y === !1)) e.y = e.source_y + m
            }
          })
        }
        p.prototype.update(), e.stopPropagation(), e.preventDefault()
      },
      h = function(e) {
        o = null, u = null, a = null, f = null, r.map(function(e) {
          e.touch && (delete e.source_x, delete e.source_y, delete e.source_width, delete e.source_height, delete e.source_rotation)
        }), s = null, p.prototype.update()
      },
      p = function() {};
    p.prototype.init = function(e, t, s, o, u, a) {
      n = document.getElementById(e);
      if (n) {
        n.removeEventListener("touchstart", l), n.removeEventListener("touchmove", c), n.removeEventListener("touchend", h), n.width = t, n.height = s, r = o || [];
        var f = this;
        r.map(function(e) {
          f.format(e)
        }), p.prototype.update(u), i = a, n.addEventListener("touchstart", l), n.addEventListener("touchmove", c), n.addEventListener("touchend", h)
      }
      return n
    }, p.prototype.add = function(e, t, n) {
      this.format(e), r = r ? r : [], n ? r.unshift(e) : r.push(e), p.prototype.update(t)
    }, p.prototype.format = function(e) {
      typeof e.x == "undefined" || e.x == null ? e.x = n.width / 2 : "", typeof e.y == "undefined" || e.y == null ? e.y = n.height / 2 : "", typeof e.rotation == "undefined" || e.rotation == null ? e.rotation = 0 : "", typeof e.alpha == "undefined" || e.alpha == null ? e.alpha = 1 : "", e.text && (typeof e.text == "undefined" || e.text == null ? e.text = "" : "", typeof e.size == "undefined" || e.size == null ? e.size = "50px" : "", isNaN(e.size) || (e.size = e.size + "px"), typeof e.font == "undefined" || e.font == null ? e.font = " Courier New" : "", typeof e.align == "undefined" || e.align == null ? e.align = "left" : "", typeof e.style == "undefined" || e.style == null ? e.style = "" : "", typeof e.stroke == "undefined" || e.stroke == null ? e.stroke = !1 : "")
    }, p.prototype.update = function(e) {
      this.clear();
      var t = this;
      if (r && r instanceof Array && r.length > 0) {
        var i = 0,
          o = 0,
          u = function() {
            o++, o >= i && (typeof s != "undefined" && s != null ? (r.map(function(e) {
              e.touch || (e.image ? t.renderImage(e.image, e.x, e.y, e.width, e.height, e.rotation, e.alpha) : e.text && t.renderText(e.text, e.x, e.y, e.size, e.font, e.align, e.style, e.stroke, e.rotation, e.alpha))
            }), r.map(function(e) {
              e.touch && (e.image ? t.renderImage(e.image, e.x, e.y, e.width, e.height, e.rotation, s) : e.text && t.renderText(e.text, e.x, e.y, e.size, e.font, e.align, e.style, e.stroke, e.rotation, s))
            })) : r.map(function(e) {
              e.image ? t.renderImage(e.image, e.x, e.y, e.width, e.height, e.rotation, e.alpha) : e.text && t.renderText(e.text, e.x, e.y, e.size, e.font, e.align, e.style, e.stroke, e.rotation, e.alpha)
            }), typeof e == "function" && e())
          };
        r.map(function(e) {
          if (e.url || e.imageData || e.image)
            if (!e.image) {
              i++;
              var t = new Image;
              t.src = e.imageData || e.url, e.image = t, t.onload = function() {
                if (!e.width || !e.height) e.width && !e.height ? (e.height = e.width / t.width * t.height, e.minHeight && e.height < e.minHeight && (e.height = e.minHeight, e.width = e.height / t.height * t.width)) : !e.width && e.height ? (e.width = e.height / t.height * t.width, e.minWidth && e.width < e.minWidth && (e.width = e.minWidth, e.height = e.width / t.width * t.height)) : e.minWidth && e.minHeight ? (e.width = e.minWidth, e.height = e.width / t.width * t.height, e.height < e.minHeight && (e.height = e.minHeight, e.width = e.height / t.height * t.width)) : e.minWidth && !e.minHeight ? (e.width = e.minWidth, e.height = e.width / t.width * t.height) : !e.minWidth && e.minHeight ? (e.height = e.minHeight, e.width = e.height / t.height * t.width) : (e.width = t.width, e.height = t.height, n && (e.width > n.width && (e.width = n.width, e.height = e.width / t.width * t.height), e.height > n.height && (e.height = n.height, e.width = e.height / t.height * t.width)));
                u()
              }
            }
        }), i == 0 && u()
      } else typeof e == "function" && e()
    }, p.prototype.clear = function() {
      if (!n) return;
      var e = n.getContext("2d");
      e.clearRect(0, 0, n.width, n.height)
    }, p.prototype.renderImage = function(e, t, r, i, s, o, u) {
      if (!n) return;
      var a = n.getContext("2d");
      a.save(), a.globalAlpha = u, a.translate(t, r), a.rotate(o * Math.PI / 180), a.translate(-t, -r), a.drawImage(e, t - i / 2, r - s / 2, i, s), a.restore()
    }, p.prototype.renderText = function(e, t, r, i, s, o, u, a, f, l) {
      if (!n) return;
      var c = n.getContext("2d");
      c.save(), c.globalAlpha = l, c.textAlign = o, c.font = i + " " + s, c.translate(t, r), c.rotate(f * Math.PI / 180), c.translate(-t, -r), a ? (c.strokeStyle = u, c.strokeText(e, t, r)) : (c.fillStyle = u, c.fillText(e, t, r)), c.restore()
    }, p.prototype.selectFile = function(e, t, n) {
      var r = e.files[0];
      if (r) {
        if (t && t.maxSize && r.size > t.maxSize.value) {
          typeof t.maxSize.callback == "function" && t.maxSize.callback(r.size);
          return
        }
        if (t && t.minSize && r.size < t.minSize.value) {
          typeof t.minSize.callback == "function" && t.minSize.callback(r.size);
          return
        }
        var i = new FileReader;
        i.readAsDataURL(r), i.onload = function(e) {
          var i = function(e, t) {
              var n = new FileReader;
              n.onload = function(e) {
                var n = new DataView(e.target.result);
                if (n.getUint16(0, false) != 65496) return t(-2);
                var r = n.byteLength,
                  i = 2;
                while (i < r) {
                  var s = n.getUint16(i, !1);
                  i += 2;
                  if (s == 65505) {
                    if (n.getUint32(i += 2, false) != 1165519206) return t(-1);
                    var o = n.getUint16(i += 6, false) == 18761;
                    i += n.getUint32(i + 4, o);
                    var u = n.getUint16(i, o);
                    i += 2;
                    for (var a = 0; a < u; a++)
                      if (n.getUint16(i + a * 12, o) == 274) return t(n.getUint16(i + a * 12 + 8, o))
                  } else {
                    if ((s & 65280) != 65280) break;
                    i += n.getUint16(i, !1)
                  }
                }
                return t(-1)
              }, n.readAsArrayBuffer(e.slice(0, 65536))
            },
            s = this;
          i(r, function(e) {
            var r = 0;
            switch (e) {
              case 3:
                r = 180;
                break;
              case 6:
                r = 90;
                break;
              case 8:
                r = 270
            }
            var i = new Image;
            i.src = s.result, i.onload = function() {
              t && t.maxWidth && i.width > t.maxWidth.value ? typeof t.maxWidth.callback == "function" && t.maxWidth.callback(i.width) : t && t.minWidth && i.width < t.minWidth.value ? typeof t.minWidth.callback == "function" && t.minWidth.callback(i.width) : t && t.maxHeight && i.height > t.maxHeight.value ? typeof t.maxHeight.callback == "function" && t.maxHeight.callback(i.height) : t && t.minHeight && i.height < t.minHeight.value ? typeof t.minHeight.callback == "function" && t.minHeight.callback(i.height) : typeof n == "function" && n(s.result, r)
            }
          })
        }
      }
    }, p.prototype.select = function(e, n) {
      var r = t('<input type="file" accept="image/*" capture="camera" style="display:none;" />').appendTo("body"),
        i = this;
      return r.on("change", function() {
        i.selectFile(this, e, n)
      }), r.trigger("click"), r
    }, p.prototype.getCanvasData = function(e) {
      if (r) {
        var t = [];
        return r.map(function(e) {
          var n = {};
          for (var r in e) r != "image" && (n[r] = e[r]);
          t.push(n)
        }), t
      }
      return null
    }, p.prototype.getImageData = function(e, t) {
      e || (e = "image/jpeg"), t || (t = 80);
      if (n) {
        var r = null;
        try {
          r = n.toDataURL(e, t)
        } catch (i) {
          window.alert("\u4e0d\u80fd\u4fdd\u5b58\u8de8\u57df\u56fe\u7247")
        }
        return r
      }
      return null
    }, e.montage = new p, e.Montage = p
  }(h5e, window.Zepto || window.jQuery),
  function(e) {
    function n(e) {
      var n = new t(e);
      n.build(this)
    }
    var t = function(e) {
      this.data = e
    };
    t.prototype = {
      build: function(t) {
        var n = this,
          r = e(t).find("select");
        e(r).html("");
        var i = r.size();
        this._resetSelect(r.eq(0)), this._type(this.data) === "Object" ? this._renderSelect01(this.data, r.eq(0), 1) : this._type(this.data) === "Array" && this._renderSelect02(this.data, r.eq(0), null), r.each(function(t, s) {
          if (t + 1 == i) return !1;
          e(s).change(function() {
            for (var o = t + 1; o < i; o++) n._resetSelect(r.eq(o));
            if (e(s).val())
              if (n._type(n.data) === "Object") {
                var u = t + 2 == i ? 2 : 1,
                  a = n.data;
                for (var o = 0; o < t + 1; o++) a = a[r.eq(o).val()];
                n._renderSelect01(a, r.eq(t + 1), u)
              } else n._type(n.data) === "Array" && n._renderSelect02(n.data, r.eq(t + 1), e(s).val())
          })
        })
      },
      _renderSelect01: function(t, n, r) {
        e.each(t, function(e, t) {
          switch (r) {
            case 1:
              n.append("<option value='" + e + "'>" + e + "</option>");
              break;
            case 2:
              n.append("<option value='" + t + "'>" + t + "</option>");
              break;
            default:
          }
        })
      },
      _renderSelect02: function(t, n, r) {
        e.each(t, function(e, t) {
          t.parent_id == r && n.append("<option value='" + t.id + "'>" + t.name + "</option>")
        })
      },
      _resetSelect: function(e) {
        e.empty(), e.append("<option value=''>\u8bf7\u9009\u62e9</option>")
      },
      _type: function(e) {
        return Object.prototype.toString.call(e) === "[object Object]" ? "Object" : Object.prototype.toString.call(e) === "[object Array]" ? "Array" : null
      }
    }, e.fn.linkage = n
  }(window.Zepto || window.jQuery),
  function(e, t) {
    var n = function() {
      this.input_list = [], this.data_obj = {}, this.checkMessage = {
        brand: "\u54c1\u724c\u4e0d\u80fd\u4e3a\u7a7a",
        model: "\u578b\u53f7\u4e0d\u80fd\u4e3a\u7a7a",
        purchase_date: "\u8ba1\u5212\u8d2d\u4e70\u65f6\u95f4\u4e0d\u80fd\u4e3a\u7a7a",
        budget: "\u9884\u7b97\u4e0d\u80fd\u4e3a\u7a7a",
        name: "\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a",
        nick_name: "\u6635\u79f0\u4e0d\u80fd\u4e3a\u7a7a",
        sex: "\u6027\u522b\u4e0d\u80fd\u4e3a\u7a7a",
        age: "\u5e74\u9f84\u4e0d\u80fd\u4e3a\u7a7a",
        birth_year: "\u51fa\u751f\u5e74\u4efd\u4e0d\u80fd\u4e3a\u7a7a",
        birth_month: "\u51fa\u751f\u6708\u4efd\u4e0d\u80fd\u4e3a\u7a7a",
        birth_day: "\u51fa\u751f\u65e5\u4e0d\u80fd\u4e3a\u7a7a",
        email: "email\u4e0d\u80fd\u4e3a\u7a7a",
        mobile: "\u624b\u673a\u53f7\u7801\u4e0d\u80fd\u4e3a\u7a7a",
        tel: "\u7535\u8bdd\u53f7\u7801\u4e0d\u80fd\u4e3a\u7a7a",
        zipcode: "\u90ae\u653f\u7f16\u7801\u4e0d\u80fd\u4e3a\u7a7a",
        address: "\u8857\u9053\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a",
        province: "\u7701\u4efd\u4e0d\u80fd\u4e3a\u7a7a",
        city: "\u57ce\u5e02\u4e0d\u80fd\u4e3a\u7a7a",
        brand_blood: "\u54c1\u724c\u8840\u7edf\u4e0d\u80fd\u4e3a\u7a7a",
        brand_spec: "\u54c1\u724c\u7279\u70b9\u4e0d\u80fd\u4e3a\u7a7a",
        dealer_province: "\u7ecf\u9500\u5546\u6240\u5728\u7701\u4efd\u4e0d\u80fd\u4e3a\u7a7a",
        dealer_city: "\u7ecf\u9500\u5546\u6240\u5728\u57ce\u5e02\u4e0d\u80fd\u4e3a\u7a7a",
        dealer: "\u7ecf\u9500\u5546\u4e0d\u80fd\u4e3a\u7a7a",
        book_time: "\u9884\u7ea6\u8bd5\u4e58\u8bd5\u9a7e\u65f6\u6bb5\u4e0d\u80fd\u4e3a\u7a7a",
        to_follow: "\u8bf7\u9009\u62e9\u662f\u5426\u5173\u6ce8\u5b98\u535a",
        to_agree: "\u8bf7\u9009\u62e9\u662f\u5426\u63a5\u53d7\u5b98\u65b9\u63a8\u9001\u4fe1\u606f",
        value1: "\u5907\u7528\u5b57\u6bb51\u4e0d\u80fd\u4e3a\u7a7a",
        value2: "\u5907\u7528\u5b57\u6bb52\u4e0d\u80fd\u4e3a\u7a7a",
        value3: "\u5907\u7528\u5b57\u6bb53\u4e0d\u80fd\u4e3a\u7a7a",
        mobile_pattern: "\u624b\u673a\u683c\u5f0f\u9519\u8bef"
      }, this.codeMessage = {
        0: "\u63d0\u4ea4\u6210\u529f",
        100: "\u7f3a\u5c11appid",
        104: "\u9a8c\u8bc1\u7801\u8f93\u5165\u4e0d\u6b63\u786e",
        200: "\u54c1\u724c\u4e0d\u80fd\u4e3a\u7a7a",
        201: "\u578b\u53f7\u4e0d\u80fd\u4e3a\u7a7a",
        202: "\u7ecf\u9500\u5546\u4e0d\u80fd\u4e3a\u7a7a",
        203: "\u8ba1\u5212\u8d2d\u4e70\u65f6\u95f4\u4e0d\u80fd\u4e3a\u7a7a",
        204: "\u9884\u7b97\u4e0d\u80fd\u4e3a\u7a7a",
        205: "\u7528\u6237\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a",
        206: "\u7528\u6237\u6027\u522b\u4e0d\u80fd\u4e3a\u7a7a",
        207: "email\u4e0d\u80fd\u4e3a\u7a7a",
        208: "\u624b\u673a\u53f7\u7801\u4e0d\u80fd\u4e3a\u7a7a",
        209: "\u7535\u8bdd\u53f7\u7801\u4e0d\u80fd\u4e3a\u7a7a",
        210: "\u90ae\u653f\u7f16\u7801\u4e0d\u80fd\u4e3a\u7a7a",
        211: "\u8857\u9053\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a",
        212: "\u7701\u4efd\u4e0d\u80fd\u4e3a\u7a7a",
        213: "\u57ce\u5e02\u4e0d\u80fd\u4e3a\u7a7a",
        214: "\u54c1\u724c\u8840\u7edf\u4e0d\u80fd\u4e3a\u7a7a",
        215: "\u54c1\u724c\u7279\u70b9\u4e0d\u80fd\u4e3a\u7a7a",
        216: "\u7ecf\u9500\u5546\u4e0d\u80fd\u4e3a\u7a7a",
        217: "\u7ecf\u9500\u5546\u6240\u5728\u7701\u4efd\u4e0d\u80fd\u4e3a\u7a7a",
        218: "\u7ecf\u9500\u5546\u6240\u5728\u57ce\u5e02\u4e0d\u80fd\u4e3a\u7a7a",
        219: "\u9884\u7ea6\u8bd5\u4e58\u8bd5\u9a7e\u65f6\u6bb5\u4e0d\u80fd\u4e3a\u7a7a",
        220: "\u90ae\u7bb1\u683c\u5f0f\u9519\u8bef",
        221: "\u624b\u673a\u683c\u5f0f\u9519\u8bef",
        222: "\u60a8\u5df2\u63d0\u4ea4\u8fc7\u8d44\u6599",
        223: "\u624b\u673a\u53f7\u7801\u5df2\u5b58\u5728",
        224: "\u90ae\u7bb1\u5df2\u5b58\u5728",
        225: "\u662f\u5426\u5173\u6ce8\u5b98\u535a\u4e0d\u80fd\u4e3a\u7a7a",
        226: "\u662f\u5426\u63a5\u53d7\u5b98\u65b9\u63a8\u9001\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a",
        227: "\u5907\u7528\u5b57\u6bb51\u4e0d\u80fd\u4e3a\u7a7a",
        228: "\u5907\u7528\u5b57\u6bb52\u4e0d\u80fd\u4e3a\u7a7a",
        229: "\u5907\u7528\u5b57\u6bb53\u4e0d\u80fd\u4e3a\u7a7a",
        300: "\u60a8\u7684\u64cd\u4f5c\u8fc7\u4e8e\u9891\u7e41",
        400: "\u7cfb\u7edf\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
        901: "\u60a8\u8fd8\u6ca1\u6709\u767b\u5f55"
      }
    };
    n.prototype = {
      changeCheckMessage: function(e, t) {
        this.checkMessage[e] = t
      },
      changeCodeMessage: function(e, t) {
        this.codeMessage[e] = t
      },
      dataObjInit: function(n) {
        var r = this;
        this.data_obj.app_id = e.config.appid;
        if (n)
          for (var i in n) this.data_obj[i] = n[i];
        else {
          t.each(t(".h5e-register-input"), function() {
            r.input_list.push(t(this).attr("id"))
          });
          for (var i in this.input_list) {
            var s = this.input_list[i];
            this.data_obj[s] = t.trim(t("#" + s).val())
          }
        }
        for (var i in this.data_obj)
          if (!this.data_obj[i]) return this.checkMessage[i];
        if (n) {
          if (!e.util.formcheckByVal(n.mobile, "mobile")) return this.checkMessage.mobile_pattern
        } else if (!e.util.formcheckById("mobile", "mobile")) return this.checkMessage.mobile_pattern;
        return "0"
      },
      submit: function(n, r, i) {
        var s = this;
        if (this.dataObjInit(n) != "0") return i ? i(this.dataObjInit(n)) : e.util.alert(this.dataObjInit(n)), !1;
        t.ajax({
          type: "GET",
          url: e.host("register", "saveInfo"),
          dataType: "jsonp",
          jsonpCallback: "callback",
          data: this.data_obj,
          error: function(t) {
            e.config.debug && alert(JSON.stringify(t)), alert("\u63a5\u53e3\u8bf7\u6c42\u5931\u8d25\uff01")
          },
          success: function(n) {
            e.config.debug && alert(JSON.stringify(n)), n.code ? i ? i(s.codeMessage[n.code]) : e.util.alert(s.codeMessage[n.code]) : n.data.register && n.data.register.code ? i ? i(s.codeMessage[n.data.register.code]) : e.util.alert(s.codeMessage[n.data.register.code]) : r ? r(s.codeMessage[n.data.register.code]) : (e.util.alert(s.codeMessage[0]), t("input").val(""), t("select").first().val(""), t("select").not(t("select").first()).html(""))
          }
        })
      }
    }, e.register = new n
  }(h5e, window.Zepto || window.jQuery),
  function(e, t) {
    var n = null,
      r = {
        title: "\u5206\u4eab\u793a\u4f8b",
        desc: "",
        img: "",
        url: window.location.href
      },
      i = function() {};
    i.prototype.init = function(t) {
      if (typeof t == "undefined" || t == null) t = r;
      n = t;
      var i = e.util.ua();
      switch (!0) {
        case i.MicroMessenger:
          var s = function() {
            var e = {
              title: n.title,
              desc: n.desc,
              img_url: n.img,
              link: n.url
            };
            WeixinJSBridge.on("menu:share:appmessage", function() {
              WeixinJSBridge.invoke("sendAppMessage", e, function(e) {
                e.err_msg == "send_app_msg:confirm" ? typeof n.onSuccess == "function" && n.onSuccess({
                  from: "wx",
                  to: "wx_friend"
                }) : e.err_msg == "send_app_msg:cancel" && typeof n.onCancel == "function" && n.onCancel({
                  from: "wx",
                  to: "wx_friend"
                })
              })
            });
            var t = {
              title: n.timeLineTitle ? n.timeLineTitle : n.title,
              desc: n.desc,
              img_url: n.img,
              link: n.url
            };
            WeixinJSBridge.on("menu:share:timeline", function() {
              WeixinJSBridge.invoke("shareTimeline", t, function(e) {
                e.err_msg == "share_timeline:ok" ? typeof n.onSuccess == "function" && n.onSuccess({
                  from: "wx",
                  to: "wx_timeline"
                }) : e.err_msg == "share_timeline:cancel" && typeof n.onCancel == "function" && n.onCancel({
                  from: "wx",
                  to: "wx_timeline"
                })
              })
            })
          };
          return typeof WeixinJSBridge == "undefined" ? document.addEventListener("WeixinJSBridgeReady", function() {
            s()
          }, !1) : s(), !0;
        case i.QQ:
          var o = function() {
            var e = {
              title: n.title,
              desc: n.desc,
              image_url: n.img,
              share_url: n.url,
              back: !0
            };
            mqq.ui.setOnShareHandler(function(t) {
              e.share_type = t, mqq.ui.shareMessage(e, function(e) {
                var r = "";
                switch (t) {
                  case 2:
                    r = "wx_friend";
                    break;
                  case 3:
                    r = "wx_timeline";
                    break;
                  case 0:
                    r = "qq_friend";
                    break;
                  case 1:
                    r = "qq_qzone"
                }
                e.retCode == 0 ? typeof n.onSuccess == "function" && n.onSuccess({
                  from: "qq",
                  to: r
                }) : e.retCode == 1 && typeof n.onCancel == "function" && n.onCancel({
                  from: "qq",
                  to: r
                })
              })
            })
          };
          return typeof mqq == "undefined" ? e.util.loadScript("http://pub.idqqimg.com/qqmobile/qqapi.js", function() {
            o()
          }) : o(), !0;
        case i.TXADSDK:
        case i.TXVideo:
          var u = function() {
            var e = '{"img_url":"' + n.img + '","title":"' + n.title + '","desc":"","link":"' + n.url + '"}';
            mraid.extend.setShareData(e)
          };
          return typeof mraid == "undefined" ? e.util.loadScript("mraid.js", function() {
            u()
          }) : u(), !0;
        case i.QQNews:
          var a = function() {
            TencentNews.setShareArticleInfo(n.title, n.desc, n.desc, n.url, n.img)
          };
          return typeof TencentNews == "undefined" ? e.util.loadScript("http://mat1.gtimg.com/www/js/newsapp/jsapi/news.js?_tsid=1", function() {
            a()
          }) : a(), !0;
        case i.QQMusic:
          var f = function() {
            var e = {
              appid: "wx5aa333606550dfd5",
              img_width: 173,
              img_height: 173,
              title: n.title,
              desc: n.desc,
              img_url: n.img,
              link: n.url
            };
            WebViewJavascriptBridge.init(), WebViewJavascriptBridge.callHandler("share", e, function(e) {})
          };
          return typeof WebViewJavascriptBridge == "undefined" ? document.addEventListener("WebViewJavascriptBridgeReady", function() {
            f()
          }, !1) : f(), !0;
        case i.Qzone:
          var l = function() {
            window.QZAppExternal.setShare(function(e) {}, {
              type: "share",
              image: [n.img, n.img, n.img, n.img, n.img],
              title: [n.title, n.title, n.title, n.title, n.title],
              summary: [n.desc, n.desc, n.desc, n.desc, n.desc],
              shareURL: [n.url, n.url, n.url, n.url, n.url]
            })
          };
          return typeof window.QZAppExternal == "undefined" ? e.util.loadScript("http://qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js", function() {
            l()
          }) : l(), !0;
        default:
          return !1
      }
    }, i.prototype.showPanel = function(t) {
      if (typeof t == "undefined" || t == null) t = n;
      if (typeof t == "undefined" || t == null) t = r;
      var i = e.util.ua();
      switch (!0) {
        case i.MicroMessenger:
          return !1;
        case i.QQ:
          var s = function() {
            mqq.ui.showShareMenu()
          };
          return typeof mqq == "undefined" ? e.util.loadScript("http://pub.idqqimg.com/qqmobile/qqapi.js", function() {
            s()
          }) : s(), !0;
        case i.TXADSDK:
        case i.TXVideo:
          window.txVideoShareCallback = function(e) {};
          var o = function() {
            if (typeof t == "undefined" || t == null) return;
            i.ios ? mraid.extend.showSharePanel(t.title, t.desc, t.url, t.img, "txVideoShareCallback") : mraid.showSharePanel(t.title, t.desc, t.url, t.img, "txVideoShareCallback")
          };
          return typeof mraid == "undefined" ? e.util.loadScript("mraid.js", function() {
            o()
          }) : o(), !0;
        case i.QQNews:
          var u = function() {
            if (typeof t == "undefined" || t == null) return;
            TencentNews && TencentNews.showShareMenu ? TencentNews.showShareMenu(t.url, t.title, t.desc, t.img, "qqNewsShareCallback") : TencentNews.shareFromWebView(t.title, t.desc, t.img)
          };
          return typeof TencentNews == "undefined" ? e.util.loadScript("http://mat1.gtimg.com/www/js/newsapp/jsapi/news.js?_tsid=1", function() {
            u()
          }) : u(), !0;
        case i.QQMusic:
          var a = function() {
            if (typeof t == "undefined" || t == null) return;
            var e = {
              appid: "wx5aa333606550dfd5",
              img_width: 173,
              img_height: 173,
              title: t.title,
              desc: t.desc,
              img_url: t.img,
              link: t.url
            };
            WebViewJavascriptBridge.init(), WebViewJavascriptBridge.callHandler("callshare", e, function(e) {})
          };
          return typeof WebViewJavascriptBridge == "undefined" ? document.addEventListener("WebViewJavascriptBridgeReady", function() {
            a()
          }, !1) : a(), !0;
        case i.Qzone:
          var f = function() {
            mqq.invoke("ui", "showShareMenu", {}, function() {})
          };
          return typeof mqq == "undefined" ? e.util.loadScript("http://open.mobile.qq.com/sdk/qqapi.js?_bid=152", function() {
            f()
          }) : f(), !0;
        default:
          return !1
      }
    }, i.prototype.to = function(t, i) {
      if (typeof t == "undefined" || t == null) return;
      if (typeof i == "undefined" || i == null) i = n;
      if (typeof i == "undefined" || i == null) i = r;
      var s = e.util.ua();
      switch (!0) {
        case s.MicroMessenger:
          return !1;
        case s.QQ:
          var o = function() {
            if (typeof i == "undefined" || i == null) return;
            var e = {
                title: i.title,
                desc: i.desc,
                image_url: i.img,
                share_url: i.url
              },
              n = function(e) {
                e.retCode == 0 ? typeof i.onSuccess == "function" && i.onSuccess({
                  from: "qq",
                  to: t
                }) : e.retCode == 1 && typeof i.onCancel == "function" && i.onCancel({
                  from: "qq",
                  to: t
                })
              };
            switch (t) {
              case "wx_friend":
                e.share_type = 2, mqq.ui.shareMessage(e, n);
                break;
              case "wx_timeline":
                e.share_type = 3, mqq.ui.shareMessage(e, n);
                break;
              case "qq_friend":
                e.share_type = 0, mqq.ui.shareMessage(e, n);
                break;
              case "qq_qzone":
                e.share_type = 1, mqq.ui.shareMessage(e, n)
            }
          };
          return typeof mqq == "undefined" ? e.util.loadScript("http://pub.idqqimg.com/qqmobile/qqapi.js", function() {
            o()
          }) : o(), !0;
        case s.TXADSDK:
        case s.TXVideo:
          window.toTxVideoShareCallback = function(e) {};
          var u = function() {
            if (typeof i == "undefined" || i == null) return;
            switch (t) {
              case "wx_friend":
                mraid.extend.shareToWXFriend(i.title, i.desc, i.url, i.img, "toTxVideoShareCallback");
                break;
              case "wx_timeline":
                mraid.extend.shareToWXTimeLine(i.title, i.desc, i.url, i.img, "toTxVideoShareCallback")
            }
          };
          return typeof mraid == "undefined" ? e.util.loadScript("mraid.js", function() {
            u()
          }) : u(), !0;
        case s.QQNews:
          return !1;
        case s.QQMusic:
          return !1;
        default:
          return !1
      }
    }, i.prototype.pop = function(n, r) {
      if (typeof n == "undefined" || n == null) return;
      if (typeof r == "undefined" || r == null) return;
      var i = "",
        s = e.util.ua();
      s.isMobile || (i = "height=560,width=760,top=100,left=100");
      switch (n) {
        case "qzone":
          var o = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=" + encodeURIComponent(r.title) + "&url=" + encodeURIComponent(r.url) + "&pics=" + encodeURIComponent(r.img) + "&desc=" + encodeURIComponent(r.desc);
          return window.open(o, "newqzonewindow", i), !1;
        case "qqweibo":
          var u = "http://v.t.qq.com/share/share.php?title=" + encodeURIComponent(r.desc) + "&url=" + encodeURIComponent(r.url) + "&pic=" + encodeURIComponent(r.img);
          return window.open(u, "newqqweibowindow", i), !1;
        case "qqfriend":
          var a = "http://connect.qq.com/widget/shareqq/index.html?url=" + encodeURIComponent(r.url) + "&desc=&title=" + encodeURIComponent(r.title) + "&summary=" + encodeURIComponent(r.desc) + "&pics=" + encodeURIComponent(r.img) + "&flash=&site=&style=101";
          return window.open(a, "newqqfriendwindow", i), !1;
        case "renren":
          var f = "http://share.renren.com/share/buttonshare?link=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.desc);
          return window.open(f, "newrenrenwindow", i), !1;
        case "douban":
          var l = "http://www.douban.com/recommend/?url=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.desc);
          return window.open(l, "newdoubanwindow", i), !1;
        case "kaixin":
          var c = "http://www.kaixin001.com/repaste/share.php?rurl=" + encodeURIComponent(r.url) + "&rtitle=" + encodeURIComponent(r.desc);
          return window.open(c, "newkaixinwindow", i), !1;
        case "sina":
          var h = "http://v.t.sina.com.cn/share/share.php?url=" + encodeURIComponent(r.url) + "&title=" + encodeURIComponent(r.title) + "&content=utf-8&sourceUrl=" + encodeURIComponent(r.url) + "&pic=" + encodeURIComponent(r.img);
          return window.open(h, "newsinawindow", i), !1;
        case "weixin":
          var p = "http://labs.api.act.qq.com/631007063/qrcode/get_image/";
          return p = p + "?format=png&size=4&msg=" + encodeURIComponent(r.url), t("body").append('<div class="h5e-share-pop-bg"><div class="h5e-share-pop"><div class="h5e-share-pop-title">\u626b\u4e00\u626b\uff0c\u53ef\u4ee5\u5206\u4eab\u5fae\u4fe1\u597d\u53cb\u548c\u670b\u53cb\u5708</div><div class="h5e-share-pop-img"><img src="' + p + '" /></div>' + '<button type="button" class="h5e-share-pop-confirm">\u5173\u95ed</button>' + "</div>" + "</div>" + "</div>"), t(".h5e-share-pop-confirm").click(function() {
            t(".h5e-share-pop-bg").remove()
          }), !1;
        default:
          return !1
      }
    }, e.share = new i
  }(h5e, window.Zepto || window.jQuery),
  function(e, t) {
    var n = function() {
      e.config && e.config.tamsid && (e.util.loadScript("http://adsrich.qq.com/web/hd/page_duration.js", null, null, {
        id: "ad_statistic_kit",
        arguments: JSON.stringify({
          cpid: e.config.tamsid
        })
      }), e.util.loadScript("http://appmedia.qq.com/media/tams_new/page_duration.js", null, null, {
        id: "ad_statistic_kit_new",
        arguments: JSON.stringify({
          cpid: e.config.tamsid
        })
      }))
    };
    n.prototype = {
      clickMonitor: function(t) {
        if (e.config && e.config.tamsid) {
          var n = "http://t.l.qq.com/ping?t=m&cpid=" + e.config.tamsid + "&url=http%3A//app_minisite_click_monitor/button" + e.config.tamsid + t + "&ref";
          e.util.loadScript(n, null, null, null, !0)
        }
      }
    }, e.track = new n
  }(h5e, window.Zepto || window.jQuery),
  function(e, t) {
    var n = function() {};
    n.prototype = {
      init: function(n) {
        n.type == n.type || 2, n = t.extend({
          autoplay: !0,
          isHtml5ShowLoadingAdOnStart: !1,
          isHtml5ShowLoadingAdOnChange: !1
        }, n);
        var r = e.util.ua();
        r.isMobile && (n.playerType = "html5");
        switch (n.type) {
          case "1":
            return this._setLiveVideo(n);
          case "2":
            return this._setDemandVideo(n);
          default:
            return null
        }
      },
      _setDemandVideo: function(e) {
        var t = new tvp.VideoInfo,
          n = new tvp.Player;
        return t.setVid(e.vid), e.video = t, delete e.vid, n.create(e), n
      },
      _setLiveVideo: function(e) {
        var t = new tvp.VideoInfo,
          n = new tvp.Player;
        return t.setChannelId(e.vid), e.video = t, e.chid = e.vid, delete e.vid, n.create(e), n
      }
    }, e.video = new n
  }(h5e, window.Zepto || window.jQuery),
  function(e, t) {
    var n = function() {
      this.options = {
        actId: "",
        classId: "",
        time: 0
      }
    };
    n.prototype.init = function(n) {
      var r = this;
      n = t.extend({}, this.options, n);
      var i = function() {
        n.time > 2e3 && (r.sync = window.setTimeout(function() {
          i()
        }, n.time)), t.ajax({
          type: "GET",
          url: e.host("countdown", "get"),
          data: {
            actId: n.actId,
            classId: n.classId,
            format: "jsonp"
          },
          dataType: "jsonp",
          json: "callback",
          success: function(e) {
            e.code == 0 && n.callback && n.callback(e.data)
          },
          error: function() {
            n.error()
          }
        })
      };
      i()
    }, e.countdown = new n
  }(h5e, window.Zepto || window.jQuery),
  function(e, t) {
    var n = function() {
      this.options = {
        actId: "",
        classId: "",
        likeId: "",
        time: 0
      }
    };
    n.prototype.init = function(n) {
      var r = this;
      n = t.extend({}, this.options, n);
      var i = function() {
        n.time > 2e3 && (r.sync = window.setTimeout(function() {
          i()
        }, n.time)), t.ajax({
          type: "GET",
          url: e.host("like", "get"),
          data: {
            actId: n.actId,
            classId: n.classId,
            likeId: n.likeId,
            format: "jsonp"
          },
          dataType: "jsonp",
          json: "callback",
          success: function(e) {
            e.code == 0 && n.callback && n.callback(e.data)
          },
          error: function() {
            n.error()
          }
        })
      };
      i()
    }, n.prototype.saveLike = function(n) {
      var r = this;
      n = t.extend({}, this.options, n);
      var i = function() {
        t.ajax({
          type: "GET",
          url: e.host("like", "save"),
          data: {
            actId: n.actId,
            classId: n.classId,
            likeId: n.likeId,
            format: "jsonp"
          },
          dataType: "jsonp",
          json: "callback",
          success: function(e) {
            n.callback(e)
          },
          error: function() {
            n.error()
          }
        })
      };
      i()
    }, e.like = new n
  }(h5e, window.Zepto || window.jQuery),
  function(e, t) {
    var n = function() {
      this.options = {
        actId: "",
        classId: "",
        workId: "",
        type: "",
        openId: "",
        key: "",
        time: 0
      }
    };
    n.prototype.init = function(n) {
      var r = this;
      n = t.extend({}, this.options, n);
      var i = function() {
        n.time > 2e3 && (r.sync = window.setTimeout(function() {
          i()
        }, n.time)), t.ajax({
          type: "GET",
          url: e.host("vote", "get"),
          data: {
            actId: n.actId,
            classId: n.classId,
            workId: n.workId,
            format: "jsonp"
          },
          dataType: "jsonp",
          json: "callback",
          success: function(e) {
            e.code == 0 && n.callback && n.callback(e.data)
          },
          error: function() {
            n.error()
          }
        })
      };
      i()
    }, n.prototype.saveVote = function(n) {
      var r = this;
      n = t.extend({}, this.options, n);
      var i = function() {
        t.ajax({
          type: "GET",
          url: e.host("vote", "save"),
          data: {
            actId: n.actId,
            classId: n.classId,
            workId: n.workId,
            type: n.type,
            openId: n.openId,
            key: n.key,
            format: "jsonp"
          },
          dataType: "jsonp",
          json: "callback",
          success: function(e) {
            n.callback && n.callback(e)
          },
          error: function() {
            n.error()
          }
        })
      };
      i()
    }, e.vote = new n
  }(h5e, window.Zepto || window.jQuery),
  function(e, t) {
    var n = function() {
      this.options = {
        url: "",
        size: 6
      }
    };
    n.prototype.init = function(e) {
      var n = this;
      e = t.extend({}, this.options, e);
      var r = "http://labs.api.act.qq.com/631007063/qrcode/get_image/";
      return r + "?format=png&size=" + e.size + "&msg=" + encodeURIComponent(e.url)
    }, e.qrcode = new n
  }(h5e, window.Zepto || window.jQuery),
  function(e, t) {
    var n = function() {
      this.options = {
        actId: "",
        classId: ""
      }
    };
    n.prototype.init = function(n) {
      var r = this;
      n = t.extend({}, this.options, n);
      var i = function() {
        t.ajax({
          type: "GET",
          url: e.host("switchstatus", "get"),
          data: {
            actId: n.actId,
            classId: n.classId,
            format: "jsonp"
          },
          dataType: "jsonp",
          json: "callback",
          success: function(e) {
            e.code == 0 && n.callback && n.callback(e.data)
          },
          error: function() {
            n.error()
          }
        })
      };
      i()
    }, e.switchstatus = new n
  }(h5e, window.Zepto || window.jQuery),
  function(e, t) {
    var n = function() {
      this.options = {
        actId: "",
        authWay: "",
        returnType: "",
        re_url: ""
      }
    };
    n.prototype.init = function(n) {
      var r = this;
      n = t.extend({}, this.options, n);
      if (n.authWay != "snsapi_base" && n.authWay != "snsapi_userinfo") {
        e.util.alert("\u8bf7\u8bbe\u7f6esnsapi_base\u6216snsapi_userinfo\u6388\u6743\u65b9\u5f0f");
        return
      }
      if (n.returnType != "code" && n.returnType != "openid" && n.returnType != "userinfo") {
        e.util.alert("\u8bf7\u8bbe\u7f6ecode\u6216openid\u6216userinfo\u8fd4\u56de\u4fe1\u606f");
        return
      }
      document.location = e.host("wxauth", "get") + "?actId=" + n.actId + "&authWay=" + n.authWay + "&returnType=" + n.returnType + "&re_url=" + encodeURIComponent(n.re_url)
    }, e.wxauth = new n
  }(h5e, window.Zepto || window.jQuery),
  function(e, t) {
    var n = function() {
      this.options = {
        actId: "",
        classId: ""
      }
    };
    n.prototype.init = function(n) {
      var r = this;
      n = t.extend({}, this.options, n);
      var i = function() {
          t.ajax({
            type: "GET",
            url: e.host("wxcard", "get"),
            data: {
              actId: n.actId,
              classId: n.classId,
              format: "jsonp"
            },
            dataType: "jsonp",
            json: "callback",
            success: function(e) {
              if (e.code != 0) return alert(e.message), !1;
              var t = e.sign,
                r = [];
              for (var i = 0, s = t.length; i < s; i++) {
                var o = {
                  card_id: e.cardId[i],
                  card_ext: '{"code": "' + e.cardCode + '","openid":"' + e.openid + '","timestamp":"' + e.timestamp + '","signature":"' + e.sign[i] + '"}'
                };
                r[i] = o
              }
              WeixinJSBridge.invoke("batchAddCard", {
                card_list: r
              }, function(e) {
                n.callback(e)
              })
            },
            error: function() {
              n.error()
            }
          })
        },
        s = e.util.ua();
      if (!s.MicroMessenger) {
        e.util.alert("\u8bf7\u5728\u5fae\u4fe1\u5185\u9886\u53d6");
        return
      }
      typeof WeixinJSBridge == "undefined" ? document.addEventListener("WeixinJSBridgeReady", i, !1) : setTimeout(function() {
        i()
      }, "500")
    }, e.wxcard = new n
  }(h5e, window.Zepto || window.jQuery);
