/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const { tags } = params;
	const response = await fetch(`/api/posts`);
	const allPosts = await response.json();

	const posts = allPosts.filter((post) => post.meta.tags.includes(tags));
	// const posts = allPosts;

	// non-unique list of all tags
	// const allTags = posts.map((post) => post.meta.tags).flat();
	// const tags = [...new Set(allTags)]

	return {
		tags,
		posts
	};
}
