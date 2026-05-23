import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ALL_IMAGES = [
  { id: 1,  title: 'Grand Wedding',        category: 'Weddings',    image: '/assets/Screenshot 2026-05-23 165002.png' },
  { id: 2,  title: 'Wedding Ceremony',     category: 'Weddings',    image: '/assets/Screenshot 2026-05-23 165020.png' },
  { id: 3,  title: 'Elegant Reception',    category: 'Receptions',  image: '/assets/Screenshot 2026-05-23 165031.png' },
  { id: 4,  title: 'Floral Decor',         category: 'Weddings',    image: '/assets/Screenshot 2026-05-23 165043.png' },
  { id: 5,  title: 'Traditional Ceremony', category: 'Traditional', image: '/assets/Screenshot 2026-05-23 165054.png' },
  { id: 6,  title: 'Sangeet Night',        category: 'Receptions',  image: '/assets/Screenshot 2026-05-23 165135.png' },
  { id: 7,  title: 'Birthday Celebration', category: 'Birthdays',   image: '/assets/Screenshot 2026-05-23 165147.png' },
  { id: 8,  title: 'Corporate Event',      category: 'Corporate',   image: '/assets/Screenshot 2026-05-23 165202.png' },
  { id: 9,  title: 'Engagement Setup',     category: 'Weddings',    image: '/assets/Screenshot 2026-05-23 165218.png' },
  { id: 10, title: 'Haldi Ceremony',       category: 'Traditional', image: '/assets/Screenshot 2026-05-23 165234.png' },
  { id: 11, title: 'Reception Decor',      category: 'Receptions',  image: '/assets/Screenshot 2026-05-23 165246.png' },
  { id: 12, title: 'Wedding Stage',        category: 'Weddings',    image: '/assets/Screenshot 2026-05-23 165259.png' },
  { id: 13, title: 'Birthday Party',       category: 'Birthdays',   image: '/assets/Screenshot 2026-05-23 165316.png' },
  { id: 14, title: 'Cultural Event',       category: 'Traditional', image: '/assets/Screenshot 2026-05-23 165331.png' },
  { id: 15, title: 'Special Occasion',     category: 'Receptions',  image: '/assets/Screenshot 2026-05-23 165346.png' },
];

// Split into two rows
const ROW1 = ALL_IMAGES.slice(0, 8);
const ROW2 = ALL_IMAGES.slice(7, 15);

const GalleryImage = ({ item, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative flex-shrink-0 rounded-xl overflow-hidden cursor-pointer"
      style={{
        width: '320px',
        height: '220px',
        border: hovered ? '2px solid #D4AF37' : '2px solid rgba(212,175,55,0.15)',
        transition: 'border-color 0.3s ease',
        margin: '0 10px',
      }}
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500"
        style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
        onLoad={e => e.target.classList.add('loaded')}
      />
      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-300"
        style={{ background: 'rgba(0,0,0,0.65)', opacity: hovered ? 1 : 0 }}
      >
        <p className="font-cormorant text-white text-xl font-semibold">{item.title}</p>
        <span
          className="font-montserrat uppercase px-3 py-1 rounded-full"
          style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#0A0A0A', background: '#D4AF37' }}
        >
          {item.category}
        </span>
      </div>
    </div>
  );
};

// Inline keyframes injected once
const STYLE = `
  @keyframes scrollLeft {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scrollRight {
    0%   { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .scroll-left  { animation: scrollLeft  35s linear infinite; }
  .scroll-right { animation: scrollRight 35s linear infinite; }
  .scroll-left:hover,
  .scroll-right:hover { animation-play-state: paused; }
`;

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);
  const headerRef = useScrollAnimation();

  const lightboxNav = (dir) => {
    const idx = ALL_IMAGES.findIndex(i => i.id === lightbox.id);
    setLightbox(ALL_IMAGES[(idx + dir + ALL_IMAGES.length) % ALL_IMAGES.length]);
  };

  return (
    <section id="gallery" style={{ background: '#0A0A0A' }} className="py-24 lg:py-32 overflow-hidden">
      <style>{STYLE}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <SectionLabel className="justify-center mb-4">OUR WORK</SectionLabel>
          <h2 className="font-cormorant font-semibold leading-tight mb-3" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#ffffff' }}>
            A Glimpse of <span className="gold-shimmer">the Magic</span>
          </h2>
          <p className="font-montserrat text-sm" style={{ color: '#888888' }}>
            Hover to pause · Click to view
          </p>
        </div>
      </div>

      {/* Row 1 — scrolls LEFT */}
      <div className="relative mb-5" style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
        <div className="flex scroll-left" style={{ width: 'max-content' }}>
          {[...ROW1, ...ROW1].map((item, i) => (
            <GalleryImage key={`r1-${i}`} item={item} onClick={setLightbox} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls RIGHT */}
      <div className="relative" style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
        <div className="flex scroll-right" style={{ width: 'max-content' }}>
          {[...ROW2, ...ROW2].map((item, i) => (
            <GalleryImage key={`r2-${i}`} item={item} onClick={setLightbox} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="font-montserrat text-sm" style={{ color: '#888888' }}>
          Want to see your event here?{' '}
          <a href="#inquiry" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Book with us →
          </a>
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300"
            style={{ border: '1px solid rgba(212,175,55,0.5)', color: '#ffffff' }}
            onClick={() => setLightbox(null)}
          >
            <X size={18} />
          </button>
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300"
            style={{ border: '1px solid rgba(212,175,55,0.5)', color: '#ffffff' }}
            onClick={e => { e.stopPropagation(); lightboxNav(-1); }}
          >
            <ChevronLeft size={20} />
          </button>

          <div
            className="max-w-4xl mx-4 rounded-xl overflow-hidden"
            style={{ border: '2px solid rgba(212,175,55,0.4)', maxHeight: '85vh' }}
            onClick={e => e.stopPropagation()}
          >
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="w-full object-contain"
              style={{ maxHeight: '75vh' }}
            />
            <div className="flex items-center justify-between px-6 py-3" style={{ background: '#1A1A1A' }}>
              <p className="font-cormorant text-lg text-white">{lightbox.title}</p>
              <span
                className="font-montserrat uppercase px-3 py-1 rounded-full"
                style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#0A0A0A', background: '#D4AF37' }}
              >
                {lightbox.category}
              </span>
            </div>
          </div>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300"
            style={{ border: '1px solid rgba(212,175,55,0.5)', color: '#ffffff' }}
            onClick={e => { e.stopPropagation(); lightboxNav(1); }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
