module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
    colors: {
      blue: {
        primary: "#3252df",
        dark: "#152C5B",
      },
      gray: {
        light: "#B0B0B0",
      },
      white: "#fff",
      pink: "#FF498B",
      transparent: {
        start: "rgba(0, 0, 0, 0)",
        end: "rgba(0, 0, 0, .60)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
