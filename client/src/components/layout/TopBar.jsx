import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import { SITE } from '../../utils/constants';

const TopBar = () => (
  <div className="hidden md:block w-full" style={{ background: '#1A1A8C' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <a href={`tel:${SITE.phone.replace(/\s/g,'')}`} className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors" style={{ fontSize: '12px', fontFamily: 'Poppins' }}>
          <Phone size={12} /> {SITE.phone}
        </a>
        <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors" style={{ fontSize: '12px', fontFamily: 'Poppins' }}>
          <Mail size={12} /> {SITE.email}
        </a>
        <span className="flex items-center gap-1.5 text-white/70" style={{ fontSize: '12px', fontFamily: 'Poppins' }}>
          <MapPin size={12} /> Moinabad, Hyderabad
        </span>
        <span className="flex items-center gap-1.5 text-white/70" style={{ fontSize: '12px', fontFamily: 'Poppins' }}>
          <Clock size={12} /> Open 24 Hours
        </span>
      </div>
      <div className="flex items-center gap-3">
        {[Instagram, Facebook, Youtube].map((Icon, i) => (
          <a key={i} href="#" target="_blank" rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors">
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default TopBar;
