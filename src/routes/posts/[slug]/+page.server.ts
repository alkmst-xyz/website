import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { get_exercise_2 } from "$lib/server/content";
// import type { MdBody } from "../../api/content/types";

export const load = (async ({ params }) => {
  // const { links: posts } = await parent();
  // const postId = posts.findIndex((x) => x.slug === params.slug);

  // const response = await fetch(`/api/content/${postId}`);

  const post = await get_exercise_2(params.slug);

  if (!post) {
    error(404, "No such post found.");
  }

  return {
    post
  };
}) satisfies PageServerLoad;
