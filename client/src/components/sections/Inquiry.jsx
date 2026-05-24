import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';
import { EVENT_TYPES, BUDGET_RANGES, SITE } from '../../utils/constants';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', half: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '10-digit mobile number', half: true },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', half: true },
  { name: 'eventDate', label: 'Event Date', type: 'date', placeholder: '', half: true },
  { name: 'guests', label: 'Expected Guests', type: 'number', placeholder: 'Approx. number of guests', half: true },
  { name: 'venue', label: 'Venue / Location', type: 'text', placeholder: 'Preferred venue or area', half: true },
];

const inputStyle = {
  width: '100%', padding: '11px 14px', borderRadius: '6px',
  border: '1.5px solid #E8E8F8', outline: 'none',
  fontFamily: 'Poppins', fontSize: '14px', color: '#1A1A1A',
  background: '#FAFAFA', transition: 'border-color 0.2s ease',
};

const Inquiry = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', eventType: '', eventDate: '', guests: '', budget: '', venue: '', message: '' });
  const [loading, setLoading] = useState(false);
  const cardRef = useScrollAnimation();

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleFocus = (e) => { e.target.style.borderColor = '#1A1A8C'; e.target.style.background = '#fff'; };
  const handleBlur = (e) => { e.target.style.borderColor = '#E8E8F8'; e.target.style.background = '#FAFAFA'; };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.eventType) {
      toast.error('Please fill in required fields.');
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/inquiries`, form);
      confetti({ particleCount: 120, spread: 80, colors: ['#1A1A8C', '#CC2299', '#ffffff'], origin: { y: 0.6 } });
      toast.success('Thank you! We\'ll contact you within 2 hours ✓');
      setForm({ name: '', phone: '', email: '', eventType: '', eventDate: '', guests: '', budget: '', venue: '', message: '' });
    } catch {
      toast.error('Something went wrong. Please call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inquiry" className="py-24" style={{ background: '#F8E6F4' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={cardRef} className="fade-up rounded-xl p-8 md:p-12"
          style={{ borderTop: '3px solid #1A1A8C', boxShadow: '0 8px 40px rgba(26,26,140,0.1)', border: '1px solid #E8E8F8', borderTopColor: '#1A1A8C', borderTopWidth: '3px' }}>

          <div className="text-center mb-10">
            <h2 className="font-semibold mb-2" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#1A1A8C', fontFamily: 'Cinzel Decorative' }}>
              Let's Plan Your Event Together
            </h2>
            <p className="text-sm font-medium" style={{ color: '#CC2299', fontFamily: 'Nunito' }}>We respond within 2 hours ✓</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {FIELDS.map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#1A1A8C', fontFamily: 'Cinzel' }}>{label}</label>
                  <input type={type} name={name} value={form[name]} onChange={handleChange} placeholder={placeholder}
                    style={{...inputStyle, fontFamily: 'Nunito'}} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
              ))}

              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#1A1A8C', fontFamily: 'Poppins' }}>Event Type</label>
                <select name="eventType" value={form.eventType} onChange={handleChange} style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}>
                  <option value="">Select event type</option>
                  {EVENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#1A1A8C', fontFamily: 'Poppins' }}>Budget Range</label>
                <select name="budget" value={form.budget} onChange={handleChange} style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}>
                  <option value="">Select budget range</option>
                  {BUDGET_RANGES.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#1A1A8C', fontFamily: 'Poppins' }}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                placeholder="Tell us about your event vision, special requirements..."
                style={{ ...inputStyle, resize: 'vertical' }} onFocus={handleFocus} onBlur={handleBlur} />
            </div>

            <button type="submit" disabled={loading} className="btn-magenta w-full justify-center text-base"
              style={{ padding: '14px', borderRadius: '6px', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Sending...' : 'Send Inquiry →'}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm mb-3" style={{ color: '#888888', fontFamily: 'Poppins' }}>Prefer WhatsApp? Message us directly →</p>
            <a href={`https://wa.me/${SITE.whatsapp}?text=Hi! I'd like to inquire about your event management services.`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300"
              style={{ background: '#25D366', fontFamily: 'Poppins' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1da851'}
              onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
            >
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><path d="M16 3.5C9.096 3.5 3.5 9.096 3.5 16c0 2.38.638 4.61 1.752 6.532L3.5 28.5l6.14-1.726A12.44 12.44 0 0016 28.5c6.904 0 12.5-5.596 12.5-12.5S22.904 3.5 16 3.5z" fill="white"/><path d="M21.8 18.8c-.3-.15-1.77-.873-2.044-.972-.274-.1-.473-.15-.672.15-.2.298-.772.972-.946 1.172-.174.2-.348.224-.647.075-.3-.15-1.265-.466-2.41-1.485-.89-.794-1.492-1.774-1.666-2.073-.174-.3-.018-.462.13-.61.134-.134.3-.348.448-.522.15-.174.2-.298.3-.497.1-.2.05-.373-.025-.522-.075-.15-.672-1.62-.92-2.22-.243-.583-.49-.504-.672-.513l-.572-.01c-.2 0-.522.075-.795.373-.274.298-1.044 1.02-1.044 2.487s1.07 2.884 1.218 3.083c.15.2 2.107 3.216 5.104 4.508.713.308 1.27.492 1.703.63.716.228 1.368.196 1.883.119.574-.085 1.77-.724 2.02-1.423.248-.7.248-1.3.173-1.424-.074-.124-.273-.198-.572-.348z" fill="#25D366"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
