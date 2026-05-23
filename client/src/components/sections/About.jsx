import React from 'react';
import { ABOUT_CHECKLIST, SITE } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const About = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section id="about" className="py-24" style={{ background: '#F8E6F4' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Image */}
          <div ref={leftRef} className="fade-up relative">
            <div className="relative rounded-xl overflow-hidden" style={{ border: '3px solid #1A1A8C' }}>
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
                alt="Suvarna Events Team"
                className="w-full object-cover"
                style={{ height: '480px' }}
              />
            </div>
            {/* Est badge */}
            <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full flex flex-col items-center justify-center"
              style={{ background: '#CC2299', border: '3px solid #fff', boxShadow: '0 4px 20px rgba(204,34,153,0.4)' }}>
              <span className="text-white font-semibold text-xs" style={{ fontFamily: 'Poppins' }}>Est.</span>
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Cormorant Garamond' }}>2020</span>
            </div>
          </div>

          {/* Right — Content */}
          <div ref={rightRef} className="fade-up">
            <div className="section-label mb-4">OUR STORY</div>
            <h2 className="font-cormorant font-semibold mb-6 leading-tight"
              style={{ fontSize: 'clamp(30px, 4vw, 44px)', color: '#1A1A8C', fontFamily: 'Cormorant Garamond' }}>
              Crafting Unforgettable<br />Moments Since Day One.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#444444', fontFamily: 'Poppins' }}>
              Suvarna Event Management was born from a deep passion for celebrating life's precious moments.
              Based near the sacred Chilkur Balaji Temple in Moinabad, Hyderabad, we bring creativity,
              precision and warmth to every event. From grand Telugu weddings to intimate birthday gatherings —
              we treat every celebration as if it were our own.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {ABOUT_CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-lg" style={{ color: '#CC2299' }}>✓</span>
                  <span className="text-sm font-medium" style={{ color: '#1A1A1A', fontFamily: 'Poppins' }}>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => { const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-navy"
            >
              Get In Touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
