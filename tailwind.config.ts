import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-custom': '0 0 3px 3px #513FA1',
      },
      colors: {
        main: '#F5F7FF',
        darkMain: '#090A0D',
        infoCentre: '#E4DECB',
      },
      keyframes: {
        goTop: {
          '0%': { top: '50%' },
          '100%': { top: '2rem' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0', display: 'none' },
        },
      },
      animation: {
        moveTop: 'goTop 1s ease-in-out forwards',
        fadeIn: 'fadeIn .5s ease-in-out forwards',
        fadeOut: 'fadeOut .5s ease-in-out forwards',
      },
      transformOrigin: {
        transform: 'translate(-50%, -50%)',
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
  ],
};
export default config;
