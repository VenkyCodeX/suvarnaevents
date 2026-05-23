import React from 'react';
import { SITE } from '../../utils/constants';

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${SITE.whatsapp}?text=Hi! I'd like to inquire about your event management services.`}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-pulse fixed z-50 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
    style={{ bottom: '28px', right: '24px', width: '56px', height: '56px', background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
    aria-label="Chat on WhatsApp"
  >
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M16 1C7.716 1 1 7.716 1 16c0 2.628.672 5.1 1.848 7.256L1 31l7.98-1.82A14.94 14.94 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1z" fill="white" opacity="0.15"/>
      <path d="M16 3.5C9.096 3.5 3.5 9.096 3.5 16c0 2.38.638 4.61 1.752 6.532L3.5 28.5l6.14-1.726A12.44 12.44 0 0016 28.5c6.904 0 12.5-5.596 12.5-12.5S22.904 3.5 16 3.5z" fill="white"/>
      <path d="M21.8 18.8c-.3-.15-1.77-.873-2.044-.972-.274-.1-.473-.15-.672.15-.2.298-.772.972-.946 1.172-.174.2-.348.224-.647.075-.3-.15-1.265-.466-2.41-1.485-.89-.794-1.492-1.774-1.666-2.073-.174-.3-.018-.462.13-.61.134-.134.3-.348.448-.522.15-.174.2-.298.3-.497.1-.2.05-.373-.025-.522-.075-.15-.672-1.62-.92-2.22-.243-.583-.49-.504-.672-.513l-.572-.01c-.2 0-.522.075-.795.373-.274.298-1.044 1.02-1.044 2.487s1.07 2.884 1.218 3.083c.15.2 2.107 3.216 5.104 4.508.713.308 1.27.492 1.703.63.716.228 1.368.196 1.883.119.574-.085 1.77-.724 2.02-1.423.248-.7.248-1.3.173-1.424-.074-.124-.273-.198-.572-.348z" fill="#25D366"/>
    </svg>
  </a>
);

export default WhatsAppButton;
