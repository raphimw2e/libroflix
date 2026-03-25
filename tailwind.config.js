export default { 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poltawski Nowy'],
      },
      colors: {
        primary: '#BF2619BF', 
        'off-white-40%': '#ffffff66', 'book-brown': '#4a3728'  
      },
    },
  },
  plugins: [],
}
