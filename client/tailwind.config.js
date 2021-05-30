module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "serif"],
      },
    },
  },
  variants: {
    extend: {
      margin: ["group-hover"],
      letterSpacing: ["hover"],
    },
  },
  plugins: [],
};
