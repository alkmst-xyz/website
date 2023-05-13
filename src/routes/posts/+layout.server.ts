import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { MdMeta } from '../api/content/types';

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/content');
	if (!response.ok) {
		throw error(400, 'error loading data from endpoint');
	}

	return {
		posts: (await response.json()) as MdMeta[]
	};
}) satisfies LayoutServerLoad;
