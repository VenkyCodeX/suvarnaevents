import React, { useState, useEffect, useRef } from 'react';
import SectionLabel from '../ui/SectionLabel';
import TestimonialCard from '../ui/TestimonialCard';
import { TESTIMONIALS, SITE } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const headerRef = useScrollAnimation();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section id="testimonials" style={{ background: '#0A0A0A' }} className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <SectionLabel className="justify-center mb-4">TESTIMONIALS</SectionLabel>
          <h2 className="font-cormorant font-semibold leading-tight mb-3" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#ffffff' }}>
            What Our <span className="gold-shimmer">Clients Say</span>
          </h2>
          <p className="font-montserrat text-sm" style={{ color: '#888888' }}>
            Based on {SITE.reviews} Google Reviews · {SITE.rating}⭐
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4 md:px-16 lg:px-32">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? '32px' : '8px',
                height: '8px',
                background: i === current ? '#D4AF37' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
