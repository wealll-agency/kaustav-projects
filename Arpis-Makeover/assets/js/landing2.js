/**
 * Mouparnaz Makeover - Self Makeup Course Landing Page JS
 * Handles Countdown Timer, FAQ Accordion, Sticky Footer Bar, and Checkout Modal
 */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // ==========================================
  // 1. Session Countdown Timer (1 Hour Offer)
  // ==========================================
  function initCountdownTimer() {
    var timerDuration = 60 * 60; // 1 hour in seconds
    var storageKey = "mouparnaz_landing_timer_1hr";
    var endTime = localStorage.getItem(storageKey);

    var now = Math.floor(Date.now() / 1000);

    if (
      !endTime ||
      parseInt(endTime, 10) <= now ||
      parseInt(endTime, 10) > now + timerDuration
    ) {
      endTime = now + timerDuration;
      localStorage.setItem(storageKey, endTime.toString());
    } else {
      endTime = parseInt(endTime, 10);
    }

    var hoursElem = document.getElementById("timer-hours");
    var minsElem = document.getElementById("timer-mins");
    var secsElem = document.getElementById("timer-secs");
    var stickyTimerElem = document.getElementById("sticky-timer-text");

    function updateTimer() {
      var currentTime = Math.floor(Date.now() / 1000);
      var remaining = endTime - currentTime;

      if (remaining <= 0) {
        // Reset timer loop for urgency persistence
        endTime = currentTime + timerDuration;
        localStorage.setItem(storageKey, endTime.toString());
        remaining = timerDuration;
      }

      var hours = Math.floor(remaining / 3600);
      var minutes = Math.floor((remaining % 3600) / 60);
      var seconds = remaining % 60;

      var hStr = hours < 10 ? "0" + hours : hours.toString();
      var mStr = minutes < 10 ? "0" + minutes : minutes.toString();
      var sStr = seconds < 10 ? "0" + seconds : seconds.toString();

      if (hoursElem) hoursElem.textContent = hStr;
      if (minsElem) minsElem.textContent = mStr;
      if (secsElem) secsElem.textContent = sStr;

      if (stickyTimerElem) {
        stickyTimerElem.textContent = hStr + ":" + mStr + ":" + sStr;
      }

      var marqueeTimers = document.querySelectorAll(".marquee-timer-text");
      var fullTimeStr = hStr + ":" + mStr + ":" + sStr;
      marqueeTimers.forEach(function (el) {
        el.textContent = fullTimeStr;
      });
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // ==========================================
  // 2. FAQ Accordion
  // ==========================================
  function initFaqAccordion() {
    var faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {
      var question = item.querySelector(".faq-question");
      if (!question) return;

      question.addEventListener("click", function () {
        var isActive = item.classList.contains("active");

        // Close other items
        faqItems.forEach(function (otherItem) {
          otherItem.classList.remove("active");
        });

        // Toggle clicked
        if (!isActive) {
          item.classList.add("active");
        }
      });
    });
  }

  // ==========================================
  // 3. Sticky Bottom Enroll Bar
  // ==========================================
  function initStickyFooter() {
    var stickyBar = document.getElementById("sticky-footer");
    var heroSection = document.getElementById("hero-section");

    if (!stickyBar || !heroSection) return;

    window.addEventListener("scroll", function () {
      var heroBottom = heroSection.getBoundingClientRect().bottom;

      if (heroBottom < 0) {
        stickyBar.style.transform = "translateY(0)";
      } else {
        stickyBar.style.transform = "translateY(120%)";
      }
    });
  }

  // ==========================================
  // 4. Enrollment Checkout Modal
  // ==========================================
  function initEnrollmentModal() {
    var modal = document.getElementById("enroll-modal");
    var openBtns = document.querySelectorAll(".trigger-enroll-modal");
    var closeBtn = document.getElementById("modal-close-btn");
    var enrollForm = document.getElementById("landing-enroll-form");

    if (!modal) return;

    function openModal() {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }

    openBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        openModal();
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
      }
    });

    if (enrollForm) {
      // Google Apps Script Web App URL for Mouparnaz Makeover Leeds
      var GOOGLE_SHEET_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbw7wEsD4TiDpm51jbQOB4Lkeyit88BltMjQHQc39gVLux0UPZ8O8amiJKnxIqyVoY4HAg/exec";

      enrollForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var nameInput = document.getElementById("student-name");
        var phoneInput = document.getElementById("student-phone");
        var addressInput = document.getElementById("student-address");
        var submitBtn = enrollForm.querySelector("button[type='submit']");

        var name = nameInput ? nameInput.value.trim() : "";
        var phone = phoneInput ? phoneInput.value.trim() : "";
        var address = addressInput ? addressInput.value.trim() : "";

        if (!name || !phone || !address) {
          alert("Please fill in your name, WhatsApp number, and Address.");
          return;
        }

        var originalBtnHtml = submitBtn ? submitBtn.innerHTML : "";
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> <span>SAVING YOUR SPOT...</span>';
        }

        var payload = {
          name: name,
          phone: phone,
          address: address,
          email: address, // fallback for Google Sheet column 3
        };

        // If user hasn't configured their Google Apps Script URL yet, fallback/alert
        if (
          !GOOGLE_SHEET_SCRIPT_URL ||
          GOOGLE_SHEET_SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"
        ) {
          console.warn(
            "Please replace GOOGLE_SHEET_SCRIPT_URL with your Apps Script Web App URL in landing.js",
          );
        }

        fetch(GOOGLE_SHEET_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then(function () {
            if (submitBtn) {
              submitBtn.innerHTML =
                '<i class="fa-solid fa-circle-check"></i> <span>ENROLLED SUCCESSFULLY!</span>';
              submitBtn.style.background =
                "linear-gradient(135deg, #2e7d32, #1b5e20)";
            }

            setTimeout(function () {
              alert(
                "🎉 Thank you, " +
                  name +
                  "! Your spot is reserved. We will reach out to your WhatsApp number (" +
                  phone +
                  ") shortly with access details.",
              );
              enrollForm.reset();
              if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
                submitBtn.style.background = "";
              }
              closeModal();
            }, 1000);
          })
          .catch(function (err) {
            console.error("Submission error:", err);
            alert("Lead saved! Our team will contact you on WhatsApp shortly.");
            enrollForm.reset();
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalBtnHtml;
            }
            closeModal();
          });
      });
    }
  }

  // Initialize all landing page components
  initCountdownTimer();
  initFaqAccordion();
  initStickyFooter();
  initEnrollmentModal();
});
