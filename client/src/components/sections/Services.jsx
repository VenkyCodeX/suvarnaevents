import React from 'react';
import { SERVICES } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ServiceCard = ({ icon, title, description, index }) => {
  const borderColor = index % 2 === 0 ? '#1A1A8C' : '#CC2299';
  return (
    <div
      className="bg-white rounded-xl p-7 transition-all duration-300 cursor-default group"
      style={{ borderTop: `3px solid ${borderColor}`, boxShadow: '0 2px 16px rgba(26,26,140,0.07)', border: `1px solid #F0F0F0`, borderTopColor: borderColor, borderTopWidth: '3px' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,26,140,0.15)'; e.currentTarget.style.borderColor = '#CC2299'; e.currentTarget.style.borderTopColor = '#CC2299'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(26,26,140,0.07)'; e.currentTarget.style.borderColor = '#F0F0F0'; e.currentTarget.style.borderTopColor = borderColor; }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-playfair text-lg font-semibold mb-2" style={{ color: '#1A1A8C', fontFamily: 'Playfair Display' }}>{title}</h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: '#444444', fontFamily: 'Poppins' }}>{description}</p>
      <span className="text-sm font-semibold transition-colors duration-200" style={{ color: '#CC2299', fontFamily: 'Poppins' }}>
        Learn More →
      </span>
    </div>
  );
};

const Services = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  return (
    <section id="services" className="py-24" style={{ background: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <div className="section-label justify-center mb-4">WHAT WE OFFER</div>
          <h2 className="font-cormorant font-semibold mb-3" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#1A1A8C', fontFamily: 'Cormorant Garamond' }}>
            Every Occasion,<br />Perfectly Planned.
          </h2>
          <p className="text-sm" style={{ color: '#888888', fontFamily: 'Poppins' }}>Complete event management for every milestone</p>
          <div className="magenta-divider w-24 mx-auto mt-5" />
        </div>

        <div ref={gridRef} className="stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
