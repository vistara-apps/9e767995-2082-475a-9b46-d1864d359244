/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(220, 15%, 98%)',
        error: 'hsl(0, 70%, 50%)',
        accent: 'hsl(170, 70%, 50%)',
        primary: 'hsl(210, 70%, 50%)',
        success: 'hsl(130, 70%, 50%)',
        surface: 'hsl(0, 0%, 100%)',
        'gradient-start': 'hsl(210, 80%, 60%)',
        'gradient-end': 'hsl(170, 70%, 60%)',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
      boxShadow: {
        card: '0 2px 6px rgba(0,0,0,0.1)',
        modal: '0 10px 30px rgba(0,0,0,0.15)',
      },
      animation: {
        'pulse-record': 'pulse 1.5s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, hsl(210, 80%, 60%), hsl(170, 70%, 60%))',
      },
    },
  },
  plugins: [],
}
