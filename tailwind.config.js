/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      arimo: ['Arimo', 'sans-serif'],
    },

    extend: {
      colors: {
        'main-color': '#9CC634',
        'header-nav': '#072446',
        'footer-bg': '#072446',
        'main-text-color': '#0D2444',
        'button-color': '#A6C34F',
        'footer-end-bg': '#020D1A',
      },
    },
  },
  plugins: [],
};
