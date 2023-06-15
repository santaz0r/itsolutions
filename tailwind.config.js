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
        'header-color': '#9CC634',
        'header-nav': '#072446',
        'main-text-color': '#0D2444',
      },
    },
  },
  plugins: [],
};
