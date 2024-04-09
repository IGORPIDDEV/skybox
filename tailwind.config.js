/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        red: '#f72585',
        purple: '#7209b7',
        'blue-dark': '#3a0ca3',
        'blue-light': '#4361ee',
        cyan: '#4cc9f0',
        'b-red': {
          100: '#fee5f2',
          200: '#fecce6',
          300: '#ffa2d2',
          400: '#fd69b1',
          500: '#f72585',
          600: '#e81a6e',
          700: '#ca0c54',
          800: '#a70d45',
          900: '#8b103c'
        },
        'b-purple': {
          100: '#f4e4ff',
          200: '#ecceff',
          300: '#dda7ff',
          400: '#c86fff',
          500: '#b439ff',
          600: '#a213ff',
          700: '#8d04ec',
          800: '#7209b7',
          900: '#62099a'
        },
        'b-blue-dark': {
          100: '#e9e6ff',
          200: '#d5d0ff',
          300: '#b7abff',
          400: '#947bff',
          500: '#7346ff',
          600: '#6221ff',
          700: '#540ff2',
          800: '#450ccb',
          900: '#3a0ca3'
        },
        'b-blue-light': {
          100: '#dce3fd',
          200: '#c2cffb',
          300: '#98b1f8',
          400: '#6789f3',
          500: '#4361ee',
          600: '#2d41e3',
          700: '#252fd0',
          800: '#2428a9',
          900: '#232885'
        },
        'b-cyan': {
          100: '#e1f4fd',
          200: '#bde9fa',
          300: '#83d9f6',
          400: '#4cc9f0',
          500: '#18afdf',
          600: '#0b8dbe',
          700: '#0a719a',
          800: '#0d5f7f',
          900: '#114f69'
        }
      }
    }
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ]
}
