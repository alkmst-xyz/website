import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import { presetUno } from 'unocss';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		UnoCSS({
			extractors: [extractorSvelte],
			presets: [presetUno()]
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
