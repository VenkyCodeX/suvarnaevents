import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GALLERY_IMAGES } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';

// Split images into two rows
const ROW1 = [...GALLERY_IMAGES.slice(0, 8), ...GALLERY_IMAGES.slice(0, 8)];
const ROW2 = [...GALLERY_IMAGES.slice(7), ...GALLERY_IMAGES.slice(7)];

const ScrollRow = ({ images, direction = 'left', speed = 35 }) => {
  const duration = `${speed}s`;
  const animation = direction === 'left'
    ? 'scrollLeft linear infinite'
    : 'scrollRight linear infinite';

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-3"
        style={{ animation: `${animation}`, animationDuration: duration, width: 'max-content' }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-xl overflow-hidden"
            style={{ width: '280px', height: '200px' }}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const headerRef = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section id="gallery" className="py-24 overflow-hidden" style={{ background: '#F8E6F4' }}>
      {/* Keyframes injected inline */}
      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div ref={headerRef} className="fade-up text-center">
          <div className="section-label justify-center mb-4">OUR PORTFOLIO</div>
          <h2
            className="font-semibold mb-3"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: '#1A1A8C', fontFamily: 'Cinzel Decorative' }}
          >
            A Glimpse of the Magic We Create
          </h2>
          <p className="text-sm" style={{ color: '#888888', fontFamily: 'Nunito' }}>
            Every event tells a beautiful story
          </p>
        </div>
      </div>

      {/* Row 1 — left to right */}
      <div className="mb-3">
        <ScrollRow images={ROW1} direction="left" speed={40} />
      </div>

      {/* Row 2 — right to left */}
      <div className="mb-12">
        <ScrollRow images={ROW2} direction="right" speed={35} />
      </div>

      {/* Explore button */}
      <div className="text-center">
        <button
          onClick={() => navigate('/gallery')}
          className="btn-navy inline-flex items-center gap-2"
          style={{ fontSize: '14px', padding: '14px 36px', fontFamily: 'Cinzel' }}
        >
          Explore Full Gallery →
        </button>
        <p className="mt-3 text-sm" style={{ color: '#888888', fontFamily: 'Nunito' }}>
          Browse by category — Weddings, Receptions, Birthdays & more
        </p>
      </div>
    </section>
  );
};

export default Gallery;
