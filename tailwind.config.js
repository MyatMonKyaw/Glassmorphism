/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
