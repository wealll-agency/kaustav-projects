<?php
/**
 * Main Index Fallback Template
 *
 * @package Vallera_Beauty
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ( function_exists( 'is_cart' ) && is_cart() ) || is_page( 'cart' ) ) {
    include VALLERA_THEME_DIR . '/page-cart.php';
    return;
}

if ( ( function_exists( 'is_checkout' ) && is_checkout() ) || is_page( 'checkout' ) ) {
    include VALLERA_THEME_DIR . '/page-checkout.php';
    return;
}

include VALLERA_THEME_DIR . '/front-page.php';

