import React from 'react';
import '../../../../assets/styles/promo-banners.css';

/**
 * PromoBanners Component
 */
export const PromoBanners = () => {
  return (
    <section className="beautifo-promos-section" id="beautifo-promos">
      <div className="container">
        <div className="beautifo-promos-grid">
          {/* Card 1: Natural Beauty Collection */}
          <div className="beautifo-promo-card beautifo-promo-card-mint">
            <div className="beautifo-promo-content">
              <span className="beautifo-promo-badge">UP TO 30% OFF</span>
              <h3 className="beautifo-promo-title">
                Natural Beauty <br />
                Collection
              </h3>
              <a href="#shop" className="beautifo-promo-link">
                <span>SHOP NOW</span>
                <span className="beautifo-promo-arrow">&raquo;</span>
              </a>
            </div>
            <div className="beautifo-promo-visual">
              <img
                src="/images/promos/promo-natural-beauty.jpg"
                alt="Natural Beauty Collection"
                className="beautifo-promo-img beautifo-promo-img-left"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 2: Hair Mask */}
          <div className="beautifo-promo-card beautifo-promo-card-grey">
            <div className="beautifo-promo-content">
              <span className="beautifo-promo-subtitle">Look Gorgeous</span>
              <h3 className="beautifo-promo-title">
                Hair Mask
              </h3>
              <span className="beautifo-promo-tag">TOTAL HAIR REPAIR</span>
              <a href="#shop" className="beautifo-promo-link">
                <span>SHOP NOW</span>
                <span className="beautifo-promo-arrow">&raquo;</span>
              </a>
            </div>
            <div className="beautifo-promo-visual">
              <img
                src="/images/promos/promo-hair-mask.jpg"
                alt="Look Gorgeous Hair Mask"
                className="beautifo-promo-img beautifo-promo-img-right"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
