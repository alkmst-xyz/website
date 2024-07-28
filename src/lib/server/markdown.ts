import { Marked } from "marked";

export async function transform(markdown: string) {
  const marked = new Marked({});

  return (await marked.parse(markdown)) ?? "";
}
