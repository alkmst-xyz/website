import type { LayoutLoad } from './$types';

export const prerender = true;
export const csr = true;

export const load = (({ url }) => {
  return {
    /**
     * The current path
     */
    path: url.pathname
  };
}) satisfies LayoutLoad;
