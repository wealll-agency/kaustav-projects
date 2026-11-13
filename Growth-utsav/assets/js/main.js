(function () {
  "use strict";

  /**
   * Mobile nav toggle
   */


  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    mobileNavToggleBtn.classList.toggle('fa-bars');
    mobileNavToggleBtn.classList.toggle('fa-xmark');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
 

  // Event SLider

  $(".event-slider").owlCarousel({
    items: 3,
    margin: 30,
    loop: false,
    dots: true,
    nav: true,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
    onInitialized: numberDots,
    onTranslated: numberDots,
  });

  function numberDots(event) {
    $(".owl-dots .owl-dot").each(function (index) {
      $(this).html(`<span>${index + 1}</span>`);
    });
  }

  // Partner SLider

  $(".partner-carousel").owlCarousel({
    items: 5,
    margin: 20,
    loop: false,
    dots: true,
    autoplay: true,
    nav: true,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsive: {
      0: { items: 2 },
      768: { items: 3 },
      1024: { items: 4 },
      1200: { items: 5 },
    },
  });

  // Client Review Slider

  $(".review_carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    autoplay: true,
    margin: 15,
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

  // Lightbox Js

  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  // Partner Swipper SLider

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

   // Count
    $('.count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 1000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


})();
