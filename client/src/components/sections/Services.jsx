import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import ServiceCard from '../ui/ServiceCard';
import { SERVICES } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Services = () => {
  const headerRef = useScrollAnimation();

  return (
    <section id="services" style={{ background: '#F5F5F0' }} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <SectionLabel className="justify-center mb-4" style={{ color: '#D4AF37' }}>WHAT WE DO</SectionLabel>
          <h2 className="font-cormorant font-semibold leading-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#0A0A0A' }}>
            Every Occasion,<br />
            <span className="font-playfair italic" style={{ color: '#D4AF37' }}>Perfectly Planned.</span>
          </h2>
          <p className="font-montserrat text-base max-w-xl mx-auto" style={{ color: '#888888' }}>
            End-to-end event management for every milestone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} {...service} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
