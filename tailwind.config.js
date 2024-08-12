/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bebas-neue": ['"Bebas Neue"', "system-ui"],
        "open-sans": ['"Open Sans"', "system-ui"],
      },
      textShadow: {
        glow: "0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.8)",
      },
      colors: {
        customBlue: "#0C3A5C", // Menambahkan warna kustom
      },
    },
  },
  plugins: [],
};
