/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#191C26",
        navbar: "#D9D9D9",
        "blue-nav": "#3500A6",
        "purple-1": "#AD00FF",
        "orange-1": "#D68000",
        "yellow-1": "#FFE600",
        "gray-1": "#535353",
        "red-1": "#D61C4E",
      },
    },
  },
  plugins: [],
};
