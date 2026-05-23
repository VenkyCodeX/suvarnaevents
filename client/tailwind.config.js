/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A1A8C',
          deep: '#12127A',
          light: '#E8E8F8',
        },
        magenta: {
          DEFAULT: '#CC2299',
          deep: '#A01A7A',
          light: '#F8E6F4',
        },
        brand: {
          white: '#FFFFFF',
          'warm-white': '#FAFAFA',
          black: '#1A1A1A',
          grey: '#444444',
          'mid-grey': '#888888',
          'light-grey': '#F0F0F0',
        },
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'whatsapp-pulse': 'whatsappPulse 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'count-up': 'countUp 0.3s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        whatsappPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.5)' },
          '70%': { boxShadow: '0 0 0 16px rgba(37,211,102,0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
