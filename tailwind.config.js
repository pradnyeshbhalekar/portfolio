export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arcade: ["ARCADE", "sans-serif"],
        minecraft: ["Monocraft", "monospace"],
      },
      keyframes: {
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spinSlow 6s linear infinite",
      },
    },
  },
  plugins: [],
};
