import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleRight, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { BRANDS } from '../../../features/brands/data/brandsData';
import '../../../assets/styles/mobile-nav.css';

/**
 * Mobile Navigation Drawer Component
 * Built using React Bootstrap Offcanvas with clean CSS and no inline styles
 */
export const MobileNav = ({ show, onHide }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Offcanvas show={show} onHide={onHide} placement="start" className="aira-mobile-drawer">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <img
            src="/images/logo/aira-logo.svg"
            alt="Aira Logo"
            className="aira-mobile-logo"
            width="130"
            height="34"
          />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* Mobile Search */}
        <div className="aira-mobile-search">
          <form className="aira-search-box" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="aira-search-input"
              placeholder="Search products, brands..."
              aria-label="Search mobile"
            />
            <button type="submit" className="aira-search-btn" aria-label="Search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>

        {/* Mobile Navigation Links */}
        <div className="aira-mobile-menu-list">
          <a href="/" className="aira-mobile-menu-link" onClick={onHide}>
            <span>Home</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
          <a href="#shop" className="aira-mobile-menu-link" onClick={onHide}>
            <span>Shop All</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
          <a href="#pro-kits" className="aira-mobile-menu-link" onClick={onHide}>
            <span>Pro Makeup Artist Kits</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
          <a href="#blog" className="aira-mobile-menu-link" onClick={onHide}>
            <span>Beauty Journal</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
          <a href="#contact" className="aira-mobile-menu-link" onClick={onHide}>
            <span>Contact Us</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </div>

        {/* Featured Brands in Mobile Drawer */}
        <div className="aira-mobile-brands">
          <h4 className="aira-mobile-brands-title">Popular Brands</h4>
          <div className="aira-mobile-brands-grid">
            {BRANDS.slice(0, 14).map((brand) => (
              <a
                key={brand.id}
                href={`#brand-${brand.id}`}
                className="aira-mobile-brand-pill"
                onClick={onHide}
              >
                {brand.name}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Footer Links: Account & Wishlist */}
        <div className="aira-mobile-footer-actions">
          <a href="#account" className="aira-mobile-footer-link" onClick={onHide}>
            <FontAwesomeIcon icon={faUser} />
            <span>My Account / Sign In</span>
          </a>
          <a href="#wishlist" className="aira-mobile-footer-link" onClick={onHide}>
            <FontAwesomeIcon icon={faHeart} />
            <span>My Wishlist</span>
          </a>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MobileNav;

