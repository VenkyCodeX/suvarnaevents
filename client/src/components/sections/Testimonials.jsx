import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS, SITE } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const headerRef = useScrollAnimation();

  useEffect(() => {
    intervalRef.current = setInterval(() => setCurrent(p => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section id="testimonials" className="py-24" style={{ background: '#F8E6F4' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="fade-up text-center mb-14">
          <div className="section-label justify-center mb-4">TESTIMONIALS</div>
          <h2 className="font-semibold mb-3" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#1A1A8C', fontFamily: 'Cinzel Decorative' }}>
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-1">
            {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#CC2299', fontSize: '20px' }}>★</span>)}
          </div>
          <p className="text-sm" style={{ color: '#888888', fontFamily: 'Nunito' }}>{SITE.rating} · {SITE.reviews} Google Reviews</p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4 md:px-20 lg:px-32">
                <div className="rounded-xl p-8 md:p-10 relative"
                  style={{ background: '#fff', borderLeft: '4px solid #CC2299', boxShadow: '0 4px 30px rgba(26,26,140,0.08)', border: '1px solid #F0F0F0', borderLeftColor: '#CC2299', borderLeftWidth: '4px' }}>
                  {/* Decorative quote */}
                  <div className="absolute top-4 left-6 select-none leading-none"
                    style={{ fontSize: '80px', color: 'rgba(204,34,153,0.12)', fontFamily: 'DM Serif Display' }}>"</div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} style={{ color: '#CC2299', fontSize: '18px' }}>★</span>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="italic text-xl leading-relaxed mb-8 relative z-10"
                    style={{ color: '#444444', fontFamily: 'DM Serif Display' }}>
                    "{t.text}"
                  </p>

                  {/* Client */}
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center"
                      style={{ background: '#E8E8F8' }}>
                      <span className="font-semibold text-lg" style={{ color: '#1A1A8C', fontFamily: 'Cinzel' }}>{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: '#1A1A8C', fontFamily: 'Cinzel' }}>{t.name}</p>
                      <p className="text-xs" style={{ color: '#888888', fontFamily: 'Nunito' }}>{t.event}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{ width: i === current ? '28px' : '8px', height: '8px', background: i === current ? '#CC2299' : '#E8E8F8' }}
            />
          ))}
        </div>

        {/* Google link */}
        <div className="text-center mt-8">
          <a href="https://g.co/kgs/suvarnaevents" target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: '#CC2299', fontFamily: 'Nunito' }}
            onMouseEnter={e => e.currentTarget.style.color = '#A01A7A'}
            onMouseLeave={e => e.currentTarget.style.color = '#CC2299'}
          >
            Read All Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
