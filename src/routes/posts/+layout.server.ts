import type { LayoutServerLoad } from './$types';
import type { MdMeta } from '../api/content/types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/content');

	return {
		posts: (await res.json()) as MdMeta[]
	};
}) satisfies LayoutServerLoad;
