import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_LINKS, SITE } from '../../utils/constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (href === '#gallery') {
      navigate('/gallery');
      return;
    }
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: '#FFFFFF',
          borderBottom: '2px solid #1A1A8C',
          boxShadow: scrolled ? '0 4px 20px rgba(26,26,140,0.12)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">

            {/* Logo */}
            <button onClick={() => handleNavClick('#home')} className="flex items-center">
              <img
                src="/assets/suvarnaLogo.jpg"
                alt="Suvarna Event Management"
                style={{ height: '75px', width: 'auto', borderRadius: '50%', objectFit: 'cover' }}
              />
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="relative font-poppins text-sm font-medium group transition-colors duration-200"
                  style={{ color: '#1A1A8C', fontFamily: 'Poppins' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#CC2299'}
                  onMouseLeave={e => e.currentTarget.style.color = '#1A1A8C'}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: '#CC2299' }}
                  />
                </button>
              ))}
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                className="hidden md:flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: '#1A1A8C', fontFamily: 'Poppins' }}
              >
                <Phone size={14} /> {SITE.phone}
              </a>
              <button
                onClick={() => handleNavClick('#inquiry')}
                className="hidden md:block btn-magenta text-sm"
                style={{ padding: '10px 20px', borderRadius: '6px' }}
              >
                Get a Quote
              </button>
              {/* Mobile phone number — visible on small screens */}
              <a
                href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                className="flex lg:hidden items-center gap-1.5 font-semibold"
                style={{ color: '#1A1A8C', fontFamily: 'Poppins', fontSize: '13px' }}
              >
                <Phone size={13} />
                {SITE.phone}
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center transition-colors duration-200"
                style={{ color: '#1A1A8C' }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden flex flex-col transition-all duration-400"
        style={{
          background: '#FFFFFF',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          paddingTop: '80px',
        }}
      >
        <div className="flex flex-col items-center justify-center flex-1 gap-1">
          {NAV_LINKS.map((link, i) => (
            <React.Fragment key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="font-cormorant text-3xl py-3 transition-all duration-300"
                style={{
                  color: '#1A1A8C',
                  fontFamily: 'Cormorant Garamond',
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
                  transitionDelay: `${i * 60}ms`,
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#CC2299'}
                onMouseLeave={e => e.currentTarget.style.color = '#1A1A8C'}
              >
                {link.label}
              </button>
              {i < NAV_LINKS.length - 1 && (
                <div className="w-12 h-px" style={{ background: '#E8E8F8' }} />
              )}
            </React.Fragment>
          ))}
          <button
            onClick={() => handleNavClick('#inquiry')}
            className="btn-magenta mt-8 w-64 justify-center"
          >
            Get a Quote
          </button>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 mt-4 text-sm font-medium"
            style={{ color: '#1A1A8C', fontFamily: 'Poppins' }}
          >
            <Phone size={14} /> {SITE.phone}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
