/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-main": "url('patternpad.png')"
      }
    }
  },
  plugins: []
};
