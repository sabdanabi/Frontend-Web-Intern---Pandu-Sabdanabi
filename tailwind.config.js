/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1391AD',
        bgColor: '#03191d',
        gradientFrom: '#24FFDD',
        gradientTo: '#1391AD',
        bgFooter: '#1AB9BF',
        acent: '#F4CD00'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      screens: {
        'custom-screen': '425px', 
        'xs-screen' : '320px'
      },
    },
    fontFamily: {
      uncial: ['Uncial Antiqua'],
      poppins: ['Poppins'],
      poppinsItalic: ['poppins-thin-italic'],
      serif: ['PT Serif']
    }
  },
  plugins: [],
}