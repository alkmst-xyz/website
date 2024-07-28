import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist Sans"', "sans-serif"],
        serif: ['"Petrona Variable"', "serif"],
        mono: ['"Geist Mono"', "monospace"]
      },

      // custom colors
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
        lightTertiary: "#e45858"
      }
    }
  },

  plugins: []
} as Config;
