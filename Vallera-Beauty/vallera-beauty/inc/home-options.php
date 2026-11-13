<?php
/**
 * Vallera Beauty — Dynamic Home Page Options & Admin Panel
 * Allows editing all 10 Home Page sections (Texts, Headings, Prices, Images, Video, Reviews, FAQs, Sticky Bar)
 * directly from WordPress Dashboard -> Vallera Home (without touching any code).
 *
 * @package Vallera_Beauty
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * 1. Default Values for All 10 Home Page Sections
 */
function vallera_get_home_defaults() {
    $img = VALLERA_THEME_URI . '/assets/images';

    // Sync default prices with WooCommerce product if available
    $sale_price    = '399';
    $regular_price = '699';
    if ( function_exists( 'vallera_get_main_product_id' ) && function_exists( 'wc_get_product' ) ) {
        $pid = vallera_get_main_product_id();
        if ( $pid ) {
            $product = wc_get_product( $pid );
            if ( $product ) {
                if ( $product->get_price() !== '' ) {
                    $sale_price = (string) round( (float) $product->get_price() );
                }
                if ( $product->get_regular_price() !== '' ) {
                    $regular_price = (string) round( (float) $product->get_regular_price() );
                }
            }
        }
    }

    return array(
        // TAB 1: Product & Pricing
        'product_name'            => 'Vallera Premium Makeup Puff',
        'sticky_product_title'    => 'Makeup Puff',
        'sale_price'              => $sale_price,
        'regular_price'           => $regular_price,
        'promo_old_price'         => '599',
        'discount_badge_text'     => '(33% OFF)',

        // TAB 2: Section 1 — Hero Banner
        'hero_logo_img'           => $img . '/logo.png',
        'hero_pill_badge'         => 'PREMIUM MAKEUP PUFF',
        'hero_title_line1'        => 'Flawless',
        'hero_title_line2'        => 'Makeup,',
        'hero_title_gold'         => 'Every Time.',
        'hero_subtitle_line1'     => 'Premium Makeup Puff for a smooth,',
        'hero_subtitle_line2'     => 'seamless and airbrushed finish.',
        'hero_feat1_line1'        => 'Super Soft',
        'hero_feat1_line2'        => '& Gentle',
        'hero_feat2_line1'        => 'Blends',
        'hero_feat2_line2'        => 'Effortlessly',
        'hero_feat3_line1'        => 'Streak-Free',
        'hero_feat3_line2'        => 'Finish',
        'hero_feat4_line1'        => 'Works with',
        'hero_feat4_line2'        => 'All Makeup',
        'hero_btn_text'           => 'Order Now',
        'hero_avatar_img'         => $img . '/avatar.png',
        'hero_trust_prefix'       => 'Trusted by',
        'hero_trust_bold'         => '10,000+ Happy Customers',
        'hero_rating_score'       => '4.8/5',
        'hero_rating_count'       => '(2,800+ Reviews)',
        'hero_podium_img'         => $img . '/hero-puff-podium.png',
        'hero_badge_line1'        => 'SPECIAL',
        'hero_badge_line2'        => 'OFFER',

        // TAB 3: Section 2 — Trust Features Bar (4 Items)
        'trust_1_icon'            => $img . '/vallera_feature_icon_1.png',
        'trust_1_title'           => 'Free Shipping',
        'trust_1_sub'             => 'Across India',
        'trust_2_icon'            => $img . '/vallera_feature_icon_2.png',
        'trust_2_title'           => 'Cash on Delivery',
        'trust_2_sub'             => 'Available',
        'trust_3_icon'            => $img . '/vallera_feature_icon_3.png',
        'trust_3_title'           => 'Easy Returns',
        'trust_3_sub'             => 'Hassle Free',
        'trust_4_icon'            => $img . '/vallera_feature_icon_4.png',
        'trust_4_title'           => 'Loved by',
        'trust_4_sub'             => 'Beauty Enthusiasts',

        // TAB 4: Section 3 — Why Vallera
        'why_left_img'            => $img . '/vallera_puff_left_image.png',
        'why_eyebrow'             => 'WHY VALLERA',
        'why_heading_line1'       => 'Designed for',
        'why_heading_prefix'      => 'a ',
        'why_heading_gold'        => 'Perfect Finish',
        'why_description'         => "Whether it's foundation, concealer, blush or setting powder — Vallera Beauty Puff gives you a smooth, flawless and natural finish with minimal effort.",
        'why_bullet_1_icon'       => $img . '/vallera_icon_01_package_check.png',
        'why_bullet_1_text'       => 'Ultra-Soft & Skin Friendly',
        'why_bullet_2_icon'       => $img . '/vallera_icon_02_leaf.png',
        'why_bullet_2_text'       => 'Blends Makeup Seamlessly',
        'why_bullet_3_icon'       => $img . '/vallera_icon_03_recycle_refresh.png',
        'why_bullet_3_text'       => 'No Product Wastage',
        'why_bullet_4_icon'       => $img . '/vallera_icon_04_liquid_drop.png',
        'why_bullet_4_text'       => 'Perfect for Liquid, Cream & Powder',
        'why_bullet_5_icon'       => $img . '/vallera_icon_05_travel_bag.png',
        'why_bullet_5_text'       => 'Compact, Travel Friendly & Easy to Clean',

        // TAB 5: Section 4 — Video Demo Section
        'video_eyebrow'           => 'SEE THE MAGIC',
        'video_heading_line1'     => 'Watch It',
        'video_heading_line2'     => 'in Action',
        'video_desc_line1'        => 'See how our makeup puff creates',
        'video_desc_line2'        => 'a smooth, flawless finish in seconds.',
        'video_btn_text'          => 'Watch Demo Video',
        'video_thumb_img'         => $img . '/vallera_video_thumbnail.png',
        'video_custom_mp4'        => '',

        // TAB 6: Section 5 — Perfect for Every Look (5 Cards)
        'looks_eyebrow'           => 'PERFECT FOR EVERY LOOK',
        'looks_heading'           => 'One Puff. Endless Possibilities.',
        'looks_sub_line1'         => 'From everyday natural looks to full glam — Vallera Beauty helps you',
        'looks_sub_line2'         => 'create the perfect finish for any occasion.',
        'look_1_img'              => $img . '/vallera_look_foundation.png',
        'look_1_title'            => 'Foundation',
        'look_2_img'              => $img . '/vallera_look_concealer.png',
        'look_2_title'            => 'Concealer',
        'look_3_img'              => $img . '/vallera_look_blush.png',
        'look_3_title'            => 'Blush',
        'look_4_img'              => $img . '/vallera_look_setting_powder.png',
        'look_4_title'            => 'Setting Powder',
        'look_5_img'              => $img . '/vallera_look_full_glam_look.png',
        'look_5_title'            => 'Full Glam Look',

        // TAB 7: Section 6 — Premium Quality
        'quality_left_img'        => $img . '/vallera_puff_quality_visual.png',
        'quality_eyebrow'         => 'PREMIUM QUALITY',
        'quality_heading_line1'   => 'Thoughtfully',
        'quality_heading_line2'   => 'Designed for You',
        'quality_desc_line1'      => 'Every detail is crafted to give you a luxurious',
        'quality_desc_line2'      => 'makeup experience with professional results.',
        'quality_feat_1_icon'     => $img . '/vallera_01_premium_quality.png',
        'quality_feat_1_text'     => 'High Quality Materials',
        'quality_feat_2_icon'     => $img . '/vallera_02_elegant_design.png',
        'quality_feat_2_text'     => 'Elegant & Stylish Design',
        'quality_feat_3_icon'     => $img . '/vallera_03_lightweight.png',
        'quality_feat_3_text'     => 'Lightweight & Easy to Carry',
        'quality_feat_4_icon'     => $img . '/vallera_04_long_lasting.png',
        'quality_feat_4_text'     => 'Long-Lasting Performance',

        // TAB 8: Section 7 — Real Reviews (9 Cards across 3 Slides)
        'reviews_eyebrow'         => 'REAL REVIEWS',
        'reviews_heading'         => 'Loved by Beauty Enthusiasts',
        'reviews_subtitle'        => 'Real people. Real results. See why thousands choose Vallera Beauty.',

        // Slide 1 (Reviews 1-3)
        'rev_1_name'              => 'Priya Sharma',
        'rev_1_role'              => 'Verified Buyer',
        'rev_1_quote_line1'       => 'This puff is so soft and blends',
        'rev_1_quote_line2'       => 'foundation perfectly. Absolutely love it!',
        'rev_1_avatar'            => $img . '/priya_avatar_32x32.png',

        'rev_2_name'              => 'Ankita Das',
        'rev_2_role'              => 'Verified Buyer',
        'rev_2_quote_line1'       => 'The quality is amazing.',
        'rev_2_quote_line2'       => 'Super soft and gives a flawless finish.',
        'rev_2_avatar'            => $img . '/ankita_avatar_32x32.png',

        'rev_3_name'              => 'Ritu Mehta',
        'rev_3_role'              => 'Verified Buyer',
        'rev_3_quote_line1'       => 'Must have for every makeup lover.',
        'rev_3_quote_line2'       => 'Easy to use and very premium quality.',
        'rev_3_avatar'            => $img . '/ritu_avatar_32x32.png',

        // Slide 2 (Reviews 4-6)
        'rev_4_name'              => 'Priya Sharma',
        'rev_4_role'              => 'Verified Buyer',
        'rev_4_quote_line1'       => 'This puff is so soft and blends',
        'rev_4_quote_line2'       => 'foundation perfectly. Absolutely love it!',
        'rev_4_avatar'            => $img . '/priya_avatar_32x32.png',

        'rev_5_name'              => 'Ankita Das',
        'rev_5_role'              => 'Verified Buyer',
        'rev_5_quote_line1'       => 'The quality is amazing.',
        'rev_5_quote_line2'       => 'Super soft and gives a flawless finish.',
        'rev_5_avatar'            => $img . '/ankita_avatar_32x32.png',

        'rev_6_name'              => 'Ritu Mehta',
        'rev_6_role'              => 'Verified Buyer',
        'rev_6_quote_line1'       => 'Must have for every makeup lover.',
        'rev_6_quote_line2'       => 'Easy to use and very premium quality.',
        'rev_6_avatar'            => $img . '/ritu_avatar_32x32.png',

        // Slide 3 (Reviews 7-9)
        'rev_7_name'              => 'Priya Sharma',
        'rev_7_role'              => 'Verified Buyer',
        'rev_7_quote_line1'       => 'This puff is so soft and blends',
        'rev_7_quote_line2'       => 'foundation perfectly. Absolutely love it!',
        'rev_7_avatar'            => $img . '/priya_avatar_32x32.png',

        'rev_8_name'              => 'Ankita Das',
        'rev_8_role'              => 'Verified Buyer',
        'rev_8_quote_line1'       => 'The quality is amazing.',
        'rev_8_quote_line2'       => 'Super soft and gives a flawless finish.',
        'rev_8_avatar'            => $img . '/ankita_avatar_32x32.png',

        'rev_9_name'              => 'Ritu Mehta',
        'rev_9_role'              => 'Verified Buyer',
        'rev_9_quote_line1'       => 'Must have for every makeup lover.',
        'rev_9_quote_line2'       => 'Easy to use and very premium quality.',
        'rev_9_avatar'            => $img . '/ritu_avatar_32x32.png',

        // TAB 9: Section 8 — Special Price Promotional Offer Banner
        'offer_bg_img'            => $img . '/Golden%20Makeup%20Sponge%20on%20Dark%20Gradient.png',
        'offer_seal_line1'        => 'LIMITED',
        'offer_seal_line2'        => 'TIME',
        'offer_seal_line3'        => 'OFFER',
        'offer_eyebrow'           => 'REAL REVIEWS',
        'offer_heading_gold'      => 'Get Yours Now at',
        'offer_heading_white'     => 'Special Price',
        'offer_btn_text'          => 'Order Now',

        // TAB 10: Section 9 & 10 — FAQ (6 Items) & Sticky Footer Bar
        'faq_eyebrow'             => 'FREQUENTLY ASKED QUESTIONS',
        'faq_heading'             => 'Everything You Need to Know',
        'faq_1_q'                 => 'Is it suitable for all skin types?',
        'faq_1_a'                 => 'Yes! The Vallera Beauty Makeup Puff is crafted from ultra-soft, latex-free hydrophilic material that is dermatologically safe and gentle on all skin types, including sensitive and acne-prone skin.',
        'faq_2_q'                 => 'How do I clean the puff?',
        'faq_2_a'                 => 'Simply wet the puff with warm water, apply a few drops of mild cleanser or baby shampoo, gently massage to lift makeup residue, rinse thoroughly, and let it air dry in a well-ventilated area.',
        'faq_3_q'                 => 'Can I use it with liquid and powder products?',
        'faq_3_a'                 => 'Absolutely! Use it slightly damp for liquid foundation, concealer, and cream blush, or dry for setting powder, pressed powder, and baking.',
        'faq_4_q'                 => 'Is it travel friendly?',
        'faq_4_a'                 => 'Yes, its compact and lightweight teardrop design fits effortlessly into any makeup pouch or travel bag for quick touch-ups anywhere, anytime.',
        'faq_5_q'                 => 'How long does it last?',
        'faq_5_a'                 => 'With regular cleaning and care, the Vallera Beauty Makeup Puff retains its shape, bounce, and plush texture for 3 to 6 months of daily use.',
        'faq_6_q'                 => 'Do you offer Cash on Delivery?',
        'faq_6_a'                 => 'Yes! We offer Cash on Delivery (COD) across India along with free shipping and hassle-free returns on every order.',

        // Sticky Bottom Bar
        'sticky_logo_img'         => $img . '/logo.png',
        'sticky_reviews_text'     => '4.8 (2,900+ Reviews)',
        'sticky_btn_text'         => 'Order Now',
    );
}

