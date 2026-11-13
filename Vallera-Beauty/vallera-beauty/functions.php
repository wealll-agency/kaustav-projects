<?php
/**
 * Vallera Beauty Theme Functions & WooCommerce Single-Product Integration
 *
 * @package Vallera_Beauty
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'VALLERA_THEME_VERSION', '1.0.3' );
define( 'VALLERA_THEME_DIR', get_template_directory() );
define( 'VALLERA_THEME_URI', get_template_directory_uri() );

require_once VALLERA_THEME_DIR . '/inc/home-options.php';

/**
 * 1. Theme Setup & WooCommerce Support
 */
function vallera_beauty_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'woocommerce' );
    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        )
    );
}
add_action( 'after_setup_theme', 'vallera_beauty_theme_setup' );

/**
 * Disable default WooCommerce front-end stylesheets so our pixel-perfect custom CSS is never overridden.
 */
add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );

/**
 * 2. Auto-Create / Retrieve Single Product ("Vallera Premium Makeup Puff") & Store Pages
 */
function vallera_get_main_product_id() {
    if ( ! class_exists( 'WooCommerce' ) ) {
        return 0;
    }

    $saved_id = (int) get_option( 'vallera_main_product_id', 0 );
    if ( $saved_id > 0 && 'product' === get_post_type( $saved_id ) && 'publish' === get_post_status( $saved_id ) ) {
        return $saved_id;
    }

    // Look for any existing published product first
    $existing_products = get_posts(
        array(
            'post_type'      => 'product',
            'post_status'    => 'publish',
            'posts_per_page' => 1,
            'fields'         => 'ids',
            'orderby'        => 'ID',
            'order'          => 'ASC',
        )
    );

    if ( ! empty( $existing_products ) ) {
        $product_id = (int) $existing_products[0];
        update_option( 'vallera_main_product_id', $product_id );
        return $product_id;
    }

    // Auto-create the single product if none exists yet
    if ( class_exists( 'WC_Product_Simple' ) ) {
        $product = new WC_Product_Simple();
        $product->set_name( 'Vallera Premium Makeup Puff' );
        $product->set_slug( 'vallera-premium-makeup-puff' );
        $product->set_status( 'publish' );
        $product->set_catalog_visibility( 'visible' );
        $product->set_description( 'Soft, seamless blending for a flawless finish.' );
        $product->set_short_description( 'Soft, seamless blending for a flawless finish.' );
        $product->set_regular_price( '699' );
        $product->set_sale_price( '399' );
        $product->set_price( '399' );
        $product->set_manage_stock( false );
        $product->set_stock_status( 'instock' );
        $product->set_sold_individually( false );
        $product_id = $product->save();

        if ( $product_id ) {
            update_option( 'vallera_main_product_id', (int) $product_id );
            return (int) $product_id;
        }
    }

    return 0;
}

/**
 * Ensure Cart & Checkout pages and Cash on Delivery (COD) are ready
 */
