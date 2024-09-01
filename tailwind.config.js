/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rate-color': '#1A243A',
        'rate-symbol': '#BDBEBF',
        'success': '#67BF6B',
        'main-color': '#6F7177',
        'btn-primary': '#4B40EE',  
      },
      fontFamily: {
        'circular': ['Circular Std', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

