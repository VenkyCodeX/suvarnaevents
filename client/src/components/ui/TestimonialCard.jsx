import React from 'react';

const TestimonialCard = ({ text, name, event, rating }) => (
  <div
    className="rounded-xl p-8 md:p-10 relative mx-4"
    style={{ background: '#1A1A1A', border: '1px solid rgba(212,175,55,0.2)' }}
  >
    {/* Decorative quote */}
    <div
      className="font-cormorant absolute top-4 left-6 select-none leading-none"
      style={{ fontSize: '80px', color: 'rgba(212,175,55,0.15)' }}
    >"</div>

    {/* Stars */}
    <div className="flex gap-1 mb-6">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} style={{ color: '#D4AF37', fontSize: '18px' }}>★</span>
      ))}
    </div>

    {/* Review */}
    <p className="font-cormorant italic text-xl leading-relaxed mb-8 relative z-10" style={{ color: 'rgba(255,255,255,0.9)' }}>
      "{text}"
    </p>

    {/* Client */}
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(212,175,55,0.15)' }}>
        <span className="font-cormorant font-semibold text-lg" style={{ color: '#D4AF37' }}>{name.charAt(0)}</span>
      </div>
      <div>
        <p className="font-montserrat font-semibold text-sm" style={{ color: '#D4AF37' }}>{name}</p>
        <p className="font-montserrat text-xs" style={{ color: '#888888' }}>{event}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
