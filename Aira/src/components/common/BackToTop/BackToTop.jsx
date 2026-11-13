import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../../../assets/styles/back-to-top.css';

/**
 * BackToTop Component
 */
export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={`beautifo-back-to-top ${visible ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll to Top"
    >
      <FontAwesomeIcon icon={faArrowUp} className="beautifo-top-arrow" />
      <span className="beautifo-top-text">TOP</span>
    </button>
  );
};

export default BackToTop;
