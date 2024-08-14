/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "100%",
          md: "800px",
          lg: "1024px",
          xl: "1140px",
          xxl: "1440px",
        },
        padding: {
          DEFAULT: "25px",
          sm: "10px",
          lg: "20px",
        },
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      backgroundColor: {
        primary: '#E2F5FB',
        secondary: '#17414F',
        ascent: '#BCE7F5'
      },
    },
  },
  plugins: [],
}