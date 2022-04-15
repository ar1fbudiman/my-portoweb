module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      staatliches: ["Staatliches"],
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#3b82f6",
        dark: "#0f172a",
      },
      screen: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
