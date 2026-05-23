import React from 'react';

const SectionLabel = ({ children, className = '' }) => (
  <span className={`section-label flex items-center gap-3 ${className}`}>
    <span className="w-8 h-px bg-gold inline-block" />
    {children}
    <span className="w-8 h-px bg-gold inline-block" />
  </span>
);

export default SectionLabel;
