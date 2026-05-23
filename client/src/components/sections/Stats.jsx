import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../../utils/constants';

const StatItem = ({ value, suffix, label, animate }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const isDecimal = value % 1 !== 0;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [animate, value]);

  return (
    <div className="text-center px-6 py-8">
      <div className="font-cormorant font-semibold leading-none mb-2"
        style={{ fontSize: 'clamp(44px, 6vw, 64px)', color: '#CC2299', fontFamily: 'Cormorant Garamond' }}>
        {animate ? count : 0}{suffix}
      </div>
      <div className="text-white/80 uppercase tracking-widest font-medium"
        style={{ fontSize: '11px', fontFamily: 'Poppins' }}>
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-4" style={{ background: '#1A1A8C' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <StatItem {...stat} animate={animate} />
              {i < STATS.length - 1 && (
                <div className="hidden lg:block self-center" style={{ width: '1px', height: '60px', background: 'rgba(204,34,153,0.4)' }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
