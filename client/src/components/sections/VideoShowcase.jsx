import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const VIDEOS = [
  { src: '/assets/HomePageBgDesktop.mp4', label: 'Event Highlights' },
  { src: '/assets/HomePageBgMobile.mp4', label: 'Behind the Scenes' },
];

/* ── Fullscreen Modal ── */
const VideoModal = ({ src, label, onClose }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    if (videoRef.current) videoRef.current.play();
  }, []);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl mx-4 rounded-2xl overflow-hidden"
        style={{ border: '2px solid #1A1A8C' }}
        onClick={e => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          playsInline
          className="w-full object-cover"
          style={{ maxHeight: '80vh' }}
        />

        {/* Gradient */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(26,26,140,0.6) 0%, transparent 60%)' }} />

        {/* Label */}
        <p className="absolute bottom-14 left-5 text-white font-semibold text-sm" style={{ fontFamily: 'Cinzel' }}>{label}</p>

        {/* Play/Pause */}
        <button
          onClick={toggle}
          className="absolute bottom-5 left-5 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: playing ? '#CC2299' : '#1A1A8C', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}
        >
          {playing ? <Pause size={18} color="#fff" /> : <Play size={18} color="#fff" />}
        </button>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: '#CC2299', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}
        >
          <X size={18} color="#fff" />
        </button>
      </div>
    </div>
  );
};

/* ── Video Card ── */
const VideoCard = ({ src, label, onOpen }) => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) { videoRef.current.play(); setPlaying(true); }
        else { videoRef.current.pause(); setPlaying(false); }
      },
      { threshold: 0.5 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
  };

  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{ width: 'clamp(280px, 70vw, 720px)', height: 'clamp(200px, 45vw, 440px)', border: '2px solid #1A1A8C' }}
      onClick={onOpen}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Gradient */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,26,140,0.6) 0%, transparent 60%)' }} />

      {/* Expand icon on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(204,34,153,0.85)' }}>
          <Maximize2 size={24} color="#fff" />
        </div>
      </div>

      {/* Label */}
      <p className="absolute bottom-14 left-5 text-white font-semibold text-sm" style={{ fontFamily: 'Cinzel' }}>{label}</p>

      {/* Play/Pause */}
      <button
        onClick={toggle}
        className="absolute bottom-5 left-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
        style={{ background: playing ? '#CC2299' : '#1A1A8C', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing ? <Pause size={16} color="#fff" /> : <Play size={16} color="#fff" />}
      </button>
    </div>
  );
};

/* ── Section ── */
const VideoShowcase = () => {
  const scrollRef = useRef(null);
  const [modal, setModal] = useState(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="py-20 overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex items-end justify-between">
        <div>
          <div className="section-label mb-3">OUR VIDEOS</div>
          <h2 className="font-semibold" style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', color: '#1A1A8C', fontFamily: 'Cinzel Decorative' }}>
            See the Magic Unfold
          </h2>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: '#F0F0F8', border: '1px solid #1A1A8C' }}
            onMouseEnter={e => e.currentTarget.style.background = '#CC2299'}
            onMouseLeave={e => e.currentTarget.style.background = '#F0F0F8'}
          >
            <ChevronLeft size={20} color="#1A1A8C" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: '#F0F0F8', border: '1px solid #1A1A8C' }}
            onMouseEnter={e => e.currentTarget.style.background = '#CC2299'}
            onMouseLeave={e => e.currentTarget.style.background = '#F0F0F8'}
          >
            <ChevronRight size={20} color="#1A1A8C" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 px-4 sm:px-8 lg:px-16 overflow-x-auto"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {VIDEOS.map((v, i) => (
          <div key={i} style={{ scrollSnapAlign: 'start' }}>
            <VideoCard src={v.src} label={v.label} onOpen={() => setModal(v)} />
          </div>
        ))}
      </div>

      {modal && <VideoModal src={modal.src} label={modal.label} onClose={() => setModal(null)} />}
    </section>
  );
};

export default VideoShowcase;
