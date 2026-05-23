import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ServiceCard = ({ icon, title, description, delay = 0 }) => {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="fade-up gold-card rounded-xl p-8 relative overflow-hidden group"
      style={{ background: '#1A1A1A', transitionDelay: `${delay}ms` }}
    >
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0" style={{ height: '3px', background: 'linear-gradient(90deg, #D4AF37, #FFD700, #D4AF37)' }} />

      {/* Hover shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.06) 0%, transparent 60%)' }}
      />

      <div style={{ fontSize: '36px', marginBottom: '20px' }}>{icon}</div>
      <h3
        className="font-cormorant text-xl font-semibold mb-3 transition-colors duration-300"
        style={{ color: '#ffffff' }}
        onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
      >
        {title}
      </h3>
      <p className="font-montserrat text-sm leading-relaxed" style={{ color: '#888888' }}>{description}</p>
    </div>
  );
};

export default ServiceCard;
