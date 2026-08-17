/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          900: '#07090E',
          800: '#0B0F19',
          700: '#111827',
          600: '#1E293B',
        },
        moduleA: {
          cyan: '#06B6D4',
          purple: '#A855F7',
          pink: '#EC4899',
          glow: 'rgba(6, 182, 212, 0.4)',
        },
        moduleB: {
          emerald: '#10B981',
          gold: '#F59E0B',
          silver: '#E2E8F0',
          glow: 'rgba(16, 185, 129, 0.4)',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite alternate',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float-slow': 'floatSlow 10s infinite ease-in-out alternate',
      },
      keyframes: {
        pulseGlow: {
          '0%': { boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(168, 85, 247, 0.6)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        floatSlow: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -20px) scale(1.1)' },
          '100%': { transform: 'translate(-20px, 30px) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
};
