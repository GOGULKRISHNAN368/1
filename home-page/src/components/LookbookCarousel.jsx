import React, { useState, useEffect, useCallback } from 'react';

const LOOKBOOK_ITEMS = [
  {
    id: 0,
    image: '/images/adult_card1.jpg',
    title: 'Knitwear Look',
    alt: 'Brunello Cucinelli Knitwear Look',
  },
  {
    id: 1,
    image: '/images/adult_card2.jpg',
    title: 'Sartorial Suit Look',
    alt: 'Brunello Cucinelli Sartorial Suit Look',
  },
  {
    id: 2,
    image: '/images/adult_card3.jpg',
    title: 'Winter Editorial Look',
    alt: 'Brunello Cucinelli Winter Editorial Look',
  },
  {
    id: 3,
    image: '/images/adult_card4_full.jpg',
    title: 'Puffer & Shearling Look',
    alt: 'Brunello Cucinelli Puffer & Tie Look',
  },
  {
    id: 4,
    image: '/images/adult_card5_large.jpg',
    title: 'Fur Vest & Leather Look',
    alt: 'Brunello Cucinelli Fur Vest Look',
  },
  {
    id: 5,
    image: '/images/adult_card6.jpg',
    title: 'Outdoor Countryside Look',
    alt: 'Brunello Cucinelli Outdoor Look',
  },
];

export default function LookbookCarousel({ onCardSelect }) {
  const [currentIndex, setCurrentIndex] = useState(2); // Center card (Card 3) initially active
  const totalCards = LOOKBOOK_ITEMS.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Calculate slot string for 3D layout
  const getSlot = (idx) => {
    let diff = (idx - currentIndex + totalCards) % totalCards;
    if (diff > totalCards / 2) {
      diff -= totalCards;
    }

    if (diff === 0) return '0';
    if (diff === -1) return '-1';
    if (diff === 1) return '1';
    if (diff === -2) return '-2';
    if (diff === 2) return '2';
    if (diff < -2) return 'hidden-left';
    return 'hidden-right';
  };

  const handleCardClick = (idx) => {
    setCurrentIndex(idx);
    if (onCardSelect) {
      onCardSelect(LOOKBOOK_ITEMS[idx]);
    }
  };

  return (
    <section className="carousel-section" aria-label="Brunello Cucinelli Lookbook Showcase">
      {/* Previous Nav Button */}
      <button
        type="button"
        className="carousel-nav-btn prev"
        id="carouselPrev"
        onClick={handlePrev}
        aria-label="Browse previous lookbook item"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Carousel 3D Track */}
      <div className="carousel-track" id="carouselTrack" role="region" aria-roledescription="carousel">
        {LOOKBOOK_ITEMS.map((item, idx) => {
          const slot = getSlot(idx);
          const isCenter = slot === '0';

          return (
            <div
              key={item.id}
              className="carousel-card"
              data-index={idx}
              data-slot={slot}
              onClick={() => handleCardClick(idx)}
              role="group"
              aria-label={`Slide ${idx + 1} of ${totalCards}: ${item.title}`}
              tabIndex={isCenter ? 0 : -1}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading={idx <= 3 ? 'eager' : 'lazy'}
                draggable="false"
              />
            </div>
          );
        })}
      </div>

      {/* Next Nav Button */}
      <button
        type="button"
        className="carousel-nav-btn next"
        id="carouselNext"
        onClick={handleNext}
        aria-label="Browse next lookbook item"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </section>
  );
}
