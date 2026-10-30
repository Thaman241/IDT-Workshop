/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#080b0f',
          900: '#0d1117', // requested deep matte carbon background
          850: '#121820',
          800: '#161e29',
          700: '#212c3d',
        },
        cyber: {
          emerald: '#10b981', // requested crisp neon emerald
          emeraldLight: '#34d399',
          emeraldDark: '#059669',
          emeraldGlow: 'rgba(16, 185, 129, 0.45)',
          lime: '#a3e635',    // requested bright lime accent
          limeLight: '#bef264',
          limeDark: '#65a30d',
          limeGlow: 'rgba(163, 230, 53, 0.45)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'neon-emerald': '0 0 20px -2px rgba(16, 185, 129, 0.4), 0 0 8px -2px rgba(16, 185, 129, 0.3)',
        'neon-emerald-lg': '0 0 35px 2px rgba(16, 185, 129, 0.5), 0 0 15px 0px rgba(16, 185, 129, 0.35)',
        'neon-lime': '0 0 20px -2px rgba(163, 230, 53, 0.45)',
        'cyber-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar-ping': 'radarPing 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        radarPing: {
          '0%': { transform: 'scale(1)', opacity: '0.9' },
          '75%, 100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}

