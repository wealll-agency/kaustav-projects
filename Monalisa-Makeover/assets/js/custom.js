(function ($) {
  "use strict";

  // 1. Sticky Header on Scroll
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $("#siteHeader").addClass("scrolled");
    } else {
      $("#siteHeader").removeClass("scrolled");
    }
  });

  // 2. Hero Slider
  var heroSlider = $(".hero-slider");
  heroSlider.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false, // We're using custom nav
    dots: true, // Show dots
    dotsContainer: "#carousel-custom-dots",
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    mouseDrag: false,
    touchDrag: true,
  });

  // Custom Navigation Events
  $(".hero-prev").click(function () {
    heroSlider.trigger("prev.owl.carousel");
  });
  $(".hero-next").click(function () {
    heroSlider.trigger("next.owl.carousel");
  });

  // 3. Makeup Diaries Slider
  var diariesSlider = $(".diaries-slider");
  if (diariesSlider.length) {
    diariesSlider.owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: { items: 1.2, margin: 15 },
        768: { items: 2.5, margin: 20 },
        1200: { items: 3.5, margin: 30 },
      },
    });

    $(".diaries-prev").click(function () {
      diariesSlider.trigger("prev.owl.carousel");
    });
    $(".diaries-next").click(function () {
      diariesSlider.trigger("next.owl.carousel");
    });
  }

  // 4. Testimonial Slider
  var testimonialSlider = $(".testimonial-slider");
  if (testimonialSlider.length) {
    testimonialSlider.owlCarousel({
      items: 1,
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 6000,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
    });

    $(".testi-prev").click(function () {
      testimonialSlider.trigger("prev.owl.carousel");
    });
    $(".testi-next").click(function () {
      testimonialSlider.trigger("next.owl.carousel");
    });
  }

  // 5. Animated Counters
  var a = 0;
  $(window).scroll(function () {
    var counterSection = $(".counter-section");
    if (counterSection.length) {
      var oTop = counterSection.offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-target");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            },
          );
        });
        a = 1;
      }
    }
  });

  // Set Current Year dynamically
  var currentYearEl = document.getElementById("currentYear");
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // Initialize AOS
  AOS.init({
    once: true,
    offset: 50,
  });

  // Portfolio Filter
  var filterBtns = $(".filter-btn");
  var portfolioItems = $(".portfolio-item");

  if (filterBtns.length) {
    filterBtns.click(function () {
      // Remove active class from all
      filterBtns.removeClass("active");
      // Add active class to clicked
      $(this).addClass("active");

      var filterValue = $(this).attr("data-filter");

      portfolioItems.each(function () {
        if (filterValue === "all" || $(this).hasClass(filterValue)) {
          $(this).fadeIn(400);
        } else {
          $(this).hide();
        }
      });
    });
  }

  //   Whatsapp chat box

  //   Whatsapp chat box
  const phoneNumber = "918101548276";

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

  const form = document.getElementById("luxury-contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = form.name.value || "Guest";
      const email = form.email.value || "";
      const phone = form.phone.value || "";
      const service = form.service.value || "";
      const message = form.message.value || "";

      const text = encodeURIComponent(
        `Hello Monalisa Makeover,
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}`,
      );

      window.open(`https://wa.me/918101548276?text=${text}`, "_blank");
    });
  }
})(jQuery);
