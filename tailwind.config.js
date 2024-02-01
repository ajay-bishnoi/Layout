/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    screens: {
      max_xl: { max: "1200px" },
      max_lg: { max: "992px" },
      max_md: { max: "768px" },
      max_sm: { max: "576px" },
    },
    extend: {
      fontFamily: {
        worksans: "'Work Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
