/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './dental-website.tsx',
  ],
  theme: {
    extend: {
      colors: {
        dental: {
          blue: '#2563eb',
          'blue-light': '#3b82f6',
          'blue-dark': '#1d4ed8',
          purple: '#7c3aed',
          'purple-light': '#8b5cf6',
          'purple-dark': '#6d28d9',
          pink: '#ec4899',
          'pink-light': '#f472b6',
          'pink-dark': '#db2777',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'fadeIn': 'fadeIn 0.8s ease-out forwards',
        'slideInRight': 'slideInRight 0.8s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.8s ease-out forwards',
        'slideDown': 'slideDown 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float-delayed 4s ease-in-out infinite',
        'float-slow': 'float-slow 5s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      animationDelay: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
        '2000': '2000ms',
        '4000': '4000ms',
      },
      keyframes: {
        blob: {
          '0%, 100%': { 
            transform: 'translate(0px, 0px) scale(1)' 
          },
          '33%': { 
            transform: 'translate(30px, -50px) scale(1.1)' 
          },
          '66%': { 
            transform: 'translate(-20px, 20px) scale(0.9)' 
          },
        },
        fadeInUp: {
          'from': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          'to': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        fadeIn: {
          'from': { 
            opacity: '0' 
          },
          'to': { 
            opacity: '1' 
          },
        },
        slideInRight: {
          'from': { 
            opacity: '0', 
            transform: 'translateX(50px)' 
          },
          'to': { 
            opacity: '1', 
            transform: 'translateX(0)' 
          },
        },
        slideInLeft: {
          'from': { 
            opacity: '0', 
            transform: 'translateX(-50px)' 
          },
          'to': { 
            opacity: '1', 
            transform: 'translateX(0)' 
          },
        },
        slideDown: {
          'from': { 
            opacity: '0', 
            transform: 'translateY(-100%)' 
          },
          'to': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px)' 
          },
          '50%': { 
            transform: 'translateY(-20px) translateX(10px)' 
          },
        },
        'float-delayed': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px)' 
          },
          '50%': { 
            transform: 'translateY(-25px) translateX(-10px)' 
          },
        },
        'float-slow': {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)' 
          },
          '50%': { 
            transform: 'translateY(-15px) scale(1.1)' 
          },
        },
        gradient: {
          '0%, 100%': { 
            'background-position': '0% 50%' 
          },
          '50%': { 
            'background-position': '100% 50%' 
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
