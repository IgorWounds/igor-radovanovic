module.exports = {
  content: ["./index.html", "./privacy.html", "./terms.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        mono: [
          '"SF Mono"',
          '"Fira Code"',
          '"Fira Mono"',
          "Roboto Mono",
          "monospace",
        ],
      },
      colors: {
        navy: {
          950: "#020c1b",
          900: "#0a192f",
          800: "#112240",
          700: "#172a45",
        },
        slate: {
          400: "#8892b0",
          300: "#a8b2d1",
          200: "#ccd6f6",
        },
        accent: "#00f5c4",
      },
      boxShadow: {
        glow: "0 0 15px 0px rgba(0, 245, 196, 0.3)",
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
    },
  },
  plugins: [],
};
