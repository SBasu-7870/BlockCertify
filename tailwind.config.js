/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cal-dark': '#171717',
        'dark-black': '#202122',
        'light-black': '#212121'
      }
    },
  },
  plugins: [],
}