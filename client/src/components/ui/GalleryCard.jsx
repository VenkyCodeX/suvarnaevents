import React, { useState } from 'react';
import { Expand } from 'lucide-react';

const GalleryCard = ({ image, title, category, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-pointer group gold-card"
      onClick={onClick}
    >
      {/* Skeleton loader */}
      {!loaded && (
        <div className="absolute inset-0 bg-black-secondary loading-shimmer" />
      )}

      <img
        src={image}
        alt={title}
        loading="lazy"
        onLoad={(e) => { setLoaded(true); e.target.classList.add('loaded'); }}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
          <Expand size={18} className="text-gold" />
        </div>
        <p className="font-montserrat text-xs text-gold uppercase tracking-widest">{category}</p>
        <p className="font-cormorant text-lg text-white">{title}</p>
      </div>

      {/* Gold border frame on hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-gold/50 rounded-lg transition-all duration-300 pointer-events-none" />
    </div>
  );
};

export default GalleryCard;
