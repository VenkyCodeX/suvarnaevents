import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const WhatsAppIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 1C7.716 1 1 7.716 1 16c0 2.628.672 5.1 1.848 7.256L1 31l7.98-1.82A14.94 14.94 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1z" fill="currentColor" opacity="0.15"/>
    <path d="M16 3.5C9.096 3.5 3.5 9.096 3.5 16c0 2.38.638 4.61 1.752 6.532L3.5 28.5l6.14-1.726A12.44 12.44 0 0016 28.5c6.904 0 12.5-5.596 12.5-12.5S22.904 3.5 16 3.5z" fill="currentColor"/>
    <path d="M21.8 18.8c-.3-.15-1.77-.873-2.044-.972-.274-.1-.473-.15-.672.15-.2.298-.772.972-.946 1.172-.174.2-.348.224-.647.075-.3-.15-1.265-.466-2.41-1.485-.89-.794-1.492-1.774-1.666-2.073-.174-.3-.018-.462.13-.61.134-.134.3-.348.448-.522.15-.174.2-.298.3-.497.1-.2.05-.373-.025-.522-.075-.15-.672-1.62-.92-2.22-.243-.583-.49-.504-.672-.513l-.572-.01c-.2 0-.522.075-.795.373-.274.298-1.044 1.02-1.044 2.487s1.07 2.884 1.218 3.083c.15.2 2.107 3.216 5.104 4.508.713.308 1.27.492 1.703.63.716.228 1.368.196 1.883.119.574-.085 1.77-.724 2.02-1.423.248-.7.248-1.3.173-1.424-.074-.124-.273-.198-.572-.348z" fill="#0A0A0A"/>
  </svg>
);
import { NAV_LINKS, SITE } from '../../utils/constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ background: scrolled ? '#0A0A0A' : 'transparent', boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.8)' : 'none' }}
      >
        {/* Gold bottom border on scroll */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500"
          style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)', opacity: scrolled ? 1 : 0 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <button onClick={() => handleNavClick('#home')} className="flex flex-col leading-tight text-left">
              <span className="font-cormorant text-2xl font-semibold gold-shimmer">Suvarna</span>
              <span className="font-montserrat text-white/70 uppercase" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
                Event Management
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-montserrat text-sm relative group transition-colors duration-300"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 w-0 group-hover:w-full"
                    style={{ background: '#D4AF37' }}
                  />
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                className="hidden md:flex items-center gap-2 font-montserrat text-sm transition-colors duration-300"
                style={{ color: '#D4AF37' }}
              >
                <Phone size={14} />
                {SITE.phone}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex w-9 h-9 rounded-full items-center justify-center transition-all duration-300"
                style={{ border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#D4AF37'; e.currentTarget.style.color = '#0A0A0A'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#D4AF37'; }}
              >
                <WhatsAppIcon size={16} />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-white transition-colors duration-300"
                onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
                onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center gap-2 transition-all duration-500"
        style={{
          background: '#0A0A0A',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <React.Fragment key={link.label}>
            <button
              onClick={() => handleNavClick(link.href)}
              className="font-cormorant text-4xl text-white py-3 transition-all duration-300"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
              onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
            >
              {link.label}
            </button>
            {i < NAV_LINKS.length - 1 && (
              <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)' }} />
            )}
          </React.Fragment>
        ))}
        <div className="mt-10 flex items-center gap-2" style={{ color: '#D4AF37' }}>
          <Phone size={14} />
          <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="font-montserrat text-sm" style={{ color: '#D4AF37' }}>
            {SITE.phone}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
