(function ($) {
  "use strict";


   function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

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

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });



  var path = window.location.pathname;

  if (path === "/" || path.endsWith("/index.html")) {
    $(".inner_header").removeClass("inner_header");
  }

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 15,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Brand Slider

  function checkSelectorExistence(selectorName) {
    return document.querySelector(selectorName) !== null;
  }

  var clientLogo = function () {
    if (!checkSelectorExistence(".client-logo-swiper")) {
      return;
    }
    var swiper = new Swiper(".client-logo-swiper", {
      loop: true,
      freemode: true,
      spaceBetween: 20,
      slidesPerView: "auto",
      centeredSlides: true,
      allowTouchMove: false,
      speed: 5000,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
    });
  };

  clientLogo();

  // Work Carousel

  $(".our-work-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    center: true,
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // CLient Review Carousel

  $(".client-review-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });
  
  
//   Whatsapp chat box


 const phoneNumber = "918100545449";
 

    const defaultMessage = "Hello Team, I'm interested in your digital marketing services. Could you please share more details?"; // prefilled message

    // Builds a WhatsApp link compatible with mobile & web
    function makeWhatsAppLink(phone, text){
      const encoded = encodeURIComponent(text || "");
      // Use wa.me link — works on mobile and desktop (opens WhatsApp Web if available)
      return "https://wa.me/" + phone + (encoded ? "?text=" + encoded : "");
    }

    // set href on the button
    const btn = document.getElementById("whatsapp-btn");
    if(btn){
      btn.href = makeWhatsAppLink(phoneNumber, defaultMessage);
      // optional: open in new window for desktop
      btn.target = "_blank";
    }
    
    
    document.getElementById("year").textContent = new Date().getFullYear();
    
  
  
})(jQuery);
