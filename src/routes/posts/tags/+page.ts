import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	try {
		const response = await fetch(`/api/posts`);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const posts = await response.json();

		// non-unique list of all tags
		const allTags = posts.map((post) => post.meta.tags).flat();
		const tags = [...new Set(allTags)];

		return { tags };
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
}) satisfies PageLoad;
