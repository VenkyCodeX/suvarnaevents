import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '../utils/constants';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const openLightbox = (i) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightbox(i => (i + 1) % filtered.length);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, filtered.length]);

  // Scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>

      {/* Page Header */}
      <div className="py-16 text-center" style={{ background: '#E8E8F8', borderBottom: '2px solid #1A1A8C' }}>
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ background: '#CC2299', fontFamily: 'Poppins' }}
        >
          Our Portfolio
        </div>
        <h1
          className="font-cormorant font-semibold mb-3"
          style={{ fontSize: 'clamp(36px, 6vw, 60px)', color: '#1A1A8C', fontFamily: 'Cormorant Garamond' }}
        >
          Our Gallery
        </h1>
        <p className="text-sm max-w-xl mx-auto px-4" style={{ color: '#444444', fontFamily: 'Poppins' }}>
          Browse through our work — every photo is a memory we helped create.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Category Filter */}
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
              <span
                className="ml-2 text-xs px-1.5 py-0.5 rounded-full"
                style={{
                  background: activeCategory === cat ? 'rgba(255,255,255,0.25)' : '#E8E8F8',
                  color: activeCategory === cat ? '#fff' : '#1A1A8C',
                }}
              >
                {cat === 'All' ? GALLERY_IMAGES.length : GALLERY_IMAGES.filter(i => i.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {filtered.map((img, i) => (
            <div
              key={img.src + i + activeCategory}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => openLightbox(i)}
              style={{ transition: 'transform 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.01)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{ background: 'rgba(204,34,153,0.75)' }}
              >
                <ZoomIn size={28} color="#fff" />
                <p className="text-white text-sm font-medium mt-2 px-3 text-center" style={{ fontFamily: 'Poppins' }}>
                  {img.title}
                </p>
                <span
                  className="mt-1 text-xs px-3 py-0.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.25)', color: '#fff', fontFamily: 'Poppins' }}
                >
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg" style={{ color: '#888888', fontFamily: 'Poppins' }}>No images in this category yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="relative w-full max-w-5xl mx-4" onClick={e => e.stopPropagation()}>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              style={{ background: '#CC2299' }}
            >
              <X size={18} />
            </button>

            {/* Counter */}
            <div
              className="absolute -top-12 left-0 text-sm"
              style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Poppins' }}
            >
              {lightbox + 1} / {filtered.length}
            </div>

            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              className="w-full rounded-xl object-contain"
              style={{ maxHeight: '80vh' }}
            />

            <div className="text-center mt-3">
              <p className="text-white font-medium text-sm" style={{ fontFamily: 'Poppins' }}>{filtered[lightbox].title}</p>
              <span
                className="inline-block mt-1 text-xs px-3 py-0.5 rounded-full"
                style={{ background: '#CC2299', color: '#fff', fontFamily: 'Poppins' }}
              >
                {filtered[lightbox].category}
              </span>
            </div>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              style={{ background: 'rgba(26,26,140,0.8)' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1A1A8C'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(26,26,140,0.8)'}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              style={{ background: 'rgba(26,26,140,0.8)' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1A1A8C'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(26,26,140,0.8)'}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
