import type { Config } from "tailwindcss";
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["JetBrains Mono", "Turrent Road"],
      mono: ["JetBrains Mono", "Turrent Road"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
} satisfies Config;
