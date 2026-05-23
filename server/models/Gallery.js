const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: {
    type: String,
    required: true,
    enum: ['wedding', 'reception', 'birthday', 'corporate', 'traditional'],
  },
  imageUrl: { type: String, required: true },
  featured: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Gallery', gallerySchema);
