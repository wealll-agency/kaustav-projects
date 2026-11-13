<?php
/**
 * Template Name: Vallera Thank You Page
 *
 * Custom WooCommerce Order Confirmation / Thank You Page Template for Vallera Beauty.
 *
 * @package Vallera_Beauty
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

$img_uri      = VALLERA_THEME_URI . '/assets/images';
$home_url     = home_url( '/' );
$cart_data    = vallera_get_cart_summary_data();
$product_name = $cart_data['product_name'];
$total_amount = (int) $cart_data['subtotal'];

// Check if an order ID was passed (?order_received=ID or ?order_id=ID)
$confirmed_order = false;
$raw_order_id    = 0;
if ( isset( $_GET['order_received'] ) ) {
    $raw_order_id = absint( $_GET['order_received'] );
} elseif ( isset( $_GET['order_id'] ) ) {
    $raw_order_id = absint( $_GET['order_id'] );
}

if ( $raw_order_id > 0 && function_exists( 'wc_get_order' ) ) {
    $order_key = isset( $_GET['key'] ) ? sanitize_text_field( wp_unslash( $_GET['key'] ) ) : '';
    $order_obj = wc_get_order( $raw_order_id );
    if ( $order_obj && ( empty( $order_key ) || $order_obj->get_order_key() === $order_key ) ) {
        $confirmed_order = $order_obj;
        $total_amount    = (int) round( (float) $confirmed_order->get_total() );
    }
}
?>

    <!-- ==================== CART TOP HEADER & TRUST BAR SECTION ==================== -->
    <header class="cart-top-header" id="cart-header">
        <div class="container cart-header-container">
            <div class="cart-header-inner">

                <!-- Left Brand Logo -->
                <a href="<?php echo esc_url( $home_url ); ?>" class="cart-header-logo-link" aria-label="Vallera Beauty Home">
                    <img src="<?php echo esc_url( $img_uri . '/logo.png' ); ?>" alt="Vallera Beauty" class="cart-header-logo-img">
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

    <!-- ==================== THANK YOU MAIN CONTENT SECTION ==================== -->
    <section class="thank-you-main-section" id="thank-you-main">
        <div class="container thank-you-container">

            <!-- Centered Luxury Black & Gold Thank You Card -->
            <div class="thank-you-card">

                <!-- Top Glowing Gold Checkmark Icon -->
                <div class="thank-you-icon-badge" aria-hidden="true">
                    <svg class="thank-you-check-svg" viewBox="0 0 24 24">
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                </div>

                <!-- Order Confirmed Pill Badge -->
                <div class="thank-you-badge-wrap">
                    <span class="thank-you-pill-badge">
                        <?php
                        if ( $confirmed_order ) {
                            echo esc_html( 'ORDER #' . $confirmed_order->get_order_number() . ' CONFIRMED' );
                        } else {
                            echo esc_html( 'ORDER CONFIRMED' );
                        }
                        ?>
                    </span>
                </div>

                <!-- Main Heading -->
                <h1 class="thank-you-title">
                    Thank You For Your <span class="checkout-banner-title-gold">Order!</span>
                </h1>

                <!-- Subtitle -->
                <p class="thank-you-subtitle">
                    <?php if ( $confirmed_order && $confirmed_order->get_formatted_billing_full_name() ) : ?>
                        Thank you, <strong><?php echo esc_html( $confirmed_order->get_formatted_billing_full_name() ); ?></strong>! Your Cash on Delivery order has been successfully placed and is being prepared for fast doorstep delivery.
                    <?php else : ?>
                        Your Cash on Delivery order has been successfully placed. We are preparing your
                        <strong><?php echo esc_html( $product_name ); ?></strong> for fast doorstep delivery.
                    <?php endif; ?>
                </p>

                <!-- Glowing Golden Flare Divider -->
                <div class="checkout-flare-divider" aria-hidden="true"></div>

                <!-- Product & Order Summary Box inside Thank You Card -->
                <div class="thank-you-order-box">
                    <div class="thank-you-product-row">
                        <div class="thank-you-product-left">
                            <div class="thank-you-thumb-wrap">
                                <img src="<?php echo esc_url( $img_uri . '/vallera_puff_transparent.png' ); ?>"
                                    alt="<?php echo esc_attr( $product_name ); ?>" class="thank-you-puff-img">
                            </div>
                            <div class="thank-you-product-meta">
                                <h2 class="thank-you-product-name"><?php echo esc_html( $product_name ); ?></h2>
                                <span class="thank-you-product-sub">Soft, seamless blending for a flawless finish</span>
                            </div>
                        </div>
                        <div class="thank-you-product-right">
                            <span class="thank-you-price-label">Total Payable (COD)</span>
                            <span class="thank-you-price-val">&#8377;<?php echo esc_html( number_format_i18n( $total_amount ) ); ?></span>
                        </div>
                    </div>

                    <div class="thank-you-info-grid">
                        <div class="thank-you-info-item">
                            <span class="thank-you-info-label"><?php echo $confirmed_order ? 'Order Number' : 'Order Status'; ?></span>
                            <span class="thank-you-info-value is-green">
                                <?php echo $confirmed_order ? esc_html( '#' . $confirmed_order->get_order_number() ) : 'Confirmed'; ?>
                            </span>
                        </div>
                        <div class="thank-you-info-item">
                            <span class="thank-you-info-label">Payment Method</span>
                            <span class="thank-you-info-value">Cash on Delivery</span>
                        </div>
                        <div class="thank-you-info-item">
                            <span class="thank-you-info-label">Shipping</span>
                            <span class="thank-you-info-value is-gold">FREE Delivery</span>
                        </div>
                        <div class="thank-you-info-item">
                            <span class="thank-you-info-label"><?php echo ( $confirmed_order && $confirmed_order->get_billing_phone() ) ? 'Mobile Number' : 'Estimated Delivery'; ?></span>
                            <span class="thank-you-info-value">
                                <?php echo ( $confirmed_order && $confirmed_order->get_billing_phone() ) ? esc_html( $confirmed_order->get_billing_phone() ) : '3–5 Business Days'; ?>
                            </span>
                        </div>
                    </div>

                    <?php if ( $confirmed_order && $confirmed_order->get_billing_address_1() ) : ?>
                        <div class="thank-you-address-bar">
                            <span class="thank-you-info-label">Delivery Address:</span>
                            <span class="thank-you-address-val">
                                <?php
                                echo esc_html(
                                    sprintf(
                                        '%s, %s, %s - %s',
                                        $confirmed_order->get_billing_address_1(),
                                        $confirmed_order->get_billing_city(),
                                        $confirmed_order->get_billing_state(),
                                        $confirmed_order->get_billing_postcode()
                                    )
                                );
                                ?>
                            </span>
                        </div>
                    <?php endif; ?>
                </div>

                <!-- 3-Item Trust Strip inside Thank You Card -->
                <div class="thank-you-trust-row">
                    <div class="thank-you-trust-item">
                        <img src="<?php echo esc_url( $img_uri . '/04_secure_checkout_shield.png' ); ?>" alt="100% Genuine"
                            class="thank-you-trust-icon">
                        <span>100% Genuine Product</span>
                    </div>
                    <div class="thank-you-trust-item">
                        <img src="<?php echo esc_url( $img_uri . '/02_cash_on_delivery_package.png' ); ?>" alt="Pay on Delivery"
                            class="thank-you-trust-icon">
                        <span>Pay Cash When You Receive</span>
                    </div>
                    <div class="thank-you-trust-item">
                        <img src="<?php echo esc_url( $img_uri . '/01_free_shipping_truck.png' ); ?>" alt="Pan India Shipping"
                            class="thank-you-trust-icon">
                        <span>Fast Pan-India Delivery</span>
                    </div>
                </div>

                <!-- Continue Shopping Gold CTA Button -->
                <div class="thank-you-cta-wrap">
                    <a href="<?php echo esc_url( $home_url ); ?>" class="btn-proceed-checkout thank-you-home-btn">
                        <span class="btn-checkout-text">Continue Shopping</span>
                        <svg class="btn-checkout-arrow-svg" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </a>
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

