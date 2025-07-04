/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'near-black': '#161616',
      },
      sans: ['Satoshi', 'sans-serif']
    },
  },
  plugins: [],
}

