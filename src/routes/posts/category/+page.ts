import type { PageLoad } from '../$types';

export const load = (async ({ fetch }) => {
	try {
		const response = await fetch(`/api/posts`);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const posts = await response.json();

		// non-unique list of all categories
		const allCategories = posts.map((post) => post.meta.categories).flat();
		const categories = [...new Set(allCategories)];

		return { categories };
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
}) satisfies PageLoad;
