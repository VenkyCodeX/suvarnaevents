import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import { ABOUT_CHECKLIST, STATS } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const About = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section id="about" style={{ background: '#F5F5F0' }} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div ref={leftRef} className="fade-up relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl" style={{ border: '2px solid rgba(212,175,55,0.3)' }} />
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl" style={{ border: '1px solid rgba(212,175,55,0.15)' }} />
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src="/assets/Screenshot 2026-05-23 165002.png"
                alt="Suvarna Event Management"
                className="w-full h-full object-cover"
                loading="lazy"
                onLoad={e => e.target.classList.add('loaded')}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
              {/* Rating badge */}
              <div
                className="absolute bottom-6 left-6 rounded-xl px-5 py-3"
                style={{ background: 'rgba(0,0,0,0.85)', border: '1px solid rgba(212,175,55,0.4)', backdropFilter: 'blur(8px)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="font-cormorant font-bold text-2xl" style={{ color: '#D4AF37' }}>4.8</span>
                  <div>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#D4AF37', fontSize: '12px' }}>★</span>)}
                    </div>
                    <p className="font-montserrat" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>68 Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div ref={rightRef} className="fade-up">
            <SectionLabel className="mb-4">OUR STORY</SectionLabel>
            <h2 className="font-cormorant font-semibold leading-tight mb-6" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#0A0A0A' }}>
              Crafting Memories<br />
              <span className="font-playfair italic" style={{ color: '#D4AF37' }}>Since Day One.</span>
            </h2>
            <p className="font-montserrat text-sm leading-relaxed mb-8" style={{ color: '#4b5563' }}>
              Suvarna Event Management was born from a simple belief — that every celebration deserves to be extraordinary.
              Based in the heart of Hyderabad, near the sacred Chilkur Balaji Temple, we bring passion, creativity and
              meticulous attention to detail to every event we touch. From grand Telugu weddings to intimate birthday
              gatherings, we treat every occasion as our own.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8 py-6" style={{ borderTop: '1px solid rgba(212,175,55,0.2)', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-cormorant font-bold" style={{ fontSize: 'clamp(20px, 3vw, 28px)', color: '#D4AF37' }}>{stat.value}</p>
                  <p className="font-montserrat uppercase tracking-wider mt-1" style={{ fontSize: '10px', color: '#6b7280' }}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {ABOUT_CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} style={{ color: '#D4AF37', flexShrink: 0 }} />
                  <span className="font-montserrat text-sm" style={{ color: '#374151' }}>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#inquiry" className="btn-gold">Get In Touch →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
