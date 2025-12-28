/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lead': '#212121',
        'gold-finger': '#F2BD12',
        'eye-ball': '#FFFDF7',
        'hint-yellow': '#FCF1CC',
        'pure-white': '#FFF',
      },
      fontFamily: {
        'roboto': ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}