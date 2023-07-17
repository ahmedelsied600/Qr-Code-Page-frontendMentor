/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "White": "hsl(0, 0%, 100%)",
        "Light-gray": "hsl(212, 45%, 89%)",
        "Gray": "hsl(220, 15%, 55%)",
        "Dark-Navy": "hsl(218, 44%, 22%)",
      }
    },
  },
  plugins: [],
}