/**
 * 2. Retrieve All Merged Home Page Data (Saved Options + Defaults + Live WooCommerce Price)
 */
function vallera_get_home_data() {
    $defaults = vallera_get_home_defaults();
    $saved    = get_option( 'vallera_home_options', array() );
    if ( ! is_array( $saved ) ) {
        $saved = array();
    }

    $data = array();
    foreach ( $defaults as $key => $default_val ) {
        if ( isset( $saved[ $key ] ) && '' !== $saved[ $key ] ) {
            $data[ $key ] = $saved[ $key ];
        } else {
            $data[ $key ] = $default_val;
        }
        if ( false !== strpos( $key, '_img' ) || false !== strpos( $key, '_icon' ) || false !== strpos( $key, '_avatar' ) ) {
            $data[ $key ] = str_replace( ' ', '%20', str_replace( '\\', '/', $data[ $key ] ) );
        }
    }

    if ( ! empty( $data['sticky_logo_img'] ) && false !== strpos( $data['sticky_logo_img'], 'Pink%20Sponge%20Logo' ) ) {
        $data['sticky_logo_img'] = $data['hero_logo_img'];
    }

    // Keep sale_price and regular_price synced with WooCommerce main product if product exists
    if ( function_exists( 'vallera_get_main_product_id' ) && function_exists( 'wc_get_product' ) ) {
        $pid = vallera_get_main_product_id();
        if ( $pid ) {
            $product = wc_get_product( $pid );
            if ( $product ) {
                $wc_sale = $product->get_price();
                $wc_reg  = $product->get_regular_price();
                if ( '' !== $wc_sale && (float) $wc_sale > 0 ) {
                    $data['sale_price'] = (string) round( (float) $wc_sale );
                }
                if ( '' !== $wc_reg && (float) $wc_reg > 0 ) {
                    $data['regular_price'] = (string) round( (float) $wc_reg );
                }
            }
        }
    }

    return $data;
}

