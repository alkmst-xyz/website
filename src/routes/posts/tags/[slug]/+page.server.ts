import type { PageServerLoad } from './$types';
import type { MdMeta } from '../../api/content/types';

export const load = (async ({ params, fetch }) => {
	const response = await fetch('/api/content');
	const result = (await response.json()) as MdMeta[];

	const allMatchedMetdata = result.filter((x) => x.tags.includes(params.slug));

	return {
		allMatchedMetdata
	};
}) satisfies PageServerLoad;
