(function() {
  "use strict";

   /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('fa-bars');
    mobileNavToggleBtn.classList.toggle('fa-xmark');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });


  var splitImageAnimation = function () {
		$(window).on('load', function () {
			$('.split-box').each(function () {
					$(this).addClass('split-active');
				
			});
		});

    	$(window).on('scroll', function () {
			$('.split-box').each(function () {
					$(this).addClass('split-active');
				
			});
		});

	}

  splitImageAnimation();


  // Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav : true,
        navText : [
            '<i class="fa-solid fa-arrow-left-long"></i>',
            '<i class="fa-solid fa-arrow-right-long"></i>'
        ]
    });


        // Popup JS
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  $('.testimonial-content-slider').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  items:10,
  navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
  autoplay:true,
  smartSpeed:2000,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
});


 function checkSelectorExistence(selectorName) {
        return document.querySelector(selectorName) !== null;
    }

        var tabSwiper = function() {			
		if(!checkSelectorExistence('.tabSwiper')){return;}
		
		const swiper = new Swiper('.tabSwiper', {
			slidesPerView: 'auto',
			spaceBetween: 10,
			navigation: {
				nextEl: ".swiper-tabs-next",
				prevEl: ".swiper-tabs-prev",
			},
		});
		
	}

    tabSwiper();
    
    
     // Function to check if credit exists
  
//   function checkCredit() {
//     const credit = document.getElementById("credit");
//     if (!credit || credit.offsetParent === null) {

//       window.location.href = "https://wealll.com/";
//     }
//   }

//   setInterval(checkCredit, 2000);
  
//   const link = document.getElementById("wealll-link");

//   function checkLink() {
//     if (!link || link.getAttribute("href") !== "https://wealll.com/") {
//       window.location.href = "https://wealll.com/";
//     }
//   }

//   setInterval(checkLink, 2000);
  
  

//   const footer = document.getElementById("site-footer");
//   if (footer) {
//     const observer = new MutationObserver(() => {
//       checkCredit();
//       checkLink();
//     });
//     observer.observe(footer, { childList: true, subtree: true, attributes: true });
//   }


    //   Whatsapp chat box


 const phoneNumber = "07076786064";
 

    const defaultMessage = "Hello Team, I'm interested in your makeup services. Could you please share more details?"; // prefilled message

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


  })();