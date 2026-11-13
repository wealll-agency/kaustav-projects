import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { CATEGORIES_DATA } from '../../data/categoriesData';
import '../../../../assets/styles/shop-by-categories.css';

/**
 * ShopByCategories Component
 * Carousel matching Belletny OpenCart reference design with 100% fidelity.
 */
export const ShopByCategories = ({ categories = CATEGORIES_DATA }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive itemsPerView calculation
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setItemsPerView(6);
      } else if (width >= 992) {
        setItemsPerView(4);
      } else if (width >= 576) {
        setItemsPerView(3);
      } else {
        setItemsPerView(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, categories.length - itemsPerView);
  const totalDots = maxIndex > 0 ? 2 : 1; // Belletny displays 2 pagination dots

  // Slide to next / prev page based on dot index
  const handleDotClick = (dotIdx) => {
    if (dotIdx === 0) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(maxIndex);
    }
  };

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50 && currentIndex < maxIndex) {
      // swipe left -> next
      setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    } else if (diff < -50 && currentIndex > 0) {
      // swipe right -> prev
      setCurrentIndex(prev => Math.max(0, prev - 1));
    }
  };

  // Track transform percentage per item
  const itemWidthPercentage = 100 / itemsPerView;
  const translateX = -(currentIndex * itemWidthPercentage);

  return (
    <section
      className="shop-by-categories-section"
      id="shop-by-categories"
      aria-label="Shop By Categories"
    >
      <Container>
        {/* Header with Title & Authentic Ornamental Laurel Divider */}
        <div className="categories-header">
          <h2 className="categories-title">Shop By Categories</h2>
          <span className="categories-divider" aria-hidden="true" />
        </div>

        {/* Carousel Slider */}
        <div
          className="categories-carousel-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="categories-slider-track"
            style={{
              transform: `translateX(${translateX}%)`
            }}
          >
            {categories.map((cat) => (
              <div key={cat.id} className="category-slide-item">
                <a
                  href={cat.link}
                  className="category-card"
                  aria-label={`Shop ${cat.title} by ${cat.brand}`}
                >
                  {/* Circular Bubble Container */}
                  <div className="category-circle-wrapper">
                    <img
                      src={cat.image}
                      alt={`${cat.title} - ${cat.brand}`}
                      className="category-product-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Category Title below */}
                  <h3 className="category-name">{cat.title}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots matching Belletny (Active Burgundy oval, Inactive grey dot) */}
        {totalDots > 1 && (
          <div className="categories-dots-container">
            <button
              type="button"
              className={`categories-dot-btn ${currentIndex === 0 ? 'active' : ''}`}
              onClick={() => handleDotClick(0)}
              aria-label="Slide to first group of categories"
            />
            <button
              type="button"
              className={`categories-dot-btn ${currentIndex > 0 ? 'active' : ''}`}
              onClick={() => handleDotClick(1)}
              aria-label="Slide to second group of categories"
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export default ShopByCategories;
