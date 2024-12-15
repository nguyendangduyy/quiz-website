/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'header': 'var(--header-height)',
        'sidebar': 'var(--sidebar-width)'
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem'
        },
      },
    },
  },
  plugins: [],
}