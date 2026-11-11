/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F6F8FC',
        surface: '#FFFFFF',
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1', // rgb(204, 251, 241) - User Soft Background
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488', // rgb(13, 148, 136) - User Primary / Text
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          950: '#042F2E',
        },
        brand: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488', // Primary Teal
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          accent: '#0D9488',
        },
        slate: {
          850: '#151F32',
          950: '#0B1120',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(13, 148, 136, 0.05)',
        'glass-hover': '0 14px 40px -4px rgba(13, 148, 136, 0.10)',
        'glass-card': '0 12px 36px 0 rgba(15, 23, 42, 0.04), 0 2px 8px 0 rgba(15, 23, 42, 0.02)',
        'glass-elevated': '0 20px 50px -10px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      }
    },
  },
  plugins: [],
}
