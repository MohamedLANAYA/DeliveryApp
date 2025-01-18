/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     screens:{
       'xs': '480px',
       'sm': '640px',
       'md': '768px',
       'lg': '1024px',
       'lg2': '900px',
       '2xl': '1536px',
     },
    extend: {
       boxShadow:{
        'dark-blur': '0px 0px 10px  #00000015',
       },
      colors:{
        DimGray:'#747474',
        Darkse:'#262626',
        Fwhite:'#d9d9d9',
        FdBlack:'#323232',
        PopBlack:'#00000090',
        PopWhite:'#808080',
        hrWhite:'#e2e2e2',
        Iwhite:'#eaeaea'
        
      },
      animation:{
         'fade-in':'fadeIn 3s',
      },
      keyframes:{
        fadeIn:{
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}