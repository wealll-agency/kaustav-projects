$(document).ready(function () {
  // Hero Slider
  $(".hero-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: false,
    dots: true,
    autoHeight: true,
  });

  // Collection Slider
  $(".collection-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 2 },
      415: { items: 2 },
      576: { items: 3 },
      768: { items: 4 },
      992: { items: 5 },
    },
  });

  // Brands Slider
  var brandsOwl = $(".brands-slider");

  brandsOwl.owlCarousel({
    center: true,
    loop: true,
    margin: 30, // Uniform base margin, scaling does the rest
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 3, margin: 0 },
      576: { items: 3, margin: 10 },
      768: { items: 5, margin: 20 },
      992: { items: 5, margin: 30 },
    },
  });

  // Testimonial Custom Slider
  var testimonialOwl = $(".testimonial-slider");
  testimonialOwl.owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });

  // Product Sliders (General)
  $(".product-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
    },
  });

  // Offers Slider
  $(".offers-slider").owlCarousel({
    center: true,
    loop: true,
    margin: -120, // Negative margin for overlap effect
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: { items: 1, margin: 10 },
      768: { items: 3, margin: -60 },
      992: { items: 3, margin: -120 },
    },
  });

  // Custom Navigation Events
  $(".custom-next").click(function () {
    testimonialOwl.trigger("next.owl.carousel");
  });
  $(".custom-prev").click(function () {
    testimonialOwl.trigger("prev.owl.carousel");
  });

  // Combo Slider
  var comboOwl = $(".combo-slider");
  comboOwl.owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoWidth: true,
    responsive: {
      0: { margin: 10 },
      768: { margin: 15 },
      992: { margin: 20 },
    },
  });

  $(".prev-combo").click(function () {
    comboOwl.trigger("prev.owl.carousel");
  });
  $(".next-combo").click(function () {
    comboOwl.trigger("next.owl.carousel");
  });

  // Blog Slider
  var blogOwl = $(".blog-slider");
  blogOwl.owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    dots: false,
    responsive: {
      0: { items: 1.2 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });

  // Animated Auto Counter for Store Locator Stats
  var counterObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          $(entry.target)
            .find(".counter")
            .each(function () {
              var $this = $(this);
              var targetVal = parseInt($this.data("target"), 10);

              $({ Counter: 0 }).animate(
                {
                  Counter: targetVal,
                },
                {
                  duration: 2500,
                  easing: "swing",
                  step: function () {
                    $this.text(Math.ceil(this.Counter));
                  },
                  complete: function () {
                    $this.text(targetVal); // Guarantee exact final number
                  },
                },
              );
            });
          observer.unobserve(entry.target); // Run once per page load
        }
      });
    },
    { threshold: 0.5 },
  );

  var statsContainer = document.querySelector(".stats-box");
  if (statsContainer) {
    counterObserver.observe(statsContainer);
  }

  // Whole Spices Slider
  var spiceOwl = $(".spice-slider");
  spiceOwl.owlCarousel({
    loop: false,
    margin: 15,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    dots: false,
    responsive: {
      0: { items: 1.2 },
      576: { items: 2.2 },
      768: { items: 3 },
      992: { items: 3 },
      1200: { items: 3 },
    },
  });

  // Shop Page Collection Slider
  $(".shop-collection-slider").owlCarousel({
    loop: true,
    margin: 0 /* Use item padding instead of margin to prevent overflow */,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 2, margin: 0, nav: false },
      576: { items: 4, margin: 10 },
      768: { items: 4, margin: 10 },
      992: { items: 5, margin: 15 },
      1200: { items: 6, margin: 20 },
    },
  });

  // Shop View Toggle (Combined Desktop & Mobile)
  $("#listViewBtn, #mListViewBtn").click(function () {
    $("#shopProductGrid").addClass("list-view-active");
    $("#listViewBtn, #mListViewBtn").addClass("active");
    $("#gridViewBtn, #mGridViewBtn").removeClass("active");
  });

  $("#gridViewBtn, #mGridViewBtn").click(function () {
    $("#shopProductGrid").removeClass("list-view-active");
    $("#gridViewBtn, #mGridViewBtn").addClass("active");
    $("#listViewBtn, #mListViewBtn").removeClass("active");
  });

  // Cart Upsell Slider
  $(".cart-upsell-slider").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    dots: false,
    autoHeight: true,
    responsive: {
      0: { items: 1.5 },
      576: { items: 2 },
    },
  });

  // Open Offcanvas Cart on Add To Cart
  $(document).on(
    "click",
    ".Sweettree-btn-cart, .header-icon-box",
    function (e) {
      // Only intercept if it's an Add to Cart button or the cart icon in header
      if (
        $(this).hasClass("Sweettree-btn-cart") ||
        $(this).find(".fa-shopping-basket").length > 0
      ) {
        e.preventDefault();
        var offcanvasElement = document.getElementById("cartOffcanvas");
        if (offcanvasElement) {
          var cartOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
          if (!cartOffcanvas) {
            cartOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
          }
          cartOffcanvas.show();
        }
      }
    },
  );

  // Cart to Checkout Transition
  $(document).on("click", "#checkoutBtn", function (e) {
    e.preventDefault();
    $(".cart-view-container").removeClass("d-flex").addClass("d-none");
    $(".checkout-view-container").removeClass("d-none").addClass("d-flex");
  });

  // Checkout Back to Cart Transition
  $(document).on("click", "#checkoutBackBtn", function (e) {
    e.preventDefault();
    $(".checkout-view-container").removeClass("d-flex").addClass("d-none");
    $(".cart-view-container").removeClass("d-none").addClass("d-flex");
  });

  // Reset to cart view when offcanvas is closed
  var cartOffcanvasEl = document.getElementById("cartOffcanvas");
  if (cartOffcanvasEl) {
    cartOffcanvasEl.addEventListener("hidden.bs.offcanvas", function () {
      $(".checkout-view-container").removeClass("d-flex").addClass("d-none");
      $(".cart-view-container").removeClass("d-none").addClass("d-flex");
    });
  }

  // ==========================================
  // Product Details Page Logic
  // ==========================================

  // Main Image Carousel
  var sync1 = $(".main-product-carousel");
  // Thumbnails Carousel
  var sync2 = $(".product-thumbnails-carousel");
  var syncedSecondary = true;

  sync1
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: [
        '<i class="fas fa-chevron-left" style="background: white; padding: 10px 14px; border-radius: 50%; box-shadow: 0 0 10px rgba(0,0,0,0.1); color: #444; position: absolute; top: 50%; left: 10px; transform: translateY(-50%); z-index: 10;"></i>',
        '<i class="fas fa-chevron-right" style="background: white; padding: 10px 14px; border-radius: 50%; box-shadow: 0 0 10px rgba(0,0,0,0.1); color: #444; position: absolute; top: 50%; right: 10px; transform: translateY(-50%); z-index: 10;"></i>',
      ],
    })
    .on("changed.owl.carousel", syncPosition);

  // Note: the navText arrows using absolute positioning require the carousel container to not clip them, or they will sit slightly inside the padding.

  sync2
    .on("initialized.owl.carousel", function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      dots: false,
      nav: true,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 1, // alternatively you can slide by 4
      responsiveRefreshRate: 100,
      responsive: {
        0: { items: 3, margin: 5 },
        576: { items: 4, margin: 10 },
        992: { items: 6, margin: 10 },
      },
      navText: [
        '<i class="fas fa-chevron-left" style="background: white; padding: 6px 9px; font-size: 11px; border-radius: 50%; border: 1px solid #ddd; color: #444; position: absolute; top: 35%; left: -25px; transform: translateY(-50%); z-index: 5; cursor: pointer; box-shadow: 0 1px 3px rgba(0,0,0,0.1);"></i>',
        '<i class="fas fa-chevron-right" style="background: white; padding: 6px 9px; font-size: 11px; border-radius: 50%; border: 1px solid #ddd; color: #444; position: absolute; top: 35%; right: -25px; transform: translateY(-50%); z-index: 5; cursor: pointer; box-shadow: 0 1px 3px rgba(0,0,0,0.1);"></i>',
      ],
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    // sync2
    //   .find(".owl-item")
    //   .removeClass("current")
    //   .eq(current)
    //   .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2.find(".owl-item.active").first().index();
    var end = sync2.find(".owl-item.active").last().index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();

    // Custom active border class handling
    sync2.find(".thumb-item").css("border-color", "#eee");
    $(this).find(".thumb-item").css("border-color", "#ba6f66");

    sync1.data("owl.carousel").to(number, 300, true);
  });

  // Variant Box Toggle
  $(".variant-box").on("click", function () {
    $(".variant-box")
      .removeClass("active")
      .css({ "border-color": "#732230", "background-color": "white" });
    $(this)
      .addClass("active")
      .css({ "border-color": "#348f95", "background-color": "#e6f0f1" });
  });

  // Quantity Selector
  $(".qty-btn").on("click", function () {
    var $input = $(this).siblings(".qty-input");
    var currentValue = parseInt($input.val());

    if ($(this).text() === "+") {
      $input.val(currentValue + 1);
    } else if ($(this).text() === "-" && currentValue > 1) {
      $input.val(currentValue - 1);
    }
  });
});
