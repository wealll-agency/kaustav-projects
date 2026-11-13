<?php
/**
 * Template Name: Vallera Cart Page
 *
 * Custom WooCommerce Cart Page Template for Vallera Beauty.
 *
 * @package Vallera_Beauty
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

$img_uri       = VALLERA_THEME_URI . '/assets/images';
$home_url      = home_url( '/' );
$cart_data     = vallera_get_cart_summary_data();
$qty           = (int) $cart_data['quantity'];
$unit_price    = (int) $cart_data['unit_price'];
$regular_price = (int) $cart_data['regular_price'];
$subtotal      = (int) $cart_data['subtotal'];
$item_label    = ( 1 === $qty ) ? '1 Item' : $qty . ' Items';
$checkout_url  = add_query_arg( 'qty', $qty, vallera_get_checkout_page_url() );
?>

    <!-- ==================== CART TOP HEADER & TRUST BAR SECTION ==================== -->
    <header class="cart-top-header" id="cart-header">
        <div class="container cart-header-container">
            <div class="cart-header-inner">

                <!-- Left Brand Logo -->
                <a href="<?php echo esc_url( $home_url ); ?>" class="cart-header-logo-link" aria-label="Vallera Beauty Home">
                    <img src="<?php echo esc_url( $img_uri . '/logo.png' ); ?>" alt="Vallera Beauty"
                        class="cart-header-logo-img">
                </a>

                <!-- Right 4-Item Trust Strip -->
                <div class="cart-header-trust-list">

                    <!-- Trust Item 1: Free Shipping -->
                    <div class="cart-header-trust-item">
                        <div class="cart-header-trust-icon-wrap">
                            <img src="<?php echo esc_url( $img_uri . '/01_free_shipping_truck.png' ); ?>" alt="Free Shipping Across India"
                                class="cart-header-trust-icon">
                        </div>
                        <div class="cart-header-trust-text">
                            <span class="cart-header-trust-title">Free Shipping</span>
                            <span class="cart-header-trust-sub">Across India</span>
                        </div>
                    </div>

                    <!-- Trust Item 2: Cash on Delivery -->
                    <div class="cart-header-trust-item">
                        <div class="cart-header-trust-icon-wrap">
                            <img src="<?php echo esc_url( $img_uri . '/02_cash_on_delivery_package.png' ); ?>" alt="Cash on Delivery Available"
                                class="cart-header-trust-icon">
                        </div>
                        <div class="cart-header-trust-text">
                            <span class="cart-header-trust-title">Cash on Delivery</span>
                            <span class="cart-header-trust-sub">Available</span>
                        </div>
                    </div>

                    <!-- Trust Item 3: Easy Returns -->
                    <div class="cart-header-trust-item">
                        <div class="cart-header-trust-icon-wrap">
                            <img src="<?php echo esc_url( $img_uri . '/03_easy_returns_refresh.png' ); ?>" alt="Easy Returns Hassle Free"
                                class="cart-header-trust-icon">
                        </div>
                        <div class="cart-header-trust-text">
                            <span class="cart-header-trust-title">Easy Returns</span>
                            <span class="cart-header-trust-sub">Hassle Free</span>
                        </div>
                    </div>

                    <!-- Trust Item 4: Secure Checkout -->
                    <div class="cart-header-trust-item">
                        <div class="cart-header-trust-icon-wrap">
                            <img src="<?php echo esc_url( $img_uri . '/04_secure_checkout_shield.png' ); ?>" alt="Secure Checkout"
                                class="cart-header-trust-icon">
                        </div>
                        <div class="cart-header-trust-text">
                            <span class="cart-header-trust-title">Secure</span>
                            <span class="cart-header-trust-sub">Checkout</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </header>

    <!-- ==================== CART HERO BANNER SECTION ==================== -->
    <section class="cart-hero-banner" id="cart-banner">
        <div class="container cart-banner-container">
            <div class="cart-banner-content">
                <span class="cart-banner-eyebrow">YOUR CART</span>
                <h1 class="cart-banner-title">
                    Your Shopping <span class="cart-banner-title-gold">Cart</span>
                </h1>
                <p class="cart-banner-subtitle">
                    Review your item and proceed to a secure checkout.
                </p>
                <div class="cart-banner-accent-line" aria-hidden="true"></div>
            </div>
        </div>
    </section>

    <!-- ==================== MAIN CART CONTENT SECTION ==================== -->
    <section class="cart-main-section" id="cart-main">
        <div class="container cart-main-container">
            <div class="cart-main-grid">

                <!-- LEFT COLUMN: PRODUCT CARD + 3-ITEM GUARANTEE STRIP + CONTINUE SHOPPING -->
                <div class="cart-left-col">

                    <!-- Cart Item Card -->
                    <div class="cart-product-card" id="cart-product-card">
                        <div class="cart-product-card-inner">

                            <!-- Left Product Thumbnail Box -->
                            <div class="cart-item-thumb-box">
                                <img src="<?php echo esc_url( $img_uri . '/vallera_puff_transparent.png' ); ?>"
                                    alt="Vallera Premium Makeup Puff" class="cart-item-puff-img">
                                <img src="<?php echo esc_url( $img_uri . '/vallera_puff_transparent.png' ); ?>" alt=""
                                    aria-hidden="true" class="cart-item-puff-reflection">
                            </div>

                            <!-- Center Product Info -->
                            <div class="cart-item-info">
                                <h2 class="cart-item-title"><?php echo esc_html( $cart_data['product_name'] ); ?></h2>
                                <p class="cart-item-desc">Soft, seamless blending for a flawless finish.</p>

                                <!-- Rating Stars + Score -->
                                <div class="cart-item-rating-row">
                                    <div class="cart-item-stars" aria-label="Rated 4.8 out of 5 stars">
                                        <svg class="cart-star-svg" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M12 2.2l2.92 6.08 6.68.92-4.86 4.68 1.18 6.64L12 17.34l-5.92 3.18 1.18-6.64L2.4 9.2l6.68-.92L12 2.2z" />
                                        </svg>
                                        <svg class="cart-star-svg" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M12 2.2l2.92 6.08 6.68.92-4.86 4.68 1.18 6.64L12 17.34l-5.92 3.18 1.18-6.64L2.4 9.2l6.68-.92L12 2.2z" />
                                        </svg>
                                        <svg class="cart-star-svg" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M12 2.2l2.92 6.08 6.68.92-4.86 4.68 1.18 6.64L12 17.34l-5.92 3.18 1.18-6.64L2.4 9.2l6.68-.92L12 2.2z" />
                                        </svg>
                                        <svg class="cart-star-svg" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M12 2.2l2.92 6.08 6.68.92-4.86 4.68 1.18 6.64L12 17.34l-5.92 3.18 1.18-6.64L2.4 9.2l6.68-.92L12 2.2z" />
                                        </svg>
                                        <svg class="cart-star-svg" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M12 2.2l2.92 6.08 6.68.92-4.86 4.68 1.18 6.64L12 17.34l-5.92 3.18 1.18-6.64L2.4 9.2l6.68-.92L12 2.2z" />
                                        </svg>
                                    </div>
                                    <span class="cart-item-rating-text">
                                        <strong>4.8</strong> (2,800+ Reviews)
                                    </span>
                                </div>

                                <!-- Pricing Row -->
                                <div class="cart-item-price-row">
                                    <span class="cart-item-price-old">&#8377;<?php echo esc_html( number_format_i18n( $regular_price ) ); ?></span>
                                    <span class="cart-item-price-current" id="cart-item-unit-price"
                                        data-unit-price="<?php echo esc_attr( $unit_price ); ?>">&#8377;<?php echo esc_html( number_format_i18n( $unit_price ) ); ?></span>
                                    <span class="cart-item-discount-pill">33% OFF</span>
                                </div>
                            </div>

                            <!-- Right Quantity & Remove Controls -->
                            <div class="cart-item-actions">
                                <div class="cart-qty-selector" aria-label="Product Quantity Selector">
                                    <button type="button" class="cart-qty-btn" id="cart-qty-minus"
                                        aria-label="Decrease quantity">&minus;</button>
                                    <span class="cart-qty-value" id="cart-qty-value"><?php echo esc_html( $qty ); ?></span>
                                    <button type="button" class="cart-qty-btn" id="cart-qty-plus"
                                        aria-label="Increase quantity">+</button>
                                </div>

                                <button type="button" class="cart-remove-btn" id="cart-remove-item">
                                    <svg class="cart-remove-svg" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M3 6h18" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                    <span class="cart-remove-label">Remove Item</span>
                                </button>
                            </div>

                        </div>
                    </div>

                    <!-- 3-Item Guarantee Strip Card -->
                    <div class="cart-guarantee-strip">
                        <!-- Guarantee 1: Secure Checkout -->
                        <div class="cart-guarantee-item">
                            <div class="cart-guarantee-icon-wrap">
                                <img src="<?php echo esc_url( $img_uri . '/04_secure_checkout_shield.png' ); ?>" alt="Secure Checkout"
                                    class="cart-guarantee-icon">
                            </div>
                            <div class="cart-guarantee-text">
                                <span class="cart-guarantee-title">Secure Checkout</span>
                                <span class="cart-guarantee-sub">Your data is 100% safe</span>
                            </div>
                        </div>

                        <!-- Guarantee 2: Cash on Delivery -->
                        <div class="cart-guarantee-item">
                            <div class="cart-guarantee-icon-wrap">
                                <img src="<?php echo esc_url( $img_uri . '/02_cash_on_delivery_package.png' ); ?>" alt="Cash on Delivery"
                                    class="cart-guarantee-icon">
                            </div>
                            <div class="cart-guarantee-text">
                                <span class="cart-guarantee-title">Cash on Delivery</span>
                                <span class="cart-guarantee-sub">Pay when you receive</span>
                            </div>
                        </div>

                        <!-- Guarantee 3: Free Shipping -->
                        <div class="cart-guarantee-item">
                            <div class="cart-guarantee-icon-wrap">
                                <img src="<?php echo esc_url( $img_uri . '/01_free_shipping_truck.png' ); ?>" alt="Free Shipping Across India"
                                    class="cart-guarantee-icon">
                            </div>
                            <div class="cart-guarantee-text">
                                <span class="cart-guarantee-title">Free Shipping</span>
                                <span class="cart-guarantee-sub">Across India</span>
                            </div>
                        </div>
                    </div>

                    <!-- Continue Shopping Link -->
                    <div class="cart-continue-wrap">
                        <a href="<?php echo esc_url( $home_url ); ?>" class="cart-continue-link">
                            <svg class="cart-continue-arrow-svg" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 12H5M11 18l-6-6 6-6" />
                            </svg>
                            <span class="cart-continue-text">Continue Shopping</span>
                        </a>
                    </div>

                </div>

                <!-- RIGHT COLUMN: ORDER SUMMARY CARD -->
                <div class="cart-right-col">
                    <div class="cart-summary-card">
                        <h2 class="cart-summary-title">Order Summary</h2>

                        <div class="cart-summary-divider"></div>

                        <div class="cart-summary-rows">
                            <div class="cart-summary-row">
                                <span class="cart-summary-label" id="cart-summary-subtotal-label">Subtotal (<?php echo esc_html( $item_label ); ?>)</span>
                                <span class="cart-summary-value" id="cart-summary-subtotal-value">&#8377;<?php echo esc_html( number_format_i18n( $subtotal ) ); ?></span>
                            </div>
                            <div class="cart-summary-row">
                                <span class="cart-summary-label">Shipping</span>
                                <span class="cart-summary-shipping-free">FREE</span>
                            </div>
                        </div>

                        <div class="cart-summary-divider"></div>

                        <div class="cart-summary-total-row">
                            <span class="cart-summary-total-label">Total Amount</span>
                            <span class="cart-summary-total-value" id="cart-summary-total-value">&#8377;<?php echo esc_html( number_format_i18n( $subtotal ) ); ?></span>
                        </div>

                        <a href="<?php echo esc_url( $checkout_url ); ?>" class="btn-proceed-checkout" id="btn-proceed-checkout">
                            <svg class="btn-checkout-lock-svg" viewBox="0 0 24 24" aria-hidden="true">
                                <rect x="4" y="11" width="16" height="10" rx="2" ry="2" />
                                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                                <circle cx="12" cy="16" r="1" />
                            </svg>
                            <span class="btn-checkout-text">Proceed to Checkout</span>
                            <svg class="btn-checkout-arrow-svg" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ==================== FIXED / STICKY CART FOOTER SECTION ==================== -->
    <footer class="cart-footer-bar" id="cart-footer">
        <div class="container cart-footer-container">
            <div class="cart-footer-inner">

                <!-- Left Brand Logo + Vertical Divider + Editorial Tagline -->
                <div class="cart-footer-left">
                    <a href="<?php echo esc_url( $home_url ); ?>" class="cart-footer-logo-link" aria-label="Vallera Beauty Home">
                        <img src="<?php echo esc_url( $img_uri . '/logo.png' ); ?>" alt="Vallera Beauty" class="cart-footer-logo-img">
                    </a>

                    <span class="cart-footer-brand-divider" aria-hidden="true"></span>

                    <div class="cart-footer-tagline">
                        <span class="cart-footer-tagline-white">Flawless Makeup,</span>
                        <span class="cart-footer-tagline-gold">Every Time.</span>
                    </div>
                </div>

                <!-- Right 3-Item Trust & Support Strip -->
                <div class="cart-footer-trust-list">

                    <!-- Footer Trust 1: 100% Genuine Product -->
                    <div class="cart-footer-trust-item">
                        <div class="cart-footer-trust-icon-wrap">
                            <img src="<?php echo esc_url( $img_uri . '/04_secure_checkout_shield.png' ); ?>" alt="100% Genuine Product"
                                class="cart-footer-trust-icon">
                        </div>
                        <div class="cart-footer-trust-text">
                            <span class="cart-footer-trust-line">100% Genuine</span>
                            <span class="cart-footer-trust-line">Product</span>
                        </div>
                    </div>

                    <!-- Footer Trust 2: Pan India Delivery -->
                    <div class="cart-footer-trust-item">
                        <div class="cart-footer-trust-icon-wrap">
                            <img src="<?php echo esc_url( $img_uri . '/01_free_shipping_truck.png' ); ?>" alt="Pan India Delivery"
                                class="cart-footer-trust-icon">
                        </div>
                        <div class="cart-footer-trust-text">
                            <span class="cart-footer-trust-line">Pan India</span>
                            <span class="cart-footer-trust-line">Delivery</span>
                        </div>
                    </div>

                    <!-- Footer Trust 3: Dedicated Support -->
                    <div class="cart-footer-trust-item">
                        <div class="cart-footer-trust-icon-wrap">
                            <img src="<?php echo esc_url( $img_uri . '/support-icon.png' ); ?>" alt="Dedicated Support"
                                class="cart-footer-trust-icon">
                        </div>
                        <div class="cart-footer-trust-text">
                            <span class="cart-footer-trust-line">Dedicated</span>
                            <span class="cart-footer-trust-line">Support</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </footer>

<?php
get_footer();

