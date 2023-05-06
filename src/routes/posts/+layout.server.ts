import type { LayoutServerLoad } from './$types';
// import { getAllMetadata } from '$lib/server/posts';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/content');
	const allMetadata = await res.json();
	return {
		allMetadata
	};
}) satisfies LayoutServerLoad;
