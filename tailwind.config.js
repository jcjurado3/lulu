/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f5f1eb',
          200: '#e8ddd0',
          300: '#d4c0a8',
          400: '#c19c7d',
          500: '#b3875e',
          600: '#a67b54',
          700: '#8b6347',
          800: '#70503d',
          900: '#5c4233',
        },
        secondary: {
          50: '#fdf4f8',
          100: '#fce7f0',
          200: '#f9d1e2',
          300: '#f4adc8',
          400: '#e8b4cb',
          500: '#d97aa6',
          600: '#c85a89',
          700: '#b23f6f',
          800: '#943559',
          900: '#7d304b',
        },
        accent: {
          50: '#f5f2f6',
          100: '#ede6ed',
          200: '#dcd0dc',
          300: '#c4b0c4',
          400: '#a889a8',
          500: '#8b4b6b',
          600: '#7a4160',
          700: '#6a3854',
          800: '#5a3148',
          900: '#4d2a3d',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        'gopher': ['Playfair Display', 'serif'],
        'idealist': ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};