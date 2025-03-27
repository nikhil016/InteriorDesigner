/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#2C2C2C',
        beige: '#F5F5F0',
        gold: '#C6A87D',
        bronze: '#CD7F32',
        'off-white': '#FAF9F6',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};