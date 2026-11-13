/**
 * Kolkata Digital - High Converting Landing Page Scripts
 * Section 01: Hero & Header Interactions
 * Section 02: Trusted Brands Carousel
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // 1. SECTION 01: FORM FLOATING LABELS
  // ==========================================================================

  const formGroups = document.querySelectorAll(".input-wrapper");

  formGroups.forEach((wrapper) => {
    const input = wrapper.querySelector("input, select");

    if (!input) return;

    const updateState = () => {
      if (input.value && input.value.trim() !== "") {
        wrapper.classList.add("has-value");
      } else {
        wrapper.classList.remove("has-value");
      }
    };

    // Initial check
    updateState();

    input.addEventListener("input", updateState);

    input.addEventListener("change", updateState);

    input.addEventListener("focus", () => {
      wrapper.classList.add("is-focused");
    });

    input.addEventListener("blur", () => {
      wrapper.classList.remove("is-focused");
      updateState();
    });
  });

  // ==========================================================================
  // 2. SECTION 02: TRUSTED BRANDS CAROUSEL CONTROLLER
  // ==========================================================================
  const sliderViewport = document.getElementById("trustedSliderViewport");
  const mobileTrack = document.getElementById("trustedSliderTrackMobile");
  const prevBtn = document.getElementById("trustedPrevBtn");
  const nextBtn = document.getElementById("trustedNextBtn");
  const indicatorDots = document.querySelectorAll(
    "#trustedIndicators .indicator-dot",
  );

  if (sliderViewport && mobileTrack) {
    let currentIndex = 0;
    let autoSlideTimer = null;
    let autoSlideInterval = null;
    let isHovered = false;
    let touchStartX = 0;
    let touchEndX = 0;

    const getVisibleCount = () => {
      const width = window.innerWidth;
      if (width <= 480) return 2;
      return 3;
    };

    const getMaxIndex = () => {
      if (!mobileTrack) return 0;
      const total = mobileTrack.children.length;
      const visible = getVisibleCount();
      return Math.max(0, total - visible);
    };

    const getStepDistance = () => {
      if (!mobileTrack || mobileTrack.children.length < 2) return 0;
      const firstRect = mobileTrack.children[0].getBoundingClientRect();
      const secondRect = mobileTrack.children[1].getBoundingClientRect();
      return secondRect.left - firstRect.left;
    };

    const updateIndicators = () => {
      const maxIdx = getMaxIndex();
      const dotCount = indicatorDots.length;
      let activeDotIndex = 0;
      if (maxIdx > 0 && dotCount > 0) {
        activeDotIndex = Math.min(
          dotCount - 1,
          Math.round((currentIndex / maxIdx) * (dotCount - 1)),
        );
      }

      indicatorDots.forEach((dot, idx) => {
        const isActive = idx === activeDotIndex;
        dot.classList.toggle("active", isActive);
        dot.setAttribute("aria-selected", isActive ? "true" : "false");
      });
    };

    const goToSlide = (index) => {
      if (!mobileTrack) return;
      const maxIdx = getMaxIndex();
      if (index > maxIdx) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = maxIdx;
      } else {
        currentIndex = index;
      }

      const step = getStepDistance();
      const translateX = -(currentIndex * step);
      mobileTrack.style.transform = `translateX(${translateX}px)`;
      updateIndicators();
    };

    // Navigation Button Clicks
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const step = window.innerWidth <= 480 ? 2 : 2;
        goToSlide(currentIndex + step);
        restartTimer();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const step = window.innerWidth <= 480 ? 2 : 2;
        goToSlide(currentIndex - step);
        restartTimer();
      });
    }

    // Indicator Clicks
    indicatorDots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        const maxIdx = getMaxIndex();
        const dotCount = indicatorDots.length;
        const targetIndex = Math.round((idx / (dotCount - 1)) * maxIdx);
        goToSlide(targetIndex);
        restartTimer();
      });
    });

    // Auto slide functions
    const startTimer = (initialDelay = 4000) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      stopTimer();
      autoSlideTimer = setTimeout(() => {
        if (!isHovered && window.innerWidth <= 768) {
          goToSlide(currentIndex + 1);
        }
        autoSlideInterval = setInterval(() => {
          if (!isHovered && window.innerWidth <= 768) {
            goToSlide(currentIndex + 1);
          }
        }, 3500);
      }, initialDelay);
    };

    const stopTimer = () => {
      if (autoSlideTimer) {
        clearTimeout(autoSlideTimer);
        autoSlideTimer = null;
      }
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    };

    const restartTimer = () => {
      stopTimer();
      startTimer(5000);
    };

    // Pause on Hover & Focus
    const carouselContainer = document.querySelector(
      ".trusted-carousel-container",
    );
    if (carouselContainer) {
      carouselContainer.addEventListener("mouseenter", () => {
        isHovered = true;
      });
      carouselContainer.addEventListener("mouseleave", () => {
        isHovered = false;
      });
      carouselContainer.addEventListener("focusin", () => {
        isHovered = true;
      });
      carouselContainer.addEventListener("focusout", () => {
        isHovered = false;
      });
    }

    // Touch & Swipe gestures for Mobile
    sliderViewport.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
        isHovered = true;
      },
      { passive: true },
    );

    sliderViewport.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        isHovered = false;
        const diff = touchStartX - touchEndX;
        const threshold = 30;
        if (diff > threshold) {
          goToSlide(currentIndex + (window.innerWidth <= 480 ? 2 : 1));
        } else if (diff < -threshold) {
          goToSlide(currentIndex - (window.innerWidth <= 480 ? 2 : 1));
        }
        restartTimer();
      },
      { passive: true },
    );

    // Window resize repositioning
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (mobileTrack) {
          mobileTrack.style.transform = "translateX(0px)";
        }
        currentIndex = 0;
        goToSlide(0);
      }, 100);
    });

    // Initialize if on mobile
    if (window.innerWidth <= 768) {
      goToSlide(0);
      startTimer(3000);
    }
  }

  // ==========================================================================
  // 3. FAQ ACCORDION INTERACTION
  // ==========================================================================
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-question-btn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const isCurrentlyActive = item.classList.contains("active");

      // Close other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherBtn = otherItem.querySelector(".faq-question-btn");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });

      // Toggle clicked item
      if (isCurrentlyActive) {
        item.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // ==========================================================================
  // 4. SECTION 04: STATS AUTO-COUNTER ANIMATION
  // ==========================================================================
  const statsSection = document.querySelector(".stats-bar-section");
  const statNumbers = document.querySelectorAll(".stat-number");

  if (statsSection && statNumbers.length > 0) {
    let hasAnimated = false;

    const startCounting = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      const duration = 1800; // 1.8 seconds animation
      const startTime = performance.now();

      const items = Array.from(statNumbers).map((el) => {
        const target = parseFloat(el.getAttribute("data-target")) || 0;
        const decimals = parseInt(el.getAttribute("data-decimals"), 10) || 0;
        const suffix = el.getAttribute("data-suffix") || "";
        const prefix = el.getAttribute("data-prefix") || "";
        const useComma = el.getAttribute("data-comma") === "true";
        return { el, target, decimals, suffix, prefix, useComma };
      });

      const frame = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing: easeOutCubic
        const ease = 1 - Math.pow(1 - progress, 3);

        items.forEach(({ el, target, decimals, suffix, prefix, useComma }) => {
          const current = ease * target;
          let valStr =
            decimals > 0
              ? current.toFixed(decimals)
              : Math.floor(current).toString();
          if (useComma) {
            valStr = Number(valStr).toLocaleString("en-US");
          }
          el.textContent = `${prefix}${valStr}${suffix}`;
        });

        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          // Final exact values
          items.forEach(
            ({ el, target, decimals, suffix, prefix, useComma }) => {
              let valStr =
                decimals > 0 ? target.toFixed(decimals) : target.toString();
              if (useComma) {
                valStr = Number(valStr).toLocaleString("en-US");
              }
              el.textContent = `${prefix}${valStr}${suffix}`;
            },
          );
        }
      };

      requestAnimationFrame(frame);
    };

    if ("IntersectionObserver" in window) {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startCounting();
              statsObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 },
      );
      statsObserver.observe(statsSection);
    } else {
      startCounting();
    }
  }

  // ==========================================================================
  // 5. SECTION 06: TESTIMONIALS SLIDER & READ MORE/LESS TOGGLE
  // ==========================================================================
  const testiViewport = document.getElementById("testiViewport");
  const testiTrack = document.getElementById("testiTrack");
  const testiPrevBtn = document.getElementById("testiPrevBtn");
  const testiNextBtn = document.getElementById("testiNextBtn");
  const testiPrevBtnMobile = document.getElementById("testiPrevBtnMobile");
  const testiNextBtnMobile = document.getElementById("testiNextBtnMobile");
  const testiMobileContainer = document.getElementById("testiMobileContainer");

  // Read testimonials dynamically from the HTML so any added cards work automatically
  const extractTestimonialsFromDOM = () => {
    if (!testiTrack) return [];
    const originalCards = Array.from(
      testiTrack.querySelectorAll(".testimonial-card:not(.is-clone)"),
    );
    if (originalCards.length === 0) return [];
    return originalCards.map((card) => {
      const img = card.querySelector(".client-avatar");
      const name = card.querySelector(".client-name");
      const quote = card.querySelector(".testimonial-quote");
      return {
        avatar: img
          ? img.getAttribute("src")
          : "assets/images/testimonial1.jpeg",
        name: name ? name.textContent.trim() : "",
        quote: quote ? quote.innerHTML.trim() : "",
      };
    });
  };

  const testiData = extractTestimonialsFromDOM();

  let currentTestiIndex = 0;
  let testiAutoPlayTimer = null;
  let isTestiPaused = false;

  // Senior UI/UX Solution: 3-line clamp with independent "Read more" / "Read less" toggle
  const initReadMore = (scope = document) => {
    const cards = scope.querySelectorAll(".testimonial-card");
    cards.forEach((card) => {
      const quote = card.querySelector(".testimonial-quote");
      if (!quote) return;

      // Ensure card has natural height
      card.style.height = "";

      let btn = card.querySelector(".btn-read-more");

      // Initially ensure clamped state unless already expanded by user
      if (!quote.classList.contains("is-expanded")) {
        quote.classList.add("is-clamped");
      }

      // Check if content overflows 3 lines (3 lines is ~61px)
      const isExpanded = quote.classList.contains("is-expanded");
      const isOverflowing = isExpanded ? true : quote.scrollHeight > 64;

      if (isOverflowing || isExpanded) {
        if (!btn) {
          btn = document.createElement("button");
          btn.type = "button";
          btn.className = "btn-read-more";
          btn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
          btn.innerHTML = isExpanded
            ? '<span>Read less</span> <i class="fa-solid fa-chevron-up" style="font-size:9px;"></i>'
            : '<span>Read more</span> <i class="fa-solid fa-chevron-down" style="font-size:9px;"></i>';
          quote.insertAdjacentElement("afterend", btn);
        }
        btn.style.display = "inline-flex";

        btn.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          const currentlyExpanded = quote.classList.contains("is-expanded");
          if (currentlyExpanded) {
            // Collapse ONLY this specific card
            quote.classList.remove("is-expanded");
            quote.classList.add("is-clamped");
            btn.setAttribute("aria-expanded", "false");
            btn.innerHTML =
              '<span>Read more</span> <i class="fa-solid fa-chevron-down" style="font-size:9px;"></i>';
          } else {
            // Expand ONLY this specific card
            quote.classList.remove("is-clamped");
            quote.classList.add("is-expanded");
            btn.setAttribute("aria-expanded", "true");
            btn.innerHTML =
              '<span>Read less</span> <i class="fa-solid fa-chevron-up" style="font-size:9px;"></i>';
          }
        };
      } else if (btn) {
        btn.style.display = "none";
      }
    });
  };

  // --- Mobile Testimonial Card Renderer ---
  const renderMobileTesti = (index) => {
    if (!testiMobileContainer || !testiData[index]) return;
    const item = testiData[index];
    testiMobileContainer.innerHTML = `
      <div class="testimonial-card mobile-active-card" style="opacity: 0; transform: translateY(4px); transition: all 0.25s ease;">
          <div class="testimonial-card-top">
              <img src="${item.avatar}" alt="${item.name}" class="client-avatar" width="48" height="48">
              <div class="star-rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
              </div>
          </div>
          <p class="testimonial-quote is-clamped">${item.quote}</p>
          <div class="client-author">
              <h4 class="client-name">${item.name}</h4>
          </div>
      </div>
    `;

    initReadMore(testiMobileContainer);

    requestAnimationFrame(() => {
      const card = testiMobileContainer.querySelector(".testimonial-card");
      if (card) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });

    updateTestiDots(index);
  };

  // --- Update Indicators ---
  const getTestiDots = () =>
    document.querySelectorAll("#testiIndicators .indicator-dot");

  const updateTestiDots = (index) => {
    const dots = getTestiDots();
    dots.forEach((dot, idx) => {
      const isActive = idx === index % testiData.length;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  };

  // --- Desktop Slide Calculations ---
  // Clone cards to enable continuous infinite scroll on desktop
  if (testiTrack && testiTrack.children.length > 0) {
    const originalChildren = Array.from(testiTrack.children);
    originalChildren.slice(0, 3).forEach((child) => {
      const clone = child.cloneNode(true);
      clone.classList.add("is-clone");
      testiTrack.appendChild(clone);
    });
  }

  const getDesktopStep = () => {
    if (!testiTrack || testiTrack.children.length === 0) return 0;
    const first = testiTrack.children[0];
    return first.offsetWidth + 20; // 20px gap
  };

  const slideDesktop = (index, animated = true) => {
    if (!testiTrack) return;
    const step = getDesktopStep();
    if (!animated) {
      testiTrack.style.transition = "none";
    } else {
      testiTrack.style.transition =
        "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)";
    }
    testiTrack.style.transform = `translateX(-${index * step}px)`;
    updateTestiDots(index % testiData.length);
  };

  const goToTesti = (index) => {
    const total = testiData.length || 1;
    currentTestiIndex = (index + total) % total;

    if (window.innerWidth <= 768) {
      renderMobileTesti(currentTestiIndex);
    } else {
      slideDesktop(currentTestiIndex);
    }
  };

  const nextTesti = () => {
    const total = testiData.length || 1;
    if (window.innerWidth <= 768) {
      currentTestiIndex = (currentTestiIndex + 1) % total;
      renderMobileTesti(currentTestiIndex);
    } else {
      currentTestiIndex++;
      if (currentTestiIndex >= total) {
        slideDesktop(total, true);
        setTimeout(() => {
          currentTestiIndex = 0;
          slideDesktop(0, false);
        }, 460);
      } else {
        slideDesktop(currentTestiIndex, true);
      }
    }
    resetAutoPlay();
  };

  const prevTesti = () => {
    const total = testiData.length || 1;
    if (window.innerWidth <= 768) {
      currentTestiIndex = (currentTestiIndex - 1 + total) % total;
      renderMobileTesti(currentTestiIndex);
    } else {
      if (currentTestiIndex <= 0) {
        currentTestiIndex = total - 1;
        slideDesktop(currentTestiIndex, true);
      } else {
        currentTestiIndex--;
        slideDesktop(currentTestiIndex, true);
      }
    }
    resetAutoPlay();
  };

  // Click Listeners for Buttons
  if (testiNextBtn) testiNextBtn.addEventListener("click", nextTesti);
  if (testiPrevBtn) testiPrevBtn.addEventListener("click", prevTesti);
  if (testiNextBtnMobile)
    testiNextBtnMobile.addEventListener("click", nextTesti);
  if (testiPrevBtnMobile)
    testiPrevBtnMobile.addEventListener("click", prevTesti);

  // Click Listeners for Dots
  const attachDotListeners = () => {
    const dots = getTestiDots();
    dots.forEach((dot, idx) => {
      dot.onclick = () => {
        goToTesti(idx);
        resetAutoPlay();
      };
    });
  };
  attachDotListeners();

  // Mobile Touch Gestures
  let testiTouchStartX = 0;
  let testiTouchEndX = 0;
  if (testiMobileContainer) {
    testiMobileContainer.addEventListener(
      "touchstart",
      (e) => {
        testiTouchStartX = e.changedTouches[0].screenX;
        isTestiPaused = true;
      },
      { passive: true },
    );

    testiMobileContainer.addEventListener(
      "touchend",
      (e) => {
        testiTouchEndX = e.changedTouches[0].screenX;
        isTestiPaused = false;
        const diff = testiTouchStartX - testiTouchEndX;
        if (diff > 35) {
          nextTesti();
        } else if (diff < -35) {
          prevTesti();
        }
      },
      { passive: true },
    );
  }

  // Desktop Hover Pause
  const testiSection = document.querySelector(".testimonials-section");
  if (testiSection) {
    testiSection.addEventListener("mouseenter", () => {
      isTestiPaused = true;
    });
    testiSection.addEventListener("mouseleave", () => {
      isTestiPaused = false;
    });
  }

  // Auto-play interval (every 5 seconds)
  const startAutoPlay = () => {
    if (testiAutoPlayTimer) clearInterval(testiAutoPlayTimer);
    testiAutoPlayTimer = setInterval(() => {
      if (!isTestiPaused) {
        nextTesti();
      }
    }, 5000);
  };

  const resetAutoPlay = () => {
    clearInterval(testiAutoPlayTimer);
    startAutoPlay();
  };

  startAutoPlay();

  // Initial Read More
  initReadMore(document);

  // Resize handler
  window.addEventListener("resize", () => {
    initReadMore(document);
    if (window.innerWidth <= 768) {
      renderMobileTesti(currentTestiIndex);
    } else {
      slideDesktop(currentTestiIndex, false);
    }
  });

  // Re-check once fonts/images load
  window.addEventListener("load", () => {
    initReadMore(document);
  });

  // Initial render
  if (window.innerWidth <= 768) {
    renderMobileTesti(0);
  } else {
    slideDesktop(0, false);
    setTimeout(() => {
      initReadMore(document);
    }, 200);
  }

  // ==========================================================================
  // 6. DESKTOP STICKY PROMO BAR CLOSE
  // ==========================================================================
  const stickyCloseBtn = document.getElementById("btnStickyClose");
  const desktopStickyBar = document.getElementById("desktopStickyBar");
  if (stickyCloseBtn && desktopStickyBar) {
    stickyCloseBtn.addEventListener("click", () => {
      desktopStickyBar.style.display = "none";
    });
  }
});
