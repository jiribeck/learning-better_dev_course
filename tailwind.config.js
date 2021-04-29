const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
        fakered: '#ff0000',
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['even'],
      borderRadius: ['first', 'last'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
