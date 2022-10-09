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
            color: theme("colors.lightParagraph"),
            // "--tw-prose-body": theme("colors.lightHighlight"), <remove>
            "--tw-prose-headings": theme("colors.lightHighlight"),
            // "--tw-prose-lead": theme("colors.lightHighlight"), <remove>
            "--tw-prose-links": theme("colors.lightHighlight"),
            "--tw-prose-counters": theme("colors.lightHighlight"),
            "--tw-prose-bullets": theme("colors.lightHighlight"),
            "--tw-prose-hr": theme("colors.lightSecondary"),
            "--tw-prose-quotes": theme("colors.lightParagraph"),
            "--tw-prose-quote-borders": theme("colors.lightSecondary"),
            "--tw-prose-captions": theme("colors.lightParagraph"),
            "--tw-prose-code": theme("colors.lightParagraph"),
            "--tw-prose-pre-code": theme("colors.lightSecondary"),
            "--tw-prose-pre-bg": theme("colors.lightParagraph"),
            "--tw-prose-th-borders": theme("colors.lightSecondary"),
            "--tw-prose-td-borders": theme("colors.lightSecondary"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
