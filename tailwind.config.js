/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground, #efeee9)',
        background: 'var(--background, #000000)',
        border: 'var(--border, rgba(255, 255, 255, 0.15))',
        accent: {
          DEFAULT: 'var(--accent, rgba(255, 255, 255, 0.08))',
          hover: 'var(--accent-hover, rgba(255, 255, 255, 0.16))',
        },
        ring: 'var(--ring, #d4af37)',
        cream: {
          DEFAULT: 'rgb(var(--cream-rgb, 239 238 233) / <alpha-value>)',
          light: 'rgb(var(--cream-light-rgb, 247 246 242) / <alpha-value>)',
          muted: 'rgb(var(--cream-muted-rgb, 158 155 147) / <alpha-value>)',
          dark: 'rgb(var(--cream-dark-rgb, 211 209 199) / <alpha-value>)',
        },
        gold: {
          DEFAULT: 'var(--gold, #d4af37)',
          subtle: 'var(--gold-subtle, #c8aa6e)',
          glow: 'var(--gold-glow, rgba(212, 175, 55, 0.2))',
        },
        glass: {
          surface: 'var(--glass-surface, rgba(255, 255, 255, 0.025))',
          'surface-hover': 'var(--glass-surface-hover, rgba(255, 255, 255, 0.045))',
          border: 'var(--glass-border, rgba(255, 255, 255, 0.10))',
          'border-hover': 'var(--glass-border-hover, rgba(255, 255, 255, 0.28))',
        },
        surface: 'var(--card-bg, rgba(255, 255, 255, 0.022))',
        card: 'var(--card-bg, rgba(255, 255, 255, 0.022))',
        muted: {
          DEFAULT: 'var(--accent, rgba(255, 255, 255, 0.08))',
          foreground: 'var(--muted-foreground, #9e9b93)',
        },
      },
      zIndex: {
        '1': '1',
        '5': '5',
      },
      screens: {
        'xs': '380px',
      },
      spacing: {
        '22': '5.5rem',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'Georgia', 'serif'],
        forum: ['Forum', 'Georgia', 'serif'],
        hn: ['"Helvetica Neue ME"', '"Plus Jakarta Sans"', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['"Helvetica Neue ME"', '"Plus Jakarta Sans"', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Cinzel', '"Helvetica Neue ME"', '"Plus Jakarta Sans"', 'Georgia', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
        alex: ['"Alex Brush"', 'cursive'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        'geist-pixel': ['"Geist Pixel"', 'sans-serif'],
      },
      aspectRatio: {
        '16/10': '16 / 10',
      },
      boxShadow: {
        'neumorphic': '0 8px 30px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'neumorphic-hover': '0 12px 35px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.28)',
        'neumorphic-active': 'inset 0 3px 6px rgba(0, 0, 0, 0.6)',
        'glass-glow': '0 0 35px -5px rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
