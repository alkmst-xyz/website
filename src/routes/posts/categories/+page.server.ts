import type { PageServerLoad } from './$types';
import { getAllMetadata } from '$lib/server/posts';

const allMetadata = await getAllMetadata();
const allCategories = allMetadata.map((x) => x.category);
const uniqueCategories = [...new Set(allCategories)];

export const load = (({}) => {
	return {
		categories: uniqueCategories
	};
}) satisfies PageServerLoad;