function vallera_ensure_store_pages_and_cod() {
    if ( ! class_exists( 'WooCommerce' ) ) {
        return;
    }

    // Ensure main product exists
    vallera_get_main_product_id();

    // Ensure Cart page exists
    $cart_page_id = (int) get_option( 'woocommerce_cart_page_id', 0 );
    if ( ! $cart_page_id || 'publish' !== get_post_status( $cart_page_id ) ) {
        $cart_page = get_page_by_path( 'cart' );
        if ( ! $cart_page ) {
            $cart_page_id = wp_insert_post(
                array(
                    'post_title'   => 'Cart',
                    'post_name'    => 'cart',
                    'post_status'  => 'publish',
                    'post_type'    => 'page',
                    'post_content' => '[woocommerce_cart]',
                )
            );
        } else {
            $cart_page_id = $cart_page->ID;
        }
        if ( $cart_page_id && ! is_wp_error( $cart_page_id ) ) {
            update_option( 'woocommerce_cart_page_id', (int) $cart_page_id );
        }
    }

    // Ensure Checkout page exists
    $checkout_page_id = (int) get_option( 'woocommerce_checkout_page_id', 0 );
    if ( ! $checkout_page_id || 'publish' !== get_post_status( $checkout_page_id ) ) {
        $checkout_page = get_page_by_path( 'checkout' );
        if ( ! $checkout_page ) {
            $checkout_page_id = wp_insert_post(
                array(
                    'post_title'   => 'Checkout',
                    'post_name'    => 'checkout',
                    'post_status'  => 'publish',
                    'post_type'    => 'page',
                    'post_content' => '[woocommerce_checkout]',
                )
            );
        } else {
            $checkout_page_id = $checkout_page->ID;
        }
        if ( $checkout_page_id && ! is_wp_error( $checkout_page_id ) ) {
            update_option( 'woocommerce_checkout_page_id', (int) $checkout_page_id );
        }
    }

    // Ensure Thank You page exists
    $thank_you_page_id = (int) get_option( 'vallera_thank_you_page_id', 0 );
    if ( ! $thank_you_page_id || 'publish' !== get_post_status( $thank_you_page_id ) ) {
        $thank_you_page = get_page_by_path( 'thank-you' );
        if ( ! $thank_you_page ) {
            $thank_you_page_id = wp_insert_post(
                array(
                    'post_title'   => 'Thank You',
                    'post_name'    => 'thank-you',
                    'post_status'  => 'publish',
                    'post_type'    => 'page',
                    'post_content' => '',
                )
            );
        } else {
            $thank_you_page_id = $thank_you_page->ID;
        }
        if ( $thank_you_page_id && ! is_wp_error( $thank_you_page_id ) ) {
            update_option( 'vallera_thank_you_page_id', (int) $thank_you_page_id );
        }
    }

    // Ensure Currency is INR and COD gateway is enabled
    if ( 'INR' !== get_option( 'woocommerce_currency' ) ) {
        update_option( 'woocommerce_currency', 'INR' );
    }

    // Ensure WooCommerce Store Visibility is set to Live (not "Coming Soon") so visitors in Incognito can access Cart & Checkout
    if ( 'no' !== get_option( 'woocommerce_coming_soon' ) ) {
        update_option( 'woocommerce_coming_soon', 'no' );
    }
    if ( 'no' !== get_option( 'woocommerce_store_pages_only' ) ) {
        update_option( 'woocommerce_store_pages_only', 'no' );
    }

    $cod_settings = get_option( 'woocommerce_cod_settings', array() );
    if ( empty( $cod_settings ) || ! isset( $cod_settings['enabled'] ) || 'yes' !== $cod_settings['enabled'] ) {
        $cod_settings['enabled']            = 'yes';
        $cod_settings['title']              = 'Cash on Delivery (COD)';
        $cod_settings['description']        = 'Pay with cash when you receive your order.';
        $cod_settings['instructions']       = 'Pay with cash upon delivery.';
        $cod_settings['enable_for_virtual'] = 'yes';
        update_option( 'woocommerce_cod_settings', $cod_settings );
    }
}
add_action( 'init', 'vallera_ensure_store_pages_and_cod', 20 );

/**
 * Exclude all pages from WooCommerce "Coming Soon" mode so Cart/Checkout always work for logged-out visitors
 */
add_filter( 'woocommerce_coming_soon_exclude', '__return_true', 999 );

/**
 * Helper: Get Cart Page URL
 */
function vallera_get_cart_page_url() {
    if ( function_exists( 'wc_get_cart_url' ) ) {
        return wc_get_cart_url();
    }
    return home_url( '/cart/' );
}

/**
 * Helper: Get Checkout Page URL
 */
function vallera_get_checkout_page_url() {
    if ( function_exists( 'wc_get_checkout_url' ) ) {
        return wc_get_checkout_url();
    }
    return home_url( '/checkout/' );
}

/**
 * Helper: Get Thank You Page URL
 */
function vallera_get_thank_you_page_url() {
    $ty_id = (int) get_option( 'vallera_thank_you_page_id', 0 );
    if ( $ty_id > 0 && 'publish' === get_post_status( $ty_id ) ) {
        $permalink = get_permalink( $ty_id );
        if ( $permalink ) {
            return $permalink;
        }
    }
    $ty_page = get_page_by_path( 'thank-you' );
    if ( $ty_page ) {
        return get_permalink( $ty_page->ID );
    }
    return home_url( '/thank-you/' );
}

/**
 * Helper: Build Direct "Order Now / Buy Now" URL that adds product to cart and redirects to Cart page
 */
function vallera_get_buy_now_url( $quantity = 1 ) {
    return add_query_arg(
        array(
            'vallera_buy_now' => '1',
            'quantity'        => max( 1, absint( $quantity ) ),
        ),
        home_url( '/' )
    );
}

/**
 * Helper: Get current Cart Summary Data (Quantity, Unit Price, Subtotal, Total)
 */
