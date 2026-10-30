/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#eef2fa', muted: '#93a0b8',
        base: { 950: '#070b14', 900: '#0a101f', 850: '#0e1526', 800: '#131c2e', 700: '#1b2740', 600: '#26334f' }
      },
      fontFamily: {
        sans: ['"Inter"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace']
      },
      boxShadow: {
        glow: '0 0 24px rgba(56,189,248,.25)',
        card: '0 10px 34px rgba(0,0,0,.45)'
      }
    }
  },
  plugins: []
};
