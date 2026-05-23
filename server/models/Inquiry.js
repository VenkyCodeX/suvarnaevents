const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  eventType: {
    type: String,
    required: true,
    enum: ['Wedding', 'Engagement', 'Reception', 'Birthday', 'Corporate', 'Traditional', 'Anniversary', 'Other'],
  },
  eventDate: { type: Date, required: true },
  guestCount: { type: Number, required: true },
  budget: { type: String, required: true },
  venue: { type: String, trim: true },
  message: { type: String, trim: true },
  status: {
    type: String,
    enum: ['new', 'contacted', 'confirmed', 'completed'],
    default: 'new',
  },
}, { timestamps: true });

module.exports = mongoose.model('Inquiry', inquirySchema);
