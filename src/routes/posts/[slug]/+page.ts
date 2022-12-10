/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, categories, tags } = post.metadata;
	const Content = post.default;

	return {
		title,
		date,
		categories,
		tags,
		Content
	};
}
