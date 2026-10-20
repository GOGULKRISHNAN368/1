import React, { useState } from 'react';
import BrandCrest from './BrandCrest';

export default function Header({ onMenuClick, onHistoryClick, onWishlistClick, onCartClick }) {
  const [activeIcon, setActiveIcon] = useState(null);

  return (
    <header className="top-header" role="banner">
      {/* Left: Menu UI Button */}
      <button 
        type="button" 
        className="menu-btn" 
        aria-label="Toggle Navigation Menu"
        onClick={onMenuClick}
      >
        <div className="hamburger-icon" aria-hidden="true">
          <span></span>
          <span></span>
        </div>
        <span>Menu</span>
      </button>

      {/* Center: Brunello Cucinelli Solomeo Crest & Name */}
      <a href="/" className="brand-logo" aria-label="Brunello Cucinelli AI Boutique Home">
        <BrandCrest className="brand-crest" />
        <span className="brand-name">Brunello Cucinelli</span>
      </a>

      {/* Right: Luxury Action Icons (History, Wishlist, Bag) */}
      <nav className="header-icons" aria-label="Boutique quick actions">
        <button 
          type="button" 
          className="header-icon-btn" 
          title="History" 
          aria-label="View history"
          onClick={onHistoryClick}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3.8 12a9.5 9.5 0 1 1 4.5 8.1" />
            <path d="M6.7 10.3 3.8 13.1 1 10.3" />
            <path d="M13 8v5l3.5 2.1" />
          </svg>
        </button>

        <button 
          type="button" 
          className="header-icon-btn" 
          title="Wishlist" 
          aria-label="View wishlist"
          onClick={onWishlistClick}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.84 4.5a5.5 5.5 0 0 0-7.78 0L12 5.57l-1.06-1.07a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.14l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        <button 
          type="button" 
          className="header-icon-btn" 
          title="Shopping Bag" 
          aria-label="View shopping bag"
          onClick={onCartClick}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6.5H20V20.5C14.842 18.566 9.158 18.566 4 20.5V6.5Z" />
            <path d="M8.5 9.5V5.053C8.5 3.087 10.063 1.5 12 1.5C13.937 1.5 15.5 3.087 15.5 5.053V9.5" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