function vallera_get_cart_summary_data() {
    $product_name  = 'Vallera Premium Makeup Puff';
    $unit_price    = 399;
    $regular_price = 699;
    $quantity      = 1;

    $product_id = vallera_get_main_product_id();
    if ( $product_id && function_exists( 'wc_get_product' ) ) {
        $product = wc_get_product( $product_id );
        if ( $product ) {
            if ( $product->get_name() ) {
                $product_name = $product->get_name();
            }
            $raw_price = (float) $product->get_price();
            $raw_reg   = (float) $product->get_regular_price();
            if ( $raw_price > 0 ) {
                $unit_price = (int) round( $raw_price );
            }
            if ( $raw_reg > 0 ) {
                $regular_price = (int) round( $raw_reg );
            }
        }
    }

    if ( function_exists( 'WC' ) && WC()->cart ) {
        if ( WC()->cart->is_empty() && $product_id > 0 ) {
            // Ensure at least 1 unit is in the cart when visiting Cart or Checkout
            WC()->cart->add_to_cart( $product_id, 1 );
        }
        $cart_qty = (int) WC()->cart->get_cart_contents_count();
        if ( $cart_qty > 0 ) {
            $quantity = $cart_qty;
        }
    }

    $subtotal = $unit_price * $quantity;

    return array(
        'product_id'    => $product_id,
        'product_name'  => $product_name,
        'quantity'      => $quantity,
        'unit_price'    => $unit_price,
        'regular_price' => $regular_price,
        'subtotal'      => $subtotal,
        'total'         => $subtotal,
    );
}

/**
 * 3. Enqueue Fonts, Styles & Scripts
 */
function vallera_beauty_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style(
        'vallera-google-fonts',
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        array(),
        null
    );

    // Bootstrap 5.3 CSS
    wp_enqueue_style(
        'bootstrap-css',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        array(),
        '5.3.3'
    );

    // Main Custom Stylesheet (assets/css/style.css)
    wp_enqueue_style(
        'vallera-custom-style',
        VALLERA_THEME_URI . '/assets/css/style.css',
        array( 'bootstrap-css' ),
        VALLERA_THEME_VERSION
    );

    // jQuery (WordPress bundled)
    wp_enqueue_script( 'jquery' );

    // Bootstrap 5.3 Bundle JS
    wp_enqueue_script(
        'bootstrap-bundle-js',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
        array( 'jquery' ),
        '5.3.3',
        true
    );

    // Main Custom JS (assets/js/custom.js)
    wp_enqueue_script(
        'vallera-custom-js',
        VALLERA_THEME_URI . '/assets/js/custom.js',
        array( 'jquery', 'bootstrap-bundle-js' ),
        VALLERA_THEME_VERSION,
        true
    );

    $cart_data = vallera_get_cart_summary_data();

    wp_localize_script(
        'vallera-custom-js',
        'vallera_params',
        array(
            'ajax_url'      => admin_url( 'admin-ajax.php' ),
            'nonce'         => wp_create_nonce( 'vallera_cart_nonce' ),
            'home_url'      => home_url( '/' ),
            'cart_url'      => vallera_get_cart_page_url(),
            'checkout_url'  => vallera_get_checkout_page_url(),
            'thank_you_url' => vallera_get_thank_you_page_url(),
            'buy_now_base'  => add_query_arg( 'vallera_buy_now', '1', home_url( '/' ) ),
            'unit_price'    => $cart_data['unit_price'],
            'initial_qty'   => $cart_data['quantity'],
        )
    );
}
add_action( 'wp_enqueue_scripts', 'vallera_beauty_enqueue_assets' );

/**
 * Add body class `cart-page-body` on Cart, Checkout & Thank You pages so layout padding matches our HTML templates
 */
function vallera_beauty_body_classes( $classes ) {
    if (
        ( function_exists( 'is_cart' ) && is_cart() ) ||
        ( function_exists( 'is_checkout' ) && is_checkout() ) ||
        is_page( array( 'cart', 'checkout', 'thank-you' ) ) ||
        is_page_template( array( 'page-cart.php', 'page-checkout.php', 'page-thank-you.php' ) ) ||
        isset( $_GET['vallera_thank_you'] ) ||
        isset( $_GET['order_received'] )
    ) {
        $classes[] = 'cart-page-body';
    }
    return $classes;
}
add_filter( 'body_class', 'vallera_beauty_body_classes' );

/**
 * 4. Handle "Order Now / Buy Now" Click -> Add to WooCommerce Cart -> Redirect to Cart Page
 *    Also Redirect Shop / Single Product Archive URLs to Home Page (Single-Product Store)
 */
