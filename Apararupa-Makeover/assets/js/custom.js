(function ($) {
  "use strict";

  // Init AOS Animation
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out",
  });

  // Hero Slider
  $(".full-hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    smartSpeed: 1500,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
  });

  // Navbar Sticky
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".luxury-header").addClass("scrolled");
    } else {
      $(".luxury-header").removeClass("scrolled");
    }
  });

  // Counter Animation
  const counters = document.querySelectorAll(".counter-value");
  let hasCounted = false;

  const animateCounters = () => {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const duration = 2000; // ms
      const increment = target / (duration / 16);

      let currentCount = 0;

      const updateCounter = () => {
        currentCount += increment;
        if (currentCount < target) {
          counter.innerText = Math.ceil(currentCount);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  };

  const counterSection = document.querySelector(".counter-section");
  if (counterSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Trigger when at least 30% of the section is visible
        if (entry.isIntersecting && !hasCounted) {
          animateCounters();
          hasCounted = true;
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(counterSection);
  }

  // Makeup Diaries Carousel
  var diariesOwl = $(".diaries-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
  });

  // Custom Navigation for Diaries
  $(".diaries-next").click(function () {
    diariesOwl.trigger("next.owl.carousel");
  });
  $(".diaries-prev").click(function () {
    diariesOwl.trigger("prev.owl.carousel", [300]);
  });

  // Align Full-Width Slider with Container
  function alignSlider() {
    var container = $(".diaries-section .container");
    if (container.length) {
      var offset =
        container.offset().left + parseFloat(container.css("padding-left"));
      $(".diaries-slider-container").css("padding-left", offset + "px");
    }
  }
  alignSlider();
  $(window).on("resize", alignSlider);

  // Client Stories Carousel
  var storiesOwl = $(".stories-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    items: 1,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    responsive: {
      0: {
        margin: 0,
      },
      768: {
        margin: 12,
      },
    },
  });

  $(".story-next").click(function () {
    storiesOwl.trigger("next.owl.carousel");
  });
  $(".story-prev").click(function () {
    storiesOwl.trigger("prev.owl.carousel", [300]);
  });

  // Service Tabs Carousel Initialization
  var serviceTabsOwl = $(".service-tabs-carousel").owlCarousel({
    loop: false,
    margin: 15,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    dots: false,
    responsive: {
      0: { items: 2 },
      576: { items: 3 },
      992: { items: 4 },
      1200: { items: 6 },
    },
  });

  // Dynamic Service Tabs Logic
  const serviceData = {
    bridal: {
      subtitle: "SIGNATURE SERVICE",
      title: "Bridal Makeup Excellence",
      desc: "At Aparupa Makeover, we are dedicated to enhancing natural beauty through professional artistry, innovative techniques, and personalized services. We aim to inspire confidence in our clients on their most special days.",
      desc2:
        "Aparupa, the leading makeup artist, is an expert for Bridal makeups. She trusts in delivering excellence without negotiating with the standards and ethics.",
      img: "assets/images/portfolio2.jpg",
      galleryTitle: "Glimpses of Bridal Excellence",
      gallery: [
        "assets/images/portfolio1.jpg",
        "assets/images/portfolio2.jpg",
        "assets/images/portfolio3.jpg",
        "assets/images/portfolio4.jpg",
      ],
    },
    editorial: {
      subtitle: "HIGH FASHION",
      title: "Editorial & Fashion",
      desc: "Make a striking statement with our high-fashion makeup services designed for photo shoots, runway shows, and editorial spreads.",
      desc2:
        "We specialize in bold, avant-garde looks and flawless camera-ready finishes that translate perfectly in front of the lens.",
      img: "assets/images/about_img2.jpg",
      galleryTitle: "Editorial Spotlights",
      gallery: [
        "assets/images/portfolio5.jpg",
        "assets/images/banner_image1.webp",
        "assets/images/portfolio3.jpg",
        "assets/images/portfolio1.jpg",
      ],
    },
    party: {
      subtitle: "GLAMOUR & STYLE",
      title: "Party & Event Makeup",
      desc: "Turn heads at any event with our customized party makeup services. We design looks that perfectly match your outfit, event theme, and personal style.",
      desc2:
        "From subtle elegance to bold and dramatic, our team ensures you look stunning and photo-ready throughout the entire celebration.",
      img: "assets/images/portfolio1.jpg",
      galleryTitle: "Party Glamour Looks",
      gallery: [
        "assets/images/portfolio2.jpg",
        "assets/images/portfolio4.jpg",
        "assets/images/portfolio5.jpg",
        "assets/images/banner_image2.webp",
      ],
    },
    airbrush: {
      subtitle: "FLAWLESS FINISH",
      title: "Airbrush Makeup",
      desc: "Experience the ultimate flawless base with our premium airbrush makeup. It's incredibly lightweight, waterproof, and lasts for up to 16 hours.",
      desc2:
        "Perfect for high-definition photography, airbrushing gives you a porcelain-smooth finish that feels like a second skin.",
      img: "assets/images/banner_image1.webp",
      galleryTitle: "Airbrush Masterpieces",
      gallery: [
        "assets/images/portfolio1.jpg",
        "assets/images/portfolio3.jpg",
        "assets/images/portfolio4.jpg",
        "assets/images/about_img1.jpg",
      ],
    },
    hd: {
      subtitle: "CAMERA READY",
      title: "HD Makeup",
      desc: "High Definition makeup uses specialized products that scatter light, creating an impeccably smooth finish even under the harshest cameras.",
      desc2:
        "Ideal for brides and celebrities, this technique hides every flaw while maintaining a natural, non-cakey appearance.",
      img: "assets/images/about_img1.jpg",
      galleryTitle: "HD Beauty Perfection",
      gallery: [
        "assets/images/portfolio5.jpg",
        "assets/images/portfolio2.jpg",
        "assets/images/banner_image2.webp",
        "assets/images/portfolio1.jpg",
      ],
    },
    hair: {
      subtitle: "EXPERT CRAFTSMANSHIP",
      title: "Bespoke Hair Styling",
      desc: "Complete your look with masterful hair styling. From elegant traditional updos to modern flowing waves, our experts craft the perfect hairstyle.",
      desc2:
        "We use premium products and techniques to ensure your hair stays perfectly in place and looks incredibly voluminous all day long.",
      img: "assets/images/portfolio3.jpg",
      galleryTitle: "Hair Styling Artistry",
      gallery: [
        "assets/images/portfolio3.jpg",
        "assets/images/portfolio4.jpg",
        "assets/images/about_img2.jpg",
        "assets/images/portfolio1.jpg",
      ],
    },
    saree: {
      subtitle: "THE PERFECT SILHOUETTE",
      title: "Expert Saree Draping",
      desc: "Mastering the art of the perfect fold. We offer specialized saree draping in various traditional and modern styles to suit your body type.",
      desc2:
        "Whether it's a classic Bengali style, a modern pleat, or a complex lehenga drape, we ensure you stay comfortable and look regal.",
      img: "assets/images/banner_image2.webp",
      galleryTitle: "Saree Draping Elegance",
      gallery: [
        "assets/images/portfolio2.jpg",
        "assets/images/banner_image1.webp",
        "assets/images/portfolio4.jpg",
        "assets/images/portfolio5.jpg",
      ],
    },
  };

  $(".service-tab-card").on("click", function () {
    if ($(this).hasClass("active")) return;

    // Update active state on tabs
    $(".service-tab-card").removeClass("active");
    $(this).addClass("active");

    const serviceKey = $(this).data("service");
    const data = serviceData[serviceKey];
    const wrapper = $("#service-fade-wrapper");
    const galleryWrapper = $("#service-gallery-wrapper");

    // Fade out content
    wrapper.addClass("fade-out");
    galleryWrapper.addClass("fade-out");

    // Wait for fade out, then update and fade in
    setTimeout(function () {
      // Update main showcase
      $("#dynamic-service-img").attr("src", data.img);
      $("#dynamic-service-subtitle").text(data.subtitle);
      $("#dynamic-service-title").text(data.title);
      $("#dynamic-service-desc").text(data.desc);
      $("#dynamic-service-desc2").text(data.desc2);

      // Update gallery
      $("#dynamic-gallery-title").text(data.galleryTitle);
      let galleryHtml = "";
      data.gallery.forEach((imgSrc) => {
        galleryHtml += `
                  <div class="col-6 col-md-3">
                      <img src="${imgSrc}" class="img-fluid rounded gallery-img shadow" alt="Gallery">
                  </div>
              `;
      });
      $("#dynamic-gallery-images").html(galleryHtml);

      wrapper.removeClass("fade-out");
      galleryWrapper.removeClass("fade-out");
    }, 500);
  });
})(jQuery);

