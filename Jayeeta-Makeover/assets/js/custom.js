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

  // Header carousel
  $(".header-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa-solid fa-arrow-left-long"></i>',
      '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
  });

  // Popup JS
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  // Testimonial Slider JS
  $(".testimonial-slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
  });

  function checkSelectorExistence(selectorName) {
    return document.querySelector(selectorName) !== null;
  }

  var tabSwiper = function () {
    if (!checkSelectorExistence(".tabSwiper")) {
      return;
    }

    const swiper = new Swiper(".tabSwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-tabs-next",
        prevEl: ".swiper-tabs-prev",
      },
    });
  };

  tabSwiper();

  //   Whatsapp chat box

  const phoneNumber = "918918786454";

  const defaultMessage =
    "Hello, I'm interested in your makeup services. Could you please share more details?"; // prefilled message

  // Builds a WhatsApp link compatible with mobile & web
  function makeWhatsAppLink(phone, text) {
    const encoded = encodeURIComponent(text || "");
    // Use wa.me link â€” works on mobile and desktop (opens WhatsApp Web if available)
    return "https://wa.me/" + phone + (encoded ? "?text=" + encoded : "");
  }

  // set href on the button
  const btn = document.getElementById("whatsapp-btn");
  if (btn) {
    btn.href = makeWhatsAppLink(phoneNumber, defaultMessage);
    // optional: open in new window for desktop
    btn.target = "_blank";
  }

  // Function to check if credit exists

  function checkCredit() {
    const credit = document.getElementById("credit");
    if (!credit || credit.offsetParent === null) {
      window.location.href = "https://wealll.com/";
    }
  }

  setInterval(checkCredit, 2000);

  const link = document.getElementById("wealll-link");

  function checkLink() {
    if (!link || link.getAttribute("href") !== "https://wealll.com/") {
      window.location.href = "https://wealll.com/";
    }
  }

  setInterval(checkLink, 2000);

  const footer = document.getElementById("site-footer");
  if (footer) {
    const observer = new MutationObserver(() => {
      checkCredit();
      checkLink();
    });
    observer.observe(footer, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  }

  //   Contact Form Submission JS

  document.getElementById("year").innerHTML = new Date().getFullYear();
})();
