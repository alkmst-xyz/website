import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { MdMeta } from "../../api/content/types";

export const load = (async ({ fetch }) => {
  const response = await fetch("/api/content");
  if (!response.ok) {
    throw error(400, "error loading data from endpoint");
  }

  const result = (await response.json()) as MdMeta[];

  const allCategories = result.map((x) => x.category);
  const uniqueCategories = [...new Set(allCategories)];

  return {
    categories: uniqueCategories
  };
}) satisfies PageServerLoad;
