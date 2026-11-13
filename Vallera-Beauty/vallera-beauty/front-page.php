<?php
/**
 * Template Name: Vallera Home Page
 * Front Page Template — 10-Section Fully Dynamic Luxury Single-Product Landing Page
 * All texts, headings, prices, images, video, reviews, and FAQs are editable via WordPress Admin -> Vallera Home.
 *
 * @package Vallera_Beauty
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$vallera_assets_uri  = VALLERA_THEME_URI . '/assets/images';
$vallera_buy_now_url = vallera_get_buy_now_url( 1 );
$vh                  = vallera_get_home_data();

get_header();
?>

    <!-- ==================== HERO SECTION ==================== -->
    <section class="hero-section" id="hero">
        <div class="hero-bg-overlay"></div>

        <div class="container hero-container">
            <div class="row align-items-center hero-row">

                <!-- Left Content Column -->
                <div class="col-lg-6 col-md-7 hero-left-col">
                    <!-- Brand Logo -->
                    <div class="hero-logo-wrap">
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hero-logo-link" aria-label="Vallera Beauty Home">
                            <img src="<?php echo esc_url( $vh['hero_logo_img'] ); ?>" alt="<?php echo esc_attr( $vh['product_name'] ); ?>" class="hero-logo-img">
                        </a>
                    </div>

                    <!-- Gold Pill Badge -->
                    <div class="hero-badge-wrap">
                        <span class="hero-pill-badge"><?php echo esc_html( $vh['hero_pill_badge'] ); ?></span>
                    </div>

                    <!-- Main Heading -->
                    <h1 class="hero-title">
                        <span class="hero-title-white"><?php echo esc_html( $vh['hero_title_line1'] ); ?></span>
                        <span class="hero-title-white"><?php echo esc_html( $vh['hero_title_line2'] ); ?></span>
                        <span class="hero-title-gold"><?php echo esc_html( $vh['hero_title_gold'] ); ?></span>
                    </h1>

                    <!-- Subtitle -->
                    <p class="hero-subtitle">
                        <?php echo esc_html( $vh['hero_subtitle_line1'] ); ?><br>
                        <?php echo esc_html( $vh['hero_subtitle_line2'] ); ?>
                    </p>

                    <!-- 4 Circular Feature Icons -->
                    <div class="hero-features-grid">
                        <!-- Feature 1 -->
                        <div class="hero-feature-item">
                            <div class="hero-feature-icon-circle">
                                <svg class="feature-svg" viewBox="0 0 36 36" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M27.8 8.2C23.2 7.9 17.5 10.6 13.9 15.2C12.8 16.6 11.9 18.2 11.3 19.9L15.1 18.6L12.6 21.2C12.1 22.4 11.8 23.6 11.6 24.8L9.2 27.2C8.9 27.5 8.9 28 9.2 28.3C9.5 28.6 10 28.6 10.3 28.3L12.7 25.9C15.8 25.6 19.1 24.4 21.8 22.1L18.4 21.8L22.6 20.3C24.1 18.8 25.4 16.9 26.3 14.7L23.2 15.1L26.7 13.2C27.5 11.6 27.9 9.9 27.8 8.2Z"
                                        fill="#FFFFFF" />
                                </svg>
                            </div>
                            <span class="hero-feature-text"><?php echo esc_html( $vh['hero_feat1_line1'] ); ?><br><?php echo esc_html( $vh['hero_feat1_line2'] ); ?></span>
                        </div>

                        <!-- Feature 2 -->
                        <div class="hero-feature-item">
                            <div class="hero-feature-icon-circle">
                                <svg class="feature-svg" viewBox="0 0 36 36" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18 7.5C18 7.5 10.5 16.3 10.5 21.6C10.5 25.74 13.86 29.1 18 29.1C22.14 29.1 25.5 25.74 25.5 21.6C25.5 16.3 18 7.5 18 7.5Z"
                                        stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M14.2 22.2C14.4 24.1 15.9 25.5 17.8 25.7" stroke="#FFFFFF"
                                        stroke-width="1.6" stroke-linecap="round" />
                                </svg>
                            </div>
                            <span class="hero-feature-text"><?php echo esc_html( $vh['hero_feat2_line1'] ); ?><br><?php echo esc_html( $vh['hero_feat2_line2'] ); ?></span>
                        </div>

                        <!-- Feature 3 -->
                        <div class="hero-feature-item">
                            <div class="hero-feature-icon-circle">
                                <svg class="feature-svg" viewBox="0 0 36 36" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.5 10L23.1 14.9L28 16.5L23.1 18.1L21.5 23L19.9 18.1L15 16.5L19.9 14.9L21.5 10Z"
                                        fill="#E5BA54" />
                                    <path
                                        d="M12.5 9.5L13.3 12L15.8 12.8L13.3 13.6L12.5 16.1L11.7 13.6L9.2 12.8L11.7 12L12.5 9.5Z"
                                        fill="#E5BA54" />
                                    <path
                                        d="M14 20.5L14.8 22.9L17.2 23.7L14.8 24.5L14 26.9L13.2 24.5L10.8 23.7L13.2 22.9L14 20.5Z"
                                        fill="#E5BA54" />
                                </svg>
                            </div>
                            <span class="hero-feature-text"><?php echo esc_html( $vh['hero_feat3_line1'] ); ?><br><?php echo esc_html( $vh['hero_feat3_line2'] ); ?></span>
                        </div>

                        <!-- Feature 4 -->
                        <div class="hero-feature-item">
                            <div class="hero-feature-icon-circle">
                                <svg class="feature-svg" viewBox="0 0 36 36" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18 8.2L10.2 11.4V17.6C10.2 22.85 13.52 27.68 18 29.2C22.48 27.68 25.8 22.85 25.8 17.6V11.4L18 8.2ZM18 20.8C16.1 20.8 14.7 19.3 14.7 17.5C15.9 17.6 17.1 18.3 17.6 19.3C17.8 17.2 19.1 15.4 21.1 14.6C21.1 18.1 19.8 20.8 18 20.8Z"
                                        fill="#E8C266" />
                                </svg>
                            </div>
                            <span class="hero-feature-text"><?php echo esc_html( $vh['hero_feat4_line1'] ); ?><br><?php echo esc_html( $vh['hero_feat4_line2'] ); ?></span>
                        </div>
                    </div>

                    <!-- Primary CTA Button (Direct Buy Now -> Cart) -->
                    <div class="hero-cta-wrap">
                        <a href="<?php echo esc_url( $vallera_buy_now_url ); ?>" class="btn-hero-order">
                            <span class="btn-order-text"><?php echo esc_html( $vh['hero_btn_text'] ); ?></span>
                            <svg class="btn-order-arrow" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15"
                                    stroke="#110D05" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>

                    <!-- Social Proof / Reviews -->
                    <div class="hero-social-proof">
                        <div class="hero-avatars">
                            <div class="hero-avatar-item">
                                <img src="<?php echo esc_url( $vh['hero_avatar_img'] ); ?>" alt="Happy Customer 1">
                            </div>
                            <div class="hero-avatar-item">
                                <img src="<?php echo esc_url( $vh['hero_avatar_img'] ); ?>" alt="Happy Customer 2">
                            </div>
                            <div class="hero-avatar-item">
                                <img src="<?php echo esc_url( $vh['hero_avatar_img'] ); ?>" alt="Happy Customer 3">
                            </div>
                        </div>
                        <div class="hero-proof-content">
                            <p class="hero-proof-headline"><?php echo esc_html( $vh['hero_trust_prefix'] ); ?> <strong><?php echo esc_html( $vh['hero_trust_bold'] ); ?></strong></p>
                            <div class="hero-rating-row">
                                <div class="hero-stars" aria-label="5 out of 5 stars">
                                    <?php for ( $s = 0; $s < 5; $s++ ) : ?>
                                    <svg class="star-svg" viewBox="0 0 16 16" fill="none">
                                        <path d="M8 1.3L9.9 5.5L14.5 6L11.1 9.1L12 13.7L8 11.4L4 13.7L4.9 9.1L1.5 6L6.1 5.5L8 1.3Z" fill="#F5C443" />
                                    </svg>
                                    <?php endfor; ?>
                                </div>
                                <span class="hero-rating-text"><strong><?php echo esc_html( $vh['hero_rating_score'] ); ?></strong> <?php echo esc_html( $vh['hero_rating_count'] ); ?></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Showcase Column -->
                <div class="col-lg-6 col-md-5 hero-right-col">
                    <!-- Foreground Puff on Stone Podium -->
                    <div class="hero-podium-wrap">
                        <div class="hero-podium-glow"></div>
                        <img src="<?php echo esc_url( $vh['hero_podium_img'] ); ?>" alt="<?php echo esc_attr( $vh['product_name'] ); ?>"
                            class="hero-podium-img">
                    </div>

                    <!-- Circular Gold Special Offer Badge -->
                    <div class="hero-offer-badge">
                        <span class="offer-badge-label"><?php echo esc_html( $vh['hero_badge_line1'] ); ?><br><?php echo esc_html( $vh['hero_badge_line2'] ); ?></span>
                        <span class="offer-badge-price">&#8377;<?php echo esc_html( $vh['sale_price'] ); ?></span>
                        <span class="offer-badge-old">&#8377;<?php echo esc_html( $vh['regular_price'] ); ?></span>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ==================== TRUST / FEATURES BAR SECTION ==================== -->
    <section class="trust-bar-section" id="trust-features">
        <div class="container trust-bar-container">
            <div class="row align-items-center justify-content-between trust-bar-row">

                <?php for ( $t = 1; $t <= 4; $t++ ) : ?>
                <div class="col-lg-3 col-sm-6 trust-bar-col">
                    <div class="trust-feature-box">
                        <div class="trust-icon-wrap">
                            <img src="<?php echo esc_url( $vh[ "trust_{$t}_icon" ] ); ?>" alt="<?php echo esc_attr( $vh[ "trust_{$t}_title" ] ); ?>"
                                class="trust-icon-img">
                        </div>
                        <div class="trust-text-wrap">
                            <h2 class="trust-title"><?php echo esc_html( $vh[ "trust_{$t}_title" ] ); ?></h2>
                            <p class="trust-subtitle"><?php echo esc_html( $vh[ "trust_{$t}_sub" ] ); ?></p>
                        </div>
                    </div>
                </div>
                <?php endfor; ?>

            </div>
        </div>
    </section>

    <!-- ==================== WHY VALLERA SECTION ==================== -->
    <section class="why-vallera-section" id="why-vallera">
        <div class="container why-vallera-container">
            <div class="row align-items-center why-vallera-row">

                <!-- Left Image Column -->
                <div class="col-lg-6 why-left-col">
                    <div class="why-image-card">
                        <img src="<?php echo esc_url( $vh['why_left_img'] ); ?>"
                            alt="<?php echo esc_attr( $vh['product_name'] ); ?>" class="why-puff-img">
                    </div>
                </div>

                <!-- Right Content Column -->
                <div class="col-lg-6 why-right-col">
                    <div class="why-content-wrap">
                        <span class="section-eyebrow"><?php echo esc_html( $vh['why_eyebrow'] ); ?></span>

                        <h2 class="why-heading">
                            <span class="why-heading-white"><?php echo esc_html( $vh['why_heading_line1'] ); ?></span>
                            <span class="why-heading-line2">
                                <span class="why-heading-white-inline"><?php echo esc_html( $vh['why_heading_prefix'] ); ?></span><span class="why-heading-gold"><?php echo esc_html( $vh['why_heading_gold'] ); ?></span>
                            </span>
                        </h2>

                        <p class="why-description">
                            <?php echo esc_html( $vh['why_description'] ); ?>
                        </p>

                        <!-- 5 Bullet Points List -->
                        <ul class="why-benefits-list">
                            <?php for ( $b = 1; $b <= 5; $b++ ) : ?>
                            <li class="why-benefit-item">
                                <span class="why-benefit-icon-circle">
                                    <img src="<?php echo esc_url( $vh[ "why_bullet_{$b}_icon" ] ); ?>"
                                        alt="<?php echo esc_attr( $vh[ "why_bullet_{$b}_text" ] ); ?>" class="why-benefit-icon-img">
                                </span>
                                <span class="why-benefit-text"><?php echo esc_html( $vh[ "why_bullet_{$b}_text" ] ); ?></span>
                            </li>
                            <?php endfor; ?>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ==================== WATCH IT IN ACTION (VIDEO DEMO) SECTION ==================== -->
    <section class="video-demo-section" id="watch-demo">
        <div class="container video-demo-container">
            <div class="row align-items-center video-demo-row">

                <!-- Left Content Column -->
                <div class="col-lg-5 col-md-5 video-left-col">
                    <div class="video-content-wrap">
                        <span class="section-eyebrow"><?php echo esc_html( $vh['video_eyebrow'] ); ?></span>

                        <h2 class="video-heading">
                            <span class="video-heading-line"><?php echo esc_html( $vh['video_heading_line1'] ); ?></span>
                            <span class="video-heading-line"><?php echo esc_html( $vh['video_heading_line2'] ); ?></span>
                        </h2>

                        <p class="video-description">
                            <?php echo esc_html( $vh['video_desc_line1'] ); ?><br>
                            <?php echo esc_html( $vh['video_desc_line2'] ); ?>
                        </p>

                        <div class="video-cta-wrap">
                            <a href="#video-lightbox" class="btn-watch-demo" data-video-trigger="true">
                                <span class="btn-watch-play-circle">
                                    <svg class="btn-watch-play-svg" viewBox="0 0 18 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 1.8L16.2 10L2.5 18.2V1.8Z" fill="#0B0802" />
                                    </svg>
                                </span>
                                <span class="btn-watch-label"><?php echo esc_html( $vh['video_btn_text'] ); ?></span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Right Video Thumbnail Column -->
                <div class="col-lg-7 col-md-7 video-right-col">
                    <a href="#video-lightbox" class="video-thumbnail-card" data-video-trigger="true"
                        aria-label="Play Demo Video">
                        <img src="<?php echo esc_url( $vh['video_thumb_img'] ); ?>"
                            alt="<?php echo esc_attr( $vh['video_btn_text'] ); ?>" class="video-thumbnail-img">
                        <span class="video-center-play-btn">
                            <svg class="video-center-play-svg" viewBox="0 0 18 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 2.2L15.8 10L3 17.8V2.2Z" fill="#0B0802" />
                            </svg>
                        </span>
                    </a>
                </div>

            </div>
        </div>
    </section>

    <!-- ==================== PERFECT FOR EVERY LOOK (ENDLESS POSSIBILITIES) SECTION ==================== -->
    <section class="every-look-section" id="every-look">
        <div class="container every-look-container">

            <!-- Centered Section Header -->
            <div class="every-look-header">
                <span class="section-eyebrow every-look-eyebrow"><?php echo esc_html( $vh['looks_eyebrow'] ); ?></span>
                <h2 class="every-look-heading"><?php echo esc_html( $vh['looks_heading'] ); ?></h2>
                <p class="every-look-subtitle">
                    <?php echo esc_html( $vh['looks_sub_line1'] ); ?><br>
                    <?php echo esc_html( $vh['looks_sub_line2'] ); ?>
                </p>
            </div>

            <!-- 5-Card Use Cases Grid -->
            <div class="every-look-grid">
                <?php for ( $l = 1; $l <= 5; $l++ ) : ?>
                <div class="every-look-item">
                    <div class="every-look-card">
                        <img src="<?php echo esc_url( $vh[ "look_{$l}_img" ] ); ?>" alt="<?php echo esc_attr( $vh[ "look_{$l}_title" ] ); ?>"
                            class="every-look-img">
                    </div>
                    <h3 class="every-look-label"><?php echo esc_html( $vh[ "look_{$l}_title" ] ); ?></h3>
                </div>
                <?php endfor; ?>
            </div>

        </div>
    </section>

    <!-- ==================== PREMIUM QUALITY ("THOUGHTFULLY DESIGNED FOR YOU") SECTION ==================== -->
    <section class="premium-quality-section" id="premium-quality">
        <div class="container premium-quality-container">
            <div class="row align-items-center premium-quality-row">

                <!-- Left Annotated Puff Visual Column -->
                <div class="col-lg-7 premium-left-col">
                    <div class="premium-visual-wrap">
                        <img src="<?php echo esc_url( $vh['quality_left_img'] ); ?>"
                            alt="<?php echo esc_attr( $vh['product_name'] ); ?>"
                            class="premium-visual-img">
                    </div>
                </div>

                <!-- Right Content Column -->
                <div class="col-lg-5 premium-right-col">
                    <div class="premium-content-wrap">
                        <span class="section-eyebrow premium-eyebrow"><?php echo esc_html( $vh['quality_eyebrow'] ); ?></span>

                        <h2 class="premium-heading">
                            <span class="premium-heading-line"><?php echo esc_html( $vh['quality_heading_line1'] ); ?></span>
                            <span class="premium-heading-line"><?php echo esc_html( $vh['quality_heading_line2'] ); ?></span>
                        </h2>

                        <p class="premium-description">
                            <?php echo esc_html( $vh['quality_desc_line1'] ); ?><br>
                            <?php echo esc_html( $vh['quality_desc_line2'] ); ?>
                        </p>

                        <!-- 4 Quality Items List -->
                        <ul class="premium-features-list">
                            <?php for ( $q = 1; $q <= 4; $q++ ) : ?>
                            <li class="premium-feature-item">
                                <span class="premium-feature-icon-wrap">
                                    <img src="<?php echo esc_url( $vh[ "quality_feat_{$q}_icon" ] ); ?>"
                                        alt="<?php echo esc_attr( $vh[ "quality_feat_{$q}_text" ] ); ?>" class="premium-feature-icon-img">
                                </span>
                                <span class="premium-feature-text"><?php echo esc_html( $vh[ "quality_feat_{$q}_text" ] ); ?></span>
                            </li>
                            <?php endfor; ?>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ==================== REAL REVIEWS ("LOVED BY BEAUTY ENTHUSIASTS") SECTION ==================== -->
    <section class="reviews-section" id="real-reviews">
        <div class="container reviews-container">

            <!-- Centered Section Header -->
            <div class="reviews-header">
                <span class="section-eyebrow reviews-eyebrow"><?php echo esc_html( $vh['reviews_eyebrow'] ); ?></span>
                <h2 class="reviews-heading"><?php echo esc_html( $vh['reviews_heading'] ); ?></h2>
                <p class="reviews-subtitle"><?php echo esc_html( $vh['reviews_subtitle'] ); ?></p>
            </div>

            <!-- Reviews Slider Wrapper -->
            <div class="reviews-slider-wrap">

                <!-- Left Navigation Arrow -->
                <button type="button" class="reviews-nav-btn reviews-nav-prev" id="reviews-prev-btn"
                    aria-label="Previous Review">
                    <svg class="reviews-nav-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 15L7.5 10L12.5 5" stroke="#110C04" stroke-width="2.2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>

                <!-- 3-Slide Testimonial Viewport & Track (9 Dynamic Review Cards across 3 Slides) -->
                <div class="reviews-viewport" id="reviews-viewport">
                    <div class="reviews-cards-track is-slide-0" id="reviews-cards-track">
                        <?php for ( $slide_idx = 0; $slide_idx < 3; $slide_idx++ ) : ?>
                        <div class="reviews-slide-page" data-slide-page="<?php echo esc_attr( $slide_idx ); ?>">
                            <div class="reviews-cards-grid">

                                <?php
                                for ( $card_pos = 1; $card_pos <= 3; $card_pos++ ) :
                                    $r = ( $slide_idx * 3 ) + $card_pos;
                                    ?>
                                    <article class="review-card">
                                        <div class="review-stars" aria-label="5 out of 5 stars">
                                            <?php for ( $s = 0; $s < 5; $s++ ) : ?>
                                            <svg class="review-star-svg" viewBox="0 0 18 18" fill="none">
                                                <path d="M9 1.5L11.2 6.2L16.3 6.8L12.5 10.3L13.5 15.4L9 12.8L4.5 15.4L5.5 10.3L1.7 6.8L6.8 6.2L9 1.5Z" fill="#FFD43B" />
                                            </svg>
                                            <?php endfor; ?>
                                        </div>

                                        <p class="review-quote">
                                            &ldquo;<?php echo esc_html( $vh[ "rev_{$r}_quote_line1" ] ); ?><br>
                                            <?php echo esc_html( $vh[ "rev_{$r}_quote_line2" ] ); ?>&rdquo;
                                        </p>

                                        <div class="review-author-row">
                                            <div class="review-avatar-wrap">
                                                <img src="<?php echo esc_url( $vh[ "rev_{$r}_avatar" ] ); ?>" alt="<?php echo esc_attr( $vh[ "rev_{$r}_name" ] ); ?>" class="review-avatar-img">
                                            </div>
                                            <div class="review-author-info">
                                                <h3 class="review-author-name"><?php echo esc_html( $vh[ "rev_{$r}_name" ] ); ?></h3>
                                                <span class="review-verified-label">
                                                    <?php echo esc_html( $vh[ "rev_{$r}_role" ] ); ?>
                                                    <svg class="verified-check-svg" viewBox="0 0 14 14" fill="none">
                                                        <circle cx="7" cy="7" r="7" fill="#22C55E" />
                                                        <path d="M4 7.2L6 9.2L10 5" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                <?php endfor; ?>

                            </div>
                        </div>
                        <?php endfor; ?>
                    </div>
                </div>

                <!-- Right Navigation Arrow -->
                <button type="button" class="reviews-nav-btn reviews-nav-next" id="reviews-next-btn"
                    aria-label="Next Review">
                    <svg class="reviews-nav-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="#110C04" stroke-width="2.2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>

            </div>

            <!-- Pagination Dots -->
            <div class="reviews-dots" id="reviews-dots" role="tablist" aria-label="Review slides">
                <button type="button" class="reviews-dot is-active" data-slide-to="0" aria-label="Slide 1"></button>
                <button type="button" class="reviews-dot" data-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" class="reviews-dot" data-slide-to="2" aria-label="Slide 3"></button>
            </div>

        </div>
    </section>

    <!-- ==================== SPECIAL PRICE PROMOTIONAL OFFER BANNER SECTION ==================== -->
    <section class="special-offer-section" id="special-offer">
        <!-- Positioned Background Image Layer -->
        <div class="special-offer-bg-layer" aria-hidden="true">
            <img src="<?php echo esc_url( $vh['offer_bg_img'] ); ?>" alt="" class="special-offer-bg-img">
            <div class="special-offer-bg-fade"></div>
        </div>

        <div class="special-offer-inner">

            <!-- Left Area: Limited Time Offer Circular Gold Seal -->
            <div class="special-offer-left-zone">
                <div class="offer-seal-badge" aria-label="Limited Time Offer">
                    <span class="offer-seal-inner">
                        <span class="offer-seal-line"><?php echo esc_html( $vh['offer_seal_line1'] ); ?></span>
                        <span class="offer-seal-line"><?php echo esc_html( $vh['offer_seal_line2'] ); ?></span>
                        <span class="offer-seal-line"><?php echo esc_html( $vh['offer_seal_line3'] ); ?></span>
                    </span>
                </div>
            </div>

            <!-- Center Area: Eyebrow, Heading & 3 Mini Trust Badges -->
            <div class="special-offer-center-zone">
                <span class="section-eyebrow special-offer-eyebrow"><?php echo esc_html( $vh['offer_eyebrow'] ); ?></span>

                <h2 class="special-offer-heading">
                    <span class="special-offer-gold-line"><?php echo esc_html( $vh['offer_heading_gold'] ); ?></span>
                    <span class="special-offer-white-line"><?php echo esc_html( $vh['offer_heading_white'] ); ?></span>
                </h2>

                <!-- 3 Mini Trust Badges Row -->
                <div class="special-offer-trust-row">
                    <?php for ( $m = 1; $m <= 3; $m++ ) : ?>
                    <div class="special-mini-trust">
                        <div class="special-mini-icon-wrap">
                            <img src="<?php echo esc_url( $vh[ "trust_{$m}_icon" ] ); ?>" alt="<?php echo esc_attr( $vh[ "trust_{$m}_title" ] ); ?>"
                                class="special-mini-icon">
                        </div>
                        <div class="special-mini-text">
                            <span class="special-mini-title"><?php echo esc_html( $vh[ "trust_{$m}_title" ] ); ?></span>
                            <span class="special-mini-sub"><?php echo esc_html( $vh[ "trust_{$m}_sub" ] ); ?></span>
                        </div>
                    </div>
                    <?php endfor; ?>
                </div>
            </div>

            <!-- Right Area: Gold Price Card -->
            <div class="special-offer-right-zone">
                <div class="special-price-card">
                    <span class="special-price-old">&#8377;<?php echo esc_html( $vh['promo_old_price'] ); ?></span>
                    <span class="special-price-current">&#8377;<?php echo esc_html( $vh['sale_price'] ); ?></span>
                    <span class="special-price-discount"><?php echo esc_html( $vh['discount_badge_text'] ); ?></span>

                    <a href="<?php echo esc_url( $vallera_buy_now_url ); ?>" class="btn-offer-card-order">
                        <span class="btn-offer-card-text"><?php echo esc_html( $vh['offer_btn_text'] ); ?></span>
                        <svg class="btn-offer-card-arrow" viewBox="0 0 22 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 11H17.5M17.5 11L12 5.5M17.5 11L12 16.5" stroke="#110C04"
                                stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    </section>

    <!-- ==================== FREQUENTLY ASKED QUESTIONS ("EVERYTHING YOU NEED TO KNOW") SECTION ==================== -->
    <section class="faq-section" id="faq">
        <div class="container faq-container">

            <!-- Centered Section Header -->
            <div class="faq-header">
                <span class="section-eyebrow faq-eyebrow"><?php echo esc_html( $vh['faq_eyebrow'] ); ?></span>
                <h2 class="faq-heading"><?php echo esc_html( $vh['faq_heading'] ); ?></h2>
            </div>

            <!-- 2-Column 6-Item FAQ Grid -->
            <div class="faq-grid">

                <!-- Left FAQ Column (Items 1-3) -->
                <div class="faq-col">
                    <?php for ( $f = 1; $f <= 3; $f++ ) : ?>
                    <div class="faq-item">
                        <button type="button" class="faq-question-btn" aria-expanded="false">
                            <span class="faq-question-text"><?php echo esc_html( $vh[ "faq_{$f}_q" ] ); ?></span>
                            <span class="faq-icon-wrap" aria-hidden="true">
                                <svg class="faq-plus-svg" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 4V16M4 10H16" stroke="#ECC35C" stroke-width="2.2"
                                        stroke-linecap="round" />
                                </svg>
                            </span>
                        </button>
                        <div class="faq-answer-panel">
                            <p class="faq-answer-text">
                                <?php echo esc_html( $vh[ "faq_{$f}_a" ] ); ?>
                            </p>
                        </div>
                    </div>
                    <?php endfor; ?>
                </div>

                <!-- Right FAQ Column (Items 4-6) -->
                <div class="faq-col">
                    <?php for ( $f = 4; $f <= 6; $f++ ) : ?>
                    <div class="faq-item">
                        <button type="button" class="faq-question-btn" aria-expanded="false">
                            <span class="faq-question-text"><?php echo esc_html( $vh[ "faq_{$f}_q" ] ); ?></span>
                            <span class="faq-icon-wrap" aria-hidden="true">
                                <svg class="faq-plus-svg" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 4V16M4 10H16" stroke="#ECC35C" stroke-width="2.2"
                                        stroke-linecap="round" />
                                </svg>
                            </span>
                        </button>
                        <div class="faq-answer-panel">
                            <p class="faq-answer-text">
                                <?php echo esc_html( $vh[ "faq_{$f}_a" ] ); ?>
                            </p>
                        </div>
                    </div>
                    <?php endfor; ?>
                </div>

            </div>

        </div>
    </section>

    <!-- ==================== FIXED / STICKY BOTTOM PURCHASE FOOTER BAR ==================== -->
    <footer class="sticky-footer-bar" id="sticky-footer-bar">
        <div class="container sticky-footer-container">
            <div class="sticky-footer-inner">

                <!-- Left: Puff & Brand Logo Visual -->
                <div class="sticky-brand-visual">
                    <img src="<?php echo esc_url( $vh['sticky_logo_img'] ); ?>"
                        alt="<?php echo esc_attr( $vh['product_name'] ); ?>" class="sticky-brand-logo-img">
                </div>

                <!-- Product Title & Rating -->
                <div class="sticky-product-info">
                    <h3 class="sticky-product-title"><?php echo esc_html( $vh['sticky_product_title'] ); ?></h3>
                    <div class="sticky-rating-row">
                        <div class="sticky-stars" aria-label="4.8 out of 5 stars">
                            <?php for ( $s = 0; $s < 5; $s++ ) : ?>
                            <svg class="sticky-star-svg" viewBox="0 0 18 18" fill="none">
                                <path d="M9 1.5L11.2 6.2L16.3 6.8L12.5 10.3L13.5 15.4L9 12.8L4.5 15.4L5.5 10.3L1.7 6.8L6.8 6.2L9 1.5Z" fill="#FFD43B" />
                            </svg>
                            <?php endfor; ?>
                        </div>
                        <span class="sticky-reviews-count"><?php echo esc_html( $vh['sticky_reviews_text'] ); ?></span>
                    </div>
                </div>

                <!-- Pricing Block -->
                <div class="sticky-price-block">
                    <span class="sticky-price-old">&#8377;<?php echo esc_html( $vh['promo_old_price'] ); ?></span>
                    <div class="sticky-price-main-row">
                        <span class="sticky-price-current" id="sticky-price-current">&#8377;<?php echo esc_html( $vh['sale_price'] ); ?></span>
                        <span class="sticky-price-discount"><?php echo esc_html( $vh['discount_badge_text'] ); ?></span>
                    </div>
                </div>

                <!-- Quantity Selector Pill (- 1 +) -->
                <div class="sticky-qty-selector" aria-label="Select Quantity">
                    <button type="button" class="sticky-qty-btn" id="sticky-qty-minus" aria-label="Decrease Quantity">
                        <svg class="sticky-qty-svg" viewBox="0 0 18 18" fill="none">
                            <path d="M4 9H14" stroke="#ECC35C" stroke-width="2.2" stroke-linecap="round" />
                        </svg>
                    </button>
                    <span class="sticky-qty-value" id="sticky-qty-value">1</span>
                    <button type="button" class="sticky-qty-btn" id="sticky-qty-plus" aria-label="Increase Quantity">
                        <svg class="sticky-qty-svg" viewBox="0 0 18 18" fill="none">
                            <path d="M9 4V14M4 9H14" stroke="#ECC35C" stroke-width="2.2" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>

                <!-- Order Now Button (Dynamically includes selected Sticky Quantity) -->
                <div class="sticky-cta-wrap">
                    <a href="<?php echo esc_url( $vallera_buy_now_url ); ?>" class="btn-sticky-order" id="btn-sticky-order">
                        <span class="btn-sticky-order-text"><?php echo esc_html( $vh['sticky_btn_text'] ); ?></span>
                        <svg class="btn-sticky-order-arrow" viewBox="0 0 22 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 11H17.5M17.5 11L12 5.5M17.5 11L12 16.5" stroke="#110C04"
                                stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>

            </div>
        </div>
    </footer>

    <!-- ==================== VIDEO LIGHTBOX MODAL ==================== -->
    <div class="video-lightbox-modal" id="video-lightbox" aria-hidden="true" role="dialog"
        aria-label="Makeup Puff Demo Video">
        <div class="video-lightbox-backdrop" data-lightbox-close="true"></div>
        <div class="video-lightbox-dialog">
            <button type="button" class="video-lightbox-close" data-lightbox-close="true" aria-label="Close Video">
                <svg class="lightbox-close-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#110C04" stroke-width="2.4" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
            <div class="video-lightbox-frame">
                <?php if ( ! empty( $vh['video_custom_mp4'] ) ) : ?>
                    <div class="puff-video-player" id="puff-demo-player">
                        <video id="puff-custom-video" class="puff-demo-canvas" src="<?php echo esc_url( $vh['video_custom_mp4'] ); ?>" controls playsinline></video>
                    </div>
                <?php else : ?>
                    <div class="puff-video-player" id="puff-demo-player">
                        <img src="<?php echo esc_url( $vallera_assets_uri . '/hero-bg.jpeg' ); ?>" id="vid-asset-model" class="vid-hidden-asset"
                            alt="Model applying puff">
                        <img src="<?php echo esc_url( $vh['why_left_img'] ); ?>" id="vid-asset-puff" class="vid-hidden-asset"
                            alt="Makeup puff">
                        <img src="<?php echo esc_url( $vh['video_thumb_img'] ); ?>" id="vid-asset-thumb" class="vid-hidden-asset"
                            alt="Video thumbnail">
                        <img src="<?php echo esc_url( $vh['hero_logo_img'] ); ?>" id="vid-asset-logo" class="vid-hidden-asset" alt="Vallera Logo">

                        <canvas id="puff-demo-canvas" class="puff-demo-canvas" width="1280" height="720"></canvas>

                        <div class="puff-video-controls">
                            <button type="button" class="puff-ctrl-btn" id="puff-play-toggle" aria-label="Play or Pause">
                                <svg class="puff-icon-pause" viewBox="0 0 20 20" fill="none">
                                    <rect x="4" y="3" width="4" height="14" rx="1" fill="#FFFFFF" />
                                    <rect x="12" y="3" width="4" height="14" rx="1" fill="#FFFFFF" />
                                </svg>
                                <svg class="puff-icon-play" viewBox="0 0 20 20" fill="none">
                                    <path d="M5 3.5L16 10L5 16.5V3.5Z" fill="#FFFFFF" />
                                </svg>
                            </button>

                            <span class="puff-video-time" id="puff-video-time">0:00 / 0:15</span>

                            <div class="puff-progress-track" id="puff-progress-track">
                                <div class="puff-progress-fill" id="puff-progress-fill"></div>
                            </div>

                            <button type="button" class="puff-ctrl-btn" id="puff-fullscreen-btn" aria-label="Fullscreen">
                                <svg viewBox="0 0 20 20" fill="none" class="puff-icon-fs">
                                    <path
                                        d="M3 7V3H7M13 3H17V7M17 13V17H13M7 17H3V13"
                                        stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>

<?php
get_footer();