/**
 * 3. Register Top-Level Admin Menu ("Vallera Home") & Enqueue Media Uploader Assets
 */
function vallera_register_home_admin_menu() {
    add_menu_page(
        'Vallera Home Page Settings',
        'Vallera Home',
        'manage_options',
        'vallera-home-settings',
        'vallera_render_home_settings_page',
        'dashicons-admin-customizer',
        2
    );
}
add_action( 'admin_menu', 'vallera_register_home_admin_menu' );

function vallera_enqueue_admin_options_assets( $hook ) {
    if ( 'toplevel_page_vallera-home-settings' !== $hook ) {
        return;
    }

    wp_enqueue_media();

    wp_enqueue_style(
        'vallera-admin-options-css',
        VALLERA_THEME_URI . '/assets/css/admin-options.css',
        array(),
        VALLERA_THEME_VERSION
    );

    wp_enqueue_script(
        'vallera-admin-options-js',
        VALLERA_THEME_URI . '/assets/js/admin-options.js',
        array( 'jquery' ),
        VALLERA_THEME_VERSION,
        true
    );
}
add_action( 'admin_enqueue_scripts', 'vallera_enqueue_admin_options_assets' );

/**
 * 4. Save Handler for "Vallera Home" Settings Form (Also Syncs WooCommerce Product Name & Price)
 */
