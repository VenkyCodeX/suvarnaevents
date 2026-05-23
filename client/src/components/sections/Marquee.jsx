import React from 'react';

const ITEMS = ['Weddings', 'Engagements', 'Receptions', 'Birthdays', 'Corporate Events', 'Sangeet', 'Haldi', 'Anniversaries', 'Baby Showers', 'Naming Ceremonies'];

const MarqueeStrip = () => (
  <div className="overflow-hidden py-4" style={{ background: '#CC2299' }}>
    <div className="flex animate-marquee whitespace-nowrap">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i} className="inline-flex items-center gap-4 mx-4 text-white font-semibold uppercase tracking-widest"
          style={{ fontSize: '13px', fontFamily: 'Poppins' }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px' }}>✿</span>
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeStrip;
