# Suvarna Event Management — Premium Website

> Built with ❤️ by **AlphaDevs** | [alphadevs.in](https://alphadevs.in)

A complete full-stack premium website for **Suvarna Event Management**, Hyderabad's premier event planning company.

---

## 🎨 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS (custom black/gold theme) |
| Animations | Framer Motion + GSAP + CSS |
| Backend | Node.js + Express |
| Database | MongoDB + Mongoose |
| Email | Nodemailer (Gmail) |
| Icons | Lucide React |
| Confetti | canvas-confetti |

---

## 📂 Project Structure

```
suvarna-events/
├── client/          # React frontend (Vite)
│   ├── public/assets/
│   └── src/
│       ├── components/
│       │   ├── layout/   (Navbar, Footer, WhatsAppButton)
│       │   ├── ui/       (Button, Cards, etc.)
│       │   └── sections/ (All page sections)
│       ├── pages/        (Home, NotFound)
│       ├── hooks/
│       └── utils/
└── server/          # Express backend
    ├── models/      (Inquiry, Gallery)
    ├── routes/
    ├── controllers/
    └── config/
```

---

## ⚡ Quick Start

### 1. Install Dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 2. Configure Environment Variables

**client/.env**
```env
VITE_API_URL=http://localhost:5000
VITE_WHATSAPP_NUMBER=919010646727
```

**server/.env**
```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/suvarna-events
JWT_SECRET=your_super_secret_key
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
CLIENT_URL=http://localhost:3000
```

> **Gmail App Password**: Go to Google Account → Security → 2-Step Verification → App Passwords → Generate

### 3. Run Development Servers

```bash
# Terminal 1 — Backend
cd server
npm run dev

# Terminal 2 — Frontend
cd client
npm run dev
```

Frontend: http://localhost:3000  
Backend API: http://localhost:5000

---

## 🗄️ Database Setup

1. Create a free cluster at [MongoDB Atlas](https://cloud.mongodb.com)
2. Get your connection string
3. Add it to `server/.env` as `MONGODB_URI`

---

## 📧 Email Notifications

When a client submits the inquiry form:
1. **Admin email** is sent to `EMAIL_USER` with full inquiry details
2. **Confirmation email** is sent to the client

---

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd client
npm run build
# Deploy dist/ folder to Vercel
```

### Backend (Railway / Render)
```bash
cd server
# Set environment variables in dashboard
# Deploy server/ folder
```

### Environment Variables for Production
- Update `VITE_API_URL` to your production backend URL
- Update `CLIENT_URL` in server to your production frontend URL

---

## 🎨 Color Theme

| Color | Hex |
|-------|-----|
| Primary Black | `#0A0A0A` |
| Secondary Black | `#1A1A1A` |
| Dark Surface | `#111111` |
| Primary Gold | `#D4AF37` |
| Bright Gold | `#FFD700` |
| Light Gold | `#F5E6A3` |
| Rose Gold | `#B76E79` |

---

## 📱 Features

- ✅ Loading screen with gold shimmer animation
- ✅ Sticky navbar (transparent → black on scroll)
- ✅ Full-screen hero with Ken Burns image slider
- ✅ Gold particle animations
- ✅ Marquee event types strip
- ✅ Services grid with hover effects
- ✅ Gallery with filter tabs + lightbox
- ✅ Testimonials auto-carousel
- ✅ 3-tier pricing cards
- ✅ Inquiry form with email notification + confetti
- ✅ Google Maps embed
- ✅ WhatsApp floating button
- ✅ Back to top button
- ✅ 404 page
- ✅ SEO meta tags + Schema markup
- ✅ Mobile-first responsive
- ✅ Lazy image loading

---

## 📞 Business Info

**Suvarna Event Management**  
Himayath Nagar Village, Chilkur Balaji Temple Rd  
Moinabad, Hyderabad, Telangana - 500075  
📞 090106 46727  
⭐ 4.8 · 68 Google Reviews · Open 24 Hours

---

*Built with ❤️ by [AlphaDevs](https://alphadevs.in)*
