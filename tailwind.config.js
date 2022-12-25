/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: " 'Dancing Script', cursive",
      },

      colors: {
        countdown: '#DCDCDC',
      }
    },
  },
  plugins: [],
}
