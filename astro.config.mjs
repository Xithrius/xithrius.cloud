// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
});

// export default defineConfig({
// 	site: siteConfig.site,
// 	markdown: {
// 		remarkPlugins: [remarkReadingTime],
// 		drafts: true,
// 		shikiConfig: {
// 			theme: 'material-theme-palenight',
// 			wrap: true
// 		}
// 	},
// 	integrations: [
// 		mdx({
// 			syntaxHighlight: 'shiki',
// 			shikiConfig: {
// 				experimentalThemes: {
// 					light: 'vitesse-light',
// 					dark: 'material-theme-palenight',
// 				  },
// 				wrap: true
// 			},
// 			drafts: true
// 		}),
// 		sitemap(),
// 		tailwind()
// 	]
// })
