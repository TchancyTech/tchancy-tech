module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: { 
    extend: {
      colors: {
        primary: {
          dark: '#1F2A64',
          DEFAULT: '#4A2FAE',
          light: '#7A3CE6',
        },
        accent: {
          cyan: '#2DD4BF',
        },
        background: {
          light: '#F8FAFC',
          card: '#E2E8F0',
        },
        text: {
          primary: '#0F172A',
          secondary: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    } 
  },
  plugins: [],
};
