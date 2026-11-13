(function ($) {
  "use strict";

  // Sticky Header
  $(window).on("scroll", function () {
    var windowpos = $(window).scrollTop();
    var siteHeader = $(".sticky-header");
    if (windowpos >= 110) {
      siteHeader.addClass("fixed-header");
    } else {
      siteHeader.removeClass("fixed-header");
    }
  });

  // Mobile Navigation
  if ($(".mobile-menu").length) {
    var mobileMenuContent = $(".main-header .nav-outer .main-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
    $(".sticky-header .main-menu").append(mobileMenuContent);

    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });
    $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      },
    );
  }

  // WOW animations
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  }

  // Testimonial Carousel
  if ($(".testimonial-carousel").length) {
    $(".testimonial-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }

  // Brand/Partner Carousel
  if ($(".brand-carousel").length) {
    $(".brand-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      active: true,
      smartSpeed: 1000,
      autoplay: 6000,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 2,
        },
        1024: {
          items: 4,
        },
      },
    });
  }

  // Statistical Counter Animation
  function startCounter() {
    if ($(".stat-number").length) {
      $(".stat-number").each(function () {
        var $this = $(this);
        var countTo = parseInt($this.text());
        $({ countNum: 0 }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.ceil(this.countNum) + "+");
            },
            complete: function () {
              $this.text(this.countNum + "+");
            },
          },
        );
      });
    }
  }

  // Start counter when section is in view
  if ($(".stat-number").length) {
    var counterObserver = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) {
          startCounter();
          counterObserver.unobserve(entries[0].target);
        }
      },
      { threshold: [0.5] },
    );

    $(".stat-number").each(function () {
      counterObserver.observe(this);
    });
  }

  // Portfolio Filtering & Isotope logic
  if ($(".portfolio-gallery").length) {
    var $grid = $(".portfolio-gallery").imagesLoaded(function () {
      // init Isotope after all images have loaded
      $grid.isotope({
        itemSelector: ".portfolio-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".portfolio-item",
        },
      });
    });

    // Filter items on button click
    $(".portfolio-filter li").on("click", function () {
      var filterValue = $(this).attr("data-filter");

      // Add/remove active class
      $(".portfolio-filter li").removeClass("active");
      $(this).addClass("active");

      // Filter with Isotope
      if (filterValue === "all") {
        $grid.isotope({ filter: "*" });
      } else {
        $grid.isotope({ filter: "." + filterValue });
      }
    });
  }

  // Reels Carousel initialization (Home Page)
  if ($(".reels-carousel").length) {
    $(".reels-carousel").owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 900,
      nav: true,
      dots: true,
      navText: [
        '<span class="fa-solid fa-arrow-left"></span>',
        '<span class="fa-solid fa-arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
          stagePadding: 30,
        },
        768: {
          items: 3,
          stagePadding: 0,
        },
        1200: {
          items: 3,
          stagePadding: 50,
        },
      },
    });
  }

  // Makeup Diaries Carousel initialization (Home Page)
  if ($(".diaries-carousel").length) {
    $(".diaries-carousel").owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 800,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
  }

  // Elite Service Navigation Indicator Logic
  function updateNavIndicator() {
    var $activeLink = $(".service-nav-tray .nav-link.active");
    var $indicator = $(".nav-indicator-glow");

    if ($activeLink.length && $indicator.length) {
      var linkWidth = $activeLink.outerWidth();
      var linkLeft = $activeLink.position().left;

      $indicator.css({
        left: linkLeft + "px",
        width: linkWidth + "px",
      });
    }
  }

  // Initialize on load
  $(window).on("load resize", function () {
    updateNavIndicator();
  });

  $('button[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
    updateNavIndicator();
  });

  // Service Navigation Slider Logic
  if ($(".service-nav-wrapper").length) {
    const sliderContainer = $(".service-nav-container");
    const scrollAmount = 300; // Smooth scrolling step

    $(".prev-btn").on("click", function () {
      sliderContainer.animate(
        {
          scrollLeft: "-=" + scrollAmount,
        },
        400,
      );
    });

    $(".next-btn").on("click", function () {
      sliderContainer.animate(
        {
          scrollLeft: "+=" + scrollAmount,
        },
        400,
      );
    });
  }

  //   Whatsapp chat box

  //   Whatsapp chat box

  const phoneNumber = "918906155641";

  const defaultMessage =
    "Hello Team, I'm interested in your makeup services. Could you please share more details?"; // prefilled message

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
})(window.jQuery);
