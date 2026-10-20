import React, { useState } from 'react';
import Header from '../components/Header';
import LookbookCarousel from '../components/LookbookCarousel';
import PromptBar from '../components/PromptBar';
import Footer from '../components/Footer';

export default function HomePage() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedLook, setSelectedLook] = useState(null);

  const handlePromptSubmit = (promptText) => {
    setActiveModal({
      title: 'AI Stylist Consultation',
      content: `Searching the Solomeo archives for: "${promptText}"...`,
    });
  };

  const handleMenuClick = () => {
    setActiveModal({
      title: 'Boutique Navigation',
      content: 'Collections for Women, Men, Kids, and Sartorial Solomeo Heritage.',
    });
  };

  const handleHistoryClick = () => {
    setActiveModal({
      title: 'Consultation History',
      content: 'Your previous AI stylist conversations and curated looks will appear here.',
    });
  };

  const handleWishlistClick = () => {
    setActiveModal({
      title: 'Saved Pieces & Wishlist',
      content: 'Save items from the lookbook and AI conversations to your private wardrobe.',
    });
  };

  const handleCartClick = () => {
    setActiveModal({
      title: 'Shopping Bag',
      content: 'Complimentary shipping & signature Solomeo packaging included on all orders.',
    });
  };

  return (
    <main className="hero-container">
      {/* Top Header */}
      <Header
        onMenuClick={handleMenuClick}
        onHistoryClick={handleHistoryClick}
        onWishlistClick={handleWishlistClick}
        onCartClick={handleCartClick}
      />

      {/* Main Center Stage */}
      <div className="center-stage">
        {/* 3D Perspective Lookbook Carousel */}
        <LookbookCarousel onCardSelect={(look) => setSelectedLook(look)} />

        {/* Center Typography & Explore Action */}
        <section className="hero-text-block">
          <h1 className="hero-title">Where ideas become endless possibilities</h1>
          <p className="hero-subtitle">Welcome to the AI Online Boutique</p>

          <a href="#explore" className="scroll-explore-pill" aria-label="Scroll to explore boutique collections">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            <span>Scroll to explore</span>
          </a>
        </section>
      </div>

      {/* Floating Bottom AI Prompt Bar */}
      <PromptBar onSubmit={handlePromptSubmit} />

      {/* Bottom Footer */}
      <Footer />

      {/* Interactive Luxury Notification / Modal if opened */}
      {activeModal && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.72)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px'
          }}
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            style={{
              backgroundColor: '#1c1b1a',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '4px',
              padding: '32px 36px',
              maxWidth: '460px',
              width: '100%',
              color: '#f1ede7',
              textAlign: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{
              fontFamily: "'quarto', Georgia, serif",
              fontSize: '22px',
              fontWeight: 300,
              marginBottom: '12px',
              letterSpacing: '-0.01em'
            }}>
              {activeModal.title}
            </h3>
            <p style={{
              fontFamily: "'gt_eesti_pro', sans-serif",
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.75)',
              marginBottom: '24px'
            }}>
              {activeModal.content}
            </p>
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                padding: '8px 24px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontFamily: "'gt_eesti_pro', sans-serif",
                cursor: 'pointer',
                letterSpacing: '0.04em'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
