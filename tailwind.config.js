import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {},
    lineHeight: {
      tight: '1.2',
      normal: '1.5',
    },
    screens: {
      xxs: '375px',
      xs: '480px',
      ...defaultTheme.screens,
    },
    textAlign: {
      left: 'right',
      center: 'right',
      right: 'right',
    },
  },

  plugins: [forms],
}

