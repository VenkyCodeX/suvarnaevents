import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import { WHY_US } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const WhyUs = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  return (
    <section style={{ background: '#111111' }} className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <SectionLabel className="justify-center mb-4">WHY SUVARNA</SectionLabel>
          <h2 className="font-cormorant font-semibold" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#ffffff' }}>
            The <span className="gold-shimmer">Suvarna</span> Difference
          </h2>
        </div>

        <div ref={gridRef} className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US.map((item) => (
            <div key={item.title} className="text-center group">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300"
                style={{ border: '1px solid rgba(212,175,55,0.3)', fontSize: '28px' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {item.icon}
              </div>
              <h3 className="font-cormorant text-xl font-semibold mb-3 transition-colors duration-300" style={{ color: '#ffffff' }}>
                {item.title}
              </h3>
              <p className="font-montserrat text-sm leading-relaxed" style={{ color: '#888888' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
