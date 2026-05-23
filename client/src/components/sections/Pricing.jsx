import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import PricingCard from '../ui/PricingCard';
import { PACKAGES } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Pricing = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  return (
    <section id="pricing" style={{ background: '#F5F5F0' }} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <SectionLabel className="justify-center mb-4">OUR PACKAGES</SectionLabel>
          <h2 className="font-cormorant font-semibold leading-tight mb-3" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#0A0A0A' }}>
            Choose Your <span className="font-playfair italic" style={{ color: '#D4AF37' }}>Experience</span>
          </h2>
          <p className="font-montserrat text-sm" style={{ color: '#888888' }}>Transparent pricing — no surprises</p>
        </div>

        <div ref={gridRef} className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PACKAGES.map((pkg) => (
            <PricingCard key={pkg.name} {...pkg} />
          ))}
        </div>

        <p className="text-center font-montserrat text-sm mt-10" style={{ color: '#888888' }}>
          All packages customizable.{' '}
          <a href="#inquiry" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Contact us for a free consultation.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
