/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./lib/components/**/*.tsx", "./pages/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-bg": "#212627",
        "dark-fg": "#b8c0d3",
        "light-bg": "#c7cde4",
        "light-fg": "#3b4345",
        link: "#4280b3",
      },
      textDecoration: ["focus-visible"],
      textColor: ["group-focus"],
      outline: ["focus-visible"],
      transitionProperty: ["motion-reduce"],
      typography: ({ theme }) => ({
        xith: {
          css: {
            // Light mode prose colors
            "--tw-prose-body": theme("colors.light-fg"),
            "--tw-prose-headings": theme("colors.light-fg"),
            "--tw-prose-lead": theme("colors.light-fg"),
            "--tw-prose-links": theme("colors.link"),
            "--tw-prose-bold": theme("colors.light-fg"),
            "--tw-prose-counters": theme("colors.light-fg"),
            "--tw-prose-bullets": theme("colors.light-fg"),
            "--tw-prose-hr": theme("colors.light-fg"),
            "--tw-prose-quotes": theme("colors.light-fg"),
            "--tw-prose-quote-borders": theme("colors.light-fg"),
            "--tw-prose-captions": theme("colors.light-fg"),
            "--tw-prose-code": theme("colors.light-fg"),
            "--tw-prose-pre-code": theme("colors.light-fg"),
            "--tw-prose-pre-bg": theme("colors.light-fg"),
            "--tw-prose-th-borders": theme("colors.light-fg"),
            "--tw-prose-td-borders": theme("colors.light-fg"),

            // Dark mode prose colors
            "--tw-prose-invert-body": theme("colors.dark-fg"),
            "--tw-prose-invert-headings": theme("colors.dark-fg"),
            "--tw-prose-invert-lead": theme("colors.dark-fg"),
            "--tw-prose-invert-links": theme("colors.link"),
            "--tw-prose-invert-bold": theme("colors.dark-fg"),
            "--tw-prose-invert-counters": theme("colors.dark-fg"),
            "--tw-prose-invert-bullets": theme("colors.dark-fg"),
            "--tw-prose-invert-hr": theme("colors.dark-fg"),
            "--tw-prose-invert-quotes": theme("colors.dark-fg"),
            "--tw-prose-invert-quote-borders": theme("colors.dark-fg"),
            "--tw-prose-invert-captions": theme("colors.dark-fg"),
            "--tw-prose-invert-code": theme("colors.dark-fg"),
            "--tw-prose-invert-pre-code": theme("colors.dark-fg"),
            "--tw-prose-invert-pre-bg": theme("colors.light-fg"),
            "--tw-prose-invert-th-borders": theme("colors.dark-fg"),
            "--tw-prose-invert-td-borders": theme("colors.dark-fg"),
          },
        },
        DEFAULT: {
          css: {
            a: {
              "border-bottom-width": "1px",
              "text-decoration-line": "none",
              "border-color": theme("colors.link"),
              ".dark &": {
                "border-color": theme("colors.link"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
