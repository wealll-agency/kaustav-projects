import React from 'react';
import '../../../../assets/styles/multi-banner-grid.css';

/**
 * Beautifo MultiBannerGrid Component
 */
const MultiBannerGrid = () => {
  return (
    <section className="beautifo-showcase-section" aria-label="Curated Beauty Collections">
      <div className="container">
        {/* Top Announcement Teaser Link */}
        <div className="beautifo-showcase-teaser">
          <span className="teaser-text">Get hands on with our receipe ideas.</span>
          <a href="#shop" className="teaser-link">
            Shop All Products <span className="arrow" aria-hidden="true">&raquo;</span>
          </a>
        </div>

        {/* 4-Card Asymmetric Showcase Grid */}
        <div className="beautifo-showcase-grid">
          {/* Card 1: Super Natural Beauty (Tall Column Left) */}
          <div className="showcase-card showcase-card--tall showcase-card--natural">
            <a href="#shop" className="showcase-card-link-overlay" aria-label="Shop Super Natural Beauty up to 50% off">
              Shop Super Natural Beauty
            </a>
            <div
              className="showcase-card-bg"
              style={{ backgroundImage: `url('/images/showcase/banner-super-natural.jpg')` }}
            />
            <div className="showcase-card-content">
              <span className="showcase-badge badge-coral">UP TO 50% OFF</span>
              <h3 className="showcase-title title-dark">
                Super Natural<br />Beauty
              </h3>
              <span className="showcase-btn btn-dark">
                <span>SHOP NOW</span>
                <span className="btn-arrow" aria-hidden="true">&raquo;</span>
              </span>
            </div>
          </div>

          {/* Right Column: 2 Rows (Top 2 cards, Bottom 1 wide card) */}
          <div className="showcase-right-column">
            {/* Top Row: 2 Cards */}
            <div className="showcase-row-top">
              {/* Card 2: Body Butter */}
              <div className="showcase-card showcase-card--butter">
                <a href="#shop" className="showcase-card-link-overlay" aria-label="Shop Body Butter with 10% off">
                  Shop Body Butter
                </a>
                <div
                  className="showcase-card-bg"
                  style={{ backgroundImage: `url('/images/showcase/banner-body-butter.jpg')` }}
                />
                <div className="showcase-card-content">
                  <span className="showcase-badge badge-bold-dark">10% OFF</span>
                  <h3 className="showcase-title title-dark">
                    Body Butter
                  </h3>
                  <span className="showcase-btn btn-dark">
                    <span>SHOP NOW</span>
                    <span className="btn-arrow" aria-hidden="true">&raquo;</span>
                  </span>
                </div>
              </div>

              {/* Card 3: Health & Beauty */}
              <div className="showcase-card showcase-card--health">
                <a href="#shop" className="showcase-card-link-overlay" aria-label="Shop Health and Beauty Skin 2.0">
                  Shop Health &amp; Beauty
                </a>
                <div
                  className="showcase-card-bg"
                  style={{ backgroundImage: `url('/images/showcase/banner-health-beauty.jpg')` }}
                />
                <div className="showcase-card-content">
                  <span className="showcase-badge badge-coral">SKIN 2.0</span>
                  <h3 className="showcase-title title-dark">
                    Health<br /><b>&amp; Beauty</b>
                  </h3>
                  <span className="showcase-btn btn-dark">
                    <span>SHOP NOW</span>
                    <span className="btn-arrow" aria-hidden="true">&raquo;</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Wide Card 4 (Beauty & Spa Treatments) */}
            <div className="showcase-card showcase-card--wide showcase-card--spa">
              <a href="#shop" className="showcase-card-link-overlay" aria-label="Shop Beauty and Spa Treatments for Skin, Hair, Body">
                Shop Beauty &amp; Spa Treatments
              </a>
              <div
                className="showcase-card-bg"
                style={{ backgroundImage: `url('/images/showcase/banner-spa-treatment.jpg')` }}
              />
              <div className="showcase-card-content">
                <h3 className="showcase-title title-light">
                  Beauty &amp;<br />Spa Treatments
                </h3>
                <span className="showcase-badge badge-golden">SKIN - HAIR - BODY</span>
                <span className="showcase-btn btn-light">
                  <span>SHOP NOW</span>
                  <span className="btn-arrow" aria-hidden="true">&raquo;</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiBannerGrid;
