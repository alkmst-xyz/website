import type { PageLoad } from '../$types';

export const load = (async ({ fetch, params }) => {
	try {
		const { category } = params;

		const response = await fetch(`/api/posts`);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const allPosts = await response.json();
		const posts = allPosts.filter((post) => post.meta.categories.includes(category));

		return { category, posts };
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
}) satisfies PageLoad;
