import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { PRODUCT_WIDGETS_DATA } from '../../data/productWidgetsData';
import '../../../../assets/styles/product-widget-columns.css';

/**
 * ProductWidgetColumns Component
 */
export const ProductWidgetColumns = ({ data = PRODUCT_WIDGETS_DATA }) => {
  return (
    <section
      className="beautifo-product-widgets-section"
      id="product-widgets"
      aria-label="Product Showcase Highlights"
    >
      <div className="container">
        <div className="beautifo-widget-columns-grid">
          {data.map((col) => (
            <div key={col.id} className="beautifo-widget-col">
              {/* Column Header */}
              <h3 className="beautifo-widget-title">{col.title}</h3>

              {/* Items List */}
              <div className="beautifo-widget-items">
                {col.items.map((item) => (
                  <article key={item.id} className="beautifo-widget-item">
                    {/* Product Image Thumbnail */}
                    <a
                      href={`#product-${item.id}`}
                      className="beautifo-widget-thumb"
                      aria-label={item.name}
                    >
                      <img
                        src={item.image}
                        alt={item.alt || item.name}
                        className="beautifo-widget-img"
                        loading="lazy"
                      />
                    </a>

                    {/* Product Details */}
                    <div className="beautifo-widget-info">
                      <h4 className="beautifo-widget-item-name">
                        <a href={`#product-${item.id}`}>{item.name}</a>
                      </h4>

                      {/* 5-Star Rating */}
                      <div
                        className="beautifo-widget-rating"
                        aria-label={`Rating: ${item.rating} out of 5 stars`}
                      >
                        {Array.from({ length: 5 }).map((_, index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            className={
                              index < item.rating ? 'star-filled' : 'star-empty'
                            }
                          />
                        ))}
                      </div>

                      {/* Price Display */}
                      <div className="beautifo-widget-price-wrap">
                        <span className="beautifo-widget-price">
                          &#8377;{item.price.toFixed(2)}
                        </span>
                        {item.originalPrice && (
                          <span className="beautifo-widget-old-price">
                            &#8377;{item.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductWidgetColumns;