function vallera_handle_save_home_settings() {
    if ( ! isset( $_POST['vallera_save_home_settings'] ) ) {
        return;
    }

    if ( ! current_user_can( 'manage_options' ) ) {
        return;
    }

    check_admin_referer( 'vallera_home_settings_action', 'vallera_home_settings_nonce' );

    $defaults = vallera_get_home_defaults();
    $raw_in   = isset( $_POST['vh'] ) && is_array( $_POST['vh'] ) ? wp_unslash( $_POST['vh'] ) : array();
    $clean    = array();

    foreach ( $defaults as $key => $default_val ) {
        if ( isset( $raw_in[ $key ] ) ) {
            if ( false !== strpos( $key, '_img' ) || false !== strpos( $key, '_icon' ) || false !== strpos( $key, '_avatar' ) || 'video_custom_mp4' === $key ) {
                $clean[ $key ] = esc_url_raw( trim( $raw_in[ $key ] ) );
            } elseif ( false !== strpos( $key, 'description' ) || false !== strpos( $key, '_a' ) ) {
                $clean[ $key ] = sanitize_textarea_field( $raw_in[ $key ] );
            } else {
                $clean[ $key ] = sanitize_text_field( $raw_in[ $key ] );
            }
        } else {
            $clean[ $key ] = $default_val;
        }
    }

    update_option( 'vallera_home_options', $clean );

    // Two-way sync with WooCommerce single product (Name, Sale Price, Regular Price)
    if ( function_exists( 'vallera_get_main_product_id' ) && function_exists( 'wc_get_product' ) ) {
        $pid = vallera_get_main_product_id();
        if ( $pid ) {
            $product = wc_get_product( $pid );
            if ( $product ) {
                if ( ! empty( $clean['product_name'] ) ) {
                    $product->set_name( $clean['product_name'] );
                }
                $new_reg  = preg_replace( '/[^\d.]/', '', $clean['regular_price'] );
                $new_sale = preg_replace( '/[^\d.]/', '', $clean['sale_price'] );
                if ( '' !== $new_reg ) {
                    $product->set_regular_price( $new_reg );
                }
                if ( '' !== $new_sale ) {
                    $product->set_sale_price( $new_sale );
                    $product->set_price( $new_sale );
                }
                $product->save();
            }
        }
    }

    wp_safe_redirect(
        add_query_arg(
            array(
                'page'    => 'vallera-home-settings',
                'updated' => 'true',
            ),
            admin_url( 'admin.php' )
        )
    );
    exit;
}
add_action( 'admin_init', 'vallera_handle_save_home_settings' );

/**
 * Helper: Render Text Input Field
 */
