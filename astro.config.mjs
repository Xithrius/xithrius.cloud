// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://xithrius.cloud',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Commit Mono',
			cssVariable: '--font-commit-mono',
			fallbacks: ['monospace'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/CommitMono-400-Regular.otf'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'Turret Road',
			cssVariable: '--font-turret-road',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/turretroad-extralight.ttf'],
						weight: 200,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
