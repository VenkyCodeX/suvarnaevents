import React from 'react';
import { PACKAGES } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const PricingCard = ({ name, price, suffix, features, popular, tier }) => {
  const isGold = tier === 'gold';
  const isPlatinum = tier === 'platinum';

  return (
    <div
      className="rounded-xl p-8 relative transition-all duration-300"
      style={{
        background: '#FFFFFF',
        border: isGold ? '2px solid #CC2299' : isPlatinum ? '2px solid #1A1A8C' : '1px solid #E8E8F8',
        boxShadow: isGold ? '0 8px 40px rgba(204,34,153,0.15)' : '0 4px 20px rgba(26,26,140,0.07)',
        transform: isGold ? 'scale(1.03)' : 'scale(1)',
      }}
    >
      {/* Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-semibold uppercase tracking-wider"
          style={{ background: '#CC2299', fontFamily: 'Cinzel' }}>
          Most Popular
        </div>
      )}

      {/* Tier badge */}
      <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
        style={{
          background: isGold ? '#F8E6F4' : '#E8E8F8',
          color: isGold ? '#CC2299' : '#1A1A8C',
          fontFamily: 'Cinzel',
        }}>
        {name}
      </div>

      <div className="mb-6">
        <span className="font-semibold" style={{ fontSize: '40px', color: '#1A1A8C', fontFamily: 'Cinzel Decorative' }}>{price}</span>
        <span className="text-sm ml-2" style={{ color: '#888888', fontFamily: 'Nunito' }}>{suffix}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm" style={{ color: '#444444', fontFamily: 'Nunito' }}>
            <span style={{ color: '#CC2299', fontSize: '16px', lineHeight: '1.4' }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => { const el = document.querySelector('#inquiry'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
        className={isGold ? 'btn-magenta w-full justify-center' : 'btn-navy w-full justify-center'}
        style={{ borderRadius: '6px' }}
      >
        {isPlatinum ? 'Get Custom Quote' : 'Enquire Now'}
      </button>
    </div>
  );
};

const Pricing = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  return (
    <section id="pricing" className="py-24" style={{ background: '#E8E8F8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="fade-up text-center mb-16">
          <div className="section-label justify-center mb-4">OUR PACKAGES</div>
          <h2 className="font-semibold mb-3" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#1A1A8C', fontFamily: 'Cinzel Decorative' }}>
            Choose Your Experience
          </h2>
          <p className="text-sm" style={{ color: '#888888', fontFamily: 'Nunito' }}>Transparent pricing. No hidden costs.</p>
        </div>

        <div ref={gridRef} className="stagger grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PACKAGES.map((pkg) => <PricingCard key={pkg.name} {...pkg} />)}
        </div>

        <p className="text-center mt-10 text-sm" style={{ color: '#888888', fontFamily: 'Nunito' }}>
          All packages customizable. <span style={{ color: '#CC2299', fontWeight: 600 }}>Free consultation</span> available.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
