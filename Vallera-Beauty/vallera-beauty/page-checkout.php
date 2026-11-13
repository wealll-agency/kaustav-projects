<?php
/**
 * Template Name: Vallera Checkout Page
 *
 * Custom WooCommerce Checkout Page Template for Vallera Beauty.
 *
 * @package Vallera_Beauty
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

$img_uri       = VALLERA_THEME_URI . '/assets/images';
$home_url      = home_url( '/' );
$cart_url      = vallera_get_cart_page_url();
$checkout_url  = vallera_get_checkout_page_url();
$cart_data     = vallera_get_cart_summary_data();
$qty           = (int) $cart_data['quantity'];
$unit_price    = (int) $cart_data['unit_price'];
$regular_price = (int) $cart_data['regular_price'];
$subtotal      = (int) $cart_data['subtotal'];
$item_label    = ( 1 === $qty ) ? '1 Item' : $qty . ' Items';

// Check if an order was just placed (?order_received=ID&key=KEY)
$confirmed_order = false;
if ( isset( $_GET['order_received'] ) && function_exists( 'wc_get_order' ) ) {
    $order_id  = absint( $_GET['order_received'] );
    $order_key = isset( $_GET['key'] ) ? sanitize_text_field( wp_unslash( $_GET['key'] ) ) : '';
    $order_obj = wc_get_order( $order_id );
    if ( $order_obj && ( empty( $order_key ) || $order_obj->get_order_key() === $order_key ) ) {
        $confirmed_order = $order_obj;
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

    <!-- ==================== CHECKOUT HERO BANNER SECTION ==================== -->
    <section class="checkout-hero-banner" id="checkout-banner">
        <div class="container checkout-banner-container">
            <div class="checkout-banner-content">
                <span class="checkout-banner-eyebrow"><?php echo $confirmed_order ? 'ORDER CONFIRMED' : 'CHECKOUT'; ?></span>
                <h1 class="checkout-banner-title">
                    <?php if ( $confirmed_order ) : ?>
                        Thank You For Your <span class="checkout-banner-title-gold">Order</span>
                    <?php else : ?>
                        Complete Your <span class="checkout-banner-title-gold">Order</span>
                    <?php endif; ?>
                </h1>
                <p class="checkout-banner-subtitle">
                    <?php
                    if ( $confirmed_order ) {
                        echo esc_html( 'Your Cash on Delivery order has been received and is being prepared for dispatch.' );
                    } else {
                        echo esc_html( 'Just a few details to get your Vallera Makeup Puff delivered to you.' );
                    }
                    ?>
                </p>
                <div class="checkout-banner-accent-line" aria-hidden="true"></div>
            </div>
        </div>
    </section>

    <!-- ==================== MAIN CHECKOUT CONTENT SECTION ==================== -->
    <section class="checkout-main-section" id="checkout-main">
        <div class="container checkout-main-container">

            <?php if ( $confirmed_order ) : ?>

                <!-- ORDER CONFIRMED / THANK YOU CARD -->
                <div class="checkout-order-confirmed-card" id="checkout-order-confirmed">
                    <div class="checkout-confirmed-badge-wrap" aria-hidden="true">
                        <svg class="checkout-confirmed-check-svg" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <path d="m8.5 12.5 2.5 2.5 5-5.5" />
                        </svg>
                    </div>

                    <h2 class="checkout-confirmed-heading">
                        Order <span class="checkout-banner-title-gold">#<?php echo esc_html( $confirmed_order->get_order_number() ); ?></span> Confirmed!
                    </h2>
                    <p class="checkout-confirmed-lead">
                        Thank you, <strong><?php echo esc_html( $confirmed_order->get_formatted_billing_full_name() ); ?></strong>! Your Vallera Premium Makeup Puff will be delivered soon.
                    </p>

                    <div class="checkout-flare-divider" aria-hidden="true"></div>

                    <div class="checkout-confirmed-details-grid">
                        <div class="checkout-confirmed-detail-box">
                            <span class="checkout-confirmed-detail-label">Order Number</span>
                            <span class="checkout-confirmed-detail-val">#<?php echo esc_html( $confirmed_order->get_order_number() ); ?></span>
                        </div>
                        <div class="checkout-confirmed-detail-box">
                            <span class="checkout-confirmed-detail-label">Mobile Number</span>
                            <span class="checkout-confirmed-detail-val"><?php echo esc_html( $confirmed_order->get_billing_phone() ); ?></span>
                        </div>
                        <div class="checkout-confirmed-detail-box">
                            <span class="checkout-confirmed-detail-label">Payment Method</span>
                            <span class="checkout-confirmed-detail-val">Cash on Delivery (COD)</span>
                        </div>
                        <div class="checkout-confirmed-detail-box">
                            <span class="checkout-confirmed-detail-label">Total Payable</span>
                            <span class="checkout-confirmed-detail-val is-gold">&#8377;<?php echo esc_html( number_format_i18n( (int) round( (float) $confirmed_order->get_total() ) ) ); ?></span>
                        </div>
                    </div>

                    <div class="checkout-confirmed-address-box">
                        <span class="checkout-confirmed-detail-label">Delivery Address</span>
                        <p class="checkout-confirmed-address-text">
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
                        </p>
                    </div>

                    <div class="checkout-confirmed-cta-wrap">
                        <a href="<?php echo esc_url( $home_url ); ?>" class="btn-proceed-checkout checkout-confirmed-home-btn">
                            <span class="btn-checkout-text">Back to Home Page</span>
                            <svg class="btn-checkout-arrow-svg" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </a>
                    </div>
                </div>

            <?php else : ?>

                <!-- STANDARD 2-COLUMN CHECKOUT FORM -->
                <form id="checkout-order-form" class="checkout-main-grid" method="post" action="<?php echo esc_url( $checkout_url ); ?>" novalidate>
                    <input type="hidden" name="vallera_checkout_submit" value="1">
                    <?php wp_nonce_field( 'vallera_place_order_action', 'vallera_checkout_nonce' ); ?>

                    <!-- LEFT COLUMN: DELIVERY INFORMATION + PAYMENT METHOD + ORDER NOTES + BACK TO CART -->
                    <div class="checkout-left-col">

                        <!-- Main Checkout Form Card -->
                        <div class="checkout-form-card">

                            <!-- 1. Delivery Information Header -->
                            <div class="checkout-section-header">
                                <div class="checkout-section-icon-wrap" aria-hidden="true">
                                    <svg class="checkout-pin-badge-svg" viewBox="0 0 28 34">
                                        <path
                                            d="M14 1C6.82 1 1 6.72 1 13.78C1 22.88 12.12 31.84 13.28 32.75C13.7 33.08 14.3 33.08 14.72 32.75C15.88 31.84 27 22.88 27 13.78C27 6.72 21.18 1 14 1Z"
                                            fill="#ebb844" />
                                        <circle cx="14" cy="13.5" r="5.2" fill="#0b0804" />
                                    </svg>
                                </div>
                                <div class="checkout-section-header-text">
                                    <h2 class="checkout-section-title">Delivery Information</h2>
                                    <p class="checkout-section-sub">Enter your details for a smooth delivery.</p>
                                </div>
                            </div>

                            <!-- Delivery Form Fields -->
                            <div class="checkout-fields-stack">

                                <!-- Row 1: Full Name + Mobile Number -->
                                <div class="checkout-row-2col">
                                    <div class="checkout-field-group">
                                        <label for="checkout-fullname" class="checkout-label">
                                            Full Name <span class="checkout-req">*</span>
                                        </label>
                                        <div class="checkout-input-wrap">
                                            <svg class="checkout-field-icon" viewBox="0 0 24 24" aria-hidden="true">
                                                <circle cx="12" cy="8" r="4" />
                                                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                                            </svg>
                                            <input type="text" id="checkout-fullname" name="fullname"
                                                class="checkout-input" placeholder="Enter your full name"
                                                autocomplete="name" required>
                                        </div>
                                    </div>

                                    <div class="checkout-field-group">
                                        <label for="checkout-mobile" class="checkout-label">
                                            Mobile Number <span class="checkout-req">*</span>
                                        </label>
                                        <div class="checkout-input-wrap">
                                            <svg class="checkout-field-icon" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                            <input type="tel" id="checkout-mobile" name="mobile" class="checkout-input"
                                                placeholder="Enter 10-digit mobile number" maxlength="10"
                                                inputmode="numeric" autocomplete="tel" required>
                                        </div>
                                    </div>
                                </div>

                                <!-- Row 2: Email Address (Optional) -->
                                <div class="checkout-field-group">
                                    <label for="checkout-email" class="checkout-label">
                                        Email Address <span class="checkout-opt">(Optional)</span>
                                    </label>
                                    <div class="checkout-input-wrap">
                                        <svg class="checkout-field-icon" viewBox="0 0 24 24" aria-hidden="true">
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                        <input type="email" id="checkout-email" name="email" class="checkout-input"
                                            placeholder="Enter your email address" autocomplete="email">
                                    </div>
                                </div>

                                <!-- Row 3: Complete Delivery Address -->
                                <div class="checkout-field-group">
                                    <label for="checkout-address" class="checkout-label">
                                        Address <span class="checkout-req">*</span>
                                    </label>
                                    <div class="checkout-textarea-wrap">
                                        <svg class="checkout-field-icon is-textarea-icon" viewBox="0 0 24 24"
                                            aria-hidden="true">
                                            <path d="M3 10.5 12 3l9 7.5" />
                                            <path d="M5 9.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
                                            <path d="M9 20v-6h6v6" />
                                        </svg>
                                        <textarea id="checkout-address" name="address"
                                            class="checkout-textarea is-with-icon" rows="3"
                                            placeholder="Enter your complete delivery address"
                                            autocomplete="street-address" required></textarea>
                                    </div>
                                </div>

                                <!-- Row 4: City + State + PIN Code -->
                                <div class="checkout-row-3col">
                                    <div class="checkout-field-group">
                                        <label for="checkout-city" class="checkout-label">
                                            City <span class="checkout-req">*</span>
                                        </label>
                                        <div class="checkout-input-wrap">
                                            <svg class="checkout-field-icon" viewBox="0 0 24 24" aria-hidden="true">
                                                <rect x="4" y="3" width="10" height="18" rx="1" />
                                                <path d="M14 9h6v12h-6" />
                                                <path d="M7 7h1M10 7h1M7 11h1M10 11h1M7 15h1M10 15h1M17 13h1M17 17h1" />
                                            </svg>
                                            <input type="text" id="checkout-city" name="city" class="checkout-input"
                                                placeholder="Enter city" autocomplete="address-level2" required>
                                        </div>
                                    </div>

                                    <div class="checkout-field-group">
                                        <label for="checkout-state" class="checkout-label">
                                            State <span class="checkout-req">*</span>
                                        </label>
                                        <div class="checkout-select-wrap">
                                            <select id="checkout-state" name="state" class="checkout-select" required>
                                                <option value="" selected disabled>Select state</option>
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Assam">Assam</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Kerala">Kerala</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Odisha">Odisha</option>
                                                <option value="Punjab">Punjab</option>
                                                <option value="Rajasthan">Rajasthan</option>
                                                <option value="Tamil Nadu">Tamil Nadu</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="Uttarakhand">Uttarakhand</option>
                                                <option value="West Bengal">West Bengal</option>
                                            </select>
                                            <svg class="checkout-select-chevron" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div class="checkout-field-group">
                                        <label for="checkout-pincode" class="checkout-label">
                                            PIN Code <span class="checkout-req">*</span>
                                        </label>
                                        <div class="checkout-input-wrap">
                                            <svg class="checkout-field-icon" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            <input type="text" id="checkout-pincode" name="pincode"
                                                class="checkout-input" placeholder="Enter 6-digit PIN" maxlength="6"
                                                inputmode="numeric" autocomplete="postal-code" required>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <!-- Glowing Golden Divider -->
                            <div class="checkout-flare-divider" aria-hidden="true"></div>

                            <!-- 2. Payment Method Section -->
                            <div class="checkout-payment-block">
                                <div class="checkout-section-header is-compact">
                                    <div class="checkout-payment-icon-wrap" aria-hidden="true">
                                        <svg class="checkout-card-icon-svg" viewBox="0 0 28 22">
                                            <rect x="1" y="1" width="26" height="20" rx="3.5" fill="#ebb844" />
                                            <rect x="1" y="5.5" width="26" height="4" fill="#120d04" />
                                            <rect x="4.5" y="13.5" width="6.5" height="3" rx="1" fill="#120d04" />
                                        </svg>
                                    </div>
                                    <div class="checkout-section-header-text">
                                        <h3 class="checkout-subsection-title">Payment Method</h3>
                                        <p class="checkout-section-sub">Choose your preferred payment option.</p>
                                    </div>
                                </div>

                                <!-- Cash on Delivery Selected Option Card -->
                                <label class="checkout-cod-box" for="payment-cod-radio">
                                    <input type="radio" id="payment-cod-radio" name="payment_method" value="cod"
                                        class="checkout-cod-input" checked>
                                    <span class="checkout-cod-radio-ui" aria-hidden="true"></span>

                                    <span class="checkout-cod-parcel-icon" aria-hidden="true">
                                        <svg class="checkout-cod-svg" viewBox="0 0 44 38">
                                            <!-- Package Box -->
                                            <rect x="16" y="3" width="18" height="15" rx="2" fill="#ebb844" />
                                            <path d="M23 3v7h4V3" fill="#140f05" />
                                            <line x1="16" y1="10" x2="34" y2="10" stroke="#140f05" stroke-width="1.5" />
                                            <!-- Hand Holding Box -->
                                            <path
                                                d="M4 24h7v10H4a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 4 24Zm9 1.5h11.5a3 3 0 0 1 3 3c0 1.4-1 2.5-2.4 2.5H19.5l5.2 1.2a4 4 0 0 0 2.6-.3l9.2-4.6a2.6 2.6 0 0 1 3.5 1c.6 1.2.1 2.6-1.1 3.3l-10.2 5.4a7 7 0 0 1-5 .6L13 34.5V25.5Z"
                                                fill="#ebb844" />
                                        </svg>
                                    </span>

                                    <span class="checkout-cod-info">
                                        <span class="checkout-cod-title">Cash on Delivery (COD)</span>
                                        <span class="checkout-cod-desc">Pay with cash when you receive your order.</span>
                                    </span>
                                </label>
                            </div>

                            <!-- Subtle Section Divider -->
                            <div class="checkout-plain-divider" aria-hidden="true"></div>

                            <!-- 3. Order Notes (Optional) Section -->
                            <div class="checkout-notes-block">
                                <div class="checkout-notes-header">
                                    <svg class="checkout-notes-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                        <line x1="8" y1="13" x2="16" y2="13" />
                                        <line x1="8" y1="17" x2="13" y2="17" />
                                    </svg>
                                    <label for="checkout-notes" class="checkout-notes-title">
                                        Order Notes <span class="checkout-opt-bold">(Optional)</span>
                                    </label>
                                </div>
                                <textarea id="checkout-notes" name="order_notes" class="checkout-textarea" rows="3"
                                    placeholder="Any special instructions for delivery?"></textarea>
                            </div>

                        </div>

                        <!-- Back to Cart Link -->
                        <div class="checkout-back-wrap">
                            <a href="<?php echo esc_url( $cart_url ); ?>" class="cart-continue-link">
                                <svg class="cart-continue-arrow-svg" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 12H5M11 18l-6-6 6-6" />
                                </svg>
                                <span class="cart-continue-text">Back to Cart</span>
                            </a>
                        </div>

                    </div>

                    <!-- RIGHT COLUMN: ORDER SUMMARY CARD -->
                    <div class="checkout-right-col">
                        <div class="checkout-summary-card">

                            <!-- Summary Card Header -->
                            <div class="checkout-summary-header">
                                <svg class="checkout-summary-cart-svg" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle cx="9" cy="20" r="1.8" />
                                    <circle cx="18" cy="20" r="1.8" />
                                    <path d="M2.5 3h3l2.4 11.5a2 2 0 0 0 2 1.5h8.8a2 2 0 0 0 1.9-1.4L22.5 7H6.2" />
                                </svg>
                                <h2 class="checkout-summary-heading">Order Summary</h2>
                            </div>

                            <div class="checkout-summary-divider"></div>

                            <!-- Product Preview Block -->
                            <div class="checkout-product-preview">
                                <div class="checkout-preview-thumb">
                                    <img src="<?php echo esc_url( $img_uri . '/vallera_puff_transparent.png' ); ?>"
                                        alt="Vallera Premium Makeup Puff" class="checkout-preview-puff-img">
                                    <img src="<?php echo esc_url( $img_uri . '/vallera_puff_transparent.png' ); ?>" alt="" aria-hidden="true"
                                        class="checkout-preview-puff-reflection">
                                </div>

                                <div class="checkout-preview-details">
                                    <h3 class="checkout-preview-title">
                                        Vallera Premium<br>Makeup Puff
                                    </h3>

                                    <div class="checkout-preview-rating">
                                        <div class="checkout-preview-stars" aria-label="Rated 4.8 out of 5 stars">
                                            <svg class="checkout-star-svg" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M12 2.2l2.92 6.08 6.68.92-4.86 4.68 1.18 6.64L12 17.34l-5.92 3.18 1.18-6.64L2.4 9.2l6.68-.92L12 2.2z" />
                                            </svg>
                                            <svg class="checkout-star-svg" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M12 2.2l2.92 6.08 6.68.92-4.86 4.68 1.18 6.64L12 17.34l-5.92 3.18 1.18-6.64L2.4 9.2l6.68-.92L12 2.2z" />
                                            </svg>
                                            <svg class="checkout-star-svg" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M12 2.2l2.92 6.08 6.68.92-4.86 4.68 1.18 6.64L12 17.34l-5.92 3.18 1.18-6.64L2.4 9.2l6.68-.92L12 2.2z" />
                                            </svg>
                                            <svg class="checkout-star-svg" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M12 2.2l2.92 6.08 6.68.92-4.86 4.68 1.18 6.64L12 17.34l-5.92 3.18 1.18-6.64L2.4 9.2l6.68-.92L12 2.2z" />
                                            </svg>
                                            <svg class="checkout-star-svg" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    d="M12 2.2l2.92 6.08 6.68.92-4.86 4.68 1.18 6.64L12 17.34l-5.92 3.18 1.18-6.64L2.4 9.2l6.68-.92L12 2.2z" />
                                            </svg>
                                        </div>
                                        <span class="checkout-preview-rating-text">
                                            <strong>4.8</strong> (2,800+ Reviews)
                                        </span>
                                    </div>

                                    <div class="checkout-preview-price-row">
                                        <span class="checkout-preview-price-old">&#8377;<?php echo esc_html( number_format_i18n( $regular_price ) ); ?></span>
                                        <span class="checkout-preview-price-current">&#8377;<?php echo esc_html( number_format_i18n( $unit_price ) ); ?></span>
                                        <span class="checkout-preview-discount-pill">33% OFF</span>
                                    </div>
                                </div>
                            </div>

                            <div class="checkout-summary-divider"></div>

                            <!-- Subtotal & Shipping Breakdown -->
                            <div class="checkout-summary-rows">
                                <div class="checkout-summary-row">
                                    <span class="checkout-summary-label">Subtotal (<?php echo esc_html( $item_label ); ?>)</span>
                                    <span class="checkout-summary-value">&#8377;<?php echo esc_html( number_format_i18n( $subtotal ) ); ?></span>
                                </div>
                                <div class="checkout-summary-row">
                                    <span class="checkout-summary-label">Shipping</span>
                                    <span class="checkout-summary-shipping-free">FREE</span>
                                </div>
                            </div>

                            <div class="checkout-summary-divider"></div>

                            <!-- Total Payable Row -->
                            <div class="checkout-total-row">
                                <span class="checkout-total-label">Total Payable</span>
                                <span class="checkout-total-value">&#8377;<?php echo esc_html( number_format_i18n( $subtotal ) ); ?></span>
                            </div>

                            <!-- Place Order CTA Button -->
                            <button type="submit" class="btn-place-order" id="btn-place-order">
                                <svg class="btn-place-order-lock-svg" viewBox="0 0 24 24" aria-hidden="true">
                                    <rect x="4" y="11" width="16" height="10" rx="2" ry="2" />
                                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                                    <circle cx="12" cy="16" r="1" />
                                </svg>
                                <span class="btn-place-order-text">
                                    <strong>Place Order</strong> <span class="btn-place-order-cod">(Cash on Delivery)</span>
                                </span>
                                <svg class="btn-place-order-arrow-svg" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                            </button>

                            <!-- Glowing Golden Divider -->
                            <div class="checkout-flare-divider is-summary" aria-hidden="true"></div>

                            <!-- Bottom 4-Item Mini Trust Grid -->
                            <div class="checkout-mini-trust-grid">
                                <div class="checkout-mini-trust-item">
                                    <div class="checkout-mini-trust-icon-wrap">
                                        <img src="<?php echo esc_url( $img_uri . '/04_secure_checkout_shield.png' ); ?>" alt="Secure Checkout"
                                            class="checkout-mini-trust-icon">
                                    </div>
                                    <span class="checkout-mini-trust-label">Secure<br>Checkout</span>
                                </div>

                                <div class="checkout-mini-trust-item">
                                    <div class="checkout-mini-trust-icon-wrap">
                                        <img src="<?php echo esc_url( $img_uri . '/02_cash_on_delivery_package.png' ); ?>" alt="100% Genuine"
                                            class="checkout-mini-trust-icon">
                                    </div>
                                    <span class="checkout-mini-trust-label">100%<br>Genuine</span>
                                </div>

                                <div class="checkout-mini-trust-item">
                                    <div class="checkout-mini-trust-icon-wrap">
                                        <img src="<?php echo esc_url( $img_uri . '/01_free_shipping_truck.png' ); ?>" alt="Fast Delivery"
                                            class="checkout-mini-trust-icon">
                                    </div>
                                    <span class="checkout-mini-trust-label">Fast<br>Delivery</span>
                                </div>

                                <div class="checkout-mini-trust-item">
                                    <div class="checkout-mini-trust-icon-wrap">
                                        <img src="<?php echo esc_url( $img_uri . '/support-icon.png' ); ?>" alt="Dedicated Support"
                                            class="checkout-mini-trust-icon">
                                    </div>
                                    <span class="checkout-mini-trust-label">Dedicated<br>Support</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </form>

            <?php endif; ?>

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

