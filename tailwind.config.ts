import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        suite: ['SUITE', 'sans-serif'],
        jua: ['Jua', 'sans-serif'],
        seoleim: ['SEOLEIMcool', 'sans-serif'],
        hubballi: ['Hubballi', 'sans-serif'],
        DNFBitBitv2: ['DNFBitBitv2', 'sans-serif'],
        moneygraphy: ['Moneygraphy', 'sans-serif'],
      },
      boxShadow: {
        'inner-custom': '0 0 3px 3px #513FA1',
        'inner-button': 'inset 0 4px 6px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        main: '#F5F7FF',
        darkMain: '#090A0D',
        infoCentre: '#E4DECB',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        goTop: {
          '0%': {
            top: '50%',
          },
          '100%': {
            top: '2rem',
          },
        },
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        fadeOut: {
          from: {
            opacity: '1',
          },
          to: {
            opacity: '0',
            display: 'none',
          },
        },
        stampEffect: {
          '0%': { transform: 'scale(2)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        moveTop: 'goTop 1s ease-in-out forwards',
        fadeIn: 'fadeIn .5s ease-in-out forwards',
        fadeOut: 'fadeOut .5s ease-in-out forwards',
        stamp: 'stampEffect 0.5s ease-out',
      },
      transformOrigin: {
        transform: 'translate(-50%, -50%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.position-center': {
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwindcss-animate'),
  ],
};
export default config;
