/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
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