// Portfolio Filtering
$(".filter-btn").click(function () {
  var value = $(this).attr("data-filter");

  if (value == "all") {
    $(".portfolio-item").show(400);
  } else {
    $(".portfolio-item")
      .not("." + value)
      .hide(400);
    $(".portfolio-item")
      .filter("." + value)
      .show(400);
  }

  $(".filter-btn").removeClass("active");
  $(this).addClass("active");
});

// Portfolio Lightbox
var lightbox = document.getElementById("portfolioLightbox");
var lightboxImg = document.getElementById("lightboxImg");

$(".portfolio-item").click(function () {
  var imgSrc = $(this).find("img").attr("src");
  lightbox.style.display = "block";
  lightboxImg.src = imgSrc;
  $("body").css("overflow", "hidden"); // Prevent scrolling
});

$(".lightbox-close").click(function () {
  lightbox.style.display = "none";
  $("body").css("overflow", "auto");
});

$(window).click(function (event) {
  if (event.target == lightbox) {
    lightbox.style.display = "none";
    $("body").css("overflow", "auto");
  }
});

//   Whatsapp chat box

//   Whatsapp chat box

const phoneNumber = "918317828976";

const defaultMessage =
  "Hello Team, I'm interested in your makeup services. Could you please share more details?"; // prefilled message

// Builds a WhatsApp link compatible with mobile & web
function makeWhatsAppLink(phone, text) {
  const encoded = encodeURIComponent(text || "");
  return "https://wa.me/" + phone + (encoded ? "?text=" + encoded : "");
}

// set href on the button
const btn = document.getElementById("whatsapp-btn");
if (btn) {
  btn.href = makeWhatsAppLink(phoneNumber, defaultMessage);
  // optional: open in new window for desktop
  btn.target = "_blank";
}

const form = document.getElementById("luxury-contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.name.value || "Guest";
    const email = form.email.value || "";
    const phone = form.phone.value || "";
    const service = form.service.value || "";
    const message = form.message.value || "";

    const text = encodeURIComponent(
      `Hello Apararupa Makeover,
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}`,
    );

    window.open(`https://wa.me/918317828976?text=${text}`, "_blank");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("academy-enrollment-form");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.name2.value.trim() || "Guest";

    const mobile = form.mobileno.value.trim();

    const whatsapp = form.whatsappno.value.trim();

    const course = form.course.options[form.course.selectedIndex].text;

    const address = form.address.value.trim();

    const text = encodeURIComponent(
      `Hello Aparupa Makeover,

Name: ${name}
Mobile: ${mobile}
WhatsApp: ${whatsapp}
Course: ${course}
Address: ${address}`,
    );

    window.open(`https://wa.me/918317828976?text=${text}`, "_blank");
  });
});
