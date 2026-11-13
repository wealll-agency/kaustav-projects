(function ($) {
  "use strict";
  // Mean Menu
  $(".mean-menu").meanmenu({
    meanScreenWidth: "991",
  });

  $(document).on("click", ".search-btn", function () {
    $(".search-box").toggleClass("active");
    $(".search-input").focus();
  });

  // Service Carousel

  $(".service-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
    },
  });

  // Client Review Carousel

  $(".review-carousel").owlCarousel({
    items: 2.5,
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2.5 },
    },
  });

  // Team Slider

  $(".team-slider").owlCarousel({
    items: 4,
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      992: { items: 4 },
    },
  });

  const items = document.querySelectorAll(".ticker-item");

  setInterval(() => {
    items.forEach((item) => {
      let change = (Math.random() * 200 - 100).toFixed(2);
      let percent = (Math.random() * 1).toFixed(2);

      let span = item.querySelector("span");

      if (change >= 0) {
        item.classList.remove("down");
        item.classList.add("up");
        span.innerHTML = `▲ +${change} (${percent}%)`;
      } else {
        item.classList.remove("up");
        item.classList.add("down");
        span.innerHTML = `▼ ${change} (${percent}%)`;
      }
    });
  }, 5000);

  const ticker = document.getElementById("stockTicker");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      ticker.classList.add("sticky");
    } else {
      ticker.classList.remove("sticky");
    }
  });

  // Mega Menu Desktop Tab Interaction
  $(".has-mega-menu").on("mouseenter", function () {
    if (window.innerWidth >= 992) {
      var $menuItems = $(this).find(".mega-menu-item");
      $menuItems.removeClass("active");
      $menuItems.first().addClass("active");
    }
  });

  $(".mega-menu-item").on("mouseenter", function () {
    if (window.innerWidth >= 992) {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    }
  });

  $(".mega-menu-item .mega-menu-link").on("click", function (e) {
    if (window.innerWidth >= 992) {
      if ($(this).attr("href") === "#") {
        e.preventDefault();
      }
      var parentItem = $(this).parent(".mega-menu-item");
      parentItem.siblings().removeClass("active");
      parentItem.addClass("active");
    }
  });

  // Mega Submenu Nested Sub-Dropdown Toggle
  $(".sub-dropdown-toggle").on("click", function (e) {
    if (window.innerWidth >= 992) {
      e.preventDefault();
      e.stopPropagation();

      var $parentLi = $(this).parent(".has-sub-dropdown");
      var $subMenu = $parentLi.find("> .sub-dropdown-menu");

      // Slide toggle current submenu and toggle open class
      $parentLi.toggleClass("open");
      $subMenu.slideToggle(300);

      // Accordion: slide up other open sibling submenus
      $parentLi.siblings(".has-sub-dropdown")
        .removeClass("open")
        .find("> .sub-dropdown-menu")
        .slideUp(300);
    }
  });
})(jQuery);

