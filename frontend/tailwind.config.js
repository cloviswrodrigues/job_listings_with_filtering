/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'cyan-dark': '#5ba4a4',
      'cyan-light': '	#effafa',
      'cyan-light-2': '	#eef6f6',
      'cyan-dark-grayish': '#7b8e8e',
      'cyan-very-dark': '#2c3a3a',
    },
  },
  fontFamily: {
    sans: ['League Spartan', 'sans-serif']
  },
  plugins: [],
}