(function ($) {


  var owl = $(".collection-slider");
  owl.owlCarousel({
    loop: true,
    autoplay: true,
    margin: 5,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },

      1200: {
        items: 9,
      },
    },
  });

  var owl2 = $(".video-slider");
  owl2.owlCarousel({
    loop: true,
    autoplay: true,
    margin: 16,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      768: {
        items: 4,
      },

      1200: {
        items: 6,
      },
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

  $(".collapsible-header").click(function () {
    var content = $(this).next(".collapsible-content");
    var icon = $(this).find(".toggle-icon");

    content.slideToggle(200);

    // toggle + and -
    icon.text(icon.text() === "+" ? "–" : "+");
  });

  // Price Range Slider

  function getVals() {
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
      let tmp = slide2;
      slide2 = slide1;
      slide1 = tmp;
    }

    let displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = "₹" + slide1 + " - ₹" + slide2;
  }

  window.onload = function () {
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
    for (let x = 0; x < sliderSections.length; x++) {
      let sliders = sliderSections[x].getElementsByTagName("input");
      for (let y = 0; y < sliders.length; y++) {
        if (sliders[y].type === "range") {
          sliders[y].oninput = getVals;
          // Manually trigger event first time to display values
          sliders[y].oninput();
        }
      }
    }
  };

  // Product slider and zooming

  const $main = $("#mainImage");
  const $zoomResult = $("#zoomResult");
  const $zoomLens = $("#zoomLens");
  const $imageArea = $("#imageArea");
  const $thumbWrapper = $("#thumbWrapper");
  const $thumbs = $thumbWrapper.find(".thumb");

  // Thumbnail click
  $thumbWrapper.on("click", ".thumb", function () {
    $thumbs.removeClass("active");
    $(this).addClass("active");
    const big = $(this).data("large");
    $main.attr("src", big);
    $zoomResult.css("background-image", "url(" + big + ")");
  });

  // thumb scroll controls
  $("#thumbPrev").on("click", function () {
    $thumbWrapper.animate({ scrollLeft: "-=120" }, 220);
  });
  $("#thumbNext").on("click", function () {
    $thumbWrapper.animate({ scrollLeft: "+=120" }, 220);
  });

  // keyboard nav for thumbnail strip
  $(document).on("keydown", function (e) {
    if (e.key === "ArrowLeft") $("#thumbPrev").click();
    if (e.key === "ArrowRight") $("#thumbNext").click();
  });

  // qty buttons
  $("#increase").on("click", function () {
    $("#qty").val(Math.max(1, parseInt($("#qty").val() || 1) + 1));
  });
  $("#decrease").on("click", function () {
    $("#qty").val(Math.max(1, parseInt($("#qty").val() || 1) - 1));
  });

  // Magnifier zoom
  function setupZoom() {
    // initial background
    $zoomResult.css({
      "background-image": "url(" + $main.attr("src") + ")",
      "background-size": "200% auto",
    });

    // show/hide logic
    $imageArea.on("mouseenter", function () {
      if ($(window).width() < 992) return; // don't show zoom on small screens
      $zoomResult.show();
      $zoomLens.show();
      $zoomResult.css("background-image", "url(" + $main.attr("src") + ")");
    });

    $imageArea.on("mousemove", function (e) {
      if ($(window).width() < 992) return;
      const offset = $main.offset();
      const iw = $main.width();
      const ih = $main.height();
      const mx = e.pageX - offset.left;
      const my = e.pageY - offset.top;

      // hide if outside
      if (mx < 0 || my < 0 || mx > iw || my > ih) {
        $zoomLens.hide();
        $zoomResult.hide();
        return;
      } else {
        $zoomLens.show();
        $zoomResult.show();
      }

      // place lens (absolute to page)
      $zoomLens.css({ left: e.pageX + "px", top: e.pageY + "px" });

      // background position based on cursor percent
      const rx = (mx / iw) * 100;
      const ry = (my / ih) * 100;
      $zoomResult.css({
        "background-position": rx + "% " + ry + "%",
        "background-size": "200% auto",
      });
    });

    $imageArea.on("mouseleave", function () {
      $zoomLens.hide();
      $zoomResult.hide();
    });

    // update zoom image when main image changes
    $main.on("load", function () {
      $zoomResult.css("background-image", "url(" + $main.attr("src") + ")");
    });
  }

  setupZoom();

  // On small screens, clicking the image opens modal with full image
  $main.on("click", function () {
    if ($(window).width() < 992) {
      $("#modalImage").attr("src", $main.attr("src"));
      const modal = new bootstrap.Modal($("#imageModal"));
      modal.show();
    }
  });

  // On window resize hide lens/result to avoid stuck UI
  $(window).on("resize", function () {
    $zoomLens.hide();
    $zoomResult.hide();
  });

  // Initialize zoomResult image
  $zoomResult.css("background-image", "url(" + $main.attr("src") + ")");

  // Optional: make first thumbnail active correctly if main image changed by other means
  function syncActiveThumb() {
    const src = $main.attr("src");
    $thumbs.each(function () {
      $(this).toggleClass("active", $(this).data("large") === src);
    });
  }
  $main.on("load", syncActiveThumb);



  // Send Enquiry button whatsapp


  const whatsappNumber = "9123009784"; // Add country code (91 for India)

    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("send-whatsapp")) {

            const itemBox = e.target.closest(".item_grid");

            const name = itemBox.querySelector(".product-name").innerText.trim();
            const price = itemBox.querySelector(".product-price").innerText.trim();

            const message = `Hello, I want to enquire about:\n\n*${name}*\nPrice: ${price}\n\nPlease share more details.`;

            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(url, "_blank");
        }
    });




})(jQuery);
