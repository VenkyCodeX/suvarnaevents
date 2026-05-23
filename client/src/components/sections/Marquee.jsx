import React from 'react';

const ITEMS = [
  '✨ Weddings', '💍 Engagements', '🎂 Birthdays',
  '🏢 Corporate Events', '🎊 Receptions', '🌸 Haldi',
  '💃 Sangeet', '👶 Baby Showers', '🎉 Anniversaries',
];

const MarqueeStrip = () => {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-gold py-4 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-montserrat font-semibold text-black text-sm uppercase tracking-wider mx-6 flex-shrink-0">
            {item}
            <span className="mx-6 text-black/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
