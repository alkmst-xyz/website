import type { PageServerLoad } from './$types';

export const load = (async ({ parent, params }) => {
	const { allMetadata } = await parent();

	// TODO this returns an array, but it can only be 1
	const metadata = allMetadata.filter((metadata) => metadata.slug === params.slug);

	// https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#how-it-works
	const postModule = await import(`./../../../content/${metadata[0].fileName}.md`);
	const { html } = postModule.default.render();

	return {
		content: html
	};
}) satisfies PageServerLoad;
