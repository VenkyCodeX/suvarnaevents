import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { SITE } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Contact = () => {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="py-24" style={{ background: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="fade-up grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Map */}
          <div className="rounded-xl overflow-hidden" style={{ border: '2px solid #1A1A8C', boxShadow: '0 4px 24px rgba(26,26,140,0.1)' }}>
            <iframe
              src={SITE.mapEmbed}
              width="100%" height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Suvarna Event Management Location"
            />
          </div>

          {/* Details */}
          <div>
            <div className="section-label mb-4">FIND US</div>
            <h2 className="font-cormorant font-semibold mb-8" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#1A1A8C', fontFamily: 'Cormorant Garamond' }}>
              Visit or Contact Us
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#F8E6F4' }}>
                  <MapPin size={18} style={{ color: '#CC2299' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: '#1A1A8C', fontFamily: 'Poppins' }}>Address</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#444444', fontFamily: 'Poppins' }}>{SITE.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#F8E6F4' }}>
                  <Phone size={18} style={{ color: '#CC2299' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: '#1A1A8C', fontFamily: 'Poppins' }}>Phone</p>
                  <a href={`tel:${SITE.phone.replace(/\s/g,'')}`} className="text-sm font-semibold transition-colors duration-200"
                    style={{ color: '#CC2299', fontFamily: 'Poppins' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#A01A7A'}
                    onMouseLeave={e => e.currentTarget.style.color = '#CC2299'}
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#F8E6F4' }}>
                  <Clock size={18} style={{ color: '#CC2299' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: '#1A1A8C', fontFamily: 'Poppins' }}>Hours</p>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: '#E8E8F8', color: '#1A1A8C', fontFamily: 'Poppins' }}>
                    Open 24 Hours · 7 Days a Week
                  </span>
                </div>
              </div>

              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 mt-2"
                style={{ background: '#25D366', fontFamily: 'Poppins' }}
                onMouseEnter={e => e.currentTarget.style.background = '#1da851'}
                onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
              >
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><path d="M16 3.5C9.096 3.5 3.5 9.096 3.5 16c0 2.38.638 4.61 1.752 6.532L3.5 28.5l6.14-1.726A12.44 12.44 0 0016 28.5c6.904 0 12.5-5.596 12.5-12.5S22.904 3.5 16 3.5z" fill="white"/><path d="M21.8 18.8c-.3-.15-1.77-.873-2.044-.972-.274-.1-.473-.15-.672.15-.2.298-.772.972-.946 1.172-.174.2-.348.224-.647.075-.3-.15-1.265-.466-2.41-1.485-.89-.794-1.492-1.774-1.666-2.073-.174-.3-.018-.462.13-.61.134-.134.3-.348.448-.522.15-.174.2-.298.3-.497.1-.2.05-.373-.025-.522-.075-.15-.672-1.62-.92-2.22-.243-.583-.49-.504-.672-.513l-.572-.01c-.2 0-.522.075-.795.373-.274.298-1.044 1.02-1.044 2.487s1.07 2.884 1.218 3.083c.15.2 2.107 3.216 5.104 4.508.713.308 1.27.492 1.703.63.716.228 1.368.196 1.883.119.574-.085 1.77-.724 2.02-1.423.248-.7.248-1.3.173-1.424-.074-.124-.273-.198-.572-.348z" fill="#25D366"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
