import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { BRANDS } from '../../../features/brands/data/brandsData';
import '../../../assets/styles/header.css';

/**
 * Header Component
 */
export const Header = ({ onOpenMobileMenu, wishlistCount = 0, cartCount = 0 }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (name) => setActiveDropdown(name);
  const handleMouseLeave = () => setActiveDropdown(null);

  // Group brands into 4 columns for clean presentation under PAGES / BRANDS
  const brandColumns = [
    {
      title: 'Pro Makeup & Base',
      brands: BRANDS.filter(b => ['nars', 'mac', 'recode', 'forever-52', 'kryolan', 'laura-mercier', 'tarte', 'character-cosmetics', 'ofra'].includes(b.id))
    },
    {
      title: 'Lashes & Brushes',
      brands: BRANDS.filter(b => ['lashup', 'pac', 'beilly', 'shopaarel', 'abs-pro', 'flicka', 'whitebird', 'pnf'].includes(b.id))
    },
    {
      title: 'Airbrush & Studio',
      brands: BRANDS.filter(b => ['temptu', 'venalisa-airbrush', 'makeup-studio-airbrush', 'digitek', 'ikonic', 'kemei'].includes(b.id))
    },
    {
      title: 'Artistry & Solutions',
      brands: BRANDS.filter(b => ['makezmia', 'aflairza', 'imagic', 'huda', 'shills', 'freshlook', 'acme-lense', 'hairblizz', 'discovery'].includes(b.id))
    }
  ];

  return (
    <header className="beautifo-header" id="beautifo-header">
      <div className="container beautifo-header-container">
        {/* Mobile Hamburger Toggle - Left side on Mobile */}
        <button
          type="button"
          className="beautifo-mobile-toggle"
          onClick={onOpenMobileMenu}
          aria-label="Open Navigation Menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Left Column: Navigation Links (Desktop) */}
        <div className="beautifo-nav-col">
          <ul className="beautifo-nav-list">
            {/* HOME */}
            <li
              className="beautifo-nav-item"
              onMouseEnter={() => handleMouseEnter('home')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/" className="beautifo-nav-link active">
                <span>HOME</span>
                <FontAwesomeIcon icon={faAngleDown} className="beautifo-nav-arrow" />
              </a>
              <div className={`beautifo-dropdown ${activeDropdown === 'home' ? 'show' : ''}`}>
                <a href="/" className="beautifo-dropdown-item">Home 01 - Natural Glow</a>
                <a href="/" className="beautifo-dropdown-item">Home 02 - Skincare Luxe</a>
                <a href="/" className="beautifo-dropdown-item">Home 03 - Pro Artistry</a>
              </div>
            </li>

            {/* SHOP */}
            <li
              className="beautifo-nav-item"
              onMouseEnter={() => handleMouseEnter('shop')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#shop" className="beautifo-nav-link">
                <span>SHOP</span>
                <FontAwesomeIcon icon={faAngleDown} className="beautifo-nav-arrow" />
              </a>
              <div className={`beautifo-dropdown ${activeDropdown === 'shop' ? 'show' : ''}`}>
                <a href="#shop-grid" className="beautifo-dropdown-item">Shop Full Width</a>
                <a href="#shop-left-sidebar" className="beautifo-dropdown-item">Shop With Sidebar</a>
                <a href="#product-details" className="beautifo-dropdown-item">Product Details</a>
                <a href="#cart" className="beautifo-dropdown-item">Shopping Cart</a>
                <a href="#checkout" className="beautifo-dropdown-item">Checkout</a>
              </div>
            </li>

            {/* PAGES (with Brands MegaMenu) */}
            <li
              className="beautifo-nav-item"
              onMouseEnter={() => handleMouseEnter('pages')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#pages" className="beautifo-nav-link">
                <span>PAGES</span>
                <FontAwesomeIcon icon={faAngleDown} className="beautifo-nav-arrow" />
              </a>
              <div className={`beautifo-dropdown beautifo-megamenu ${activeDropdown === 'pages' ? 'show' : ''}`}>
                <div className="beautifo-megamenu-grid">
                  {brandColumns.map((col, idx) => (
                    <div key={idx} className="beautifo-megamenu-col">
                      <h4 className="beautifo-megamenu-heading">{col.title}</h4>
                      {col.brands.map((brand) => (
                        <a
                          key={brand.id}
                          href={`#brand-${brand.id}`}
                          className="beautifo-dropdown-item px-0"
                        >
                          {brand.name}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </li>

            {/* BLOG */}
            <li
              className="beautifo-nav-item"
              onMouseEnter={() => handleMouseEnter('blog')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#blog" className="beautifo-nav-link">
                <span>BLOG</span>
                <FontAwesomeIcon icon={faAngleDown} className="beautifo-nav-arrow" />
              </a>
              <div className={`beautifo-dropdown ${activeDropdown === 'blog' ? 'show' : ''}`}>
                <a href="#blog-standard" className="beautifo-dropdown-item">Blog Standard</a>
                <a href="#blog-grid" className="beautifo-dropdown-item">Blog Grid 3 Columns</a>
                <a href="#blog-details" className="beautifo-dropdown-item">Single Article</a>
              </div>
            </li>

            {/* CONTACT US */}
            <li className="beautifo-nav-item">
              <a href="#contact" className="beautifo-nav-link">
                <span>CONTACT US</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Center Column: AIRA Logo */}
        <div className="beautifo-logo-col">
          <a href="/" className="beautifo-logo-link" aria-label="Aira Homepage">
            <img
              src="/images/logo/aira-logo.svg"
              alt="AIRA"
              className="beautifo-logo-img"
              width="140"
              height="46"
            />
          </a>
        </div>

        {/* Right Column: Search, User, Wishlist, Cart */}
        <div className="beautifo-actions-col">
          {/* 1. Search */}
          <button
            type="button"
            className="beautifo-action-btn beautifo-search-btn"
            onClick={onOpenMobileMenu}
            aria-label="Search"
            title="Search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* 2. Account (Desktop) */}
          <a
            href="#account"
            className="beautifo-action-btn beautifo-account-btn"
            aria-label="My Account"
            title="My Account"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>

          {/* 3. Wishlist (Heart with badge) */}
          <a
            href="#wishlist"
            className="beautifo-action-btn beautifo-wishlist-btn"
            aria-label="Wishlist"
            title="Wishlist"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span className="beautifo-badge">{wishlistCount}</span>
          </a>

          {/* 4. Cart (Shopping Bag Outline with badge) */}
          <a
            href="#cart"
            className="beautifo-action-btn beautifo-cart-btn"
            aria-label="Shopping Cart"
            title="Shopping Cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="beautifo-badge">{cartCount}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;


