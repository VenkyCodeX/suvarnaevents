import React from 'react';

const Button = ({ children, variant = 'gold', className = '', onClick, type = 'button', href, ...props }) => {
  const base = variant === 'gold' ? 'btn-gold' : 'btn-outline';
  const cls = `${base} inline-flex items-center gap-2 cursor-pointer ${className}`;

  if (href) {
    return <a href={href} className={cls} {...props}>{children}</a>;
  }

  return (
    <button type={type} onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  );
};

export default Button;
