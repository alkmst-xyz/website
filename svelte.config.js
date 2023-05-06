import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { defineMDSveXConfig, mdsvex } from 'mdsvex';
// import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = defineMDSveXConfig({
	extensions: ['.md'],
	smartypants: true,
	layout: {
		post: 'src/lib/layouts/post.svelte'
	},
	remarkPlugins: [],
	rehypePlugins: []
	// rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter()
	}
};

export default config;
