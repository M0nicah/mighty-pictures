/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./contact.html"
],
  theme: {
    extend: {
      colors: {
        lilac: "#967bdc",
        'blaze-orange': {
          '50': '#fff8f2', 
          '100': '#fff0e6', 
          '200': '#ffdabf', 
          '300': '#ffc499', 
          '400': '#ff974d', 
          '500': '#ff6b00', 
          '600': '#e66000', 
          '700': '#bf5000', 
          '800': '#994000', 
          '900': '#7d3400'
      }
      },
    },
  },
  plugins: [],
};
