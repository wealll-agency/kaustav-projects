// Custom JavaScript for Landing Page
$(document).ready(function() {
    console.log("Landing page initialized.");

    // Reel scroll functionality
    const $reelPreview = $('.reel-strip-preview');
    const scrollAmount = 300;

    $('.reel-strip-nav-next').on('click', function() {
        $reelPreview.animate({ scrollLeft: '+=' + scrollAmount }, 300);
    });
    
    $('.reel-strip-nav-prev').on('click', function() {
        $reelPreview.animate({ scrollLeft: '-=' + scrollAmount }, 300);
    });

    // Check scroll position to hide/show buttons if needed
    $reelPreview.on('scroll', function() {
        const shell = $('.reel-strip-shell');
        if ($(this).scrollLeft() === 0) {
            shell.addClass('at-start');
        } else {
            shell.removeClass('at-start');
        }
        
        if ($(this).scrollLeft() + $(this).innerWidth() >= this.scrollWidth - 1) {
            shell.addClass('at-end');
        } else {
            shell.removeClass('at-end');
        }
    });

    // Initial check
    $reelPreview.trigger('scroll');

    // Video play/pause on hover for reels
    $('.reel-strip-card').hover(
        function() {
            var video = $(this).find('video').get(0);
            if (video) {
                var playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        // Auto-play was prevented
                    });
                }
            }
        },
        function() {
            var video = $(this).find('video').get(0);
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        }
    );

    // Auto-scroll for image-slide-track
    const $imageTrack = $('.image-slide-track');
    if ($imageTrack.length && $imageTrack.is('[data-image-slide-autoplay]')) {
        setInterval(() => {
            let scrollPos = $imageTrack.scrollLeft();
            let maxScroll = $imageTrack.get(0).scrollWidth - $imageTrack.innerWidth();
            
            // Allow a small threshold for floating point errors
            if (scrollPos >= maxScroll - 5) {
                $imageTrack.animate({ scrollLeft: 0 }, 800);
            } else {
                $imageTrack.animate({ scrollLeft: '+=' + 300 }, 600);
            }
        }, 3000);
    }

    // Video Showcase Renderer
    document.querySelectorAll('[data-video-showcase]').forEach(function (root) {
        var payloadEl = root.querySelector('script[type="application/json"][data-video-showcase-payload]');
        if(!payloadEl) return;
        var items;
        try {
            items = JSON.parse(payloadEl.textContent || '[]');
        } catch (err) { return; }
        if(!items || !items.length) return;
        
        var main = root.querySelector('[data-video-showcase-main]');
        if(!main) return;

        function renderMain(idx) {
            var it = items[idx];
            if(!it) return;
            main.innerHTML = '';
            var clipTitleEl = root.querySelector('[data-video-showcase-clip-title]');
            if(clipTitleEl) {
                clipTitleEl.textContent = it.clip_title || '';
            }
            if(it.direct && it.src) {
                var video = document.createElement('video');
                video.src = it.src;
                video.controls = true;
                video.playsInline = true;
                video.preload = 'metadata';
                video.style.width = '100%';
                video.style.borderRadius = 'var(--radius-3)';
                main.appendChild(video);
            } else if (it.embed) {
                main.innerHTML = it.embed;
                var iframe = main.querySelector('iframe');
                if(iframe) {
                    iframe.style.width = '100%';
                    iframe.style.aspectRatio = '9/16';
                    iframe.style.borderRadius = 'var(--radius-3)';
                    iframe.style.maxWidth = '350px';
                    iframe.style.margin = '0 auto';
                    iframe.style.display = 'block';
                }
            }
        }

        renderMain(0);

        var thumbs = root.querySelectorAll('[data-video-showcase-thumb]');
        thumbs.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var i = parseInt(btn.getAttribute('data-video-showcase-thumb'), 10);
                if(isNaN(i)) return;
                thumbs.forEach(function (b) { b.classList.remove('is-active'); });
                btn.classList.add('is-active');
                renderMain(i);
            });
        });
    });

    // Package WhatsApp Booking Links
    const WHATSAPP_NUMBER = '918617391109';
    document.querySelectorAll('.pricing-card').forEach(function (card) {
        const nameEl = card.querySelector('.pricing-name');
        const priceEl = card.querySelector('.pricing-new');
        const waBtn = card.querySelector('.pricing-wa-btn');

        if (nameEl && priceEl && waBtn) {
            const packageName = nameEl.textContent.replace(/\s+/g, ' ').trim();
            const packagePrice = priceEl.textContent.replace(/\s+/g, ' ').trim();
            const message = `Hello, I would like to book this package:\nPackage: ${packageName}\nPrice: ${packagePrice}`;
            waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        }
    });

    // Booking Form Submission Logic
    const bookingForm = document.getElementById('bridalBookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const btnSpinner = document.getElementById('btnSpinner');
            
            // Show loading state
            submitBtn.disabled = true;
            btnText.textContent = 'PLEASE WAIT...';
            btnSpinner.classList.remove('d-none');
            
            // ==========================================
            // REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT URL!
            // ==========================================
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxExhJf3rscV1U7jVENdUcWSA8JtF8Sys53J0QqoyzKY5obQFrle58EiPho1pA4O3Ux0Q/exec';
            
            if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
                // If the URL hasn't been added yet, just redirect to thank you page so the UI works
                console.warn('Google Script URL is missing. Redirecting to thank you page as a fallback.');
                setTimeout(() => {
                    window.location.href = 'thank-you.html';
                }, 1000);
                return;
            }

            const formData = new FormData(bookingForm);

            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                window.location.href = 'thank-you.html';
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('Something went wrong. Please try again or contact us directly.');
                
                // Reset button
                submitBtn.disabled = false;
                btnText.textContent = 'PROCEED TO INSTANT ACCESS';
                btnSpinner.classList.add('d-none');
            });
        });
    }
});
