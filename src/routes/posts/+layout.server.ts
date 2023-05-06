import type { LayoutServerLoad } from './$types';
import { getAllMetadata } from '$lib/server/posts';

export const load = (async ({}) => {
	return {
		allMetadata: getAllMetadata()
	};
}) satisfies LayoutServerLoad;
