const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      '24': '24px',
      '16':'16px',
      '28':'28px',
      '8':'8px'
    },
    colors: {
      'slate-500-5d667b': '#5D667B',
      'slate-808a9d': '#808A9D',
      'slate-blueboxed' : '#0052fe',
      'slate-3E424A':'#3E424A'
    },
    width: {
      '700': '62%',
      '3/14': '5%'
    }
  },
  },
  plugins: [],
}

