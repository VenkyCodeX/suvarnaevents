import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SITE } from '../../utils/constants';

const SLIDES = [
  { image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80', alt: 'Grand Wedding Ceremony' },
  { image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80', alt: 'Elegant Reception' },
  { image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80', alt: 'Birthday Celebration' },
  { image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80', alt: 'Corporate Event' },
  { image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1920&q=80', alt: 'Traditional Ceremony' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const intervalRef = useRef(null);

  const goTo = (index) => {
    setCurrent(index);
    setAnimKey(k => k + 1);
  };
  const next = () => goTo((current + 1) % SLIDES.length);
  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => clearInterval(intervalRef.current);
  }, [current]);

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}>
          <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Navy gradient overlay — bottom heavy */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,26,140,0.2) 0%, rgba(26,26,140,0.4) 40%, rgba(26,26,140,0.75) 100%)' }} />

      {/* Content */}
      <div key={animKey} className="relative z-10 h-full flex flex-col items-center justify-end text-center px-4 sm:px-6 pb-24 md:pb-32">

        {/* Magenta pill label */}
        <div className="mb-5 px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-widest"
          style={{ background: '#CC2299', fontFamily: 'Poppins', animation: 'fadeUp 0.5s ease forwards', opacity: 0 }}>
          Hyderabad's Premier Event Planners
        </div>

        {/* Heading */}
        <h1 className="font-cormorant text-white font-light leading-tight mb-4"
          style={{ fontSize: 'clamp(40px, 7vw, 72px)', fontFamily: 'Cormorant Garamond', animation: 'fadeUp 0.6s 0.1s ease forwards', opacity: 0 }}>
          Creating Moments<br />
          <span style={{ fontWeight: 600, fontStyle: 'italic' }}>That Last Forever.</span>
        </h1>

        {/* Italic subtext */}
        <p className="font-playfair italic text-white/90 mb-3"
          style={{ fontSize: 'clamp(15px, 2vw, 20px)', fontFamily: 'Playfair Display', animation: 'fadeUp 0.6s 0.2s ease forwards', opacity: 0 }}>
          Weddings · Receptions · Birthdays · Corporate Events
        </p>

        {/* Body text */}
        <p className="text-white/75 max-w-lg leading-relaxed mb-6"
          style={{ fontSize: '14px', fontFamily: 'Poppins', animation: 'fadeUp 0.6s 0.3s ease forwards', opacity: 0 }}>
          Crafted with passion. Delivered with perfection.<br />
          Based in Hyderabad — serving across Telangana.
        </p>

        {/* Rating pill */}
        <div className="flex items-center gap-2 rounded-full px-5 py-2 mb-8"
          style={{ background: 'rgba(255,255,255,0.95)', animation: 'fadeUp 0.6s 0.4s ease forwards', opacity: 0 }}>
          {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#CC2299', fontSize: '14px' }}>★</span>)}
          <span className="font-semibold text-sm" style={{ color: '#1A1A8C', fontFamily: 'Poppins' }}>{SITE.rating}</span>
          <span className="text-xs" style={{ color: '#888', fontFamily: 'Poppins' }}>· {SITE.reviews} Google Reviews</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4"
          style={{ animation: 'fadeUp 0.6s 0.5s ease forwards', opacity: 0 }}>
          <button onClick={() => handleNavClick('#inquiry')} className="btn-navy" style={{ fontSize: '14px' }}>
            Plan Your Event →
          </button>
          <button onClick={() => handleNavClick('#gallery')} className="btn-navy-outline" style={{ fontSize: '14px' }}>
            View Our Work →
          </button>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300"
        style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.3)' }}
        onMouseEnter={e => e.currentTarget.style.background = '#CC2299'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
      >
        <ChevronLeft size={20} />
      </button>
      <button onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300"
        style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.3)' }}
        onMouseEnter={e => e.currentTarget.style.background = '#CC2299'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{ width: i === current ? '28px' : '8px', height: '8px', background: i === current ? '#CC2299' : 'rgba(255,255,255,0.5)' }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
