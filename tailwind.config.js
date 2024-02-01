/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "evalart-blue": "#0e4a8b",
        "evalart-orange": "#eca215"
      },
      width: {
        "content-width": "1024px"
      },
      maxWidth: {
        "content-width": "1024px"
      }
    },
  },
  plugins: [],
}

