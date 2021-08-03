module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        omah: "250px",
        call: "180px"
      },
      minWidth: {
        call: "196px",
        omah: "265px",
      },
      maxWidth: {
        player: "200px",
        omah: "400px"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