function vallera_field_text( $data, $key, $label, $help = '' ) {
    $val = isset( $data[ $key ] ) ? $data[ $key ] : '';
    ?>
    <div class="vh-field-row">
        <label class="vh-label" for="vh_<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $label ); ?></label>
        <div class="vh-input-col">
            <input type="text" id="vh_<?php echo esc_attr( $key ); ?>" name="vh[<?php echo esc_attr( $key ); ?>]" value="<?php echo esc_attr( $val ); ?>" class="vh-text-input">
            <?php if ( $help ) : ?>
                <p class="vh-help"><?php echo esc_html( $help ); ?></p>
            <?php endif; ?>
        </div>
    </div>
    <?php
}

/**
 * Helper: Render Textarea Field
 */
function vallera_field_textarea( $data, $key, $label, $rows = 3 ) {
    $val = isset( $data[ $key ] ) ? $data[ $key ] : '';
    ?>
    <div class="vh-field-row">
        <label class="vh-label" for="vh_<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $label ); ?></label>
        <div class="vh-input-col">
            <textarea id="vh_<?php echo esc_attr( $key ); ?>" name="vh[<?php echo esc_attr( $key ); ?>]" rows="<?php echo esc_attr( $rows ); ?>" class="vh-textarea-input"><?php echo esc_textarea( $val ); ?></textarea>
        </div>
    </div>
    <?php
}

/**
 * Helper: Render Image / Media Uploader Field
 */
function vallera_field_media( $data, $key, $label, $media_type = 'image' ) {
    $val = isset( $data[ $key ] ) ? $data[ $key ] : '';
    ?>
    <div class="vh-field-row">
        <label class="vh-label" for="vh_<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $label ); ?></label>
        <div class="vh-input-col">
            <div class="vh-media-wrap">
                <input type="text" id="vh_<?php echo esc_attr( $key ); ?>" name="vh[<?php echo esc_attr( $key ); ?>]" value="<?php echo esc_url( $val ); ?>" class="vh-text-input vh-media-url">
                <button type="button" class="button vh-media-upload-btn" data-target="#vh_<?php echo esc_attr( $key ); ?>" data-preview="#vh_prev_<?php echo esc_attr( $key ); ?>" data-type="<?php echo esc_attr( $media_type ); ?>">
                    <?php echo 'video' === $media_type ? esc_html__( 'Select Video', 'vallera-beauty' ) : esc_html__( 'Select Image', 'vallera-beauty' ); ?>
                </button>
            </div>
            <?php if ( 'image' === $media_type ) : ?>
                <div class="vh-image-preview-box" id="vh_prev_<?php echo esc_attr( $key ); ?>">
                    <?php if ( ! empty( $val ) ) : ?>
                        <img src="<?php echo esc_url( $val ); ?>" alt="" class="vh-preview-img">
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
    <?php
}

/**
 * 5. Render the Admin Page ("Vallera Home")
 */
