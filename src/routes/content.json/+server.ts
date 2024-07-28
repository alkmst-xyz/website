import { get_index } from '$lib/server/content.js';
import { json } from '@sveltejs/kit';

export interface Block {
  breadcrumbs: string[];
  href: string;
  //   content: string;
  rank: number;
}

export interface Tree {
  breadcrumbs: string[];
  href: string;
  node: Block;
  children: Tree[];
}
export const prerender = true;

export const GET = async () => {
  return json(await content());
};

async function content() {
  const blocks: Block[] = [];

  for (const { chapters } of await get_index()) {
    for (const { exercises } of chapters) {
      for (const { slug, title } of exercises) {
        // const exercise_content = await get_exercise(slug);

        // if (exercise_content) {
        //   exercise_content.markdown = exercise_content.markdown.replace(/(\+\+\+|---|:::)/g, '');

        //   blocks.push({
        //     href: `/tutorial/${slug}`,
        //     breadcrumbs: [title],
        //     content: await plaintext(exercise_content.markdown),
        //     rank: 0
        //   });
        // }

        blocks.push({
          href: `/tutorial/${slug}`,
          breadcrumbs: [title],
          rank: 0
        });
      }
    }
  }

  return { blocks };
}
