import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { MdMeta } from '../../../api/content/types';

export const load = (async ({ params, fetch }) => {
  const response = await fetch('/api/content');
  if (!response.ok) {
    throw error(400, 'error loading data from endpoint');
  }

  const result = (await response.json()) as MdMeta[];

  return {
    posts: result.filter((x) => x.tags.includes(params.slug)),
    tag: params.slug
  };
}) satisfies PageServerLoad;
