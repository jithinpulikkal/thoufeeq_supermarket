/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#063d28',
        leaf: '#079746',
        lime: '#b1d632',
        sun: '#f3d52e',
        cream: '#f8f8f0',
      },
      fontFamily: { sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'], display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: { soft: '0 16px 48px rgba(6,61,40,.10)' },
    },
  },
  plugins: [],
}
