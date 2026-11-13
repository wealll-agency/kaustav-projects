(function ($) {
  "use strict";

  $(".service-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  //Testimonial Carousel
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });

  // Icon Slider - Reference Site Match
  // Swiper marqee area start here ***
  var marqueeSlider = new Swiper(".marqueeSwiper__slider", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 3000,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1300: {
        slidesPerView: 5,
      },
    },
  });

  // Image Slider - Reference Site Match (Continuous Scrolling)
  // Swiper marqee area start here ***
  var instagramSlider = new Swiper(".instagram-slider", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 5000,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1300: {
        slidesPerView: 5,
      },
    },
  });

  // Gsap Animation area start here ***
  gsap.utils.toArray(".gsap__parallax").forEach(function (container) {
    let image = container.querySelector("img");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: 1, // Increased scrub value for smoother scrolling response
        start: "top bottom", // Animation starts when the container's top hits the bottom of the viewport
        end: "bottom top", // Animation ends when the container's bottom hits the top of the viewport
      },
    });

    tl.fromTo(
      image,
      { yPercent: -10 }, // Starting position
      { yPercent: 10, ease: "power1.inOut" } // Ending position with a smoother easing curve
    );
  });

  gsap.utils.toArray(".gsap__parallax-zoom").forEach(function (container) {
    let image = container.querySelector("img");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: 1, // Smooth and slow scrolling
        start: "top bottom", // When the container's top hits the bottom of the viewport
        end: "bottom top", // When the container's bottom hits the top of the viewport
      },
    });

    tl.fromTo(
      image,
      {
        yPercent: -10, // Parallax start position
        scale: 1.2, // Zoom in at the start
      },
      {
        yPercent: 10, // Parallax end position
        scale: 1, // Zoom out to normal
        ease: "power1.inOut", // Smooth easing for both effects
      }
    );
  });

  // Gsap Animation area end here ***

  //LightBox / Fancybox
  if ($(".lightbox-image").length) {
    $(".lightbox-image").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
      helpers: {
        media: {},
      },
    });
  }

  // Explicit initialization for video popup to ensure it works
  if ($(".video-popup").length) {
    $(".video-popup").fancybox({
      type: "iframe", // Force iframe type for YouTube
      iframe: {
        preload: false,
      },
    });
  }

  // Testimonial slider area start here ***

  var swiperThumb = new Swiper(".testimonial-slider-thumb-two", {
    spaceBetween: 20,
    speed: 1000,
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".testimonial-slider-two", {
    spaceBetween: 50,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiperThumb,
    },
  });

  // Testimonial slider area end here ***

  $(".hover-item").on("mouseenter", function () {
    $(".hover-item").removeClass("active");
    $(this).addClass("active");
  });

  // Mobile Menu Icon Toggle
  $(".navbar-toggler").on("click", function () {
    var icon = $(this).find("i");
    if (icon.hasClass("fa-bars")) {
      icon.removeClass("fa-bars").addClass("fa-times");
    } else {
      icon.removeClass("fa-times").addClass("fa-bars");
    }
  });
})(jQuery);
