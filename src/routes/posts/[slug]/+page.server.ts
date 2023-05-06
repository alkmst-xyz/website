import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { MdBody } from '../../api/content/types';

export const load = (async ({ parent, params, fetch }) => {
	const { posts } = await parent();
	const postId = posts.findIndex((x) => x.slug === params.slug);

	const response = await fetch(`/api/content/${postId}`);
	if (!response.ok) {
		throw error(400, 'error loading data from endpoint');
	}

	return {
		postBody: (await response.json()) as MdBody
	};
}) satisfies PageServerLoad;
