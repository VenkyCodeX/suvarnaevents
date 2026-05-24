import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ChevronUp } from 'lucide-react';

import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import NotFound from './pages/NotFound';

const App = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Navbar />
        <div style={{ paddingTop: '112px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed z-40 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            bottom: '96px', right: '24px',
            background: '#1A1A8C',
            boxShadow: '0 4px 20px rgba(26,26,140,0.3)',
            opacity: showTop ? 1 : 0,
            transform: showTop ? 'translateY(0)' : 'translateY(16px)',
            pointerEvents: showTop ? 'auto' : 'none',
          }}
          aria-label="Back to top"
        >
          <ChevronUp size={18} style={{ color: '#CC2299' }} />
        </button>
      </BrowserRouter>

      <Toaster position="top-center" toastOptions={{
        style: { fontFamily: 'Poppins', fontSize: '14px' },
        success: { iconTheme: { primary: '#CC2299', secondary: '#fff' } },
      }} />
    </>
  );
};

export default App;
