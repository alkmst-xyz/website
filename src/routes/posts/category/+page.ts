/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	// non-unique list of all categories
	const allCategories = posts.map((post) => post.meta.categories).flat();
	const categories = [...new Set(allCategories)];

	return {
		categories
	};
}
