import type { PageLoad } from '../$types';

export const load = (async ({ params }) => {
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
}) satisfies PageLoad;
