function getUploadImgUri() {
  if (!Act.ptlogin.isLogin()) return Act.ptlogin.login();
  var e;
  return $.ajax({
    url: ACT.buildUrl("fileupload/fileupload/ticket"),
    cache: !1,
    async: !1,
    dataType: "json",
    success: function(t) {
      e = t
    }
  }), e.data && e.data.ticket ? "http://upload.act.qq.com/cgi-bin/up_pic_sec?uin=" + Act.ptlogin.getQQNum() + "&actId=" + ACT.ID + "&ticket=" + e.data.ticket : alert("\u6e29\u99a8\u63d0\u793a\uff1a\u83b7\u53d6\u4e0a\u4f20\u56fe\u7247\u7968\u636e\u5931\u8d25\uff01")
}

function openShare() {
  ACT.track("13");
  var e = h5e.util.ua();
  e.MicroMessenger ? ($("#mod_player").empty(), Dialog.showDiv("share"), $("#share").click(function() {
    $("body").empty(), window.location = "index.html"
  })) : h5e.share.showPanel(data1)
}
var ACT = ACT || {};
ACT.ID = "641012383", ACT.isLLogin = !1, ACT.showToolbar = parent == self ? !1 : !1, document.write('<script type="text/javascript" src="http://appmedia.qq.com/media/jslib/1.5/bootstrap.js" id="jslibNode" arg="{\'cpid\':' + ACT.ID + ",'appid':4007203}\" cfg=\"{'toolbar':" + (ACT.showToolbar ? "true" : "false") + ",'track':true,'board':true" + (ACT.isLLogin ? ",'isLLogin':true" : "") + '}"></scr' + "ipt>"), ACT.HOST = window.location.host, ACT.BASE = "http://" + ACT.HOST + "/", ACT.load = function(e, t) {
  window.location.pathname == "/" && e == "index.html" && (e = ""), $(document).ready(function() {
    ("/" + e === window.location.pathname || "*" === e) && t()
  })
}, ACT.buildUrl = function(e) {
  return ACT.BASE + e + "?g_tk=" + Act.util.getACSRFToken()
}, ACT.getJoins = function() {
  $.ajax({
    url: ACT.buildUrl("ajax/getJoins"),
    cache: !1,
    success: function(e) {
      $(".ACT_joins").html(e)
    }
  })
}, ACT.check = function(e) {
  if (!!ACT.loginNoFlush(e)) {
    if (!ACT.TIMES) return $.ajax({
      url: ACT.buildUrl("ajax/checkIn_"),
      cache: !1,
      async: !1,
      dataType: "json",
      success: function(e) {
        ACT.TIMES = e
      }
    }), ACT.TIMES.code == 0 ? !0 : (alert(ACT.TIMES.msg), !1);
    if (!(ACT.TIMES.code < 0)) return !0;
    alert(ACT.TIMES.msg)
  }
  return !1
}, ACT.loginNoFlush = function(e) {
  return Act.ptlogin.isLogin() ? !0 : (Act.ptlogin.login(e && typeof e == "function" ? function() {
    e(), ACT.initToolbarLogin()
  } : e), !1)
}, ACT.doJoin = function() {
  if (Act.ptlogin.isLogin()) {
    var e = Act.ptlogin.getQQNum(),
      t = Act.util.cookie("j" + ACT.ID + "_" + e);
    t || $.ajax({
      url: ACT.buildUrl("ajax/doJoin_"),
      cache: !1,
      success: function(e) {
        if (e < 0) return;
        var t = Act.ptlogin.getQQNum();
        Act.util.cookie("j" + ACT.ID + "_" + t, "1")
      }
    })
  }
}, ACT.goReg = function() {
  if (!ACT.loginNoFlush(ACT.goReg)) return;
  ACT.showToolbar ? $app.toolbar.register() : ("undefined" == typeof window.$app && (window.$app = {}), seajs.use("http://toolbar.tae.qq.com/2.4/jslib1.5/userRegister.js", function() {
    $app.userRegister.show(), ACT.center($("#toolbar_dialog_container"))
  })), ACT.isWap() && seajs.use(ACT.BASE + "js/resource/reg.css")
}, ACT.shareQzone = function(e) {
  var t = {
      url: e.url || ACT.BASE,
      desc: e.desc || e.title,
      summary: e.summary || e.desc,
      title: e.title,
      site: e.site || e.title,
      pics: e.pic || ""
    },
    n = [];
  for (var r in t) n.push(r + "=" + encodeURIComponent(t[r] || ""));
  var i = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + n.join("&");
  window.open(i)
}, ACT.center = function(e) {
  var t, n, r, i;
  hh = e.css("height"), r = window.parent ? $(window.parent).height() : $(window).height(), i = window.parent ? $(window.parent).scrollTop() : $(window).scrollTop(), n = parseInt(hh) / 2, t = parseInt(r / 2) - n + parseInt(i), e.css({
    top: t,
    "margin-top": "0px",
    position: "absolute"
  })
}, ACT.fixTimeout = null, ACT.mask = function() {
  Act.dialog.loading("\u6b63\u5728\u52a0\u8f7d\uff0c\u8bf7\u7a0d\u540e..", 99999999, {
    zIndex: 20
  }), ACT.fixTimeout && clearInterval(ACT.fixTimeout), ACT.center($("#jslib_loading")), ACT.fixTimeout = setInterval(function() {
    var e = $("#jslib_loading");
    if (e.length == 1) return ACT.center(e), e.css("opacity", 0), clearInterval(ACT.fixTimeout)
  }, 100)
}, ACT.protectedFriends = function(e, t) {
  if (!Act.ptlogin.isLogin()) return Act.ptlogin.login(function() {
    ACT.protectedFriends(e, t)
  });
  ACT.mask(), seajs.use(["http://acts.qq.com/gallop/res/dialog.css", "http://acts.qq.com/gallop/src/template.js", "http://acts.qq.com/gallop/src/dialog.js", "http://acts.qq.com/module/weibo/js/fxDialog.js"], function() {
    fxIframeDialog("http://acts.qq.com/relation/" + e + "/" + t, 571, 516), parent != self && ACT.center($(".dialog")), $(".dialog-btn-close").live("click", function() {
      Act.dialog.close()
    })
  })
}, ACT.qzoneFriends = function(e) {
  return
}, ACT.weiboFriends = function(e) {
  ACT.protectedFriends("weiboFriends", e)
}, ACT.isWap = function() {
  var e = navigator.userAgent.toLowerCase(),
    t = e.match(/ipad/i) == "ipad",
    n = e.match(/iphone os/i) == "iphone os",
    r = e.match(/midp/i) == "midp",
    i = e.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
    s = e.match(/ucweb/i) == "ucweb",
    o = e.match(/android/i) == "android",
    u = e.match(/windows ce/i) == "windows ce",
    a = e.match(/windows mobile/i) == "windows mobile";
  return n || r || i || s || o || u || a || t ? !0 : !1
}, ACT.verifycode = function(e, t) {
  Act.ptlogin.vcodeShow(e, t), ACT.isWap() && seajs.use(ACT.BASE + "js/resource/verifycode.css"), parent != self && (ACT.fixTimeout && clearInterval(ACT.fixTimeout), ACT.center($("#popup_container")), ACT.fixTimeout = setInterval(function() {
    ACT.center($("#popup_container"))
  }, 100), $("#verifycode_close,.vc_btn").live("click", function() {
    ACT.fixTimeout && clearInterval(ACT.fixTimeout)
  }))
}, ACT.initToolbarLogin = function() {
  if (!ACT.showToolbar) return;
  $("#divToolbarContainer").remove(), setTimeout("seajs.use('util/toolbar',function(t){ t.init('2.4'); });", 500)
}, ACT.qzoneAlbum = function(e) {
  if (!Act.ptlogin.isLogin()) return Act.ptlogin.login(function() {
    ACT.qzoneAlbum(e)
  });
  ACT.mask(), seajs.use("http://qzonestyle.gtimg.cn/ac/qzfl/release/qzfl_for_qzone.js", function() {
    seajs.use([ACT.BASE + "js/resource/photo_logic.js", ACT.BASE + "js/resource/qzoneAlbum.css", ACT.BASE + "js/resource/album.js"], function() {
      QQAlbum(e)
    })
  })
}, ACT.track = function(e) {
  var t = "http://t.l.qq.com/ping?t=m&cpid=" + ACT.ID + "&url=http%3A//app_minisite_click_monitor/button" + ACT.ID + e + "&ref",
    n = new Image;
  n.src = t
}, ACT.wapWeiboFriends = function(e) {
  if (!Act.ptlogin.isLogin()) return Act.ptlogin.login(function() {
    ACT.wapWeiboFriends(e)
  });
  seajs.use([ACT.BASE + "js/resource/wapWeiboFriends.js", ACT.BASE + "js/resource/weiboFriends.css"], function(t) {
    t.show(e)
  })
}, ACT.imgPreview = function(e, t) {
  function u(e, t) {
    var e = e.files[0],
      n = new FileReader;
    n.readAsDataURL(e), n.onload = function(e) {
      t.src = this.result
    }
  }
  var n = e.getAttribute("id") + "_show";
  n = document.getElementById(n);
  var r = e.value.substring(e.value.lastIndexOf(".") + 1).toLowerCase();
  if (r != "png" && r != "jpg" && r != "jpeg" && r != "gif") return alert("\u53ea\u80fd\u4e0a\u4f20png,jpg,jpeg,gif\u683c\u5f0f\u7684\u56fe\u7247\uff01");
  if (document.all) try {
    e.select();
    var i = document.selection.createRange().text,
      s = /msie 6/i.test(navigator.userAgent);
    s ? n.src = i : (n.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src=\"" + i + '")', n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")
  } catch (o) {
    n.src = t || ACT.BASE + "js/resource/head.gif"
  } else u(e, n);
  n.style.display = "inline-block"
}, ACT.fixImg = function(e) {
  this.o = $(e);
  var t = this.o.attr("src");
  this.img = new Image, this.img.src = t;
  var n = this;
  this.fix = function(e) {
    var t = e.o,
      n = t.parent(),
      r = n.height(),
      i = n.width(),
      s = e.img.height,
      o = e.img.width;
    if (!s || !o) return setTimeout(function() {
      new ACT.fixImg(t)
    }, 100);
    if (s / o > r / i) t.width(i), t.height(i / o * s), t.css({
      "margin-left": 0
    });
    else {
      t.height(r), t.width(r / s * o);
      var u = (r / s * o - i) / 2;
      t.css({
        "margin-left": -u
      })
    }
  }, this.img.complete ? this.fix(n) : this.img.onload = function() {
    n.fix(n)
  }
}, ACT.isWeixin = function() {
  var e = navigator.userAgent.toLowerCase();
  return e.indexOf("micromessenger") > -1 ? !0 : !1
}, ACT.load("*", function() {
  var e = h5e.util.ua();
  e.QQNews ? (window.open("mqqapi://forward/url?url_prefix=" + btoa(window.location.href) + "&version=1&src_type=web"), window.location.href = "mqqapi://forward/url?url_prefix=" + btoa(window.location.href) + "&version=1&src_type=web") : e.MicroMessenger && ACT.login(function() {});
  var t = {
    title: "\u96f6\u611f\u65f6\u523b \u81f3\u8584\u9690\u5f62",
    desc: "\u96f6\u611f\u65f6\u523b \u81f3\u8584\u9690\u5f62",
    timeLineTitle: "\u96f6\u611f\u65f6\u523b \u81f3\u8584\u9690\u5f62",
    img: "http://" + window.location.host + "/images/share.png",
    url: "http://" + window.location.host,
    onSuccess: function(e) {
      ACT.track("1")
    },
    onCancel: function(e) {}
  };
  window.h5e && h5e.share.init(t)
}), ACT.setShareContent = function(e) {
  var t = {
    title: "\u96f6\u611f\u65f6\u523b \u81f3\u8584\u9690\u5f62",
    desc: "\u6211\u521a\u6253\u8d25\u4e86\u5168\u56fd" + percent(e) + "%\u7684\u7f51\u53cb\uff0c\u4e0d\u670d\u6765\u6218\u3002",
    timeLineTitle: "\u6211\u521a\u6253\u8d25\u4e86\u5168\u56fd" + percent(e) + "%\u7684\u7f51\u53cb\uff0c\u4e0d\u670d\u6765\u6218\u3002",
    img: "http://" + window.location.host + "/images/share.png",
    url: "http://" + window.location.host,
    onSuccess: function(e) {
      ACT.track("1")
    },
    onCancel: function(e) {}
  };
  console.log(t), window.h5e && h5e.share.init(t)
}, ACT.login = function(e) {
  var t = h5e.util.ua(),
    n = t.MicroMessenger ? h5e.util.getQueryString("openid") : "",
    r = t.MicroMessenger ? h5e.util.getQueryString("key") : "";
  if (r && n && n.length > 20) return Act.util.cookie("wopenid", n), Act.util.cookie("wkey", r), e(n, r);
  if (Act.util.cookie("wopenid") && Act.util.cookie("wkey")) return n = Act.util.cookie("wopenid"), r = Act.util.cookie("wkey"), e(n, r);
  if (t.MicroMessenger) h5e.wxauth.init({
    actId: ACT.ID,
    authWay: "snsapi_base",
    returnType: "openid",
    re_url: h5e.util.urlDelArg(document.location.href)
  });
  else {
    if (Act.ptlogin.isLogin()) return e("qq");
    h5e.login.getInfo(function(t) {
      if (t.isLogin) return Act.util.isQQ(t.account) ? e("qq") : e(t.account, "AT_" + Act.util.cookie("access_token"));
      h5e.login.login()
    })
  }
};
var sending = !1;
ACT.save = function() {
  var e = $.trim($(".username").val()),
    t = $.trim($(".phone").val()),
    n = $.trim($(".add").val());
  if (!e) return alert("\u8bf7\u586b\u5165\u60a8\u7684\u59d3\u540d\uff01");
  if (!Act.util.isMobile(t)) return alert("\u8bf7\u586b\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801\uff01");
  if (!n) return alert("\u8bf7\u586b\u5165\u60a8\u7684\u6536\u8d27\u5730\u5740\uff01");
  if (sending) return;
  sending = !0, ACT.login(function(r, i) {
    var s = r == "qq" ? ACT.buildUrl("post/save_") : ACT.buildUrl("weixin/reg_");
    $.ajax({
      url: s,
      type: "post",
      data: {
        name: e,
        tel: t,
        add: n,
        type: r,
        key: i
      },
      dataType: "json",
      success: function(e) {
        sending = !1, alert(e.msg ? e.msg : "\u7cfb\u7edf\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01"), e.code == 0 && ($(".lotteryBox2").hide(), $(".lotteryBox3").hide(), $(".lotteryBox4").hide())
      }
    })
  })
}, ACT.getScore = function(e) {
  ACT.login(function(t, n) {
    var r = t == "qq" ? ACT.buildUrl("post/addScore_") : ACT.buildUrl("weixin/addScore_");
    if (ACT.sending) return;
    ACT.sending = !0, $.ajax({
      url: r,
      type: "post",
      data: {
        type: t,
        key: n
      },
      dataType: "json",
      success: function(t) {
        ACT.sending = !1, e()
      }
    })
  })
}, ACT.lottery = function(e) {
  ACT.login(function(t, n) {
    var r = t == "qq" ? ACT.buildUrl("lottery/lottery/draw") : ACT.buildUrl("weixin/lottery_");
    if (ACT.sending) return;
    ACT.sending = !0, $.ajax({
      url: r,
      type: "post",
      data: {
        type: t,
        key: n
      },
      dataType: "json",
      success: function(t) {
        ACT.sending = !1;
        if (t.code != 0) return alert(t.msg);
        var n = {
          1201: "1",
          1202: "2",
          20001: "3"
        };
        !t || !t.item || !n[t.item] ? e(0) : e(t.item)
      }
    })
  })
};
