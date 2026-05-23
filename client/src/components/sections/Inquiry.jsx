import React, { useState } from 'react';
import { Phone, Clock } from 'lucide-react';

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3.5C9.096 3.5 3.5 9.096 3.5 16c0 2.38.638 4.61 1.752 6.532L3.5 28.5l6.14-1.726A12.44 12.44 0 0016 28.5c6.904 0 12.5-5.596 12.5-12.5S22.904 3.5 16 3.5z" fill="#D4AF37"/>
    <path d="M21.8 18.8c-.3-.15-1.77-.873-2.044-.972-.274-.1-.473-.15-.672.15-.2.298-.772.972-.946 1.172-.174.2-.348.224-.647.075-.3-.15-1.265-.466-2.41-1.485-.89-.794-1.492-1.774-1.666-2.073-.174-.3-.018-.462.13-.61.134-.134.3-.348.448-.522.15-.174.2-.298.3-.497.1-.2.05-.373-.025-.522-.075-.15-.672-1.62-.92-2.22-.243-.583-.49-.504-.672-.513l-.572-.01c-.2 0-.522.075-.795.373-.274.298-1.044 1.02-1.044 2.487s1.07 2.884 1.218 3.083c.15.2 2.107 3.216 5.104 4.508.713.308 1.27.492 1.703.63.716.228 1.368.196 1.883.119.574-.085 1.77-.724 2.02-1.423.248-.7.248-1.3.173-1.424-.074-.124-.273-.198-.572-.348z" fill="#0A0A0A"/>
  </svg>
);
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';
import SectionLabel from '../ui/SectionLabel';
import { EVENT_TYPES, BUDGET_RANGES, SITE } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import axios from 'axios';

const INITIAL = { name: '', phone: '', email: '', eventType: '', eventDate: '', guestCount: '', budget: '', venue: '', message: '' };

const fireConfetti = () => {
  const colors = ['#D4AF37', '#FFD700', '#F5E6A3', '#ffffff'];
  confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, colors });
  setTimeout(() => confetti({ particleCount: 50, spread: 100, origin: { y: 0.5 }, colors }), 300);
};

const inputStyle = {
  width: '100%',
  background: '#0A0A0A',
  border: '1px solid rgba(212,175,55,0.2)',
  borderRadius: '8px',
  padding: '12px 16px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '14px',
  color: '#ffffff',
  outline: 'none',
  transition: 'border-color 0.3s ease',
};

const InputField = ({ label, ...props }) => (
  <div>
    <label style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>
      {label}
    </label>
    <input
      {...props}
      style={inputStyle}
      onFocus={e => e.target.style.borderColor = '#D4AF37'}
      onBlur={e => e.target.style.borderColor = 'rgba(212,175,55,0.2)'}
    />
  </div>
);

const SelectField = ({ label, children, ...props }) => (
  <div>
    <label style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>
      {label}
    </label>
    <select
      {...props}
      style={{ ...inputStyle, cursor: 'pointer' }}
      onFocus={e => e.target.style.borderColor = '#D4AF37'}
      onBlur={e => e.target.style.borderColor = 'rgba(212,175,55,0.2)'}
    >
      {children}
    </select>
  </div>
);

const Inquiry = () => {
  const [form, setForm] = useState(INITIAL);
  const [loading, setLoading] = useState(false);
  const headerRef = useScrollAnimation();

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/inquiries`, form);
      fireConfetti();
      toast.success("🎉 Inquiry sent! We'll contact you within 2 hours.", {
        duration: 5000,
        style: { background: '#1A1A1A', color: '#fff', border: '1px solid #D4AF37' },
      });
      setForm(INITIAL);
    } catch {
      toast.error('Something went wrong. Please call us directly.', {
        style: { background: '#1A1A1A', color: '#fff', border: '1px solid #ef4444' },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inquiry" style={{ background: '#111111' }} className="py-24 lg:py-32 mandala-bg relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 60%)' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="fade-up text-center mb-12">
          <SectionLabel className="justify-center mb-4">BOOK NOW</SectionLabel>
          <h2 className="font-cormorant font-semibold leading-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#ffffff' }}>
            Let's Plan Your <span className="gold-shimmer">Event</span>
          </h2>
          <p className="font-montserrat text-sm max-w-md mx-auto" style={{ color: '#888888' }}>
            Tell us about your dream event — we'll make it a reality.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-8 md:p-10"
          style={{ background: '#1A1A1A', border: '1px solid rgba(212,175,55,0.2)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField label="Full Name *" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
            <InputField label="Phone Number *" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" />
            <InputField label="Email Address *" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
            <SelectField label="Event Type *" name="eventType" value={form.eventType} onChange={handleChange} required>
              <option value="" style={{ background: '#1A1A1A' }}>Select event type</option>
              {EVENT_TYPES.map(t => <option key={t} value={t} style={{ background: '#1A1A1A' }}>{t}</option>)}
            </SelectField>
            <InputField label="Event Date *" name="eventDate" type="date" value={form.eventDate} onChange={handleChange} required />
            <InputField label="Expected Guests *" name="guestCount" type="number" value={form.guestCount} onChange={handleChange} required placeholder="e.g. 200" min="1" />
            <SelectField label="Estimated Budget *" name="budget" value={form.budget} onChange={handleChange} required>
              <option value="" style={{ background: '#1A1A1A' }}>Select budget range</option>
              {BUDGET_RANGES.map(b => <option key={b} value={b} style={{ background: '#1A1A1A' }}>{b}</option>)}
            </SelectField>
            <InputField label="Event Venue / Location" name="venue" value={form.venue} onChange={handleChange} placeholder="Venue name or area" />
            <div className="md:col-span-2">
              <label style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '8px' }}>
                Message / Special Requirements
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your vision, theme preferences, or any special requirements..."
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => e.target.style.borderColor = '#D4AF37'}
                onBlur={e => e.target.style.borderColor = 'rgba(212,175,55,0.2)'}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button type="submit" className="btn-gold" disabled={loading}>
              {loading ? 'Sending...' : 'Send Inquiry →'}
            </button>
            <p className="font-montserrat text-xs flex items-center gap-2" style={{ color: '#888888' }}>
              <Clock size={12} style={{ color: '#D4AF37' }} />
              We respond within 2 hours
            </p>
          </div>
        </form>

        {/* Quick contact */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { href: `https://wa.me/${SITE.whatsapp}?text=Hello! I'd like to inquire about your event management services.`, icon: WhatsAppIcon, label: 'Chat with us on WhatsApp', external: true },
            { href: `tel:${SITE.phone.replace(/\s/g, '')}`, icon: Phone, label: `Call us: ${SITE.phone}`, external: false },
          ].map(({ href, icon: Icon, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-center gap-3 rounded-xl px-6 py-4 transition-all duration-300"
              style={{ background: '#1A1A1A', border: '1px solid rgba(212,175,55,0.2)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#D4AF37'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)'}
            >
              <Icon size={20} style={{ color: '#D4AF37' }} />
              <span className="font-montserrat text-sm text-white">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
