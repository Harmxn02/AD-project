/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandCyan: "#62A0AA",
        brandBlack: "#4C4C4C",

        // used for the most expensive plans
        brandBackground: "#3E3E3E",
      },
    },
  },
  plugins: [],
}

