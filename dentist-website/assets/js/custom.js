$(document).ready(function () {
  // Initialize Swiper Hero Slider

  const swiper = new Swiper(".hero-swiper", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: function () {
        // Remove animation classes from all slides
        $(".hero-slide .fade-left, .hero-slide .fade-right")
          .css("opacity", 0)
          .removeClass("animated");
      },
      slideChangeTransitionEnd: function () {
        // Force reflow and re-add animation classes to active slide
        var $active = $(".swiper-slide-active");
        $active.find(".fade-left, .fade-right").each(function () {
          var el = $(this);
          el.removeClass("animated");
          void this.offsetWidth; // force reflow
          el.addClass("animated");
        });
      },
    },
  });

  // Sticky Header Effect (Optional but good)
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".header").addClass("sticky shadow-sm");
    } else {
      $(".header").removeClass("sticky shadow-sm");
    }
  });

  // Smile Health Test Tabs
  $(".step-nav-item").click(function () {
    // 1. Remove active class from all nav items
    $(".step-nav-item").removeClass("active");
    // 2. Add active class to clicked item
    $(this).addClass("active");

    // 3. Get the target tab ID
    var targetTab = $(this).data("tab");

    // 4. Hide all tab content
    $(".tab-content").removeClass("active");
    // 5. Show target tab content
    $("#" + targetTab).addClass("active");
  });
  // Clinic Tabs Functionality
  $(".clinic-tab-item").click(function () {
    // 1. Remove active class from all nav items
    $(".clinic-tab-item").removeClass("active");
    // 2. Add active class to clicked item
    $(this).addClass("active");

    // 3. Get the target tab ID
    var targetTab = $(this).data("tab");

    // 4. Hide all tab content panes
    $(".clinic-tab-pane").removeClass("active");
    // 5. Show target tab content with fade in
    $("#" + targetTab)
      .addClass("active")
      .css("opacity", 0)
      .animate({ opacity: 1 }, 400); // optional manual fade or rely on css animation
  });

  // Patient Reviews Swiper
  const reviewsSwiper = new Swiper(".reviews-swiper", {
    slidesPerView: 1, // Start with 1 for mobile
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".review-next",
      prevEl: ".review-prev",
    },
    pagination: {
      el: ".review-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});
