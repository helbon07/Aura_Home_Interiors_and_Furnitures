/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          'bg-primary': '#F7F3EB',
          'bg-secondary': '#FFFEFC',
          'bg-card': '#FAF7F2',
          'text-primary': '#352719',
          'text-secondary': '#77716A',
          'text-muted': '#969089',
          'walnut': '#4A3323',
          'walnut-dark': '#322116',
          'walnut-light': '#5E412D',
          'gold': '#B58A52',
          'gold-light': '#D5B98D',
          'gold-dark': '#9A723D',
          'gold-soft': '#F5EFE6',
          'olive': '#72745B',
          'olive-light': '#8C8E73',
          'beige': '#E9DFD0',
          'beige-light': '#F4EFE8',
          'border': '#E4DACB',
          'border-light': '#EFE9DE'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'brand': '0.22em',
        'widest-xl': '0.3em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(74, 51, 35, 0.05)',
        'luxury': '0 20px 40px -15px rgba(53, 39, 25, 0.08), 0 0 1px 1px rgba(181, 138, 82, 0.15)',
        'card-hover': '0 25px 50px -12px rgba(53, 39, 25, 0.12)',
        'gold-glow': '0 0 25px rgba(181, 138, 82, 0.25)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      }
    },
  },
  plugins: [],
}

