!(function (t, e, n, o) {
  "use strict";
  if (((t.console = t.console || { info: function (t) {} }), !n)) return;
  if (n.fn.fancybox) return void console.info("fancyBox already initialized");
  var i = {
      closeExisting: !1,
      loop: !1,
      gutter: 50,
      keyboard: !0,
      preventCaptionOverlap: !0,
      arrows: !0,
      infobar: !0,
      smallBtn: "auto",
      toolbar: "auto",
      buttons: ["zoom", "slideShow", "thumbs", "close"],
      idleTime: 3,
      protect: !1,
      modal: !1,
      image: { preload: !1 },
      ajax: { settings: { data: { fancybox: !0 } } },
      iframe: {
        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
        preload: !0,
        css: {},
        attr: { scrolling: "auto" },
      },
      video: {
        tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />{{posterText}}</video>',
        format: "",
        autoStart: !0,
      },
      defaultType: "image",
      animationEffect: "zoom",
      animationDuration: 366,
      zoomOpacity: "auto",
      transitionEffect: "fade",
      transitionDuration: 366,
      slideClass: "",
      baseClass: "",
      baseTpl:
        '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
      spinnerTpl: '<div class="fancybox-loading"></div>',
      errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
      btnTpl: {
        download:
          '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
        zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
        close:
          '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
        thumbs:
          '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 40 40"><path d="M30,30 L10,30 L10,10 L30,10 Z M20,20 L20,20 M14,26 L26,26 L26,14 L14,14 Z" /></svg></button>',
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,28 Z" /></svg></button>',
        fullScreen:
          '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 L19,12 L19,22 M22,12 L32,12 L32,22 M9,18 L9,8 L19,8 M32,18 L32,8 L22,8" /></svg></button>',
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,8 L35,16 L23,24 L23,19 C19,19 9,20 6,30 Z" /></svg></button>',
        smallBtn:
          '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"/></svg></button>',
        arrowLeft:
          '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></div></button>',
        arrowRight:
          '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></div></button>',
      },
      parentEl: "body",
      hideScrollbar: !0,
      touch: { vertical: !0, momentum: !0 },
      loop: !1,
      selector: "",
      backFocus: !0,
      trapFocus: !0,
      fullScreen: { autoStart: !1 },
      thumbs: {
        autoStart: !1,
        hideOnClose: !0,
        parentEl: ".fancybox-container",
        axis: "y",
      },
      wheel: "auto",
      onInit: n.noop,
      beforeLoad: n.noop,
      afterLoad: n.noop,
      beforeShow: n.noop,
      afterShow: n.noop,
      beforeClose: n.noop,
      afterClose: n.noop,
      onActivate: n.noop,
      onDeactivate: n.noop,
      clickContent: function (t, e) {
        return "image" === t.type && "zoom";
      },
      clickSlide: "close",
      clickOutside: "close",
      dblclickContent: !1,
      dblclickSlide: !1,
      dblclickOutside: !1,
      mobile: {
        idleTime: !1,
        margin: 0,
        clickContent: function (t, e) {
          return "image" === t.type && "toggleControls";
        },
        clickSlide: function (t, e) {
          return "image" === t.type ? "toggleControls" : "close";
        },
        dblclickContent: function (t, e) {
          return "image" === t.type && "zoom";
        },
        dblclickSlide: function (t, e) {
          return "image" === t.type && "zoom";
        },
      },
      lang: "en",
      i18n: {
        en: {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          ERROR:
            "The requested content cannot be loaded. <br/> Please try again later.",
          PLAY_START: "Start slideshow",
          PLAY_STOP: "Pause slideshow",
          FULL_SCREEN: "Full screen",
          THUMBS: "Thumbnails",
          DOWNLOAD: "Download",
          SHARE: "Share",
          ZOOM: "Zoom",
        },
        de: {
          CLOSE: "Schliessen",
          NEXT: "Weiter",
          PREV: "Zurück",
          ERROR:
            "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
          PLAY_START: "Diaschau starten",
          PLAY_STOP: "Diaschau beenden",
          FULL_SCREEN: "Vollbild",
          THUMBS: "Vorschaubilder",
          DOWNLOAD: "Herunterladen",
          SHARE: "Teilen",
          ZOOM: "Maßstab",
        },
      },
    },
    a = n(t),
    s = n(e),
    r = 0,
    c = function (t) {
      return t && t.hasOwnProperty && t instanceof n;
    },
    l = (function () {
      return (
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        t.oRequestAnimationFrame ||
        function (e) {
          return t.setTimeout(e, 1e3 / 60);
        }
      );
    })(),
    u = (function () {
      var t,
        n = e.createElement("fakeelement"),
        o = {
          transition: "transitionend",
          OTransition: "oTransitionEnd",
          MozTransition: "transitionend",
          WebkitTransition: "webkitTransitionEnd",
        };
      for (t in o) if (void 0 !== n.style[t]) return o[t];
      return "transitionend";
    })(),
    d = function (t) {
      return t && t.length && t[0].offsetHeight;
    },
    f = function (t, e) {
      var o = n.extend(!0, {}, t, e);
      return (
        n.each(e, function (t, e) {
          n.isArray(e) && (o[t] = e);
        }),
        o
      );
    },
    h = function (t, e, o) {
      var i = this;
      (i.opts = f({ index: o }, n.fancybox.defaults)),
        n.isPlainObject(e) && (i.opts = f(i.opts, e)),
        n.fancybox.isMobile && (i.opts = f(i.opts, i.opts.mobile)),
        (i.id = i.opts.id || ++r),
        (i.currIndex = parseInt(i.opts.index, 10) || 0),
        (i.prevIndex = null),
        (i.prevPos = null),
        (i.currPos = 0),
        (i.firstRun = !0),
        (i.group = []),
        (i.slides = {}),
        i.addContent(e),
        i.group.length && i.init();
    };
  n.extend(h.prototype, {
    init: function () {
      var i,
        s,
        r = this,
        c = r.group[r.currIndex],
        u = c.opts;
      u.closeExisting && n.fancybox.close(!0),
        n("body").addClass("fancybox-active"),
        !n.fancybox.getInstance() &&
          !1 !== u.hideScrollbar &&
          !n.fancybox.isMobile &&
          e.body.scrollHeight > t.innerHeight &&
          (void 0 === n.fancybox.scrollbarWidth &&
            ((i = n(
              '<div style="width:50px;height:50px;overflow:scroll;" />'
            ).appendTo("body")),
            (n.fancybox.scrollbarWidth = i[0].offsetWidth - i[0].clientWidth),
            i.remove()),
          n("head").append(
            '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' +
              n.fancybox.scrollbarWidth +
              "px; }</style>"
          ),
          n("body").addClass("compensate-for-scrollbar")),
        (s = ""),
        n.each(u.buttons, function (t, e) {
          s += u.btnTpl[e] || "";
        }),
        (r.current = c),
        (r.$body = n("body")),
        (r.$navigation = n('<div class="fancybox-navigation" />').appendTo(
          "body"
        )),
        (r.$container = n(
          r.translate(
            r,
            u.baseTpl
              .replace("{{buttons}}", s)
              .replace("{{arrows}}", u.btnTpl.arrowLeft + u.btnTpl.arrowRight)
          )
        )
          .attr("id", "fancybox-container-" + r.id)
          .addClass("fancybox-is-hidden")
          .addClass(u.baseClass)
          .data("FancyBox", r)
          .appendTo(u.parentEl)),
        (r.$refs = { container: r.$container }),
        [
          "bg",
          "inner",
          "infobar",
          "toolbar",
          "stage",
          "caption",
          "navigation",
        ].forEach(function (t) {
          r.$refs[t] = r.$container.find(".fancybox-" + t);
        }),
        r.trigger("onInit"),
        r.activate(),
        r.jumpTo(r.currIndex);
    },
    translate: function (t, e) {
      var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
      return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
        return void 0 === n[e] ? t : n[e];
      });
    },
    addContent: function (t) {
      var e,
        o = this,
        i = n.makeArray(t);
      n.each(i, function (t, e) {
        var i,
          s,
          r,
          l,
          u,
          d = {},
          f = {};
        n.isPlainObject(e)
          ? ((d = e), (f = e.opts || e))
          : "object" === n.type(e) && n(e).length
          ? ((i = n(e)),
            (f = i.data() || {}),
            (f = n.extend(!0, {}, f, f.options)),
            (f.$orig = i),
            (d.src = o.opts.src || f.src || i.attr("href")),
            d.type || d.src || ((d.type = "inline"), (d.src = e)))
          : ((d = { type: "html", src: e + "" }), (f = {})),
          (d.opts = n.extend(!0, {}, o.opts, f)),
          n.isArray(f.buttons) && (d.opts.buttons = f.buttons),
          n.fancybox.isMobile &&
            d.opts.mobile &&
            (d.opts = f(d.opts, d.opts.mobile)),
          (s = d.type || d.opts.type),
          (r = d.src || ""),
          !s &&
            r &&
            ((l = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
              ? ((s = "video"),
                d.opts.videoFormat ||
                  (d.opts.videoFormat =
                    "video/" + ("ogv" === l[1] ? "ogg" : l[1])))
              : r.match(
                  /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                )
              ? (s = "image")
              : r.match(/\.(pdf)((\?|#).*)?$/i)
              ? (s = "pdf")
              : "#" === r.charAt(0) && (s = "inline")),
          s ? (d.type = s) : o.trigger("objectNeedsType", d),
          d.contentType ||
            (d.contentType =
              n.inArray(d.type, ["html", "inline", "ajax"]) > -1
                ? "html"
                : d.type),
          (d.index = o.group.length),
          "auto" == d.opts.smallBtn &&
            (d.opts.smallBtn =
              n.inArray(d.type, ["html", "inline", "ajax"]) > -1),
          "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn),
          (d.opts.$thumb && d.opts.$thumb.length) ||
            !d.opts.$orig ||
            (d.opts.$thumb = d.opts.$orig.find("img:first")),
          d.opts.$thumb && !d.opts.$thumb.length && delete d.opts.$thumb,
          "function" === n.type(d.opts.caption) &&
            (d.opts.caption = d.opts.caption.apply(e, [o, d])),
          "function" === n.type(o.opts.caption) &&
            (d.opts.caption = o.opts.caption.apply(e, [o, d])),
          d.opts.caption instanceof n ||
            (d.opts.caption =
              void 0 === d.opts.caption ? "" : d.opts.caption + ""),
          "ajax" === d.type &&
            ((u = r.split(/\s+/, 2)),
            u.length > 1 && ((d.src = u.shift()), (d.opts.filter = u.shift()))),
          d.opts.modal &&
            (d.opts = n.extend(!0, d.opts, {
              trapFocus: !0,
              removeOnClose: !0,
              smallBtn: !1,
              toolbar: !1,
              zoomOpacity: "auto",
              maskOpacity: 1,
              arrows: !1,
              infobar: !1,
              clickContent: !1,
              clickSlide: !1,
              clickOutside: !1,
              dblclickContent: !1,
              dblclickSlide: !1,
              dblclickOutside: !1,
            })),
          o.group.push(d);
      }),
        Object.keys(o.slides).length &&
          (o.updateControls(),
          (e = o.slides[o.currIndex]).$slide.trigger("onReset"),
          e.$content.find("iframe").each(function () {
            n(this).attr("src", n(this).attr("src"));
          }),
          o.trigger("onContentChange", e));
    },
    jumpTo: function (t, e) {
      var o,
        i,
        s,
        r,
        c,
        l = this,
        u = l.group.length;
      if (
        !(
          l.isSliding ||
          l.isClosing ||
          (l.isAnimating && l.firstRun) ||
          ((t = parseInt(t, 10)),
          (s = l.current ? l.current.opts.loop : l.opts.loop),
          !s && (t < 0 || t >= u) && ((t = l.currIndex), (e = void 0)),
          (t = s ? t % u : t),
          t < 0 && (t = u + t),
          t === l.currIndex && !e)
        )
      ) {
        if (
          ((o = l.slides[t]),
          ((i = l.group[t]).index = t),
          l.updateControls(),
          i.opts.slideShow &&
            !i.opts.slideShow.isActive &&
            l.isAnimating &&
            ((o = l.slides[l.currIndex]),
            (s = l.current ? l.current.opts.loop : l.opts.loop),
            (t = s ? t % u : t),
            t < 0 && (t = u + t),
            t === l.currIndex && !e))
        )
          return void (l.isAnimating = !1);
        (l.isAnimating = !0),
          l.updateControls(),
          (r = l.slides[t]),
          (c = l.slides[l.currIndex]),
          r.$slide.trigger("onReset"),
          c.$slide.trigger("onReset"),
          l.trigger("beforeShow", o),
          (l.current = i),
          r && r.isLoaded ? l.revealContent(t, e) : l.loadContent(t, e);
      }
    },
    revealContent: function (t, e) {
      var o,
        i,
        s,
        r,
        c,
        l,
        u,
        d,
        f = this,
        h = f.slides[t],
        p = h.opts,
        g = !1,
        v = h.contentType;
      return (
        p.fullScreen && !f.isFullScreen && (p.fullScreen.autoStart = !1),
        h.$slide.removeClass(
          "fancybox-slide--previous fancybox-slide--next fancybox-slide--current"
        ),
        h.$slide.trigger("onReset"),
        t === f.currIndex && !f.isClosing && f.trigger("beforeShow", h),
        (r = h.$slide),
        (c = h.opts.animationEffect),
        (l = h.opts.animationDuration),
        (u = h.opts.zoomOpacity),
        h.$slide.addClass("fancybox-slide--current"),
        h.$content.show(),
        (h.isLoaded = !0),
        f.updateControls(),
        h.opts.$thumb && h.opts.$thumb.length
          ? ((i = h.opts.$thumb), (d = i.offset()), (s = i.width()))
          : !1,
        f.isMobile && ((l = 0), (c = !1)),
        (h.pos = t),
        (h.index = t),
        h.$slide.css({
          opacity: 1,
          transform: "",
          transitionDuration: l + "ms",
        }),
        h.$content.css({
          opacity: 1,
          transform: "",
          transitionDuration: l + "ms",
        }),
        g
      );
    },
    loadContent: function (t) {
      var e,
        o,
        i = this,
        s = i.slides[t],
        r = s.opts,
        c = function (t) {
          var e,
            n,
            c = s;
          (c.isLoaded = !0),
            (c.content = t),
            c.$slide.trigger("onReset"),
            i.trigger("afterLoad", c),
            i.revealContent(c.index);
        };
      if (!s.isLoaded) {
        if (
          ((s.isLoading = !0),
          i.trigger("beforeLoad", s),
          (e = s.type),
          "image" === e &&
            (n.fancybox.isMobile &&
              s.opts.image.width &&
              ((s.width = s.opts.image.width),
              (s.height = s.opts.image.height)),
            (o = e),
            n.fancybox.isMobile &&
              s.width < screen.width &&
              s.height < screen.height &&
              (o = "html"),
            (e = o)),
          "html" === e)
        )
          return void c(s.src);
        if ("ajax" === e)
          return (
            void i.showLoading(s),
            void n.ajax(
              n.extend({}, s.opts.ajax.settings, {
                url: s.src,
                success: function (t, e) {
                  "success" === e && c(t);
                },
                error: function (t, e) {
                  i.trigger("error", s);
                },
              })
            )
          );
        if ("iframe" === e) {
          n(
            '<iframe id="fancybox-frame' +
              s.id +
              '" name="fancybox-frame' +
              s.id +
              '" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>'
          );
        }
      }
    },
    updateControls: function () {
      var t = this,
        e = t.current,
        o = e.index,
        i = e.opts,
        s = i.caption,
        r = t.$refs.caption;
      e.$slide.trigger("onReset"),
        t.trigger("beforeShow", e),
        t.$refs.container.removeClass(
          "fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav"
        ),
        i.infobar && t.$refs.container.addClass("fancybox-show-infobar"),
        i.toolbar && t.$refs.container.addClass("fancybox-show-toolbar"),
        i.arrows &&
          t.group.length > 1 &&
          (t.opts.loop || o > 0) &&
          (t.opts.loop || o < t.group.length - 1) &&
          t.$refs.container.addClass("fancybox-show-nav"),
        i.smallBtn && t.$refs.container.addClass("fancybox-show-small-btn"),
        r.children().eq(0).html(s),
        s
          ? r.addClass("fancybox-show-caption")
          : r.removeClass("fancybox-show-caption"),
        t.trigger("afterShow", e);
    },
    showLoading: function (t) {
      var e = this;
      e.hideLoading(),
        n(e.opts.spinnerTpl)
          .appendTo(e.$refs.stage)
          .addClass("fancybox-loading");
    },
    hideLoading: function () {
      var t = this;
      t.$refs.stage.children(".fancybox-loading").remove();
    },
    activate: function () {
      var t = this;
      n(".fancybox-container").removeClass("fancybox-is-active"),
        t.$refs.container.addClass("fancybox-is-active");
    },
    close: function (t) {
      var e = this,
        n = e.current,
        o = e.opts.animationDuration;
      if (!e.isClosing) {
        if (
          ((e.isClosing = !0),
          e.trigger("beforeClose", n),
          t || !n || !n.opts.animationEffect)
        )
          return e.cleanUp(t);
        e.$refs.stage.children().not(n.$slide).remove(),
          n.$slide.removeClass(
            "fancybox-slide--previous fancybox-slide--next fancybox-slide--current"
          ),
          n.$slide.trigger("onReset"),
          e.trigger("afterClose", n),
          e.cleanUp(t);
      }
    },
    cleanUp: function (e) {
      var o,
        i = this;
      (i.isClosing = !1),
        i.$refs.container.remove(),
        i.trigger("afterClose"),
        i.group.length &&
          ((o = i.group[i.currIndex]), o.opts.$orig && o.opts.$orig.focus()),
        (i.current = null),
        (i.group = []),
        (i.slides = {}),
        t.requestAnimationFrame(function () {
          n("body").removeClass("fancybox-active compensate-for-scrollbar");
        });
    },
    trigger: function (t, e) {
      var o,
        i = this,
        s = n.Event(t);
      n(i.refs).trigger(s, [i, e]),
        s.isDefaultPrevented() ||
          ((o = i.opts[t]) &&
            n.isFunction(o) &&
            !1 === o.apply(i, [i, e]) &&
            s.preventDefault());
    },
  });
  (n.fn.fancybox = function (t) {
    var e;
    return (
      this.each(function () {
        var o = n(this),
          i = o.data("fancybox");
        i
          ? ((e = i), t && "object" === n.type(t) && n.extend(!0, e.opts, t))
          : ((e = new h(this, t)), o.data("fancybox", e));
      }),
      e
    );
  }),
    (n.fancybox = function (t, e, o) {
      var i;
      return (o = o || {}), (i = n.extend(!0, {}, o, e)), new h(t, i);
    }),
    (n.fancybox.isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )),
    (n.fancybox.defaults = i),
    (n.fancybox.getInstance = function () {
      var t = n('.fancybox-container:not(".fancybox-is-hidden")');
      return t.length ? t.data("FancyBox") : null;
    }),
    n("body").on("click.fb-start", "[data-fancybox]", function (t) {
      var e = n(this);
      t.preventDefault(),
        e.data("fancybox-trigger")
          ? n('[data-fancybox="' + e.data("fancybox-trigger") + '"]')
              .eq(e.data("fancybox-index") || 0)
              .trigger("click.fb-start")
          : n.fancybox(e, {
              selector: '[data-fancybox="' + e.data("fancybox") + '"]',
            });
    });
})(window, document, window.jQuery);
