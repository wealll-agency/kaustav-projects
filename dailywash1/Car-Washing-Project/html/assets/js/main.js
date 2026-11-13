(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
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

  // Banner Slider
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    navText: [
      '<i class="fa-solid fa-arrow-left-long"></i>',
      '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  // Text Animation

  let addAnimation = function () {
    $(".split-collab").each(function (index) {
      const textInstance = $(this);
      const text = new SplitText(textInstance, {
        type: "chars",
      });

      let letters = text.chars;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: textInstance,
          start: "top 85%",
          end: "top 85%",
          onComplete: function () {
            textInstance.removeClass(".split-collab");
          },
        },
      });

      tl.set(textInstance, { opacity: 1 }).from(letters, {
        duration: 0.5,
        autoAlpha: 0,
        x: 50,
        // scaleY: 0,
        // skewX: 50,
        stagger: { amount: 1 },
        ease: "back.out(1)",
      });
    });
  };

  addAnimation();

  window.addEventListener("resize", function (event) {
    if ($(window).width() >= 992) {
      addAnimation();
    }
  });

  // Testimonial Slider

  if (jQuery(".testimonial-swiper4").length > 0) {
    var swiperTestimonial4 = new Swiper(".testimonial-swiper4", {
      speed: 1500,
      parallax: true,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      lazy: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination4",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
      },
    });
  }

  // Brand SLider

  // $(".our_partner").owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: false,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 6,
  //     },
  //   },
  // });

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

  // Service slider
  $(".service-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    navText: [
      '<i class="fa-solid fa-arrow-left-long"></i>',
      '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Testimonial slider
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    navText: [
      '<i class="fa-solid fa-arrow-left-long"></i>',
      '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });

  // Popup JS
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  // Smooth scrolling

  document.querySelectorAll(".popup_form").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1); // Get the target section id
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 120, // Offset by the navbar height (120px)
        behavior: "smooth",
        block: 'start'
      });
    });
  });


  // Form Validation

      $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill up the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });

    // Checkout Car and Bike Show


    const type = localStorage.getItem('vehicleType');

    // Show the relevant info based on type
    if (type === 'bike') {
      document.getElementById('bike_brand').style.display = 'block';
      document.getElementById('bike_order_table').style.display = 'block';
    } else if (type === 'car') {
      document.getElementById('car_brand').style.display = 'block';
      document.getElementById('car_order_table').style.display = 'block';
    }

})();
