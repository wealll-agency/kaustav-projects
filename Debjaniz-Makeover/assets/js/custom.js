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

  // 2. Initialize Owl Carousel for Hero Slider
  $(document).ready(function () {
    var $heroSlider = $("#heroSlider");

    $heroSlider.owlCarousel({
      loop: true,
      margin: 0,
      nav: false, // We use custom nav
      dots: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: false,
      smartSpeed: 1000,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
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

    // 3. Custom Navigation Events
    $(".nav-next").click(function () {
      $heroSlider.trigger("next.owl.carousel");
    });

    $(".nav-prev").click(function () {
      $heroSlider.trigger("prev.owl.carousel", [300]);
    });

    // 4. Initialize AOS Animation
    AOS.init({
      once: true, // whether animation should happen only once - while scrolling down
      offset: 50, // offset (in px) from the original trigger point
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: "ease-out-cubic", // default easing for AOS animations
    });

    // 5. Counter-up Animation Logic (Existing)
    const counters = document.querySelectorAll(".counter-number");
    const speed = 200;
    const countUp = (counter) => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(() => countUp(counter), 15);
      } else {
        counter.innerText = target;
      }
    };
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countUp(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    counters.forEach((counter) => counterObserver.observe(counter));

    // 6. Makeup Diaries Slider (3D Overflow)
    var $diariesSlider = $(".makeup-diaries-slider");
    $diariesSlider.owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
      responsive: {
        0: { items: 1, stagePadding: 20 },
        768: { items: 2, stagePadding: 50 },
        1200: { items: 3, stagePadding: 100 },
      },
    });

    $(".diary-next").click(function () {
      $diariesSlider.trigger("next.owl.carousel");
    });
    $(".diary-prev").click(function () {
      $diariesSlider.trigger("prev.owl.carousel");
    });

    // 7. Editorial Narrative Slider
    var $narrativeSlider = $(".narrative-slider");
    $narrativeSlider.owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      items: 1,
      autoplay: true,
      autoplayTimeout: 7000,
      smartSpeed: 1000,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
    });

    // 7a. Manual Narrative Nav Handlers
    $(".narrative-prev").click(function () {
      $narrativeSlider.trigger("prev.owl.carousel");
    });
    $(".narrative-next").click(function () {
      $narrativeSlider.trigger("next.owl.carousel");
    });

    // 8. 3D Tilt Effect for Diary Cards (Existing)
    const diaryCards = document.querySelectorAll(".diaries-3d-card");
    diaryCards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      });
    });

    // 9. Kinetic Gold Thread: Service Ribbon & Stage Sync
    var $serviceStage = $(".service-stage-carousel");
    var $glidingThread = $(".gliding-thread");

    function moveThread() {
      var $activeItem = $(".ribbon-item.active");
      if ($activeItem.length) {
        var width = $activeItem.outerWidth();
        var left = $activeItem.position().left;
        $glidingThread.css({
          width: width + "px",
          transform: "translateX(" + left + "px)",
        });
      }
    }

    $serviceStage.owlCarousel({
      loop: false,
      margin: 0,
      nav: false,
      dots: false,
      items: 1,
      autoplay: false,
      smartSpeed: 1000,
      touchDrag: true,
      mouseDrag: true,
    });

    // Click Tab -> Move Slider
    $(".ribbon-item").on("click", function () {
      var index = $(this).data("index");
      $serviceStage.trigger("to.owl.carousel", index);
    });

    // Slider Slide -> Update Tab & Thread
    $serviceStage.on("changed.owl.carousel", function (event) {
      var index = event.item.index;
      $(".ribbon-item").removeClass("active");
      $('.ribbon-item[data-index="' + index + '"]').addClass("active");
      moveThread();
    });

    // Initial Thread Position
    setTimeout(moveThread, 500);
    $(window).on("resize", moveThread);

    // 10. Generate Gold Dust Particles
    const dustContainer = document.getElementById("dustContainer");
    if (dustContainer) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animationDuration = Math.random() * 10 + 10 + "s";
        particle.style.animationDelay = Math.random() * 10 + "s";
        particle.style.opacity = Math.random() * 0.5;
        dustContainer.appendChild(particle);
      }
    }
  });

  /* ==========================================================================
       Portfolio Filtering & Hybrid Layout Logic
       ========================================================================== */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const mosaicItems = document.querySelectorAll(".mosaic-item");
  const portfolioGrid = document.getElementById("portfolioGrid");

  if (filterButtons.length > 0 && mosaicItems.length > 0 && portfolioGrid) {
    // Initial state: All Artistry (Masonry)
    portfolioGrid.classList.add("is-masonry");

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((b) => b.classList.remove("active"));
        // Add active class to clicked button
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");

        // Toggle Layout Classes
        if (filterValue === "*") {
          portfolioGrid.classList.add("is-masonry");
          portfolioGrid.classList.remove("is-standard");
        } else {
          portfolioGrid.classList.remove("is-masonry");
          portfolioGrid.classList.add("is-standard");
        }

        mosaicItems.forEach((item) => {
          if (filterValue === "*") {
            // Show all items
            item.classList.remove("hide");
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "scale(1)";
            }, 50);
          } else {
            // Hide items that don't match, show items that do
            if (item.classList.contains(filterValue.substring(1))) {
              // Remove the dot from filter value
              item.classList.remove("hide");
              setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "scale(1)";
              }, 50);
            } else {
              item.style.opacity = "0";
              item.style.transform = "scale(0.8)";
              setTimeout(() => {
                item.classList.add("hide");
              }, 400); // Match CSS transition duration
            }
          }
        });
      });
    });
  }

  //   Whatsapp chat box

  //   Whatsapp chat box

  const phoneNumber = "919748810228";

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

  // 11. Mobile Menu Scroll Lock & Interaction
  $(".navbar-toggler").on("click", function () {
    $("body").toggleClass("menu-open");
  });

  $(".navbar-nav .nav-link").on("click", function () {
    if ($(".navbar-collapse").hasClass("show")) {
      $(".navbar-toggler").click();
    }
  });
})(jQuery);
