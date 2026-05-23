import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ name, price, suffix, features, popular, dark }) => (
  <div
    className="relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
    style={{
      background: dark ? '#0A0A0A' : '#ffffff',
      border: dark ? '2px solid #D4AF37' : popular ? '2px solid #D4AF37' : '1px solid #e5e7eb',
      boxShadow: dark ? '0 0 40px rgba(212,175,55,0.15)' : 'none',
    }}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span
          className="font-montserrat font-semibold uppercase rounded-full px-5 py-1.5"
          style={{ background: '#D4AF37', color: '#0A0A0A', fontSize: '11px', letterSpacing: '0.1em' }}
        >
          Most Popular
        </span>
      </div>
    )}

    <div className="mb-6">
      <h3 className="font-cormorant text-2xl font-semibold mb-2" style={{ color: dark ? '#D4AF37' : '#0A0A0A' }}>
        {name}
      </h3>
      <div className="flex items-baseline gap-1">
        <span className="font-cormorant text-4xl font-bold" style={{ color: dark ? '#ffffff' : '#0A0A0A' }}>{price}</span>
        <span className="font-montserrat text-sm" style={{ color: dark ? '#888888' : '#6b7280' }}>{suffix}</span>
      </div>
    </div>

    <div className="gold-divider mb-6" />

    <ul className="space-y-3 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-3">
          <Check size={16} style={{ color: '#D4AF37', marginTop: '2px', flexShrink: 0 }} />
          <span className="font-montserrat text-sm" style={{ color: dark ? 'rgba(255,255,255,0.8)' : '#374151' }}>{f}</span>
        </li>
      ))}
    </ul>

    <a href="#inquiry" className="btn-gold w-full justify-center" style={{ display: 'flex' }}>
      Get a Quote
    </a>
  </div>
);

export default PricingCard;
