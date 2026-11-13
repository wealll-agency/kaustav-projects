import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { BRAND_LOGOS } from '../../data/brandLogosData';
import '../../../../assets/styles/brand-logos.css';

/**
 * BrandLogos Component
 * Ultra-Luxury Brand Slider Carousel matching Beautifo Reference Design
 * Featuring official Pro Beauty Way brand logos in interactive rounded luxury badges,
 * an elegant section header, smooth marquee animation, and category tags.
 */
export const BrandLogos = ({ brands = BRAND_LOGOS }) => {
  const trackRef = useRef(null);

  // Duplicate the brands array to create a completely seamless infinite loop
  const loopBrands = [...brands, ...brands];

  const handleScrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="beautifo-brands-section"
      id="brand-partners"
      aria-label="Featured Brand Partners"
    >
      <Container>
        {/* Section Header */}
        <div className="beautifo-brands-header">
          <span className="beautifo-brands-badge">
            <span className="beautifo-brands-badge-dot" aria-hidden="true"></span>
            Official Pro Brands
          </span>
          <h2 className="beautifo-brands-title">
            Shop By Top Global Brands
          </h2>
          <p className="beautifo-brands-subtitle">
            100% authentic professional cosmetics, studio tools &amp; luxury artistry essentials
          </p>
        </div>

        {/* Interactive Infinite Slider Track */}
        <div className="beautifo-brands-slider-wrap">
          {/* Previous Arrow Button */}
          <button
            type="button"
            className="beautifo-brands-nav-btn beautifo-brands-nav-prev"
            onClick={handleScrollLeft}
            aria-label="Previous Brands"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Infinite Marquee Track */}
          <div className="beautifo-brands-track" ref={trackRef}>
            {loopBrands.map((brand, index) => (
              <a
                key={`${brand.id}-${index}`}
                href={brand.link || `#brand-${brand.id}`}
                className="beautifo-brand-card"
                title={`${brand.name} - ${brand.category}`}
                aria-label={`${brand.name} - ${brand.category}`}
              >
                {/* Logo Image Stage */}
                <div className="beautifo-brand-logo-stage">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="beautifo-brand-card-img"
                    loading="lazy"
                  />
                </div>

                {/* Category Chip */}
                {brand.category && (
                  <span className="beautifo-brand-cat">{brand.category}</span>
                )}
              </a>
            ))}
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            className="beautifo-brands-nav-btn beautifo-brands-nav-next"
            onClick={handleScrollRight}
            aria-label="Next Brands"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Section Bottom CTA */}
        <div className="beautifo-brands-footer">
          <a href="#brands" className="beautifo-brands-cta">
            <span>Explore All 39+ Authentic Brands</span>
            <span className="arrow" aria-hidden="true">&raquo;</span>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default BrandLogos;
