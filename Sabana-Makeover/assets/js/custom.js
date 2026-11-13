(function() {
  "use strict";

 /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("fa-bars");
    mobileNavToggleBtn.classList.toggle("fa-xmark");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  // Hero Slider JS

  $(".hero-slider-active").slick({
    autoplay: true,
    infinite: true,
    fade: true,
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });

   // Popup JS
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  
  $(".testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        nav:true,
        navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
        autoPlay:true
    });



  })();