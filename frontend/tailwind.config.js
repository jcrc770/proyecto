/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      colorWhite:'#FFF',
      colorSecondary: '#3563E9',
      colorBody: '#F6F7F9',
      colorStar: '#FBAD39',
      colorStarBorder: '#90A3BF',
      colorHeart: '#ED3F3F',
      colorTitle: '#1A202C', 
      colorSubTitle: '#717171',
      colorHeaderIcons: '#596780',
      colorGray: '#90A3BF',
      colorLupa: '#596780',
      colorBorderSearch: '#E7EEF6',
      colorCard: '#54A6FF',
    },
    extend: {
      fontFamily:{
        inter:['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

