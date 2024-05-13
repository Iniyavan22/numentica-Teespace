import { Visibility } from "@mui/icons-material";
import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "login_bg": "rgb(239,239,239)",
        "root-page-text": "#7E7E7E",
        "primary-color": "#2EBB77",
      },
      gridTemplateColumns: {
        'blog-grid': 'repeat(1, minmax(0, 0.2fr))',
        "aside-grid": 'repeat(2, minmax(700px, 1fr))',
      },
      screens: {
        '2xl': { 'max': '1535px','min': '1279px'  },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'max': '1279px','min': '1024px'  },
        // => @media (max-width: 1279px) { ... }

        'lg': { 'max': '1024px','min': '768px' },
        // => @media (max-width: 1023px) { ... }

        'md': { 'max': '768px','min': '640px'  },
        // => @media (max-width: 767px) { ... }

        'sm': { 'max': '639px','min': '0px'  },
        // => @media (max-width: 639px) { ... }
      },
      transform: ['hover', 'focus', 'active', 'group-hover'],
      keyframes: {
        wiggle: {
          '0%,': { transform: 'rotate(30deg)' },
          '100% ': { transform: 'rotate(60deg);' },

        },
        header:{
          '0%':{
            transform: 'rotate(180deg)',
            opacity :'0'

          },
 
          '100%': {
            transform: 'rotate(360deg)',
            opacity:'1'
          },
        },
        rotate180:{
          '0%':{
            transform: 'rotate(0deg)',

          },
 
          '100%': {
            transform: 'rotate(360deg)',
    
          },
        }
      },
      animation: {
        wiggle: 'wiggle 5s ease-in-out ',
        rotate180 :'rotate180 10s linear infinite'
      },
      boxShadow:{
        highlight:'2px 1px 2px 10px #3b82f6;'
      }
    },

  },
  plugins: [],
};
export default config;
