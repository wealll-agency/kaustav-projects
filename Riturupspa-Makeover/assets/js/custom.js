(function ($) {
  "use strict";

  // Header Sticky
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 120) {
      $(".navbar-area").addClass("is-sticky");
    } else {
      $(".navbar-area").removeClass("is-sticky");
    }
  });

  // Mean Menu
  jQuery(".mean-menu").meanmenu({
    meanScreenWidth: "1199",
  });

  /*--
        Custom script to call Background
        Image & Color from html data attribute
    -----------------------------------*/
  $("[data-bg-image]").each(function () {
    var $this = $(this),
      $image = $this.data("bg-image");
    $this.css("background-image", "url(" + $image + ")");
  });
  $("[data-bg-color]").each(function () {
    var $this = $(this),
      $color = $this.data("bg-color");
    $this.css("background-color", $color);
  });

  // Initiate the wowjs
  new WOW().init();

  var Ximsa_Digital_Marketing = {
    init: function () {
      this.Basic.init();
    },

    Basic: {
      init: function () {
        this.MainSLider();
      },

      MainSLider: function () {
        var tpj = jQuery;
        if (window.RS_MODULES === undefined) window.RS_MODULES = {};
        if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
        RS_MODULES.modules["revslider21"] = {
          once:
            RS_MODULES.modules["revslider21"] !== undefined
              ? RS_MODULES.modules["revslider21"].once
              : undefined,
          init: function () {
            window.revapi2 =
              window.revapi2 === undefined ||
              window.revapi2 === null ||
              window.revapi2.length === 0
                ? document.getElementById("rev_slider_2_1")
                : window.revapi2;
            if (
              window.revapi2 === null ||
              window.revapi2 === undefined ||
              window.revapi2.length == 0
            ) {
              window.revapi2initTry =
                window.revapi2initTry === undefined
                  ? 0
                  : window.revapi2initTry + 1;
              if (window.revapi2initTry < 20)
                requestAnimationFrame(function () {
                  RS_MODULES.modules["revslider21"].init();
                });
              return;
            }
            window.revapi2 = jQuery(window.revapi2);
            if (window.revapi2.revolution == undefined) {
              revslider_showDoubleJqueryError("rev_slider_2_1");
              return;
            }
            revapi2.revolutionInit({
              revapi: "revapi2",
              DPR: "dpr",
              sliderLayout: "fullwidth",
              visibilityLevels: "1240,1024,778,480",
              gridwidth: "1240,1024,778,480",
              gridheight: "800,600,500,400",
              perspective: 600,
              perspectiveType: "global",
              editorheight: "800,600,500,400",
              responsiveLevels: "1240,1024,778,480",
              progressBar: { disableProgressBar: true },
              navigation: {
                wheelCallDelay: 1000,
                onHoverStop: false,
                arrows: {
                  enable: true,
                  tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                  style: "zeus",
                  left: {
                    h_offset: 40,
                  },
                  right: {
                    h_offset: 40,
                  },
                },
              },
              parallax: {
                levels: [
                  5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30,
                ],
                type: "scroll",
                origo: "slidercenter",
                speed: 0,
              },
              scrolleffect: {
                set: true,
                multiplicator: 1.3,
                multiplicator_layers: 1.3,
              },
              viewPort: {
                global: false,
                globalDist: "-200px",
                enable: false,
              },
              fallbacks: {
                allowHTML5AutoPlayOnAndroid: true,
              },
            });
          },
        };
        if (window.RS_MODULES.checkMinimal !== undefined) {
          window.RS_MODULES.checkMinimal();
        }
      },
    },
  };
  jQuery(document).ready(function () {
    Ximsa_Digital_Marketing.init();
  });

  // Popup JS
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  // Feedback Slides
  $(".feedback-slides").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    animateOut: "fadeOut",
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: false,
    items: 1,
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa-solid fa-chevron-right'></i>",
    ],
  });

  // Particles Js
  if (document.getElementById("particles-js-circle-bubble"))
    particlesJS("particles-js-circle-bubble", {
      particles: {
        number: {
          value: 300,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.3,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });

  // Feedback Wrap JS
  $(".feedback-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
  });

  /*------------------------------------
  HT Counter
--------------------------------------*/
  function counter() {
    var elementSelector = $(".count-number");
    elementSelector.each(function () {
      elementSelector.appear(function (e) {
        var el = this;
        var updateData = $(el).attr("data-count");
        var od = new Odometer({
          el: el,
          format: "d",
          duration: 5000,
        });
        od.update(updateData);
      });
    });
  }

  $(document).ready(function () {
    counter();
  });

  if (document.getElementById("particles-js-circle-bubble-2"))
    particlesJS("particles-js-circle-bubble-2", {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.3,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });

  if (document.getElementById("particles-js-circle-bubble-3"))
    particlesJS("particles-js-circle-bubble-3", {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.3,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });

  //   Whatsapp chat box

  //   Whatsapp chat box

  const phoneNumber = "918001993555";

  const defaultMessage =
    "Hello, I'm interested in your makeup services. Could you please share more details?"; // prefilled message

  // Builds a WhatsApp link compatible with mobile & web
  function makeWhatsAppLink(phone, text) {
    const encoded = encodeURIComponent(text || "");
    return "https://wa.me/" + phone + (encoded ? "?text=" + encoded : "");
  }

  // set href on the button
  const btn = document.getElementById("whatsapp-btn");
  if (btn) {
    btn.href = makeWhatsAppLink(phoneNumber, defaultMessage);
    // optional: open in new window for desktop
    btn.target = "_blank";
  }
})(jQuery);
