import type { LayoutLoad } from './$types';

// set all pages to prerendered
export const prerender = true;

// JS is needed on the client for page transitions and link prefetching.
// change to false to ship without any JS
// or to dev for HMR in development
// import { dev } from '$app/environment';
// export const csr = dev;
export const csr = true;

export const load = (({ url }) => {
	// import { error } from '@sveltejs/kit';
	// try {
	// 	return {
	// 		/**
	// 		 * The current path
	// 		 */
	// 		path: url.pathname
	// 	};
	// } catch (err) {
	// 	throw error(500, err);
	// }

	return {
		/**
		 * The current path
		 */
		path: url.pathname
	};
}) satisfies LayoutLoad;
