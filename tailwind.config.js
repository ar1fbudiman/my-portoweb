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
        secondary: "#64748b",
        dark: "#0f172a",
        facebook: "#1877F2",
        twitter: "#1DA1F2",
        instagram: "#E4405F",
        linkedin: "#0A66C2",
        github: "#181717",
        gitlab: "#FCA121",
      },
      screen: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
