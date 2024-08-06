/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gradient-red': 'var(--gradient-red)',
        'dark-red': 'var(--dark-red)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

