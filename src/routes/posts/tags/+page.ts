/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	// non-unique list of all tags
	const allTags = posts.map((post) => post.meta.tags).flat();
	const tags = [...new Set(allTags)];

	return {
		tags
	};
}
