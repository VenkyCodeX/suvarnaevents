import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ChevronUp } from 'lucide-react';

import LoadingScreen from './components/sections/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <BrowserRouter>
        <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <WhatsAppButton />

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed z-40 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              bottom: '96px',
              right: '24px',
              background: '#D4AF37',
              boxShadow: '0 4px 20px rgba(212,175,55,0.3)',
              opacity: showTop ? 1 : 0,
              transform: showTop ? 'translateY(0)' : 'translateY(16px)',
              pointerEvents: showTop ? 'auto' : 'none',
            }}
            aria-label="Back to top"
          >
            <ChevronUp size={18} style={{ color: '#0A0A0A' }} />
          </button>
        </div>
      </BrowserRouter>

      <Toaster position="top-center" />
    </>
  );
};

export default App;
