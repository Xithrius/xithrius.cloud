export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
    "@nuxtjs/color-mode",
  ],

  app: {
    pageTransition: { name: "page", mode: "out-in", duration: 150 },
    head: {
      link: [{ rel: "icon", href: "/favicon.ico" }],
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased dark:bg-zinc-900 min-h-screen",
      },
      viewport: "width=device-width, initial-scale=1",
    },
  },

  content: {
    highlight: {
      theme: "github-dark",
    },
  },

  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
      "Turret+Road": [200],
      "JetBrains+Mono": [200],
    },
    download: true,
  },

  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },

  mdc: {
    highlight: {
      langs: ["toml", "cpp", "bash", "sh", "properties", "json", "yaml", "lua"],
    },
  },
});
