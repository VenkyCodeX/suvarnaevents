import React, { useState } from 'react';
import { X } from 'lucide-react';
import { SITE } from '../../utils/constants';

const WhatsAppIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 1C7.716 1 1 7.716 1 16c0 2.628.672 5.1 1.848 7.256L1 31l7.98-1.82A14.94 14.94 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1z"
      fill="#0A0A0A"
    />
    <path
      d="M16 3.5C9.096 3.5 3.5 9.096 3.5 16c0 2.38.638 4.61 1.752 6.532L3.5 28.5l6.14-1.726A12.44 12.44 0 0016 28.5c6.904 0 12.5-5.596 12.5-12.5S22.904 3.5 16 3.5z"
      fill="#D4AF37"
    />
    <path
      d="M21.8 18.8c-.3-.15-1.77-.873-2.044-.972-.274-.1-.473-.15-.672.15-.2.298-.772.972-.946 1.172-.174.2-.348.224-.647.075-.3-.15-1.265-.466-2.41-1.485-.89-.794-1.492-1.774-1.666-2.073-.174-.3-.018-.462.13-.61.134-.134.3-.348.448-.522.15-.174.2-.298.3-.497.1-.2.05-.373-.025-.522-.075-.15-.672-1.62-.92-2.22-.243-.583-.49-.504-.672-.513l-.572-.01c-.2 0-.522.075-.795.373-.274.298-1.044 1.02-1.044 2.487s1.07 2.884 1.218 3.083c.15.2 2.107 3.216 5.104 4.508.713.308 1.27.492 1.703.63.716.228 1.368.196 1.883.119.574-.085 1.77-.724 2.02-1.423.248-.7.248-1.3.173-1.424-.074-.124-.273-.198-.572-.348z"
      fill="#0A0A0A"
    />
  </svg>
);

const WhatsAppButton = () => {
  const [tooltip, setTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {tooltip && (
        <div
          className="flex items-center gap-2 rounded-full px-4 py-2 shadow-lg"
          style={{ background: '#1A1A1A', border: '1px solid rgba(212,175,55,0.3)' }}
        >
          <span className="font-montserrat text-xs text-white whitespace-nowrap">Chat with us!</span>
          <button
            onClick={() => setTooltip(false)}
            className="transition-colors duration-200"
            style={{ color: '#888888' }}
            onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={e => e.currentTarget.style.color = '#888888'}
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=Hello! I'm interested in your event management services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center whatsapp-pulse transition-all duration-300"
        style={{ background: '#D4AF37', boxShadow: '0 4px 20px rgba(212,175,55,0.4)' }}
        aria-label="Chat on WhatsApp"
        onMouseEnter={e => e.currentTarget.style.background = '#FFD700'}
        onMouseLeave={e => e.currentTarget.style.background = '#D4AF37'}
      >
        <WhatsAppIcon size={30} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
