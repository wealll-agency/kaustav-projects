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

  // Sections background image from data background
    var pageSection = $(".bg-img");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

  $('.slider-fade .owl-carousel').owlCarousel({
            items: 1, 
            loop: true, 
            dots: false, 
            margin: 0, 
            autoplay: false,
            autoplayTimeout: 5000, 
            animateOut: 'fadeOut',
             nav: true, 
             navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>']
        });
        
  // Popup JS
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

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


// Feedback Wrap JS
	$('.feedback-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		items:1,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
	});


$(document).ready(function() {
  
    counter();

});

//   Whatsapp chat box


    const phoneNumber = "8617391109";
 

    const defaultMessage = "Hello, I'm interested in your makeup services. Could you please share more details?"; // prefilled message

    // Builds a WhatsApp link compatible with mobile & web
    function makeWhatsAppLink(phone, text){
      const encoded = encodeURIComponent(text || "");
      // Use wa.me link ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â works on mobile and desktop (opens WhatsApp Web if available)
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