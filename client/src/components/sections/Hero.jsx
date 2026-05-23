import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Button from '../ui/Button';
import { SITE } from '../../utils/constants';

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
    alt: 'Grand Wedding Ceremony',
  },
  {
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80',
    alt: 'Elegant Reception',
  },
  {
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80',
    alt: 'Birthday Celebration',
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80',
    alt: 'Corporate Event',
  },
  {
    image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1920&q=80',
    alt: 'Traditional Ceremony',
  },
];

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 6 + 4}px`,
  duration: `${Math.random() * 8 + 6}s`,
  delay: `${Math.random() * 5}s`,
  opacity: Math.random() * 0.6 + 0.2,
}));

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (index) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 600);
  };

  const next = () => goTo((current + 1) % SLIDES.length);
  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
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
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className={`w-full h-full object-cover ${i === current ? 'ken-burns' : ''}`}
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Gold particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: '#D4AF37',
            borderRadius: '50%',
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
            bottom: '-20px',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        {/* Label tag */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-px bg-gold" />
          <span className="font-montserrat text-xs font-semibold text-gold uppercase tracking-[0.3em]">
            Hyderabad's Premier Event Planners
          </span>
          <div className="w-12 h-px bg-gold" />
        </div>

        {/* Main heading */}
        <h1 className="font-cormorant text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mb-6">
          Creating Moments<br />
          <span className="gold-shimmer font-semibold">That Last</span><br />
          Forever.
        </h1>

        {/* Gold italic subtext */}
        <p className="font-playfair italic text-gold text-lg md:text-xl mb-4">
          Weddings · Receptions · Birthdays · Corporate Events
        </p>

        {/* Description */}
        <p className="font-montserrat text-sm md:text-base text-white/70 max-w-xl leading-relaxed mb-8">
          From intimate celebrations to grand weddings — we craft unforgettable experiences
          with passion, precision and elegance.
        </p>

        {/* Rating badge */}
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-gold/30 rounded-full px-5 py-2 mb-10">
          <Star size={14} className="text-gold fill-gold" />
          <span className="font-montserrat text-sm text-gold font-semibold">{SITE.rating}</span>
          <span className="font-montserrat text-xs text-white/60">· {SITE.reviews} Google Reviews</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="gold" onClick={() => handleNavClick('#inquiry')}>
            Plan Your Event →
          </Button>
          <Button variant="outline" onClick={() => handleNavClick('#gallery')}>
            View Our Work →
          </Button>
        </div>
      </div>

      {/* Slide controls */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2 opacity-60">
        <span className="font-montserrat text-[10px] text-white uppercase tracking-widest rotate-90 origin-center mb-4">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
