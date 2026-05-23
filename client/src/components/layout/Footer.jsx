import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import { NAV_LINKS, SERVICES, SITE } from '../../utils/constants';

const Footer = () => {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#0A0A0A' }}>
      <div className="gold-divider" />

      {/* Top strip */}
      <div className="py-8" style={{ borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/assets/suvarnaLogo.jpg"
              alt="Suvarna Event Management"
              className="object-contain"
              style={{ height: '70px', width: 'auto' }}
            />
          </div>
          <p className="font-cormorant italic text-xl text-center" style={{ color: 'rgba(212,175,55,0.6)' }}>
            "Creating moments that last forever."
          </p>
          <div className="flex items-center gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i} href="#" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ border: '1px solid rgba(212,175,55,0.3)', color: 'rgba(212,175,55,0.6)' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.borderColor = '#D4AF37'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(212,175,55,0.6)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'; }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold mb-4" style={{ color: '#D4AF37' }}>About Us</h4>
            <p className="font-montserrat text-sm leading-relaxed mb-6" style={{ color: '#888888' }}>
              Premium event management based in Hyderabad. We craft unforgettable experiences for every occasion.
            </p>
            <p className="font-montserrat" style={{ fontSize: '11px', color: 'rgba(212,175,55,0.4)' }}>
              Built with ❤️ by{' '}
              <a href="https://alphadevs.in" target="_blank" rel="noopener noreferrer"
                style={{ color: 'rgba(212,175,55,0.4)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(212,175,55,0.4)'}
              >
                AlphaDevs | alphadevs.in
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold mb-4" style={{ color: '#D4AF37' }}>Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-montserrat text-sm flex items-center gap-2 group transition-colors duration-300"
                    style={{ color: '#888888' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
                    onMouseLeave={e => e.currentTarget.style.color = '#888888'}
                  >
                    <span style={{ width: '16px', height: '1px', background: 'rgba(212,175,55,0.3)', display: 'inline-block', transition: 'width 0.3s ease' }} />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold mb-4" style={{ color: '#D4AF37' }}>Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="font-montserrat text-sm flex items-center gap-2 transition-colors duration-300"
                    style={{ color: '#888888' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
                    onMouseLeave={e => e.currentTarget.style.color = '#888888'}
                  >
                    <span style={{ width: '16px', height: '1px', background: 'rgba(212,175,55,0.3)', display: 'inline-block' }} />
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold mb-4" style={{ color: '#D4AF37' }}>Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} style={{ color: '#D4AF37', marginTop: '2px', flexShrink: 0 }} />
                <span className="font-montserrat text-sm leading-relaxed" style={{ color: '#888888' }}>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} style={{ color: '#D4AF37', flexShrink: 0 }} />
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="font-montserrat text-sm transition-colors duration-300" style={{ color: '#D4AF37' }}>
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} style={{ color: '#D4AF37', flexShrink: 0 }} />
                <span className="font-montserrat text-xs rounded-full px-3 py-1" style={{ color: '#D4AF37', border: '1px solid rgba(212,175,55,0.3)' }}>
                  Open 24 Hours
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="gold-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-montserrat text-xs" style={{ color: '#888888' }}>© 2026 Suvarna Event Management · All Rights Reserved</p>
        <p className="font-montserrat text-xs" style={{ color: '#888888' }}>Hyderabad, Telangana, India</p>
      </div>
    </footer>
  );
};

export default Footer;
