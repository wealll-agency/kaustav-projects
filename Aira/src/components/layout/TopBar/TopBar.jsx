import React from 'react';
import '../../../assets/styles/header.css';

/**
 * TopBar Component - Exact Beautifo Match
 * Single centered announcement bar
 */
export const TopBar = () => {
  return (
    <div className="beautifo-topbar" id="aira-topbar">
      <div className="container text-center">
        <span className="beautifo-topbar-text">
          FREE STANDARD SHIPPING ON ALL U.S. ORDERS.
        </span>
      </div>
    </div>
  );
};

export default TopBar;
