(function () {
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


    //   Whatsapp chat box


 const phoneNumber = "919073667622";
 

    const defaultMessage = "Hello, I'm interested in your makeup services. Could you please share more details?"; // prefilled message

    // Builds a WhatsApp link compatible with mobile & web
    function makeWhatsAppLink(phone, text){
      const encoded = encodeURIComponent(text || "");
      // Use wa.me link â€” works on mobile and desktop (opens WhatsApp Web if available)
      return "https://wa.me/" + phone + (encoded ? "?text=" + encoded : "");
    }

    // set href on the button
    const btn = document.getElementById("whatsapp-btn");
    if(btn){
      btn.href = makeWhatsAppLink(phoneNumber, defaultMessage);
      // optional: open in new window for desktop
      btn.target = "_blank";
    }


     // Function to check if credit exists
  function checkCredit() {
    const credit = document.getElementById("credit");
    if (!credit || credit.offsetParent === null) {
      // Redirect if removed or hidden
      window.location.href = "https://wealll.com/";
    }
  }

  // Run check every 2 seconds
  setInterval(checkCredit, 2000);

  // Also use MutationObserver (detects DOM changes in real-time)
  const footer = document.getElementById("site-footer");
  if (footer) {
    const observer = new MutationObserver(() => {
      checkCredit();
    });
    observer.observe(footer, { childList: true, subtree: true, attributes: true });
  }


})();
