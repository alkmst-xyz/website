import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	try {
		const response = await fetch(`/api/posts`);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const posts = await response.json();

		return { posts };
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
}) satisfies PageLoad;
