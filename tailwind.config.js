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
          cream: '#FFF8E7',
          sand: '#F5EBD2',
          red: '#E53935',
          'red-dark': '#B71C1C',
          blue: '#006CB7',
          'blue-dark': '#004B80',
          yellow: '#FFD500',
          'yellow-dark': '#C6A700',
          green: '#00852B',
          'green-dark': '#00581C',
          orange: '#FF8C00',
          text: '#252525',
          dark: '#1C1917',
          card: '#FFFFFF',
          border: '#E8DCC4',
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