function vallera_handle_buy_now_and_redirects() {
    if ( is_admin() ) {
        return;
    }

    // A. Direct "Order Now" handler (?vallera_buy_now=1&quantity=X)
    if ( isset( $_GET['vallera_buy_now'] ) && '1' === sanitize_text_field( wp_unslash( $_GET['vallera_buy_now'] ) ) ) {
        $qty        = isset( $_GET['quantity'] ) ? max( 1, min( 99, absint( $_GET['quantity'] ) ) ) : 1;
        $product_id = vallera_get_main_product_id();

        if ( $product_id > 0 && function_exists( 'WC' ) && WC()->cart ) {
            WC()->cart->empty_cart();
            WC()->cart->add_to_cart( $product_id, $qty );
        }

        wp_safe_redirect( vallera_get_cart_page_url() );
        exit;
    }

    // B. Sync quantity query param if passed directly to Checkout (?qty=X)
    if (
        ( ( function_exists( 'is_checkout' ) && is_checkout() ) || is_page( 'checkout' ) ) &&
        isset( $_GET['qty'] )
    ) {
        $qty        = max( 1, min( 99, absint( $_GET['qty'] ) ) );
        $product_id = vallera_get_main_product_id();
        if ( $product_id > 0 && function_exists( 'WC' ) && WC()->cart ) {
            WC()->cart->empty_cart();
            WC()->cart->add_to_cart( $product_id, $qty );
        }
    }

    // C. Disable Shop Page & Single Product Page -> Redirect to Home Page
    if (
        function_exists( 'is_shop' ) &&
        ( is_shop() || is_product() || is_product_category() || is_product_tag() )
    ) {
        wp_safe_redirect( home_url( '/' ) );
        exit;
    }
}
add_action( 'template_redirect', 'vallera_handle_buy_now_and_redirects', 5 );

/**
 * Standard WooCommerce Add-to-Cart Redirect -> Always go to Cart Page
 */
function vallera_woocommerce_add_to_cart_redirect() {
    return vallera_get_cart_page_url();
}
add_filter( 'woocommerce_add_to_cart_redirect', 'vallera_woocommerce_add_to_cart_redirect' );

/**
 * 5. Force Custom Page Templates for Cart, Checkout & Thank You Pages
 */
function vallera_force_cart_and_checkout_templates( $template ) {
    if (
        is_page( 'thank-you' ) ||
        isset( $_GET['vallera_thank_you'] ) ||
        isset( $_GET['order_received'] )
    ) {
        $thank_you_template = VALLERA_THEME_DIR . '/page-thank-you.php';
        if ( file_exists( $thank_you_template ) ) {
            return $thank_you_template;
        }
    }

    if ( ( function_exists( 'is_cart' ) && is_cart() ) || is_page( 'cart' ) ) {
        $cart_template = VALLERA_THEME_DIR . '/page-cart.php';
        if ( file_exists( $cart_template ) ) {
            return $cart_template;
        }
    }

    if ( ( function_exists( 'is_checkout' ) && is_checkout() ) || is_page( 'checkout' ) ) {
        $checkout_template = VALLERA_THEME_DIR . '/page-checkout.php';
        if ( file_exists( $checkout_template ) ) {
            return $checkout_template;
        }
    }

    return $template;
}
add_filter( 'template_include', 'vallera_force_cart_and_checkout_templates', 99 );

/**
 * 6. AJAX Handler: Update WooCommerce Cart Quantity from Cart Page (+ / - / Remove)
 */
function vallera_ajax_update_cart_qty() {
    check_ajax_referer( 'vallera_cart_nonce', 'nonce' );

    $qty        = isset( $_POST['quantity'] ) ? max( 1, min( 99, absint( $_POST['quantity'] ) ) ) : 1;
    $product_id = vallera_get_main_product_id();

    if ( $product_id > 0 && function_exists( 'WC' ) && WC()->cart ) {
        WC()->cart->empty_cart();
        WC()->cart->add_to_cart( $product_id, $qty );
        WC()->cart->calculate_totals();
    }

    $summary = vallera_get_cart_summary_data();
    wp_send_json_success( $summary );
}
add_action( 'wp_ajax_vallera_update_cart_qty', 'vallera_ajax_update_cart_qty' );
add_action( 'wp_ajax_nopriv_vallera_update_cart_qty', 'vallera_ajax_update_cart_qty' );

/**
 * Shared Helper: Create Real WooCommerce COD Order & Return Redirect URL to Thank You Page
 */
