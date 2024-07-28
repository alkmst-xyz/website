import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load = (async ({ fetch }) => {
  const response = await fetch("/nav.json");
  if (!response.ok) {
    throw error(400, "Error loading data from endpoint");
  }

  return {
    links: await response.json()
  };
}) satisfies LayoutServerLoad;
