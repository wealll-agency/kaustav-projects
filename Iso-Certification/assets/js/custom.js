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


  // Home Slides
	$('.home-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		items: 1,
		smartSpeed: 100,
		autoplay: false,
		navText: [
			'<i class="fa-solid fa-angle-left"></i>',
			'<i class="fa-solid fa-angle-right"></i>'
		],
	});
	
	$(".home-slides").on("translate.owl.carousel", function(){
		$(".main-slider-content h1").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
		$(".main-slider-content span").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
		$(".main-slider-content a").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
	});
	$(".home-slides").on("translated.owl.carousel", function(){
		$(".main-slider-content h1").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
		$(".main-slider-content span").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
		$(".main-slider-content a").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
	});


})();
