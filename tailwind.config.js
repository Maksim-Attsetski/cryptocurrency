/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundColor: {
        'dark': '#38444c',
        'light': '#F8F7F9',
      },
      colors: {
        'dark-from': '#09203f',  // dark gradient
        'dark-to': '#537895',

        'light-from': '#accbee',   // light gradient
        'light-to': '#e7f0fd',

        'brand-purple': '#5460FE',   // brand color

        'light-text': '#111',   // light text
        'dark-text': '#fff',    // dark text
      },
      borderRadius: {
        'circle': '50%',
      },
      inset: {
        '2/5': '40%',
      },
    },
  },
  plugins: [],
}