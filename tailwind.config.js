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
      colors: {
        'dark-from': '#09203f',
        'dark-to': '#537895',
        'light-from': '#accbee',
        'light-to': '#e7f0fd',
        'brand': '#5460FE',
        'light-text': '#111942',
        'dark-text': '#fff',
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