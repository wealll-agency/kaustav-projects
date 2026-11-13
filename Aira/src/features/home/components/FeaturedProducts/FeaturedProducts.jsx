import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faRightLeft, faBagShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import { FEATURED_PRODUCTS } from '../../data/productsData';
import '../../../../assets/styles/featured-products.css';

/**
 * FeaturedProducts Component - 100% Exact Copy of Beautifo Reference
 * Features:
 * - Centered title & category filter tabs (All, For face, For body, For hair, Accessories)
 * - 4-column responsive grid
 * - In Stock & Sale badges
 * - Floating action buttons (Quick View, Wishlist, Compare, Add to Cart)
 * - Star ratings and price display
 */
export const FeaturedProducts = ({ onAddToCart, onAddToWishlist }) => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'face', label: 'For face' },
    { key: 'body', label: 'For body' },
    { key: 'hair', label: 'For hair' },
    { key: 'accessories', label: 'Accessories' }
  ];

  const filteredProducts = activeTab === 'all'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section className="beautifo-products-section" id="featured-products">
      <div className="container">
        {/* Section Header */}
        <div className="beautifo-section-header text-center">
          <h2 className="beautifo-section-title">Featured Products</h2>

          {/* Category Filter Tabs */}
          <div className="beautifo-product-tabs" role="tablist">
            {categories.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`beautifo-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
                role="tab"
                aria-selected={activeTab === tab.key}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="beautifo-products-grid">
          {filteredProducts.map((product) => {
            const discountPercent = product.originalPrice && product.originalPrice > product.price
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : null;

            return (
              <div key={product.id} className="beautifo-product-card">
                {/* Product Thumbnail Container */}
                <div className="beautifo-product-thumb">
                  {/* Top-Left Discount Badge */}
                  {discountPercent && (
                    <span className="beautifo-badge-discount">
                      {discountPercent}% OFF
                    </span>
                  )}

                  {/* Product Image Link with Belletny Dual-Image Hover Swap */}
                  <a href={`#product-${product.id}`} className="beautifo-product-img-link">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="beautifo-product-img reg-image"
                      loading="lazy"
                    />
                    {product.hoverImage && (
                      <img
                        src={product.hoverImage}
                        alt={`${product.name} alternate view`}
                        className="beautifo-product-img hover-image"
                        loading="lazy"
                      />
                    )}
                  </a>

                  {/* Top-Right Sliding Action Buttons (Belletny: Wishlist, Quick View, Compare) */}
                  <div className="beautifo-product-actions">
                    <button
                      type="button"
                      className="beautifo-prod-action-btn btn-wishlist"
                      title="Add to Wishlist"
                      aria-label="Add to Wishlist"
                      onClick={() => onAddToWishlist && onAddToWishlist(product)}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button
                      type="button"
                      className="beautifo-prod-action-btn btn-quickview"
                      title="Quick View"
                      aria-label="Quick View"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button
                      type="button"
                      className="beautifo-prod-action-btn btn-compare"
                      title="Compare"
                      aria-label="Compare"
                    >
                      <FontAwesomeIcon icon={faRightLeft} />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="beautifo-product-info">
                  {/* Rating Stars */}
                  <div className="beautifo-product-rating" aria-label={`Rating: ${product.rating} stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className={i < product.rating ? 'star-filled' : 'star-empty'}
                      />
                    ))}
                  </div>

                  {/* Product Name in Playfair Display Serif */}
                  <h3 className="beautifo-product-name">
                    <a href={`#product-${product.id}`} title={product.name}>
                      {product.name}
                    </a>
                  </h3>

                  {/* Price & Hover "+ Add to Cart" Interchange Area */}
                  <div className="beautifo-price-cart-wrapper">
                    <div className="beautifo-product-price-wrap">
                      <span className="beautifo-product-price">
                        &#8377;{product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="beautifo-product-old-price">
                          &#8377;{product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <div className="beautifo-add-to-cart-wrap">
                      <button
                        type="button"
                        className="beautifo-hover-addtocart"
                        onClick={() => onAddToCart && onAddToCart(product)}
                      >
                        + Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
