/* ==========================================================================
   VALLERA BEAUTY — CUSTOM JAVASCRIPT
   All interactive logic strictly placed in custom.js
   ========================================================================== */

jQuery(document).ready(function ($) {
    'use strict';

    var $lightboxModal = $('#video-lightbox');
    var $playerWrap = $('#puff-demo-player');
    var canvas = document.getElementById('puff-demo-canvas');
    var ctx = canvas ? canvas.getContext('2d') : null;

    var imgModel = document.getElementById('vid-asset-model');
    var imgPuff = document.getElementById('vid-asset-puff');
    var imgThumb = document.getElementById('vid-asset-thumb');
    var imgLogo = document.getElementById('vid-asset-logo');

    var TOTAL_DURATION = 15; // 15-second commercial reel
    var elapsed = 0;
    var isPlaying = false;
    var animFrameId = null;
    var lastTimestamp = 0;

    // Golden bokeh particles for commercial effect
    var particles = [];
    for (var i = 0; i < 42; i++) {
        particles.push({
            x: Math.random() * 1280,
            y: Math.random() * 720,
            r: 1.5 + Math.random() * 4.5,
            vx: -12 + Math.random() * 24,
            vy: -18 - Math.random() * 28,
            alpha: 0.25 + Math.random() * 0.65
        });
    }

    function formatTime(sec) {
        var s = Math.max(0, Math.min(TOTAL_DURATION, Math.floor(sec)));
        return '0:' + (s < 10 ? '0' + s : s);
    }

    function drawCoverImage(img, x, y, w, h, scale, offsetX, offsetY) {
        if (!img || !img.complete || !img.naturalWidth) return;
        ctx.save();
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.clip();

        var imgRatio = img.naturalWidth / img.naturalHeight;
        var boxRatio = w / h;
        var drawW, drawH;

        if (imgRatio > boxRatio) {
            drawH = h * scale;
            drawW = drawH * imgRatio;
        } else {
            drawW = w * scale;
            drawH = drawW / imgRatio;
        }

        var dx = x + (w - drawW) / 2 + (offsetX || 0);
        var dy = y + (h - drawH) / 2 + (offsetY || 0);
        ctx.drawImage(img, dx, dy, drawW, drawH);
        ctx.restore();
    }

    function drawParticles(dt) {
        ctx.save();
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            if (isPlaying && dt > 0) {
                p.x += p.vx * dt;
                p.y += p.vy * dt;
                if (p.y < -10) p.y = 730;
                if (p.x < -10) p.x = 1290;
                if (p.x > 1290) p.x = -10;
            }
            var grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.4);
            grad.addColorStop(0, 'rgba(250, 224, 140, ' + p.alpha + ')');
            grad.addColorStop(1, 'rgba(218, 168, 64, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 2.4, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    function drawCaptionOverlay(tag, titleWhite, titleGold, subtitle) {
        // Left gradient backdrop for readability
        var bgGrad = ctx.createLinearGradient(0, 0, 760, 0);
        bgGrad.addColorStop(0, 'rgba(5, 4, 2, 0.9)');
        bgGrad.addColorStop(0.65, 'rgba(5, 4, 2, 0.55)');
        bgGrad.addColorStop(1, 'rgba(5, 4, 2, 0)');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, 760, 720);

        // Brand Logo top-left
        if (imgLogo && imgLogo.complete && imgLogo.naturalWidth) {
            var lw = 130;
            var lh = (imgLogo.naturalHeight / imgLogo.naturalWidth) * lw;
            ctx.drawImage(imgLogo, 68, 48, lw, lh);
        }

        // Gold Pill Tag
        ctx.save();
        ctx.font = '700 14px "Plus Jakarta Sans", sans-serif';
        var tagWidth = ctx.measureText(tag).width + 36;
        var pillGrad = ctx.createLinearGradient(68, 0, 68 + tagWidth, 0);
        pillGrad.addColorStop(0, '#E3B34C');
        pillGrad.addColorStop(0.5, '#F6DA80');
        pillGrad.addColorStop(1, '#D49E35');
        ctx.fillStyle = pillGrad;
        ctx.beginPath();
        ctx.roundRect(68, 225, tagWidth, 34, 17);
        ctx.fill();

        ctx.fillStyle = '#140E04';
        ctx.fillText(tag, 86, 247);

        // Main Title
        ctx.font = '700 54px "Playfair Display", Georgia, serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(titleWhite, 68, 322);

        var titleGrad = ctx.createLinearGradient(68, 340, 480, 390);
        titleGrad.addColorStop(0, '#E5B84F');
        titleGrad.addColorStop(0.5, '#FAE28C');
        titleGrad.addColorStop(1, '#C9932B');
        ctx.fillStyle = titleGrad;
        ctx.fillText(titleGold, 68, 386);

        // Subtitle
        ctx.font = '400 20px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.88)';
        ctx.fillText(subtitle, 68, 434);
        ctx.restore();
    }

    function renderFrame(dt) {
        if (!ctx) return;

        ctx.clearRect(0, 0, 1280, 720);
        ctx.fillStyle = '#060402';
        ctx.fillRect(0, 0, 1280, 720);

        if (elapsed < 5) {
            // Scene 1 (0s - 5s): Macro Puff & Water Splash Showcase
            var p1 = elapsed / 5;
            var scale1 = 1.04 + p1 * 0.12;
            drawCoverImage(imgPuff, 0, 0, 1280, 720, scale1, 140 - p1 * 40, 0);
            drawParticles(dt);
            drawCaptionOverlay(
                'PREMIUM MAKEUP PUFF',
                'Ultra-Soft &',
                'Skin Friendly.',
                'Hydrophilic micro-velvet texture for zero product wastage.'
            );
        } else if (elapsed < 10) {
            // Scene 2 (5s - 10s): Model Blending Makeup Seamlessly
            var p2 = (elapsed - 5) / 5;
            var scale2 = 1.05 + p2 * 0.1;
            drawCoverImage(imgThumb, 0, 0, 1280, 720, scale2, 80 - p2 * 35, 0);
            drawParticles(dt);
            drawCaptionOverlay(
                'SEE THE MAGIC IN ACTION',
                'Blends Makeup',
                'Effortlessly.',
                'Creates a smooth, streak-free airbrushed finish in seconds.'
            );
        } else {
            // Scene 3 (10s - 15s): Full Glam Finish & Special Offer
            var p3 = (elapsed - 10) / 5;
            var scale3 = 1.02 + p3 * 0.1;
            drawCoverImage(imgModel, 0, 0, 1280, 720, scale3, -20 + p3 * 25, 0);
            drawParticles(dt);
            drawCaptionOverlay(
                'PERFECT FOR LIQUID, CREAM & POWDER',
                'Flawless Makeup,',
                'Every Time.',
                'Trusted by 10,000+ Happy Customers across India.'
            );
        }

        // Update UI bar
        var pct = Math.min(100, (elapsed / TOTAL_DURATION) * 100);
        $('#puff-progress-fill').css('width', pct + '%');
        $('#puff-video-time').text(formatTime(elapsed) + ' / 0:15');
    }

    function stepAnimation(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        var dt = (timestamp - lastTimestamp) / 1000;
        lastTimestamp = timestamp;

        if (isPlaying) {
            elapsed += dt;
            if (elapsed >= TOTAL_DURATION) {
                elapsed = 0; // Loop seamlessly
            }
            renderFrame(dt);
            animFrameId = requestAnimationFrame(stepAnimation);
        }
    }

    function playPuffVideo() {
        isPlaying = true;
        $playerWrap.removeClass('is-paused');
        lastTimestamp = 0;
        if (animFrameId) cancelAnimationFrame(animFrameId);
        animFrameId = requestAnimationFrame(stepAnimation);
    }

    function pausePuffVideo() {
        isPlaying = false;
        $playerWrap.addClass('is-paused');
        if (animFrameId) {
            cancelAnimationFrame(animFrameId);
            animFrameId = null;
        }
    }

    // Open Video Lightbox when clicking the Play Icon or "Watch Demo Video" button
    $(document).on('click', '[data-video-trigger="true"]', function (e) {
        e.preventDefault();

        if ($lightboxModal.length) {
            $lightboxModal.addClass('is-active').attr('aria-hidden', 'false');
            $('body').addClass('lightbox-open');
            var customVid = document.getElementById('puff-custom-video');
            if (customVid) {
                customVid.currentTime = 0;
                var playPromise = customVid.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(function () {});
                }
            } else {
                elapsed = 0;
                renderFrame(0);
                playPuffVideo();
            }
        }
    });

    // Play / Pause toggle on button or canvas click
    $(document).on('click', '#puff-play-toggle, #puff-demo-canvas', function (e) {
        e.preventDefault();
        if (isPlaying) {
            pausePuffVideo();
        } else {
            playPuffVideo();
        }
    });

    // Seek on clicking progress bar
    $(document).on('click', '#puff-progress-track', function (e) {
        var offset = $(this).offset();
        var clickX = e.pageX - offset.left;
        var width = $(this).outerWidth();
        if (width > 0) {
            elapsed = Math.max(0, Math.min(TOTAL_DURATION, (clickX / width) * TOTAL_DURATION));
            renderFrame(0);
        }
    });

    // Fullscreen button
    $(document).on('click', '#puff-fullscreen-btn', function (e) {
        e.preventDefault();
        var elem = document.getElementById('puff-demo-player');
        if (!elem) return;
        if (!document.fullscreenElement) {
            if (elem.requestFullscreen) elem.requestFullscreen();
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
        }
    });

    // Close Video Lightbox function
    function closeVideoLightbox() {
        if ($lightboxModal.length && $lightboxModal.hasClass('is-active')) {
            var customVid = document.getElementById('puff-custom-video');
            if (customVid) {
                customVid.pause();
                customVid.currentTime = 0;
            }
            pausePuffVideo();
            elapsed = 0;
            $lightboxModal.removeClass('is-active').attr('aria-hidden', 'true');
            $('body').removeClass('lightbox-open');
        }
    }

    // Close on clicking backdrop or close button
    $(document).on('click', '[data-lightbox-close="true"]', function (e) {
        e.preventDefault();
        closeVideoLightbox();
    });

    // Close on pressing Escape key
    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            closeVideoLightbox();
        }
    });

    // Smooth scroll for anchor CTA links (excluding video lightbox triggers)
    $(document).on('click', 'a[href^="#"]:not([data-video-trigger="true"])', function (e) {
        var targetId = $(this).attr('href');
        if (targetId && targetId.length > 1 && $(targetId).length) {
            e.preventDefault();
            $('html, body').animate(
                {
                    scrollTop: $(targetId).offset().top
                },
                600
            );
        }
    });

    // =========================================================================
    // REAL REVIEWS ("Loved by Beauty Enthusiasts") SLIDER / CAROUSEL
    // =========================================================================
    var $reviewsTrack = $('#reviews-cards-track');
    var $reviewSlides = $('#reviews-cards-track .reviews-slide-page');
    var $reviewDots = $('#reviews-dots .reviews-dot');
    var totalReviewSlides = $reviewSlides.length;
    var activeReviewSlide = 0;

    function goToReviewSlide(index) {
        if (!totalReviewSlides) return;
        activeReviewSlide = (index + totalReviewSlides) % totalReviewSlides;

        // Toggle slide position classes defined in style.css (no inline styles)
        $reviewsTrack.removeClass('is-slide-0 is-slide-1 is-slide-2');
        $reviewsTrack.addClass('is-slide-' + activeReviewSlide);

        // Update pagination dots
        $reviewDots.removeClass('is-active');
        $reviewDots.eq(activeReviewSlide).addClass('is-active');
    }

    // Initialize first slide state
    goToReviewSlide(0);

    // Previous button click
    $(document).on('click', '#reviews-prev-btn', function (e) {
        e.preventDefault();
        goToReviewSlide(activeReviewSlide - 1);
    });

    // Next button click
    $(document).on('click', '#reviews-next-btn', function (e) {
        e.preventDefault();
        goToReviewSlide(activeReviewSlide + 1);
    });

    // Pagination dot click
    $(document).on('click', '#reviews-dots .reviews-dot', function (e) {
        e.preventDefault();
        var targetSlide = parseInt($(this).attr('data-slide-to'), 10);
        if (!isNaN(targetSlide)) {
            goToReviewSlide(targetSlide);
        }
    });

    // =========================================================================
    // FREQUENTLY ASKED QUESTIONS ("Everything You Need to Know") ACCORDION
    // =========================================================================
    $(document).on('click', '.faq-question-btn', function (e) {
        e.preventDefault();
        var $btn = $(this);
        var $item = $btn.closest('.faq-item');
        var isOpen = $item.hasClass('is-open');

        // Close other open items for a clean accordion feel
        $('.faq-item.is-open').not($item).removeClass('is-open').find('.faq-question-btn').attr('aria-expanded', 'false');

        // Toggle clicked item
        if (isOpen) {
            $item.removeClass('is-open');
            $btn.attr('aria-expanded', 'false');
        } else {
            $item.addClass('is-open');
            $btn.attr('aria-expanded', 'true');
        }
    });

    // =========================================================================
    // STICKY / FIXED BOTTOM PURCHASE BAR QUANTITY SELECTOR (- 1 +) & PRICE UPDATE
    // =========================================================================
    var stickyQuantity = 1;
    var $stickyQtyValue = $('#sticky-qty-value');
    var $stickyPriceCurrent = $('#sticky-price-current');
    var $stickyPriceOld = $('.sticky-price-old');
    var $stickyOrderBtn = $('#btn-sticky-order');

    var stickyBasePrice = parseInt(($stickyPriceCurrent.text() || '').replace(/[^\d]/g, ''), 10) ||
        (typeof vallera_params !== 'undefined' && parseInt(vallera_params.unit_price, 10)) ||
        399;
    var stickyBaseOldPrice = parseInt(($stickyPriceOld.text() || '').replace(/[^\d]/g, ''), 10) || 599;

    function formatInrAmount(amount) {
        return '₹' + amount.toLocaleString('en-IN');
    }

    function updateStickyBarUI() {
        $stickyQtyValue.text(stickyQuantity);
        if ($stickyPriceCurrent.length) {
            $stickyPriceCurrent.text(formatInrAmount(stickyBasePrice * stickyQuantity));
        }
        if ($stickyPriceOld.length) {
            $stickyPriceOld.text(formatInrAmount(stickyBaseOldPrice * stickyQuantity));
        }
        if ($stickyOrderBtn.length) {
            var currentHref = $stickyOrderBtn.attr('href') || '';
            if (currentHref.indexOf('vallera_buy_now=1') !== -1) {
                var updatedHref = currentHref.replace(/([?&]quantity=)\d+/, '$1' + stickyQuantity);
                if (updatedHref === currentHref && currentHref.indexOf('quantity=') === -1) {
                    updatedHref = currentHref + (currentHref.indexOf('?') !== -1 ? '&' : '?') + 'quantity=' + stickyQuantity;
                }
                $stickyOrderBtn.attr('href', updatedHref);
            }
        }
    }

    $(document).on('click', '#sticky-qty-minus', function (e) {
        e.preventDefault();
        if (stickyQuantity > 1) {
            stickyQuantity -= 1;
            updateStickyBarUI();
        }
    });

    $(document).on('click', '#sticky-qty-plus', function (e) {
        e.preventDefault();
        if (stickyQuantity < 99) {
            stickyQuantity += 1;
            updateStickyBarUI();
        }
    });

    // =========================================================================
    // CART PAGE QUANTITY SELECTOR & WOOCOMMERCE AJAX SYNC
    // =========================================================================
    var $cartQtyValue = $('#cart-qty-value');
    var $cartUnitPriceEl = $('#cart-item-unit-price');
    var $cartOldPriceEl = $('.cart-item-price-old');
    var cartUnitPrice = parseInt($cartUnitPriceEl.attr('data-unit-price'), 10) ||
        (typeof vallera_params !== 'undefined' && parseInt(vallera_params.unit_price, 10)) ||
        399;
    var cartOldUnitPrice = parseInt(($cartOldPriceEl.first().text() || '').replace(/[^\d]/g, ''), 10) || 699;
    var cartQuantity = parseInt($.trim($cartQtyValue.text()), 10) ||
        (typeof vallera_params !== 'undefined' && parseInt(vallera_params.initial_qty, 10)) ||
        1;
    var $cartSubtotalLabel = $('#cart-summary-subtotal-label');
    var $cartSubtotalValue = $('#cart-summary-subtotal-value');
    var $cartTotalValue = $('#cart-summary-total-value');
    var $proceedCheckoutBtn = $('#btn-proceed-checkout');

    function syncWooCartQuantityAjax(qty) {
        if (typeof vallera_params !== 'undefined' && vallera_params.ajax_url) {
            $.post(vallera_params.ajax_url, {
                action: 'vallera_update_cart_qty',
                nonce: vallera_params.nonce,
                quantity: qty
            });
        }
    }

    function updateCartSummary(syncServer) {
        $cartQtyValue.text(cartQuantity);
        var itemWord = cartQuantity === 1 ? 'Item' : 'Items';
        $cartSubtotalLabel.text('Subtotal (' + cartQuantity + ' ' + itemWord + ')');
        var totalAmount = cartUnitPrice * cartQuantity;
        var totalOldAmount = cartOldUnitPrice * cartQuantity;
        if ($cartUnitPriceEl.length) {
            $cartUnitPriceEl.text(formatInrAmount(totalAmount));
        }
        if ($cartOldPriceEl.length) {
            $cartOldPriceEl.text(formatInrAmount(totalOldAmount));
        }
        $cartSubtotalValue.text(formatInrAmount(totalAmount));
        $cartTotalValue.text(formatInrAmount(totalAmount));

        if ($proceedCheckoutBtn.length) {
            var baseCheckoutHref = (typeof vallera_params !== 'undefined' && vallera_params.checkout_url)
                ? vallera_params.checkout_url
                : ($proceedCheckoutBtn.attr('href') || 'checkout.html').split('?')[0];
            var sep = baseCheckoutHref.indexOf('?') !== -1 ? '&' : '?';
            $proceedCheckoutBtn.attr('href', baseCheckoutHref + sep + 'qty=' + cartQuantity);
        }

        if (syncServer) {
            syncWooCartQuantityAjax(cartQuantity);
        }
    }

    $(document).on('click', '#cart-qty-minus', function (e) {
        e.preventDefault();
        if (cartQuantity > 1) {
            cartQuantity -= 1;
            updateCartSummary(true);
        }
    });

    $(document).on('click', '#cart-qty-plus', function (e) {
        e.preventDefault();
        if (cartQuantity < 99) {
            cartQuantity += 1;
            updateCartSummary(true);
        }
    });

    $(document).on('click', '#cart-remove-item', function (e) {
        e.preventDefault();
        cartQuantity = 1;
        updateCartSummary(true);
    });

    // =========================================================================
    // CHECKOUT PAGE FORM INPUT SANITIZATION & VALIDATION
    // =========================================================================
    $(document).on('input', '#checkout-mobile, #checkout-pincode', function () {
        var digitsOnly = $(this).val().replace(/\D/g, '');
        $(this).val(digitsOnly);
    });

    $(document).on('input change', '.checkout-input, .checkout-select, .checkout-textarea', function () {
        $(this).closest('.checkout-field-group').removeClass('has-error');
    });

    $(document).on('submit', '#checkout-order-form', function (e) {
        var isValid = true;
        var $firstErrorInput = null;

        var requiredSelectors = [
            '#checkout-fullname',
            '#checkout-mobile',
            '#checkout-address',
            '#checkout-city',
            '#checkout-state',
            '#checkout-pincode'
        ];

        $.each(requiredSelectors, function (_, selector) {
            var $field = $(selector);
            if (!$field.length) return;
            var val = $.trim($field.val() || '');
            var fieldValid = val.length > 0;

            if (selector === '#checkout-mobile' && val.length !== 10) {
                fieldValid = false;
            }
            if (selector === '#checkout-pincode' && val.length !== 6) {
                fieldValid = false;
            }

            var $group = $field.closest('.checkout-field-group');
            if (!fieldValid) {
                isValid = false;
                $group.addClass('has-error');
                if (!$firstErrorInput) {
                    $firstErrorInput = $field;
                }
            } else {
                $group.removeClass('has-error');
            }
        });

        if (!isValid) {
            e.preventDefault();
            if ($firstErrorInput) {
                $firstErrorInput.trigger('focus');
            }
            return;
        }

        e.preventDefault();
        var $submitBtn = $('#btn-place-order');
        $submitBtn.prop('disabled', true);

        if (typeof vallera_params !== 'undefined' && vallera_params.ajax_url) {
            $.post(
                vallera_params.ajax_url,
                {
                    action: 'vallera_place_cod_order',
                    fullname: $.trim($('#checkout-fullname').val() || ''),
                    mobile: $.trim($('#checkout-mobile').val() || ''),
                    email: $.trim($('#checkout-email').val() || ''),
                    address: $.trim($('#checkout-address').val() || ''),
                    city: $.trim($('#checkout-city').val() || ''),
                    state: $.trim($('#checkout-state').val() || ''),
                    pincode: $.trim($('#checkout-pincode').val() || ''),
                    order_notes: $.trim($('#checkout-notes').val() || '')
                },
                function (response) {
                    if (response && response.success && response.data && response.data.redirect_url) {
                        window.location.href = response.data.redirect_url;
                    } else if (vallera_params.thank_you_url) {
                        window.location.href = vallera_params.thank_you_url;
                    } else {
                        $submitBtn.prop('disabled', false);
                    }
                }
            ).fail(function () {
                if (vallera_params.thank_you_url) {
                    window.location.href = vallera_params.thank_you_url;
                } else {
                    $submitBtn.prop('disabled', false);
                }
            });
        } else {
            window.location.href = 'thank-you.html';
        }
    });
});