function vallera_render_home_settings_page() {
    $data = vallera_get_home_data();
    ?>
    <div class="wrap vh-admin-wrap">
        <div class="vh-admin-header">
            <div>
                <h1 class="vh-admin-title">Vallera Beauty — Dynamic Home Page Editor</h1>
                <p class="vh-admin-subtitle">Edit all 10 sections of the Home Page (Headings, Texts, Prices, Images, Video, Customer Reviews &amp; FAQs). Changes apply immediately across your store.</p>
            </div>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" target="_blank" class="button button-secondary vh-view-site-btn">View Live Home Page &rarr;</a>
        </div>

        <?php if ( isset( $_GET['updated'] ) && 'true' === $_GET['updated'] ) : ?>
            <div class="notice notice-success is-dismissible vh-notice">
                <p><strong>Success!</strong> Your Home Page &amp; WooCommerce Product settings have been saved.</p>
            </div>
        <?php endif; ?>

        <form method="post" action="">
            <?php wp_nonce_field( 'vallera_home_settings_action', 'vallera_home_settings_nonce' ); ?>
            <input type="hidden" name="vallera_save_home_settings" value="1">

            <div class="vh-tabs-layout">
                <!-- Left Navigation Tabs -->
                <ul class="vh-tabs-nav" id="vh-tabs-nav">
                    <li><button type="button" class="vh-tab-btn is-active" data-tab="tab-pricing">1. Product &amp; Pricing</button></li>
                    <li><button type="button" class="vh-tab-btn" data-tab="tab-hero">2. Hero Section</button></li>
                    <li><button type="button" class="vh-tab-btn" data-tab="tab-trust">3. Trust Features Bar</button></li>
                    <li><button type="button" class="vh-tab-btn" data-tab="tab-why">4. Why Vallera Section</button></li>
                    <li><button type="button" class="vh-tab-btn" data-tab="tab-video">5. Video Demo Section</button></li>
                    <li><button type="button" class="vh-tab-btn" data-tab="tab-looks">6. Every Look (5 Cards)</button></li>
                    <li><button type="button" class="vh-tab-btn" data-tab="tab-quality">7. Premium Quality</button></li>
                    <li><button type="button" class="vh-tab-btn" data-tab="tab-reviews">8. Real Reviews (Slider)</button></li>
                    <li><button type="button" class="vh-tab-btn" data-tab="tab-offer">9. Special Offer Banner</button></li>
                    <li><button type="button" class="vh-tab-btn" data-tab="tab-faq">10. FAQs &amp; Sticky Footer</button></li>
                </ul>

                <!-- Right Panels -->
                <div class="vh-tabs-content">

                    <!-- ==================== TAB 1: PRODUCT & PRICING ==================== -->
                    <div class="vh-tab-panel is-active" id="tab-pricing">
                        <h2 class="vh-panel-heading">Product &amp; Pricing (Synced with WooCommerce)</h2>
                        <p class="vh-panel-desc">Updating the Sale Price or Regular Price here automatically updates your WooCommerce Product, Home Page, Cart Page, and Checkout Page.</p>
                        <?php
                        vallera_field_text( $data, 'product_name', 'Main Product Name (WooCommerce)' );
                        vallera_field_text( $data, 'sticky_product_title', 'Sticky Footer Short Product Title' );
                        vallera_field_text( $data, 'sale_price', 'Current Sale Price (₹)', 'Example: 399 (Automatically updates WooCommerce product price)' );
                        vallera_field_text( $data, 'regular_price', 'Regular / MRP Price (₹)', 'Example: 699 (Shown on Hero Badge, Cart & Checkout)' );
                        vallera_field_text( $data, 'promo_old_price', 'Special Offer & Sticky Bar Old Price (₹)', 'Example: 599' );
                        vallera_field_text( $data, 'discount_badge_text', 'Discount Percentage Label', 'Example: (33% OFF)' );
                        ?>
                    </div>

                    <!-- ==================== TAB 2: HERO SECTION ==================== -->
                    <div class="vh-tab-panel" id="tab-hero">
                        <h2 class="vh-panel-heading">Section 1: Hero Banner</h2>
                        <?php
                        vallera_field_media( $data, 'hero_logo_img', 'Brand Logo Image' );
                        vallera_field_text( $data, 'hero_pill_badge', 'Top Gold Pill Badge Text' );
                        vallera_field_text( $data, 'hero_title_line1', 'Main Heading Line 1 (White)' );
                        vallera_field_text( $data, 'hero_title_line2', 'Main Heading Line 2 (White)' );
                        vallera_field_text( $data, 'hero_title_gold', 'Main Heading Line 3 (Gold)' );
                        vallera_field_text( $data, 'hero_subtitle_line1', 'Subtitle Line 1' );
                        vallera_field_text( $data, 'hero_subtitle_line2', 'Subtitle Line 2' );
                        ?>
                        <h3 class="vh-sub-heading">4 Hero Feature Circles</h3>
                        <?php
                        vallera_field_text( $data, 'hero_feat1_line1', 'Feature 1 — Line 1' );
                        vallera_field_text( $data, 'hero_feat1_line2', 'Feature 1 — Line 2' );
                        vallera_field_text( $data, 'hero_feat2_line1', 'Feature 2 — Line 1' );
                        vallera_field_text( $data, 'hero_feat2_line2', 'Feature 2 — Line 2' );
                        vallera_field_text( $data, 'hero_feat3_line1', 'Feature 3 — Line 1' );
                        vallera_field_text( $data, 'hero_feat3_line2', 'Feature 3 — Line 2' );
                        vallera_field_text( $data, 'hero_feat4_line1', 'Feature 4 — Line 1' );
                        vallera_field_text( $data, 'hero_feat4_line2', 'Feature 4 — Line 2' );
                        ?>
                        <h3 class="vh-sub-heading">CTA Button, Social Proof &amp; Podium Showcase</h3>
                        <?php
                        vallera_field_text( $data, 'hero_btn_text', 'CTA Button Text' );
                        vallera_field_media( $data, 'hero_avatar_img', 'Customer Avatar Image' );
                        vallera_field_text( $data, 'hero_trust_prefix', 'Social Proof Prefix (e.g. Trusted by)' );
                        vallera_field_text( $data, 'hero_trust_bold', 'Social Proof Bold Text (e.g. 10,000+ Happy Customers)' );
                        vallera_field_text( $data, 'hero_rating_score', 'Rating Score (e.g. 4.8/5)' );
                        vallera_field_text( $data, 'hero_rating_count', 'Rating Count Text (e.g. (2,800+ Reviews))' );
                        vallera_field_media( $data, 'hero_podium_img', 'Right Puff on Podium Image' );
                        vallera_field_text( $data, 'hero_badge_line1', 'Offer Circle Badge Line 1' );
                        vallera_field_text( $data, 'hero_badge_line2', 'Offer Circle Badge Line 2' );
                        ?>
                    </div>

                    <!-- ==================== TAB 3: TRUST FEATURES BAR ==================== -->
                    <div class="vh-tab-panel" id="tab-trust">
                        <h2 class="vh-panel-heading">Section 2: 4-Item Trust / Features Bar</h2>
                        <?php for ( $i = 1; $i <= 4; $i++ ) : ?>
                            <h3 class="vh-sub-heading">Trust Feature Item #<?php echo esc_html( $i ); ?></h3>
                            <?php
                            vallera_field_media( $data, "trust_{$i}_icon", "Item {$i} Icon Image" );
                            vallera_field_text( $data, "trust_{$i}_title", "Item {$i} Title" );
                            vallera_field_text( $data, "trust_{$i}_sub", "Item {$i} Subtitle" );
                            ?>
                        <?php endfor; ?>
                    </div>

                    <!-- ==================== TAB 4: WHY VALLERA SECTION ==================== -->
                    <div class="vh-tab-panel" id="tab-why">
                        <h2 class="vh-panel-heading">Section 3: Why Vallera ("Designed for a Perfect Finish")</h2>
                        <?php
                        vallera_field_media( $data, 'why_left_img', 'Left Product Showcase Image' );
                        vallera_field_text( $data, 'why_eyebrow', 'Section Eyebrow' );
                        vallera_field_text( $data, 'why_heading_line1', 'Heading Line 1 (White)' );
                        vallera_field_text( $data, 'why_heading_prefix', 'Heading Line 2 White Prefix (e.g. a )' );
                        vallera_field_text( $data, 'why_heading_gold', 'Heading Line 2 Gold Text' );
                        vallera_field_textarea( $data, 'why_description', 'Section Description Paragraph', 3 );
                        ?>
                        <h3 class="vh-sub-heading">5 Key Benefit Bullet Points</h3>
                        <?php for ( $b = 1; $b <= 5; $b++ ) : ?>
                            <?php
                            vallera_field_media( $data, "why_bullet_{$b}_icon", "Benefit #{$b} Icon Image" );
                            vallera_field_text( $data, "why_bullet_{$b}_text", "Benefit #{$b} Text" );
                            ?>
                        <?php endfor; ?>
                    </div>

                    <!-- ==================== TAB 5: VIDEO DEMO SECTION ==================== -->
                    <div class="vh-tab-panel" id="tab-video">
                        <h2 class="vh-panel-heading">Section 4: Watch It in Action (Video Demo)</h2>
                        <?php
                        vallera_field_text( $data, 'video_eyebrow', 'Section Eyebrow' );
                        vallera_field_text( $data, 'video_heading_line1', 'Heading Line 1' );
                        vallera_field_text( $data, 'video_heading_line2', 'Heading Line 2' );
                        vallera_field_text( $data, 'video_desc_line1', 'Description Line 1' );
                        vallera_field_text( $data, 'video_desc_line2', 'Description Line 2' );
                        vallera_field_text( $data, 'video_btn_text', 'Watch Button Label' );
                        vallera_field_media( $data, 'video_thumb_img', 'Right Video Thumbnail Image' );
                        vallera_field_media( $data, 'video_custom_mp4', 'Custom MP4 Video URL (Optional)', 'video' );
                        ?>
                        <p class="vh-help">Tip: Leave "Custom MP4 Video URL" empty to use the built-in 15-second animated commercial reel, or select an MP4 video from your Media Library to play your custom video file in the popup.</p>
                    </div>

                    <!-- ==================== TAB 6: EVERY LOOK SECTION ==================== -->
                    <div class="vh-tab-panel" id="tab-looks">
                        <h2 class="vh-panel-heading">Section 5: Perfect for Every Look (5 Cards Grid)</h2>
                        <?php
                        vallera_field_text( $data, 'looks_eyebrow', 'Section Eyebrow' );
                        vallera_field_text( $data, 'looks_heading', 'Main Heading' );
                        vallera_field_text( $data, 'looks_sub_line1', 'Subtitle Line 1' );
                        vallera_field_text( $data, 'looks_sub_line2', 'Subtitle Line 2' );
                        ?>
                        <?php for ( $l = 1; $l <= 5; $l++ ) : ?>
                            <h3 class="vh-sub-heading">Look Card #<?php echo esc_html( $l ); ?></h3>
                            <?php
                            vallera_field_media( $data, "look_{$l}_img", "Card #{$l} Image" );
                            vallera_field_text( $data, "look_{$l}_title", "Card #{$l} Title" );
                            ?>
                        <?php endfor; ?>
                    </div>

                    <!-- ==================== TAB 7: PREMIUM QUALITY SECTION ==================== -->
                    <div class="vh-tab-panel" id="tab-quality">
                        <h2 class="vh-panel-heading">Section 6: Premium Quality ("Thoughtfully Designed for You")</h2>
                        <?php
                        vallera_field_media( $data, 'quality_left_img', 'Left Annotated Puff Visual Image' );
                        vallera_field_text( $data, 'quality_eyebrow', 'Section Eyebrow' );
                        vallera_field_text( $data, 'quality_heading_line1', 'Heading Line 1' );
                        vallera_field_text( $data, 'quality_heading_line2', 'Heading Line 2' );
                        vallera_field_text( $data, 'quality_desc_line1', 'Description Line 1' );
                        vallera_field_text( $data, 'quality_desc_line2', 'Description Line 2' );
                        ?>
                        <h3 class="vh-sub-heading">4 Quality Feature Items</h3>
                        <?php for ( $q = 1; $q <= 4; $q++ ) : ?>
                            <?php
                            vallera_field_media( $data, "quality_feat_{$q}_icon", "Feature #{$q} Icon Image" );
                            vallera_field_text( $data, "quality_feat_{$q}_text", "Feature #{$q} Text" );
                            ?>
                        <?php endfor; ?>
                    </div>

                    <!-- ==================== TAB 8: REAL REVIEWS SECTION ==================== -->
                    <div class="vh-tab-panel" id="tab-reviews">
                        <h2 class="vh-panel-heading">Section 7: Real Reviews Slider (9 Review Cards Across 3 Slides)</h2>
                        <?php
                        vallera_field_text( $data, 'reviews_eyebrow', 'Section Eyebrow' );
                        vallera_field_text( $data, 'reviews_heading', 'Main Heading' );
                        vallera_field_text( $data, 'reviews_subtitle', 'Section Subtitle' );
                        ?>
                        <?php for ( $r = 1; $r <= 9; $r++ ) : ?>
                            <?php $slide_num = ceil( $r / 3 ); ?>
                            <h3 class="vh-sub-heading">Review Card #<?php echo esc_html( $r ); ?> (Slide <?php echo esc_html( $slide_num ); ?>)</h3>
                            <?php
                            vallera_field_text( $data, "rev_{$r}_name", "Reviewer #{$r} Name" );
                            vallera_field_text( $data, "rev_{$r}_role", "Verified Badge Label" );
                            vallera_field_text( $data, "rev_{$r}_quote_line1", "Review Quote Line 1" );
                            vallera_field_text( $data, "rev_{$r}_quote_line2", "Review Quote Line 2" );
                            vallera_field_media( $data, "rev_{$r}_avatar", "Reviewer #{$r} Avatar Image" );
                            ?>
                        <?php endfor; ?>
                    </div>

                    <!-- ==================== TAB 9: SPECIAL OFFER BANNER ==================== -->
                    <div class="vh-tab-panel" id="tab-offer">
                        <h2 class="vh-panel-heading">Section 8: Special Price Promotional Offer Banner</h2>
                        <?php
                        vallera_field_media( $data, 'offer_bg_img', 'Banner Background Image' );
                        vallera_field_text( $data, 'offer_seal_line1', 'Gold Seal Line 1 (e.g. LIMITED)' );
                        vallera_field_text( $data, 'offer_seal_line2', 'Gold Seal Line 2 (e.g. TIME)' );
                        vallera_field_text( $data, 'offer_seal_line3', 'Gold Seal Line 3 (e.g. OFFER)' );
                        vallera_field_text( $data, 'offer_eyebrow', 'Section Eyebrow' );
                        vallera_field_text( $data, 'offer_heading_gold', 'Heading Line 1 (Gold)' );
                        vallera_field_text( $data, 'offer_heading_white', 'Heading Line 2 (White)' );
                        vallera_field_text( $data, 'offer_btn_text', 'Offer Card CTA Button Text' );
                        ?>
                    </div>

                    <!-- ==================== TAB 10: FAQ & STICKY FOOTER ==================== -->
                    <div class="vh-tab-panel" id="tab-faq">
                        <h2 class="vh-panel-heading">Section 9: Frequently Asked Questions (6 Items)</h2>
                        <?php
                        vallera_field_text( $data, 'faq_eyebrow', 'FAQ Section Eyebrow' );
                        vallera_field_text( $data, 'faq_heading', 'FAQ Section Heading' );
                        ?>
                        <?php for ( $f = 1; $f <= 6; $f++ ) : ?>
                            <h3 class="vh-sub-heading">FAQ Item #<?php echo esc_html( $f ); ?> (<?php echo $f <= 3 ? 'Left Column' : 'Right Column'; ?>)</h3>
                            <?php
                            vallera_field_text( $data, "faq_{$f}_q", "FAQ #{$f} Question" );
                            vallera_field_textarea( $data, "faq_{$f}_a", "FAQ #{$f} Answer", 3 );
                            ?>
                        <?php endfor; ?>

                        <h2 class="vh-panel-heading vh-mt-32">Section 10: Sticky Bottom Purchase Bar</h2>
                        <?php
                        vallera_field_media( $data, 'sticky_logo_img', 'Sticky Bar Left Brand & Sponge Image' );
                        vallera_field_text( $data, 'sticky_reviews_text', 'Sticky Bar Rating Text (e.g. 4.8 (2,900+ Reviews))' );
                        vallera_field_text( $data, 'sticky_btn_text', 'Sticky Bar Order Button Text' );
                        ?>
                    </div>

                    <div class="vh-save-footer">
                        <button type="submit" class="button button-primary button-hero vh-save-btn">Save All Home Page Changes</button>
                    </div>

                </div>
            </div>
        </form>
    </div>
    <?php
}
