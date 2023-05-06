import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { MdsvexEntry } from './types';

// add url, params, etc.
export const GET = (async () => {
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

	// TODO return error if posts dont exist

	// TODO validate if metadata follows a schema
	// if not throw error and skip returning (zod parse)

	// TODO get slug from metadata if defined
	// or use title to get it (zod computed)

	// TODO sort by date

	return json(allPostMeta);
}) satisfies RequestHandler;
