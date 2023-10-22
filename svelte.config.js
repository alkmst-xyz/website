import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { defineMDSveXConfig, mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import relativeImages from 'mdsvex-relative-images';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = defineMDSveXConfig({
  extensions: ['.md'],
  smartypants: true,
  remarkPlugins: [relativeImages],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: 'append'
      }
    ]
  ]
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
