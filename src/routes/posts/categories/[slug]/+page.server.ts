import { getAllMetadata } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const allMetadata = await getAllMetadata();
	const allMatchedMetdata = allMetadata.filter((metadata) =>
		metadata.category.includes(params.slug)
	);

	return {
		allMatchedMetdata
	};
}) satisfies PageServerLoad;
