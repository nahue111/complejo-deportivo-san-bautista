/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C41E3A',
          'red-hover': '#E0203F',
          sky: '#71C4E4',
          'sky-dim': '#4BA8CE',
          gold: '#F5C842',
          dark: '#070101',
          surface: '#0D0303',
          card: '#130505',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
