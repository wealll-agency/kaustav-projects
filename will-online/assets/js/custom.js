/**
 * Will Online - Custom Scripts
 * Uses jQuery, Bootstrap 5 & SweetAlert2
 */

// =========================================================================
// GOOGLE SHEET WEB APP URL
// =========================================================================
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwUW0Fhn615F7CStvbgDaObTG0EJemW1EB9-gxgQa0eu3Dgf-3pMAKBKD5Yaews3pVd/exec";

$(document).ready(function () {
    "use strict";

    // Dynamically load SweetAlert2 if not already present on the page
    if (typeof Swal === "undefined") {
        const swalScript = document.createElement("script");
        swalScript.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
        document.head.appendChild(swalScript);
    }

    // Remove LinkedIn and YouTube icons from footer
    $('.footer-social-badge[aria-label="LinkedIn"], .footer-social-badge[aria-label="YouTube"], .footer-social-badge:has(.fa-linkedin-in), .footer-social-badge:has(.fa-youtube)').remove();

    const $siteHeader = $("#siteHeader");
    const $mainNavbar = $("#mainNavbar");

    // 1. Sticky Header scroll effect
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 20) {
            $siteHeader.addClass("is-scrolled");
        } else {
            $siteHeader.removeClass("is-scrolled");
        }
    });

    // Initial check on page load
    if ($(window).scrollTop() > 20) {
        $siteHeader.addClass("is-scrolled");
    }

    // 2. Close mobile menu when a nav link is clicked
    $(".nav-menu .nav-link:not(.dropdown-toggle), .dropdown-menu .dropdown-item, .header-action-btn a").on("click", function () {
        if ($mainNavbar.hasClass("show")) {
            $(".navbar-toggler").trigger("click");
        }
    });

    // 3. Smooth scrolling for anchor links (excluding dropdown toggle and modal triggers)
    $('a[href^="#"]:not([href="#"]):not(.dropdown-toggle):not([data-bs-toggle="modal"])').on("click", function (e) {
        const target = $(this.getAttribute("href"));
        if (target.length) {
            e.preventDefault();
            const headerHeight = $siteHeader.outerHeight() || 80;
            $("html, body").stop().animate({
                scrollTop: target.offset().top - headerHeight + 10
            }, 600);
        }
    });

    // 4. Reset dropdown focus on close for mobile devices
    $(".dropdown").on("hidden.bs.dropdown", function () {
        $(this).find(".dropdown-toggle").blur();
    });

    // 5. Enquiry Form Submission Handler (Home, Contact Page & All Service Page Modals)
    const $enquiryForm = $("#enquiryForm, .enquiry-form");
    if ($enquiryForm.length) {
        $enquiryForm.on("submit", function (e) {
            e.preventDefault();
            const $form = $(this);
            const $submitBtn = $form.find(".btn-enquiry-submit");
            const originalContent = $submitBtn.html();

            // Gather form values
            const nameVal = ($form.find("#fullName").val() || "").trim();
            const phoneVal = ($form.find("#phoneNumber").val() || "").trim();
            const emailVal = ($form.find("#emailAddress").val() || "").trim();
            const serviceVal = $form.find("#serviceSelect").val() || "";
            const contactMethodVal = $form.find('input[name="contactMethod"]:checked').val() || "WhatsApp";
            const messageVal = ($form.find("#messageText").val() || "").trim();

            // Prepare URLSearchParams matching Google Sheet columns (A: Name, B: Phone Number, C: Email, D: Service, E: Prefered Contact, F: Message)
            const formData = new URLSearchParams();
            formData.append("Name", nameVal);
            formData.append("Phone Number", phoneVal);
            formData.append("Email", emailVal);
            formData.append("Service", serviceVal);
            formData.append("Prefered Contact", contactMethodVal);
            formData.append("Preferred Contact", contactMethodVal);
            formData.append("Message", messageVal);

            // Show loading state on button
            $submitBtn.html('<span>Submitting...</span> <i class="fa-solid fa-spinner fa-spin ms-1"></i>')
                      .prop("disabled", true);

            const handleSuccess = function () {
                $submitBtn.html(originalContent).prop("disabled", false);
                $form[0].reset();

                // Close modal if submission came from Service Page popup
                const $modal = $("#enquiryModal");
                if ($modal.length && $modal.hasClass("show")) {
                    const modalInstance = bootstrap.Modal.getInstance($modal[0]);
                    if (modalInstance) {
                        modalInstance.hide();
                    }
                }

                // Show SweetAlert2 and then redirect to thank-you.html
                if (typeof Swal !== "undefined") {
                    Swal.fire({
                        icon: "success",
                        title: "Thank You!",
                        text: "Your enquiry has been submitted successfully.",
                        confirmButtonText: "OK",
                        confirmButtonColor: "#b88a44",
                        background: "#071b2d",
                        color: "#ffffff",
                        iconColor: "#b88a44",
                        timer: 2000,
                        timerProgressBar: true
                    }).then(function () {
                        window.location.href = "thank-you.html";
                    });
                } else {
                    window.location.href = "thank-you.html";
                }
            };

            // Send data to Google Sheet if Web App URL is configured
            if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.indexOf("https://script.google.com/") === 0) {
                fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    body: formData,
                    mode: "no-cors"
                })
                .then(function () {
                    handleSuccess();
                })
                .catch(function (error) {
                    console.error("Google Sheet submission error:", error);
                    handleSuccess();
                });
            } else {
                // If URL is not pasted yet, still demonstrate SweetAlert + Thank You redirect after brief delay
                setTimeout(handleSuccess, 500);
            }
        });
    }
});

