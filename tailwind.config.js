// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          skcolor: {
            DEFAULT: "#02475e",
            dark: "#687980"
          }
        }},
  },
  variants: {},
  plugins: [],
}