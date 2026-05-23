const Inquiry = require('../models/Inquiry');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendInquiryEmail = async (inquiry) => {
  const clientMail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `🎉 New Event Inquiry — ${inquiry.eventType} | ${inquiry.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #fff; border: 1px solid #D4AF37; border-radius: 8px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #D4AF37, #FFD700); padding: 24px; text-align: center;">
          <h1 style="margin: 0; color: #0A0A0A; font-size: 24px;">Suvarna Event Management</h1>
          <p style="margin: 4px 0 0; color: #0A0A0A; font-size: 14px;">New Event Inquiry Received</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #D4AF37; font-weight: bold; width: 40%;">Name</td><td style="padding: 8px 0; color: #fff;">${inquiry.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #D4AF37; font-weight: bold;">Phone</td><td style="padding: 8px 0; color: #fff;">${inquiry.phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #D4AF37; font-weight: bold;">Email</td><td style="padding: 8px 0; color: #fff;">${inquiry.email}</td></tr>
            <tr><td style="padding: 8px 0; color: #D4AF37; font-weight: bold;">Event Type</td><td style="padding: 8px 0; color: #fff;">${inquiry.eventType}</td></tr>
            <tr><td style="padding: 8px 0; color: #D4AF37; font-weight: bold;">Event Date</td><td style="padding: 8px 0; color: #fff;">${new Date(inquiry.eventDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</td></tr>
            <tr><td style="padding: 8px 0; color: #D4AF37; font-weight: bold;">Guest Count</td><td style="padding: 8px 0; color: #fff;">${inquiry.guestCount}</td></tr>
            <tr><td style="padding: 8px 0; color: #D4AF37; font-weight: bold;">Budget</td><td style="padding: 8px 0; color: #fff;">${inquiry.budget}</td></tr>
            <tr><td style="padding: 8px 0; color: #D4AF37; font-weight: bold;">Venue</td><td style="padding: 8px 0; color: #fff;">${inquiry.venue || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px 0; color: #D4AF37; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 8px 0; color: #fff;">${inquiry.message || 'No message'}</td></tr>
          </table>
        </div>
        <div style="background: #1A1A1A; padding: 16px; text-align: center; border-top: 1px solid #D4AF37;">
          <p style="margin: 0; color: #888; font-size: 12px;">Suvarna Event Management · Moinabad, Hyderabad · 090106 46727</p>
        </div>
      </div>
    `,
  };

  const confirmationMail = {
    from: process.env.EMAIL_USER,
    to: inquiry.email,
    subject: `✨ Thank you for contacting Suvarna Event Management!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #fff; border: 1px solid #D4AF37; border-radius: 8px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #D4AF37, #FFD700); padding: 24px; text-align: center;">
          <h1 style="margin: 0; color: #0A0A0A; font-size: 24px;">Suvarna Event Management</h1>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #D4AF37; margin-top: 0;">Dear ${inquiry.name},</h2>
          <p style="color: #ccc; line-height: 1.6;">Thank you for reaching out to us! We have received your inquiry for a <strong style="color: #D4AF37;">${inquiry.eventType}</strong> and our team will get back to you within <strong style="color: #D4AF37;">2 hours</strong>.</p>
          <p style="color: #ccc; line-height: 1.6;">For immediate assistance, feel free to call or WhatsApp us at <strong style="color: #D4AF37;">090106 46727</strong>.</p>
          <p style="color: #888; font-size: 14px; margin-top: 32px;">Warm regards,<br/><strong style="color: #D4AF37;">Suvarna Event Management Team</strong><br/>Moinabad, Hyderabad</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(clientMail);
  await transporter.sendMail(confirmationMail);
};

exports.createInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);
    try {
      await sendInquiryEmail(inquiry);
    } catch (emailErr) {
      console.error('Email send failed:', emailErr.message);
    }
    res.status(201).json({ success: true, message: 'Inquiry submitted successfully!', data: inquiry });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateInquiryStatus = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!inquiry) return res.status(404).json({ success: false, message: 'Inquiry not found' });
    res.json({ success: true, data: inquiry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
