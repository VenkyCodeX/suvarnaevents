import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black-DEFAULT flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-gold/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-gold/15" />
      </div>

      <div className="relative z-10">
        <p className="font-cormorant text-[120px] md:text-[180px] font-bold leading-none gold-shimmer">404</p>
        <h1 className="font-cormorant text-3xl md:text-4xl font-semibold text-white mb-4 -mt-4">
          Page Not Found
        </h1>
        <p className="font-montserrat text-sm text-warmgrey max-w-sm mx-auto mb-10">
          The page you're looking for doesn't exist. Let's take you back to where the magic happens.
        </p>
        <Button variant="gold" onClick={() => navigate('/')}>
          Back to Home →
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
