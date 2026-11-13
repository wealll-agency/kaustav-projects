(function () {
  "use strict";

  // Mean Menu JS
  jQuery(".mean-menu").meanmenu({
    meanScreenWidth: "991",
  });

  // Header Sticky JS
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
      $(".navbar-area").addClass("is-sticky");
    } else {
      $(".navbar-area").removeClass("is-sticky");
    }
  });

  // Others Option For Responsive JS
  $(".others-option-for-responsive .dot-menu").on("click", function () {
    $(".others-option-for-responsive .container .container").toggleClass(
      "active"
    );
  });

  // Collection SLider

  $(".collection_slider").owlCarousel({
    nav: false,
    dots: false,
    loop: true,
    margin: 25,
    smartSpeed: 1300,
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3.4,
      },
      1200: {
        items: 4.4,
      },
    },
  });

  /*===================================*
	 PRODUCT COLOR JS
	*===================================*/
  function product_color_switch() {
    $(".product_color_switch span").each(function () {
      var get_color = $(this).attr("data-color");
      $(this).css("background-color", get_color);
    });

    $(".product_color_switch span,.product_size_switch span").on(
      "click",
      function () {
        $(this).siblings(this).removeClass("active").end().addClass("active");
      }
    );
  }

  product_color_switch();

  // Testimonials carousel

  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 2000,
    margin: 30,
    loop: true,
    dots: true,
    nav: false,
    responsiveClass: true,
    autoHeight: true,

     responsive:{
        0:{
            items:1
        },
        768:{
            items:2   
        },
        1200:{
            items:2   
        }
    }

  });


  /*-----------------------------------
      Shop List-grid js
     -------------------------------------*/
    function grid_options() {

        $('.grid-2').on('click', function() {
            $(".product-options").removeClass("col-md-4").addClass("col-md-6");
        });
        $('.grid-3').on('click', function() {
            $(".product-options").removeClass("col-md-6 col-md-3").addClass("col-md-4");
        });
        $('.grid-4').on('click', function() {
            $(".product-options").removeClass("col-md-6 col-md-4").addClass("col-md-3");
        });

        var contentwidth = $(window).width();
        if (contentwidth < "1199") {
            $(".grid-options .grid-4").addClass("active");
        }
        if (contentwidth < "991") {
            $(".grid-options .grid-3").addClass("active");
        }
        if (contentwidth < "767") {
            $(".grid-options .grid-2").addClass("active");
        }

        $(".grid-options .icon-mode").click(function() {
            $(".grid-options .icon-mode.active").removeClass("active");
            $(this).addClass("active");
        });
    }
    grid_options();
    


const radios = document.querySelectorAll('input[name="saree-type"]');
const sections = document.querySelectorAll('.saree-content');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    sections.forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(`${radio.id}-content`);
    if (target) target.classList.add('active');
  });
});


/*------------------------------------
  HT LightSlider
--------------------------------------*/
function lightSlider() {
   $('#imageGallery').lightSlider({
    gallery:true,
    item:1,
    verticalHeight:450,
    thumbItem:5,
    slideMargin:0,
    speed:600,
    autoplay: true,
  });  

   $('[data-bs-toggle="tooltip"]').tooltip()
};


/*------------------------------------
  HT btnproduct
--------------------------------------*/
function btnproduct() {
  $('.btn-product-up').on('click', function (e) {
    e.preventDefault();
    var numProduct = Number($(this).next().val());
    if (numProduct > 1) $(this).next().val(numProduct - 1);
  });
  $('.btn-product-down').on('click', function (e) {
    e.preventDefault();
    var numProduct = Number($(this).prev().val());
    $(this).prev().val(numProduct + 1);
  }); 
};

$(document).ready(function() {
    lightSlider();
    btnproduct();

    function updateSidebar(step){
      if(step === 1){
        $("#checkout-btn").removeClass("hidden");
        $(".view-cart-text").hide();
      } else {
        $("#checkout-btn").addClass("hidden");
        $(".view-cart-text").show();
      }
    }

    function goToStep(stepNumber){
      $(".step-content").addClass("hidden");
      $("#step-" + stepNumber).removeClass("hidden");

      $(".step").removeClass("active completed");
      for(let i = 1; i <= 4; i++){
        if(i < stepNumber) $(".step[data-step='"+i+"']").addClass("completed");
        if(i === stepNumber) $(".step[data-step='"+i+"']").addClass("active");
      }

      updateSidebar(stepNumber);
    }

    // Checkout Button -> Next Step
    $("#checkout-btn, #payment-btn, #make_payment_btn").click(function(){
      let currentStep = $(".step.active").data("step");
      if(currentStep < 4){
        goToStep(currentStep + 1);
      }

   

      if(currentStep >= 1){
        $('.summary-item').show();
      }
      
    });



    // View Cart -> Back to Step 1
    $(".view-cart-text").click(function(){
      goToStep(1);
    });

    // Initialize on step 1
    goToStep(1);


});


// Toggle dropdown sections
    document.querySelectorAll(".section-title").forEach(title => {
      title.addEventListener("click", () => {
        title.classList.toggle("active");
        title.nextElementSibling.classList.toggle("active");
      });
    });

    // Fabric selection toggle
    document.querySelectorAll(".fabric-item").forEach(item => {
      item.addEventListener("click", () => {
        document.querySelectorAll(".fabric-item").forEach(i => i.classList.remove("active"));
        item.classList.add("active");
      });
    });

    // Reset button
    document.querySelector(".reset-btn").addEventListener("click", () => {
      document.querySelectorAll("input[type='checkbox']").forEach(c => (c.checked = false));
      document.querySelectorAll(".fabric-item").forEach(i => i.classList.remove("active"));
      alert("Filters reset!");
    });


    const range = document.getElementById("customRange");
  range.addEventListener("input", function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #5b0000 ${value}%, #c0c0c0 ${value}%)`;
  document.getElementById('currentvalue').innerHTML = `₹${value}`
});



})();
