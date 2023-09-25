/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#159FED",
        primaryHover: "#1F2B6C",
        secondary: "#F85A47",
        secondaryHover: "#F9321A",
        tertiary: "#717171",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "3px 44px 54px 0px rgba(0, 0, 0, 0.08);",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'Manrope': ['Manrope', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};