import type { Load } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

// all pages are prerendered
export const prerender = true;

// set csr=true to allow client side routing.
// Necessary for page transitions and link prefetching.
// change to false if you prefer ordinary routing without JS
// or to dev for HMR in development
// import { dev } from '$app/environment';
// export const csr = dev;
export const csr = true;

export const load: Load = async ({ url }) => {
	try {
		return {
			path: url.pathname
		};
	} catch (err) {
		throw error(500, err);
	}
};
