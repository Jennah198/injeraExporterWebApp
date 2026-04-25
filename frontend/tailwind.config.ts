import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#C8531A',
          light: '#E8744A',
          dark: '#A03F12',
        },
        forest: {
          DEFAULT: '#2D5016',
          light: '#3D6B1E',
          dark: '#1E3610',
        },
        gold: {
          DEFAULT: '#F5C842',
          light: '#FAD96E',
          dark: '#D4A520',
        },
        linen: {
          DEFAULT: '#FAF7F2',
          dark: '#F0EBE1',
        },
        espresso: {
          DEFAULT: '#1A1208',
          light: '#2C1F0D',
        },
        warmBrown: '#2C1A0E',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-lato)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        grain: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out forwards',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
