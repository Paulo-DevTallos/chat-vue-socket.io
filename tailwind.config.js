/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#004AAD',
        'grayslace': "#F9F9F9",
      },
      colors: {
        'primary': '#004AAD',
      },
      width: {
        '200': '200px',
        '1/20': '5%',
      }
    },
  },
  plugins: [],
}

