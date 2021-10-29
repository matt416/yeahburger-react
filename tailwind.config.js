module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight:{
        10: "2.5rem",
        "50vh": "50vh"
      },
      colors: {
        yellow: {
          500: "#FCD900",
        },
        beige : {
          100 : "#F7F6F2",
        },
        black: "#0D0B00"
      },
      gridTemplateColumns: {
        "1-2" : "1fr 2fr"
      },
    },
  },
  variants: {
    extend: {
      // maxWidth: ["responsive"],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}

