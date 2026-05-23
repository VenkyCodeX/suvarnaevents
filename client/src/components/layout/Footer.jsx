import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import { NAV_LINKS, SERVICES, SITE } from '../../utils/constants';

const Footer = () => {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#1A1A8C' }}>
      {/* Magenta top line */}
      <div style={{ height: '3px', background: '#CC2299' }} />

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/suvarnaLogo.jpg" alt="Suvarna" style={{ height: '60px', width: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #CC2299' }} />
              <div>
                <p className="font-cormorant text-xl font-semibold text-white" style={{ fontFamily: 'Cormorant Garamond' }}>Suvarna</p>
                <p className="text-white/60 uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em', fontFamily: 'Poppins' }}>Event Management</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5" style={{ fontFamily: 'Poppins' }}>
              Premium event management based in Hyderabad. We craft unforgettable experiences for every occasion.
            </p>
            <div className="flex items-center gap-3 mb-5">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ border: '1px solid rgba(204,34,153,0.5)', color: '#CC2299' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#CC2299'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#CC2299'; }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Poppins' }}>
              Built with ❤️ by{' '}
              <a href="https://alphadevs.in" target="_blank" rel="noopener noreferrer"
                style={{ color: '#CC2299' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = '#CC2299'}
              >
                AlphaDevs | alphadevs.in
              </a>
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold mb-5 text-white" style={{ fontFamily: 'Cormorant Garamond' }}>Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm flex items-center gap-2 transition-colors duration-200 text-white/70"
                    style={{ fontFamily: 'Poppins' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#CC2299'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    <span style={{ width: '14px', height: '1px', background: '#CC2299', display: 'inline-block' }} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold mb-5 text-white" style={{ fontFamily: 'Cormorant Garamond' }}>Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-sm flex items-center gap-2 transition-colors duration-200 text-white/70"
                    style={{ fontFamily: 'Poppins' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#CC2299'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    <span style={{ width: '14px', height: '1px', background: '#CC2299', display: 'inline-block' }} />
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold mb-5 text-white" style={{ fontFamily: 'Cormorant Garamond' }}>Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} style={{ color: '#CC2299', marginTop: '2px', flexShrink: 0 }} />
                <span className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: 'Poppins' }}>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} style={{ color: '#CC2299', flexShrink: 0 }} />
                <a href={`tel:${SITE.phone.replace(/\s/g,'')}`} className="text-sm font-medium transition-colors duration-200"
                  style={{ color: '#CC2299', fontFamily: 'Poppins' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = '#CC2299'}
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} style={{ color: '#CC2299', flexShrink: 0 }} />
                <span className="text-xs rounded-full px-3 py-1 font-medium"
                  style={{ color: '#CC2299', border: '1px solid rgba(204,34,153,0.5)', fontFamily: 'Poppins' }}>
                  Open 24 Hours
                </span>
              </li>
              <li className="flex items-center gap-1 mt-2">
                {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#CC2299', fontSize: '16px' }}>★</span>)}
                <span className="text-white/70 text-sm ml-2" style={{ fontFamily: 'Poppins' }}>4.8 Google Rated</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(204,34,153,0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/50" style={{ fontFamily: 'Poppins' }}>© 2026 Suvarna Event Management · All Rights Reserved</p>
          <p className="text-xs text-white/50" style={{ fontFamily: 'Poppins' }}>Hyderabad, Telangana, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
