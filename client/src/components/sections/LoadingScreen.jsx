import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2000);
    const t4 = setTimeout(() => onComplete(), 2800);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700"
      style={{ background: '#0A0A0A', opacity: phase === 3 ? 0 : 1, pointerEvents: phase === 3 ? 'none' : 'auto' }}
    >
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[256, 192, 128].map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full transition-all duration-1000"
            style={{
              width: size, height: size,
              border: `1px solid rgba(212,175,55,${0.1 + i * 0.05})`,
              opacity: phase >= 1 ? 1 : 0,
              transform: phase >= 1 ? 'scale(1)' : 'scale(0.5)',
              transitionDelay: `${i * 100}ms`,
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="relative z-10 text-center">
        <div style={{ opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? 'translateY(0)' : 'translateY(32px)', transition: 'all 0.8s ease' }}>
          <h1 className="font-cormorant font-semibold gold-shimmer" style={{ fontSize: '64px', lineHeight: 1 }}>
            Suvarna
          </h1>
          <p
            className="font-montserrat uppercase"
            style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.4em', marginTop: '8px', opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.6s ease 0.3s' }}
          >
            Event Management
          </p>
        </div>

        {/* Expanding gold line */}
        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              height: '1px',
              background: '#D4AF37',
              width: phase >= 2 ? '200px' : '0px',
              transition: 'width 0.7s ease',
            }}
          />
        </div>

        {/* Tagline */}
        <p
          className="font-cormorant italic"
          style={{
            color: 'rgba(212,175,55,0.6)',
            fontSize: '18px',
            marginTop: '16px',
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.6s ease',
          }}
        >
          Creating moments that last forever.
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
