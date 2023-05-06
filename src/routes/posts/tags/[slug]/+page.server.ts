import { getAllMetadata } from '$lib/server/posts';
import type { PageServerLoad } from './$types';
const allMetadata = await getAllMetadata();

export const load = (async ({ params }) => {
	const allMetadata = await getAllMetadata();
	const allMatchedMetdata = allMetadata.filter((metadata) => metadata.tags.includes(params.slug));

	return {
		allMatchedMetdata
	};
}) satisfies PageServerLoad;