function vallera_create_cod_order_from_data( $post_data ) {
    if ( ! class_exists( 'WooCommerce' ) || ! function_exists( 'wc_create_order' ) ) {
        return false;
    }

    $fullname    = isset( $post_data['fullname'] ) ? sanitize_text_field( wp_unslash( $post_data['fullname'] ) ) : '';
    $mobile      = isset( $post_data['mobile'] ) ? preg_replace( '/\D/', '', sanitize_text_field( wp_unslash( $post_data['mobile'] ) ) ) : '';
    $email       = isset( $post_data['email'] ) ? sanitize_email( wp_unslash( $post_data['email'] ) ) : '';
    $address     = isset( $post_data['address'] ) ? sanitize_textarea_field( wp_unslash( $post_data['address'] ) ) : '';
    $city        = isset( $post_data['city'] ) ? sanitize_text_field( wp_unslash( $post_data['city'] ) ) : '';
    $state       = isset( $post_data['state'] ) ? sanitize_text_field( wp_unslash( $post_data['state'] ) ) : '';
    $pincode     = isset( $post_data['pincode'] ) ? preg_replace( '/\D/', '', sanitize_text_field( wp_unslash( $post_data['pincode'] ) ) ) : '';
    $order_notes = isset( $post_data['order_notes'] ) ? sanitize_textarea_field( wp_unslash( $post_data['order_notes'] ) ) : '';

    // Server-side validation of required fields
    if ( empty( $fullname ) || 10 !== strlen( $mobile ) || empty( $address ) || empty( $city ) || empty( $state ) || 6 !== strlen( $pincode ) ) {
        return false;
    }

    // Split Full Name into First Name & Last Name for WooCommerce
    $name_parts = preg_split( '/\s+/', trim( $fullname ), 2 );
    $first_name = isset( $name_parts[0] ) ? $name_parts[0] : $fullname;
    $last_name  = isset( $name_parts[1] ) ? $name_parts[1] : '';

    $summary    = vallera_get_cart_summary_data();
    $product_id = $summary['product_id'];
    $quantity   = $summary['quantity'];

    $order = wc_create_order();
    if ( is_wp_error( $order ) ) {
        return false;
    }

    if ( $product_id > 0 ) {
        $product = wc_get_product( $product_id );
        if ( $product ) {
            $order->add_product( $product, $quantity );
        }
    }

    $address_data = array(
        'first_name' => $first_name,
        'last_name'  => $last_name,
        'email'      => ! empty( $email ) ? $email : 'customer@vallerabeauty.com',
        'phone'      => $mobile,
        'address_1'  => $address,
        'city'       => $city,
        'state'      => $state,
        'postcode'   => $pincode,
        'country'    => 'IN',
    );

    $order->set_address( $address_data, 'billing' );
    $order->set_address( $address_data, 'shipping' );

    $order->set_payment_method( 'cod' );
    $order->set_payment_method_title( 'Cash on Delivery (COD)' );

    if ( ! empty( $order_notes ) ) {
        $order->set_customer_note( $order_notes );
    }

    $order->calculate_totals();
    $order->update_status( 'processing', 'Order placed via Vallera Beauty Custom COD Checkout.' );

    if ( WC()->cart ) {
        WC()->cart->empty_cart();
    }

    return add_query_arg(
        array(
            'order_received' => $order->get_id(),
            'key'            => $order->get_order_key(),
        ),
        vallera_get_thank_you_page_url()
    );
}

/**
 * 7. AJAX Handler: Place COD Order & Return Thank You Page Redirect URL
 */
function vallera_ajax_place_cod_order() {
    $redirect_url = vallera_create_cod_order_from_data( $_POST );
    if ( $redirect_url ) {
        wp_send_json_success( array( 'redirect_url' => $redirect_url ) );
    } else {
        wp_send_json_error( array( 'message' => 'Please fill all required fields accurately.' ) );
    }
}
add_action( 'wp_ajax_vallera_place_cod_order', 'vallera_ajax_place_cod_order' );
add_action( 'wp_ajax_nopriv_vallera_place_cod_order', 'vallera_ajax_place_cod_order' );

/**
 * 8. Fallback Form POST Handler for Checkout Submission
 */
function vallera_process_custom_checkout() {
    if ( ! isset( $_POST['vallera_checkout_submit'] ) ) {
        return;
    }

    $redirect_url = vallera_create_cod_order_from_data( $_POST );
    if ( $redirect_url ) {
        wp_safe_redirect( $redirect_url );
        exit;
    }
}
add_action( 'template_redirect', 'vallera_process_custom_checkout', 1 );

