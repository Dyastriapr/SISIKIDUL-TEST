// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // "custom-Primary": "#873ED5",
        "custom-Primary": "#4B7CD6",
        "custom-black": "#323254",
        "custom-darkGrey": "#777777",
        "custom-Grey": "#999999",
        "custom-LightGrey": "#DDDDDD",
        "custom-LightGrey2": "#F0F0F0",
        "custom-White": "FFFFFF",
        "custom-BorderColor": "DDDDDD",
        // 'gradient-Primary': 'linear-gradient(to bottom right, #8B3EF5, #A86AFD, #C375EF)',
        'gradient-Primary': 'linear-gradient(to bottom right, #4B7CD6, #6899F4)',
         
      },
      fontSize: {
        Title: "48px",
        SubTitle: "28px",
      },
      backgroundImage: {
        'gradient-Primary': 'linear-gradient(to bottom right, #4B7CD6, #6899F4)',
        // 'gradient-Primary': 'linear-gradient(to bottom right, #8B3EF5, #A86AFD, #C375EF)',
        "custom-Primary": "#873ED5",
      },
      screens: {
        'sm': '640px', // Atur breakpoint untuk mobile (contoh: layar berukuran minimal 640px)
        'md': '768px', // Atur breakpoint untuk tablet (contoh: layar berukuran minimal 768px)
        'lg': '1024px', // Atur breakpoint untuk desktop (contoh: layar berukuran minimal 1024px)
        'xl': '1280px', // Atur breakpoint untuk layar besar (contoh: layar berukuran minimal 1280px)
      },
    },
  },
  plugins: [],
};
