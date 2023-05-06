import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { MdsvexEntry, MdBody } from './types';

/**
 * Returns MdMeta[] (array of posts) or MdBody (post data) with 'id' param
 * TODO create another route so that posts meta can be pre-rendered
 */
export const GET = (async ({ url }) => {
	// might not work in build later due vite's loading nature
	const postFiles = import.meta.glob<MdsvexEntry>('./../../../content/*.md');
	const postFilesIterable = Object.entries(postFiles);

	const allPostMeta = await Promise.all(
		postFilesIterable.map(async ([path, resolver]) => {
			const { metadata } = await resolver();

			// https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#how-it-works
			const fileName = path.slice(17, -3);

			return {
				...metadata,
				fileName
			};
		})
	);

	const allPostMetaSorted = allPostMeta.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	// TODO validate if metadata follows a schema
	// if not throw error and skip returning (zod parse)

	// TODO get slug from metadata if defined
	// or use title to get it (zod computed)

	// TODO sort by date

	// get id param
	const id = Number(url.searchParams.get('id') ?? '-1');

	if (isNaN(id) || id > allPostMetaSorted.length - 1) {
		throw error(400, 'id must be a valid post number');
	} else if (id > -1) {
		const postModule = await import(`./../../../content/${allPostMetaSorted[id].fileName}.md`);
		const { html } = postModule.default.render();

		const postBody: MdBody = {
			meta: allPostMetaSorted[id],
			html
		};

		return json(postBody);
	} else {
		return json(allPostMetaSorted);
	}
}) satisfies RequestHandler;
