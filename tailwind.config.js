/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-brown": "#7B2E2E",
        "brown": "#5E312C",
        "dark-brown": "#2b1614",
        "light-gray": "#9F9F9F",
        "red": "#B71D16",
        "maroon": "#A73127"
      }
    },
  },
  plugins: [],
}

