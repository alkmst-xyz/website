import { dev } from '$app/environment';

// SvelteKit loads some client-side JavaScript to help with navigation and preloading in the background
// Set to false to remove disable this
//
// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// all pages are prerendered
export const prerender = true;
