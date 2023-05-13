import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { MdMeta } from '../../api/content/types';

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/content');
	if (!response.ok) {
		throw error(400, 'error loading data from endpoint');
	}

	const result = (await response.json()) as MdMeta[];

	const allTags = result.map((x) => x.tags).flat();
	const uniqueTags = [...new Set(allTags)];

	return {
		tags: uniqueTags
	};
}) satisfies PageServerLoad;
