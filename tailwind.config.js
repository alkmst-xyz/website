module.exports = {
  content: ["./src/*.{html,njk}", "./src/**/*.{html,njk}"],
  theme: {
    colors: {
      lightBg: "#fffffe",
      lightHeadline: "#2b2c34",
      lightParagraph: "#2b2c34",
      lightButton: "#6246ea",
      lightButtonText: "#fffffe",
      lightStroke: "#2b2c34",
      lightHighlight: "#6246ea",
      lightMain: "#fffffe",
      lightSecondary: "#d1d1e9",
      lightTertiary: "#e45858",
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.lightHighlight"),
            "--tw-prose-body": theme("colors.lightHighlight"),
            "--tw-prose-headings": theme("colors.lightHighlight"),
            "--tw-prose-lead": theme("colors.lightHighlight"),
            "--tw-prose-links": theme("colors.lightHighlight"),
            "--tw-prose-bold": theme("colors.lightHighlight"),
            "--tw-prose-counters": theme("colors.lightHighlight"),
            "--tw-prose-bullets": theme("colors.lightHighlight"),
            "--tw-prose-hr": theme("colors.lightHighlight"),
            "--tw-prose-quotes": theme("colors.lightHighlight"),
            "--tw-prose-quote-borders": theme("colors.lightHighlight"),
            "--tw-prose-captions": theme("colors.lightHighlight"),
            "--tw-prose-code": theme("colors.lightHighlight"),
            "--tw-prose-pre-code": theme("colors.lightHighlight"),
            "--tw-prose-pre-bg": theme("colors.lightHighlight"),
            "--tw-prose-th-borders": theme("colors.lightHighlight"),
            "--tw-prose-td-borders": theme("colors.lightHighlight"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
