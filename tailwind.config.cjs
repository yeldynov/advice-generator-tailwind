/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'c-cyan-light': 'hsl(193, 38%, 86%)',
        'c-neon-green': 'hsl(150, 100%, 66%)',
        'c-grayish-blue': 'hsl(217, 19%, 38%)',
        'c-dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'c-dark-blue': 'hsl(218, 23%, 16%)',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      screens: {
        desk: '375px',
      },
    },
  },
  plugins: [],
};
