import { json } from '@sveltejs/kit';
import { NODE_ENV } from '$env/static/private';
import type { RequestHandler } from './$types';
import type { MdsvexEntry } from './types';

export const prerender = true;

/**
 * Fetch all markdown posts
 */
export const GET: RequestHandler = async () => {
  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#how-it-works
  const mdFiles = import.meta.glob<MdsvexEntry>('./../../../content/*.md');
  const mdFilesIterable = Object.entries(mdFiles);

  const posts = await Promise.all(
    mdFilesIterable.map(async ([path, resolver]) => {
      const { metadata } = await resolver();

      const fileName = path.slice(17, -3);

      return {
        ...metadata,
        fileName
      };
    })
  );

  // filter out draft posts, sort by date
  const postsFiltered = posts
    .filter((post) => {
      if (!post.draft || NODE_ENV === 'development') {
        return post;
      }
    })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  // TODO validate schema (zod parse, and throw friendly error messages)
  // TODO get slug from metadata or use title to get it (zod computed)

  return json(postsFiltered);
};
