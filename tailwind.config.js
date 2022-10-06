module.exports = {
  content: ["./src/*.{html,njk}", "./src/**/*.{html,njk}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
