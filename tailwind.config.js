module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      spacing: {
        '128': '32rem', 
      },
      fontFamily: {
        'martel-sans': ['Martel Sans', 'sans-serif'],
      },
      colors: {
        'custom-taupe': '#887C68',
      },
      fontSize: {
        '28': '28px',
      },
      boxShadow: {
        'custom': '17px 12px 60px 0px rgba(0, 0, 0, 0.25)',
      },
      transitionProperty: {
        'scale': 'transform',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}