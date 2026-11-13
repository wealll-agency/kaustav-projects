(function ($) {
  "use strict";

  // Home Slides
  $(".home-slides").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: "fadeOut",
    animateIn: "zoomIn",
    smartSpeed: 1000,
    items: 1,
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa-solid fa-chevron-right'></i>",
    ],
  });
  // Custom JS

  // Filter Sidebar Logic
  document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Toggle
    const filterBtn = document.getElementById("filterBtn");
    const closeFilterBtn = document.getElementById("closeFilterBtn");
    const filterSidebar = document.getElementById("filterSidebar");
    const filterOverlay = document.getElementById("filterOverlay");

    if (filterBtn && filterSidebar && filterOverlay) {
      filterBtn.addEventListener("click", function () {
        filterSidebar.classList.add("active");
        filterOverlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scrolling
      });

      function closeSidebar() {
        filterSidebar.classList.remove("active");
        filterOverlay.classList.remove("active");
        document.body.style.overflow = "auto";
      }

      closeFilterBtn.addEventListener("click", closeSidebar);
      filterOverlay.addEventListener("click", closeSidebar);
    }

    // Filter Accordion Logic
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const item = this.parentElement;
        item.classList.toggle("active");
      });
    });

    // Price Range Slider Logic
    const minSlider = document.getElementById("minPriceRange");
    const maxSlider = document.getElementById("maxPriceRange");
    const minInput = document.getElementById("minPriceInput");
    const maxInput = document.getElementById("maxPriceInput");
    const sliderTrack = document.querySelector(".slider-track");
    const sliderMaxValue = parseInt(minSlider.max);

    if (minSlider && maxSlider && minInput && maxInput && sliderTrack) {
      function slideMin() {
        let gap = 100;
        if (parseInt(maxSlider.value) - parseInt(minSlider.value) <= gap) {
          minSlider.value = parseInt(maxSlider.value) - gap;
        }
        minInput.value = minSlider.value;
        fillColor();
      }

      function slideMax() {
        let gap = 100;
        if (parseInt(maxSlider.value) - parseInt(minSlider.value) <= gap) {
          maxSlider.value = parseInt(minSlider.value) + gap;
        }
        maxInput.value = maxSlider.value;
        fillColor();
      }

      function setMinInput() {
        let minPrice = parseInt(minInput.value);
        if (minPrice < 0) {
          minInput.value = 0;
          minPrice = 0;
        }
        if (minPrice > parseInt(maxSlider.value) - 100) {
          minInput.value = parseInt(maxSlider.value) - 100;
          minPrice = parseInt(maxSlider.value) - 100;
        }
        minSlider.value = minPrice;
        fillColor();
      }

      function setMaxInput() {
        let maxPrice = parseInt(maxInput.value);
        if (maxPrice > sliderMaxValue) {
          maxInput.value = sliderMaxValue;
          maxPrice = sliderMaxValue;
        }
        if (maxPrice < parseInt(minSlider.value) + 100) {
          maxInput.value = parseInt(minSlider.value) + 100;
          maxPrice = parseInt(minSlider.value) + 100;
        }
        maxSlider.value = maxPrice;
        fillColor();
      }

      function fillColor() {
        let percent1 = (minSlider.value / sliderMaxValue) * 100;
        let percent2 = (maxSlider.value / sliderMaxValue) * 100;
        // Simplified track styling: Grey background, Black selected range
        sliderTrack.style.background = `linear-gradient(to right, #ddd ${percent1}%, #000 ${percent1}%, #000 ${percent2}%, #ddd ${percent2}%)`;
      }

      // Event Listeners
      minSlider.addEventListener("input", slideMin);
      maxSlider.addEventListener("input", slideMax);
      minInput.addEventListener("change", setMinInput);
      maxInput.addEventListener("change", setMaxInput);

      // Initialize
      fillColor();
    }

    // Sort Dropdown Logic
    const sortBtn = document.getElementById("sortBtn");
    const sortDropdown = document.getElementById("sortDropdown");
    const sortLabel = document.getElementById("sortLabel");
    const sortOptions = document.querySelectorAll(".sort-dropdown li");
    const productGrid = document.querySelector(".product-grid-area .row");

    if (sortBtn && sortDropdown && productGrid) {
      // Toggle Dropdown
      sortBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        sortDropdown.classList.toggle("active");
      });

      // Close when clicking outside
      document.addEventListener("click", function (e) {
        if (!sortBtn.contains(e.target) && !sortDropdown.contains(e.target)) {
          sortDropdown.classList.remove("active");
        }
      });

      // Store initial order
      const originalProducts = Array.from(productGrid.children);

      // Sorting Function
      function sortProducts(criteria) {
        const products = Array.from(productGrid.children);

        let sortedProducts;

        switch (criteria) {
          case "featured":
            sortedProducts = originalProducts; // Restore original order
            break;
          case "best-selling":
            // Sort by rating count (e.g., "| 14832")
            sortedProducts = products.sort((a, b) => {
              const getCount = (el) => {
                const text = el.querySelector(".rating")?.innerText || "0";
                return parseInt(text.split("|")[1]?.trim() || "0");
              };
              return getCount(b) - getCount(a);
            });
            break;
          case "alpha-asc":
            sortedProducts = products.sort((a, b) => {
              const getName = (el) =>
                el.querySelector("h3 a")?.innerText.toLowerCase() || "";
              return getName(a).localeCompare(getName(b));
            });
            break;
          case "alpha-desc":
            sortedProducts = products.sort((a, b) => {
              const getName = (el) =>
                el.querySelector("h3 a")?.innerText.toLowerCase() || "";
              return getName(b).localeCompare(getName(a));
            });
            break;
          case "price-asc":
            sortedProducts = products.sort((a, b) => {
              const getPrice = (el) => {
                const text =
                  el
                    .querySelector(".new-price")
                    ?.innerText.replace(/[^0-9.]/g, "") || "0";
                return parseFloat(text);
              };
              return getPrice(a) - getPrice(b);
            });
            break;
          case "price-desc":
            sortedProducts = products.sort((a, b) => {
              const getPrice = (el) => {
                const text =
                  el
                    .querySelector(".new-price")
                    ?.innerText.replace(/[^0-9.]/g, "") || "0";
                return parseFloat(text);
              };
              return getPrice(b) - getPrice(a);
            });
            break;
          case "date-asc":
            // Reverse original order (assuming new to old was default)
            sortedProducts = [...originalProducts].reverse();
            break;
          case "date-desc":
            // Assume original order is new to old
            sortedProducts = originalProducts;
            break;
          default:
            sortedProducts = originalProducts;
        }

        // Re-append sorted products
        productGrid.innerHTML = "";
        sortedProducts.forEach((product) => productGrid.appendChild(product));
      }

      // Handle Option Click
      sortOptions.forEach((option) => {
        option.addEventListener("click", function () {
          // Update Active State
          sortOptions.forEach((opt) => {
            opt.classList.remove("active");
          });
          this.classList.add("active");

          // Update Label
          const selectedText = this.firstChild.textContent.trim();
          sortLabel.innerText = "Sort by: " + selectedText;

          // Close Dropdown
          sortDropdown.classList.remove("active");

          // Trigger Sort
          const sortType = this.getAttribute("data-sort");
          sortProducts(sortType);
        });
      });
    }
  });
  // Best Seller Slides
  $(".best-seller-slides").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa-solid fa-chevron-right'></i>",
    ],
    navContainer: ".bestseller-nav-container",
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Video Slides (Instagram Reels)
  $(".video-slides").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true, // Enable autoplay as requested
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    margin: 30,
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa-solid fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Combo Slides
  $(".combo-slides").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa-solid fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Related Products Slides
  $(".related-products-slides").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Single Product Page Logic (Exposed to Global Scope for inline onclicks)
  window.changeImage = function (src, thumb) {
    // Change Main Image
    const mainImg = document.getElementById("mainImage");
    if (mainImg) mainImg.src = src;

    // Update Active Thumbnail
    document
      .querySelectorAll(".thumb-item")
      .forEach((el) => el.classList.remove("active"));
    if (thumb) thumb.classList.add("active");
  };

  window.increaseQty = function () {
    const input = document.getElementById("qtyInput");
    if (input) {
      let value = parseInt(input.value);
      value = isNaN(value) ? 1 : value;
      input.value = value + 1;
    }
  };

  window.decreaseQty = function () {
    const input = document.getElementById("qtyInput");
    if (input) {
      let value = parseInt(input.value);
      value = isNaN(value) ? 1 : value;
      if (value > 1) {
        input.value = value - 1;
      }
    }
  };

  // Zoom & Slider Logic (New Implementation)
  document.addEventListener("DOMContentLoaded", function () {
    const imageArea = document.getElementById("imageArea");
    const mainImage = document.getElementById("mainImage");
    const lens = document.getElementById("zoomLens");
    const result = document.getElementById("zoomResult");
    const thumbPrev = document.getElementById("thumbPrev");
    const thumbNext = document.getElementById("thumbNext");
    const thumbWrapper = document.getElementById("thumbWrapper");

    // Zoom Effect
    if (imageArea && mainImage && lens && result) {
      let cx, cy;

      function initZoom() {
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        result.style.backgroundImage = "url('" + mainImage.src + "')";
        result.style.backgroundSize =
          mainImage.offsetWidth * cx +
          "px " +
          mainImage.offsetHeight * cy +
          "px";
      }

      // Update on mouse enter (to ensure dimensions are correct)
      imageArea.addEventListener("mouseenter", function () {
        lens.style.display = "block";
        result.style.display = "block";
        initZoom();
      });

      imageArea.addEventListener("mouseleave", function () {
        lens.style.display = "none";
        result.style.display = "none";
      });

      imageArea.addEventListener("mousemove", function (e) {
        // Prevent default behavior to stop any weird scrolling
        e.preventDefault();

        const pos = getCursorPos(e);
        let x = pos.x - lens.offsetWidth / 2;
        let y = pos.y - lens.offsetHeight / 2;

        // Prevent lens from being outside image
        if (x > mainImage.offsetWidth - lens.offsetWidth) {
          x = mainImage.offsetWidth - lens.offsetWidth;
        }
        if (x < 0) {
          x = 0;
        }
        if (y > mainImage.offsetHeight - lens.offsetHeight) {
          y = mainImage.offsetHeight - lens.offsetHeight;
        }
        if (y < 0) {
          y = 0;
        }

        lens.style.left = x + "px";
        lens.style.top = y + "px";

        result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
      });

      function getCursorPos(e) {
        const a = imageArea.getBoundingClientRect();
        let x = e.pageX - a.left;
        let y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
      }

      // Observer to update zoom bg if image src changes via thumbnails
      const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "src"
          ) {
            result.style.backgroundImage = "url('" + mainImage.src + "')";
            initZoom();
          }
        });
      });
      observer.observe(mainImage, { attributes: true });
    }

    // Thumbnail Scrolling
    if (thumbWrapper && thumbPrev && thumbNext) {
      thumbPrev.addEventListener("click", () => {
        thumbWrapper.scrollBy({ left: -80, behavior: "smooth" });
      });
      thumbNext.addEventListener("click", () => {
        thumbWrapper.scrollBy({ left: 80, behavior: "smooth" });
      });
    }
  });

  // Dynamic Copyright Year
  document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("copyright-year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });
})(jQuery);
