/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Override base font size for compact UI
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px - UI Base
      'base': ['0.875rem', { lineHeight: '1.25rem' }], // 14px - Default
      'lg': ['1rem', { lineHeight: '1.5rem' }],        // 16px
      'xl': ['1.125rem', { lineHeight: '1.75rem' }],   // 18px
      '2xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
      '3xl': ['1.5rem', { lineHeight: '2rem' }],       // 24px - H1
      '4xl': ['1.875rem', { lineHeight: '2.25rem' }],  // 30px
      '5xl': ['2.25rem', { lineHeight: '2.5rem' }],    // 36px
    },
    extend: {
      // trafficdesign Brand Colors
      colors: {
        brand: {
          primary: '#00AFCE',
          'primary-hover': '#009AA8',
          'primary-active': '#008494',
          'primary-light': '#E5F8FA',
          dark: '#1d1d1d',
          'dark-hover': '#0a0a0a',
          light: '#E5F2F3',
          'light-hover': '#D5E8E9',
        },
        // Semantic Colors for UI States
        ui: {
          success: '#22C55E',
          'success-light': '#DCFCE7',
          'success-dark': '#16A34A',
          warning: '#F59E0B',
          'warning-light': '#FEF3C7',
          'warning-dark': '#D97706',
          error: '#EF4444',
          'error-light': '#FEE2E2',
          'error-dark': '#DC2626',
          info: '#3B82F6',
          'info-light': '#DBEAFE',
          'info-dark': '#2563EB',
        },
        // Neutral Gray Palette for UI
        surface: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      // System Font Stack
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'SF Mono',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
      },
      // Compact Spacing Scale
      spacing: {
        '0.5': '0.125rem',  // 2px
        '1.5': '0.375rem',  // 6px
        '2.5': '0.625rem',  // 10px
        '3.5': '0.875rem',  // 14px
        '4.5': '1.125rem',  // 18px
      },
      // Professional Border Radius
      borderRadius: {
        'sm': '0.25rem',    // 4px
        'DEFAULT': '0.375rem', // 6px
        'md': '0.375rem',   // 6px
        'lg': '0.5rem',     // 8px
        'xl': '0.75rem',    // 12px
      },
      // Box Shadows for Depth
      boxShadow: {
        'tool': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'tool-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'tool-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'dropdown': '0 4px 12px rgb(0 0 0 / 0.15)',
        'modal': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      // Animation Durations
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
      },
      // Focus Ring
      ringColor: {
        DEFAULT: '#00AFCE',
      },
      ringOffsetWidth: {
        DEFAULT: '2px',
      },
      // Custom Animations
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'fade-out': 'fadeOut 0.2s ease-in',
        'slide-up': 'slideUp 0.2s ease-out',
        'slide-down': 'slideDown 0.2s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'skeleton': 'skeleton 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        skeleton: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
      },
    },
  },
  plugins: [],
}


