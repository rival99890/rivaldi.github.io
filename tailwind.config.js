/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      gridAutoColumns: {
        '2fr' : 'minmax(0, 2fr)',
      }
    },
  },
  plugins: [],
}
