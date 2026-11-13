(function() {
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

  $(".homeslider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      autoplayTimeout: 5000,
      animateOut: 'fadeOut',
      margin: 0,
      dots: false,
      nav: true,
      navText : [
            '<i class="fa-solid fa-arrow-left-long"></i>',
            '<i class="fa-solid fa-arrow-right-long"></i>'
        ],
      mouseDrag: false,
    });


    // Homepage Banner Slider Start


     jQuery(window).on('load', function() {
        if(jQuery('.main-swiper1').length > 0){
		var galleryThumbs1 = new Swiper(".main-swiper-thumb1", {
			spaceBetween: 0,
			slidesPerView: 1,
			loop:false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			autoplay: {
			   delay: 2500,
			}
		});
		var swiperSlider = new Swiper('.main-swiper1', {
			speed: 1500,
			parallax: true,
			loop:false,
			autoplay: {
			   delay: 3000,
			},
			pagination: {
			  el: ".swiper-pagination-slider1",
			  type: "progressbar",
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			thumbs: {
				swiper: galleryThumbs1
			}
		});
		
		function mainSliderPagination(){
			var swipertotalSlide = $('.main-swiper1 .swiper-slide').length;			
			var fragment = document.querySelector('.image-slider__current');
			var fragment2 = document.querySelector('.image-slider__total');
			var current = swiperSlider.realIndex + 1;
			if (current > swipertotalSlide)
			current = 1;
			var idx = current < 10 ? ("0" + current) : current;
			var tdx = swipertotalSlide < 10 ? ("0" + swipertotalSlide) : swipertotalSlide;
			fragment2.innerHTML = (tdx);
			fragment.innerHTML = (idx);
		}
		mainSliderPagination();
		swiperSlider.on('slideChange', function() {
			mainSliderPagination();
		});
		
		
	}
        });

    
  // Homepage Banner Slider End

    // Testimonial Slider JS

	$('.testimonial-slider').owlCarousel({
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


  // Testimonial 2

   if(jQuery('.testimonial-swiper4').length > 0){
		var swiperTestimonial4 = new Swiper('.testimonial-swiper4', {
			speed: 1500,
			parallax: true,
			slidesPerView: 1,
			spaceBetween: 0,
			loop:true,
			lazy: true,
			autoplay: {
			   delay: 3000,
			},
			pagination: {
				el: ".swiper-pagination4",
				type: "fraction",
			},
			navigation: {
				nextEl: '.swiper-button-next4',
				prevEl: '.swiper-button-prev4',
			},
		});
	}  


    /*------------------------------------
  HT Counter
--------------------------------------*/
function counter() {
  var elementSelector = $('.count-number');
    elementSelector.each(function(){
        elementSelector.appear(function(e) {
            var el = this;
            var updateData = $(el).attr("data-count");
            var od = new Odometer({
                el: el,
                format: 'd',
                duration: 5000
            });
            od.update(updateData);
        });
    });
};


var boxHover = function(){
		jQuery('.box-hover').on('mouseenter',function(){
			var selector = jQuery(this).parent().parent();
			selector.find('.box-hover').removeClass('active');
			jQuery(this).addClass('active');
		});
	}

$(document).ready(function() {
  
    counter();
    boxHover();

});

//   Whatsapp chat box


    const phoneNumber = "918101342311";
 

    const defaultMessage = "Hello, I'm interested in your makeup services. Could you please share more details?"; // prefilled message

    // Builds a WhatsApp link compatible with mobile & web
    function makeWhatsAppLink(phone, text){
      const encoded = encodeURIComponent(text || "");
      // Use wa.me link Ã¢â‚¬â€ works on mobile and desktop (opens WhatsApp Web if available)
      return "https://wa.me/" + phone + (encoded ? "?text=" + encoded : "");
    }

    // set href on the button
    const btn = document.getElementById("whatsapp-btn");
    if(btn){
      btn.href = makeWhatsAppLink(phoneNumber, defaultMessage);
      // optional: open in new window for desktop
      btn.target = "_blank";
    }




  })();