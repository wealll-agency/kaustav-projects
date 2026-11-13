import React, { useState, useEffect, useRef } from 'react';
import '../../../../assets/styles/hero-slider.css';

/**
 * HeroSlider Component 
 */
export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;
  const slideInterval = useRef(null);

  // Auto-slide every 4 seconds
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, [totalSlides]);

  return (
    <section
      className="beautifo-slider-section"
      id="beautifo-hero-slider"
      aria-label="Hero Banner Slider"
    >
      <div className="container">
        <div className="beautifo-slider-container">
          {/* SLIDE 1: Pink Theme - Bottle, Box & Floating Petals */}
          <div className={`beautifo-slide beautifo-slide-1 ${currentSlide === 0 ? 'active' : ''}`}>
            <div className="beautifo-slide-glow" aria-hidden="true" />
            <div className="beautifo-slide-ring" aria-hidden="true" />

            <div className="beautifo-slide-row">
              {/* Left Content */}
              <div className="beautifo-slide-content">
                <span className="beautifo-slide-subtitle">Discover</span>
                <h1 className="beautifo-slide-title">
                  The Secrets <br />
                  Of Aira
                </h1>
                <p className="beautifo-slide-desc">
                  Get them together for nourish, dewy and natural-looking coverage of your skin you desire.
                </p>
                <div className="beautifo-slide-btn-wrap">
                  <a href="#shop" className="beautifo-slide-btn">
                    <span>SHOP NOW</span>
                    <span className="beautifo-slide-btn-arrow" aria-hidden="true">&#8250;</span>
                  </a>
                </div>
              </div>

              {/* Right Visual: Bottle, Box & Petals */}
              <div className="beautifo-slide-visual">
                <div className="beautifo-slide1-wrap">
                  <img
                    src="/images/banners/slide1-bottle-box.png"
                    alt="Aira Bógen Skincare Bottle and Box"
                    className="beautifo-slide1-main-img"
                    width="567"
                    height="459"
                    loading="eager"
                  />
                  <img
                    src="/images/banners/slide1-petal-top.png"
                    alt="Petal Top"
                    className="beautifo-slide1-petal-top"
                    aria-hidden="true"
                  />
                  <img
                    src="/images/banners/slide1-petal-left.png"
                    alt="Petal Left"
                    className="beautifo-slide1-petal-left"
                    aria-hidden="true"
                  />
                  <img
                    src="/images/banners/slide1-petal-right.png"
                    alt="Petal Right"
                    className="beautifo-slide1-petal-right"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 2: Warm Beige Theme - Glowing Skin Model & Cream Jar */}
          <div className={`beautifo-slide beautifo-slide-2 ${currentSlide === 1 ? 'active' : ''}`}>
            <div className="beautifo-slide-glow beautifo-slide-glow-left" aria-hidden="true" />
            <div className="beautifo-slide-ring" aria-hidden="true" />

            <div className="beautifo-slide-row reverse">
              {/* Right Content (in reverse flex, this sits on the right) */}
              <div className="beautifo-slide-content right-align">
                <span className="beautifo-slide-subtitle">Discover</span>
                <h2 className="beautifo-slide-title">
                  <span className="beautifo-text-pink">The Secrets</span> <br />
                  <span className="beautifo-text-pink">Of</span> Aira
                </h2>
                <p className="beautifo-slide-desc">
                  Get them together (for less!) for dewy, natural-looking coverage that still looks like skin
                </p>
                <div className="beautifo-slide-btn-wrap">
                  <a href="#shop" className="beautifo-slide-btn">
                    <span>SHOP NOW</span>
                    <span className="beautifo-slide-btn-arrow" aria-hidden="true">&#8250;</span>
                  </a>
                </div>
              </div>

              {/* Left Visual: Model & Cream Jar */}
              <div className="beautifo-slide-visual">
                <div className="beautifo-slide2-wrap">
                  {/* Swirl brush background */}
                  <img
                    src="/images/banners/slide2-brush-circle.png"
                    alt="Brush motif"
                    className="beautifo-slide2-brush"
                    aria-hidden="true"
                  />
                  {/* Model */}
                  <img
                    src="/images/banners/slide2-model.png"
                    alt="Aira Radiant Skin Model"
                    className="beautifo-slide2-model"
                    width="619"
                    height="619"
                    loading="lazy"
                  />
                  {/* Cream Jar */}
                  <img
                    src="/images/banners/slide2-cream-jar.png"
                    alt="Aira Nourishing Cream Jar"
                    className="beautifo-slide2-cream"
                    width="365"
                    height="258"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

