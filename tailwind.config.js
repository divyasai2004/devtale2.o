// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'corner-glow': 'cornerGlow 2s ease-in-out infinite alternate',
        'hamburger-glow': 'hamburgerGlow 2s ease-in-out infinite',
        'dropdown-glow': 'dropdownGlow 3s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'matrix-rain': 'matrixRain 10s linear infinite',
        'bug-walk': 'bugWalk 3s ease-in-out infinite',
      },
      keyframes: {
        cornerGlow: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
        hamburgerGlow: {
          '0%, 100%': { boxShadow: '0 0 12px 2px #22d3ee, 0 0 32px 8px #7c3aed55' },
          '50%': { boxShadow: '0 0 20px 4px #22d3ee, 0 0 40px 12px #7c3aed77' },
        },
        dropdownGlow: {
          '0%, 100%': { borderColor: 'rgba(34, 211, 238, 0.4)' },
          '50%': { borderColor: 'rgba(34, 211, 238, 0.8)' },
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(32px, 32px)' },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        bugWalk: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(5deg)' },
          '50%': { transform: 'translateY(-20px) rotate(0deg)' },
          '75%': { transform: 'translateY(-10px) rotate(-5deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};
