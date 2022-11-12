/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
    },
    colors: {
      'black': '#151515',
      'gray': '#797979',
      'white': '#FFFFFF'
    },
  },
  plugins: [],
};
