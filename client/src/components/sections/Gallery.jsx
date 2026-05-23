import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const headerRef = useScrollAnimation();

  const filtered = activeCategory === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length);
  const nextImage = () => setLightbox(i => (i + 1) % filtered.length);

  return (
    <section id="gallery" className="py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="fade-up text-center mb-12">
          <div className="section-label justify-center mb-4">OUR PORTFOLIO</div>
          <h2 className="font-cormorant font-semibold mb-3" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#1A1A8C', fontFamily: 'Cormorant Garamond' }}>
            A Glimpse of the Magic We Create
          </h2>
          <p className="text-sm" style={{ color: '#888888', fontFamily: 'Poppins' }}>Every event tells a beautiful story</p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {GALLERY_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                fontFamily: 'Poppins',
                background: activeCategory === cat ? '#CC2299' : 'transparent',
                color: activeCategory === cat ? '#fff' : '#1A1A8C',
                border: `1.5px solid ${activeCategory === cat ? '#CC2299' : '#1A1A8C'}`,
              }}
              onMouseEnter={e => { if (activeCategory !== cat) { e.currentTarget.style.borderColor = '#CC2299'; e.currentTarget.style.color = '#CC2299'; } }}
              onMouseLeave={e => { if (activeCategory !== cat) { e.currentTarget.style.borderColor = '#1A1A8C'; e.currentTarget.style.color = '#1A1A8C'; } }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {filtered.map((img, i) => (
            <div key={img.src + i} className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(i)}>
              <img src={img.src} alt={img.title} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-lg"
                style={{ background: 'rgba(204,34,153,0.75)' }}>
                <ZoomIn size={28} color="#fff" />
                <p className="text-white text-sm font-medium mt-2" style={{ fontFamily: 'Poppins' }}>{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="relative max-w-4xl w-full mx-4" onClick={e => e.stopPropagation()}>
            <button onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              style={{ background: '#CC2299' }}>
              <X size={18} />
            </button>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].title} className="w-full rounded-lg object-contain max-h-[80vh]" />
            <p className="text-center text-white/80 mt-3 text-sm" style={{ fontFamily: 'Poppins' }}>{filtered[lightbox].title}</p>
            <button onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              style={{ background: 'rgba(26,26,140,0.8)' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1A1A8C'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(26,26,140,0.8)'}
            >
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              style={{ background: 'rgba(26,26,140,0.8)' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1A1A8C'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(26,26,140,0.8)'}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
