import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	try {
		const { tags } = params;
		const response = await fetch(`/api/posts`);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const allPosts = await response.json();

		const posts = allPosts.filter((post) => post.meta.tags.includes(tags));
		// const posts = allPosts;

		// non-unique list of all tags
		// const allTags = posts.map((post) => post.meta.tags).flat();
		// const tags = [...new Set(allTags)]

		return { tags, posts };
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
}) satisfies PageLoad;
