/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#090b10',
        surface: {
          DEFAULT: '#0d111a',
          lighter: '#131926',
          card: 'rgba(16, 22, 36, 0.7)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        brand: {
          blue: '#3b82f6',
          electric: '#2563eb',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          purple: '#a855f7',
        },
        lego: {
          red: '#e3000b',
          'red-dark': '#8f0007',
          blue: '#0055bf',
          'blue-dark': '#003373',
          yellow: '#ffd500',
          'yellow-dark': '#a38200',
          green: '#00852b',
          'green-dark': '#004d19',
          orange: '#ff7e14',
          dark: '#0b0e14',
          card: '#111520',
          plate: '#181e2b',
        }
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        'grid-pattern': "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-spin': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

