import type { PageServerLoad } from './$types';
import type { MdMeta } from '../../../api/content/types';

export const load = (async ({ params, fetch }) => {
	const response = await fetch('/api/content');
	const result = (await response.json()) as MdMeta[];

	return {
		posts: result.filter((x) => x.category === params.slug)
	};
}) satisfies PageServerLoad;
