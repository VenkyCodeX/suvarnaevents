import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const WhatsAppIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3.5C9.096 3.5 3.5 9.096 3.5 16c0 2.38.638 4.61 1.752 6.532L3.5 28.5l6.14-1.726A12.44 12.44 0 0016 28.5c6.904 0 12.5-5.596 12.5-12.5S22.904 3.5 16 3.5z" fill="currentColor"/>
    <path d="M21.8 18.8c-.3-.15-1.77-.873-2.044-.972-.274-.1-.473-.15-.672.15-.2.298-.772.972-.946 1.172-.174.2-.348.224-.647.075-.3-.15-1.265-.466-2.41-1.485-.89-.794-1.492-1.774-1.666-2.073-.174-.3-.018-.462.13-.61.134-.134.3-.348.448-.522.15-.174.2-.298.3-.497.1-.2.05-.373-.025-.522-.075-.15-.672-1.62-.92-2.22-.243-.583-.49-.504-.672-.513l-.572-.01c-.2 0-.522.075-.795.373-.274.298-1.044 1.02-1.044 2.487s1.07 2.884 1.218 3.083c.15.2 2.107 3.216 5.104 4.508.713.308 1.27.492 1.703.63.716.228 1.368.196 1.883.119.574-.085 1.77-.724 2.02-1.423.248-.7.248-1.3.173-1.424-.074-.124-.273-.198-.572-.348z" fill="#0A0A0A"/>
  </svg>
);
import SectionLabel from '../ui/SectionLabel';
import { SITE } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Contact = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section id="contact" style={{ background: '#F5F5F0' }} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Map */}
          <div ref={leftRef} className="fade-up">
            <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid rgba(212,175,55,0.2)', boxShadow: '0 0 40px rgba(212,175,55,0.08)', height: '450px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.5!2d78.3!3d17.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf0!2sSuvarna+Event+Management!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Suvarna Event Management Location"
              />
            </div>
          </div>

          {/* Info */}
          <div ref={rightRef} className="fade-up">
            <SectionLabel className="mb-4">FIND US</SectionLabel>
            <h2 className="font-cormorant font-semibold leading-tight mb-8" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#0A0A0A' }}>
              Visit Us in <span className="font-playfair italic" style={{ color: '#D4AF37' }}>Hyderabad</span>
            </h2>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Address', content: SITE.address },
                { icon: Phone, label: 'Phone', content: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` },
                { icon: Clock, label: 'Hours', content: 'Open 24 Hours — Always Available' },
              ].map(({ icon: Icon, label, content, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-xl p-5 transition-all duration-300"
                  style={{ background: '#ffffff', border: '1px solid rgba(212,175,55,0.1)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.1)'}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(212,175,55,0.1)' }}>
                    <Icon size={18} style={{ color: '#D4AF37' }} />
                  </div>
                  <div>
                    <p className="font-montserrat uppercase tracking-wider mb-1" style={{ fontSize: '11px', color: '#D4AF37' }}>{label}</p>
                    {href
                      ? <a href={href} className="font-montserrat text-sm transition-colors duration-300" style={{ color: '#374151' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
                          onMouseLeave={e => e.currentTarget.style.color = '#374151'}>{content}</a>
                      : <p className="font-montserrat text-sm" style={{ color: '#374151' }}>{content}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="font-montserrat uppercase tracking-wider mb-4" style={{ fontSize: '11px', color: '#888888' }}>Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: 'https://instagram.com' },
                  { icon: Facebook, href: 'https://facebook.com' },
                  { icon: Youtube, href: 'https://youtube.com' },
                  { icon: WhatsAppIcon, href: `https://wa.me/${SITE.whatsapp}` },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ border: '1px solid rgba(212,175,55,0.3)', color: 'rgba(212,175,55,0.6)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(212,175,55,0.6)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
