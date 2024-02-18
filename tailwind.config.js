/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '281px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        back: 'var(--black)',
        white: 'var(--white)',
        yellow: 'var(--yellow)',
        darkyellow: 'var(--darkyellow)',
        light: 'var(--light)',
        gray: 'var(--gray)',

      },

    },
  },
  plugins: [],
}

