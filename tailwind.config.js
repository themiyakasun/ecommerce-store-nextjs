/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgAsh: '#E0E0E0',
      },

      backgroundImage: {
        primaryBg: 'linear-gradient(180deg, #FFF 0%, #FAFAFA 100%);',
      },
    },
  },
  plugins: [],
};
