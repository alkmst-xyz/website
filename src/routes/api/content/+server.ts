import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { MdsvexEntry } from './types';

export const prerender = true;

/**
 * Fetch all markdown posts
 */
export const GET: RequestHandler = async () => {
	// https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#how-it-works
	const postFiles = import.meta.glob<MdsvexEntry>('./../../../content/*.md');
	const postFilesIterable = Object.entries(postFiles);

	const allPostMeta = await Promise.all(
		postFilesIterable.map(async ([path, resolver]) => {
			const { metadata } = await resolver();

			const fileName = path.slice(17, -3);

			return {
				...metadata,
				fileName
			};
		})
	);

	// TODO maybe sorting is not needed as there might be more posts client side
	// sort by date
	const allPostMetaSorted = allPostMeta.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	// TODO validate if metadata follows a schema
	// if not throw error and skip returning (zod parse)

	// TODO get slug from metadata if defined
	// or use title to get it (zod computed)

	return json(allPostMetaSorted);
};
