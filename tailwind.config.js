/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        Neutral: {
          600: "#00112D",
          500: "#2A3950",
          400: "#7B889D",
          300: "#A6AEBB",
          200: "#D8DBE0",
          100: "#F9F9FB",
        },
        Primary: {
          600: "#635BFF",
          500: "#A38CFF",
          400: "#D3BDFF",
          300: "#E7D6FF",
          200: "#F7F0FF",
          100: "#FBF7FF",
        },
        Additional : {
          white: "#FFFFF",
          NavyBlue: "#0F2060",
        },
      },
    },
  },
  plugins: [],
};
