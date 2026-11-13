(function () {
  "use strict";

/**
   * Initiate Pure Counter
   */
  new PureCounter();


  $('.our_partner').owlCarousel({
	loop: true,
	margin: 10,
	autoplay: true,
    dots: true,
	nav: true,
    navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
	responsive: {
		0: {
			items: 2
		},
		600: {
			items: 3
		},
		1000: {
			items: 6
		}
	}
});


$('.event_carousel').owlCarousel({
	loop: true,
	margin: 10,
	autoplay: true,
    dots: true,
	nav: true,
    navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 2
		},
		1000: {
			items: 4
		}
	}
});


  })();