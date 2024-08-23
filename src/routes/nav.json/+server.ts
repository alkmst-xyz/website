import { get_index, get_index_2 } from "$lib/server/content";
import { json } from "@sveltejs/kit";
import { type NavigationLink2, type PostStub } from "$lib/server/types";

export const prerender = true;

export const GET = async () => {
  return json(await get_nav_list());
};

async function get_nav_list(): Promise<PostStub[]> {
  return await get_index_2();
}
