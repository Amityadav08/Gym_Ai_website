/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937", // Dark Gray
        accent: "#F59E0B", // Yellow
        light: "#F3F4F6", // Light Gray
      },
    },
  },
  plugins: [],
};
