import type { PageServerLoad } from './$types';
import type { MdBody } from '../../api/content/types';

export const load = (async ({ parent, params, fetch }) => {
	const { posts } = await parent();

	// find index of file that matches the slug
	const postId = posts.findIndex((x) => x.slug === params.slug);

	const res = await fetch(`/api/content/${postId}`);

	return {
		postBody: (await res.json()) as MdBody
	};
}) satisfies PageServerLoad;
