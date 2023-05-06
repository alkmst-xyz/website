import type { PageServerLoad } from './$types';
import { getAllMetadata } from '$lib/server/posts';

const allMetadata = await getAllMetadata();
const allTags = allMetadata.map((x) => x.tags).flat();
const uniqueTags = [...new Set(allTags)];

// TODO instead of returning the exact unique tag,
// return a pojo with "name" and "count"
// can be used to size up or down the tag indicator

export const load = (({}) => {
	return {
		tags: uniqueTags
	};
}) satisfies PageServerLoad;
