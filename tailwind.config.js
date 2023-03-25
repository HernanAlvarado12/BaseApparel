/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      spacing: {
        '0.5': '0.5rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '8': '8rem',
        '10': '10rem',
        '50': '50%',
        '85': '85%',
        '90': '90%'
      },
      fontSize: {
        'xs': '1.4rem',
        'sm': '1.6rem',
        'md': '1.8rem',
        'base': '2.4rem',
        'lg': '3.2rem',
        'xl': '4.8rem'
      },
      lineHeight: {
        1: '1'
      },
      borderRadius: {
        'sm': '0.6rem',
        'md': '0.8rem',
        'lg': '1rem'
      },
      colors: {
        gray: 'hsl(0, 6%, 24%)',
        red: {
          DEFAULT: 'hsl(0, 36%, 70%)',
          100: 'hsl(0, 93%, 68%)'
        },
        'grdnt-1': {
          100: 'hsl(0, 0%, 100%)',
          200: 'hsl(0, 100%, 98%)'
        },
        'grdnt-2': {
          100: 'hsl(0, 80%, 86%)',
          200: 'hsl(0, 74%, 74%)'
        }
      }
    },
  },
  plugins: [],
}
