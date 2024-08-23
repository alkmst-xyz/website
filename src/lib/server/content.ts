import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import glob from "tiny-glob";

import { transform, posixify } from "./markdown.js";
import type {
  Exercise,
  Exercise2,
  PartStub,
  PostStub,
  ChapterStub,
  DirectoryStub,
  FileStub
} from "./types";

const text_files = new Set([
  ".svelte",
  ".txt",
  ".json",
  ".js",
  ".ts",
  ".css",
  ".svg",
  ".html",
  ".md",
  ".env"
]);

const excluded = new Set([".DS_Store", ".gitkeep", ".svelte-kit", "package-lock.json"]);

async function json(file: string) {
  return JSON.parse(await readFile(file, "utf-8"));
}

function is_valid(dir: string) {
  return /^\d{2}-/.test(dir);
}
function is_md_file(file: string) {
  return file.endsWith(".md");
}

async function exists(path: string) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function exists_readme(part: string, chapter: string, dir: string) {
  return exists(`content/tutorial/${part}/${chapter}/${dir}/README.md`);
}

export async function get_index(): Promise<PartStub[]> {
  const parts = (await readdir("content/tutorial")).filter(is_valid).map(posixify);

  const final_data: PartStub[] = [];

  for (const part of parts) {
    const chapters = (await readdir(`content/tutorial/${part}`)).filter(is_valid).map(posixify);

    const obj: PartStub = {
      slug: part,
      title: (await json(`content/tutorial/${part}/meta.json`)).title,
      chapters: []
    };

    for (const chapter of chapters) {
      let exercises = await readdir(`content/tutorial/${part}/${chapter}`);
      for (const exercise of exercises) {
        if (!(is_valid(exercise) && (await exists_readme(part, chapter, exercise)))) {
          exercises = exercises.filter((e) => e !== exercise);
        }
      }
      exercises = exercises.map(posixify);

      const chapters_obj: ChapterStub = {
        slug: chapter,
        title: (await json(`content/tutorial/${part}/${chapter}/meta.json`)).title,
        exercises: []
      };

      for (const exercise of exercises) {
        const dir = `content/tutorial/${part}/${chapter}/${exercise}`;

        const text = await readFile(`${dir}/README.md`, "utf-8");
        const { frontmatter } = extract_frontmatter(text, dir);
        const { title } = frontmatter;

        chapters_obj.exercises.push({
          slug: exercise.slice(3),
          title
        });
      }

      obj.chapters.push(chapters_obj);
    }

    final_data.push(obj);
  }

  return final_data;
}

/**
 * new
 */
export async function get_index_2(): Promise<PostStub[]> {
  const parts = (await readdir("content")).filter(is_md_file);

  const final_data: PostStub[] = [];

  for (const part of parts) {
    const dir = `content/${part}`;
    const text = await readFile(`${dir}`, "utf-8");
    const { frontmatter } = extract_frontmatter(text, dir);
    const { title, description } = frontmatter;

    const obj: PostStub = {
      slug: part.slice(0, -3),
      title: title,
      description: description
    };

    final_data.push(obj);
  }

  return final_data;
}

export async function get_exercise(slug: string): Promise<Exercise | undefined> {
  const exercises = (
    await glob("[0-9][0-9]-*/[0-9][0-9]-*/[0-9][0-9]-*/README.md", {
      cwd: "content/tutorial"
    })
  ).map(posixify);

  const chain: string[] = [];

  for (let i = 0; i < exercises.length; i += 1) {
    const file = exercises[i];
    const [part_dir, chapter_dir, exercise_dir] = file.split("/");
    const exercise_slug = exercise_dir.slice(3);

    const dir = `content/tutorial/${part_dir}/${chapter_dir}/${exercise_dir}`;

    if (await exists(`${dir}/app-a`)) {
      chain.length = 0;
      chain.push(`${dir}/app-a`);
    }

    if (exercise_slug === slug) {
      const a = {
        ...(await walk("content/tutorial/common", {
          exclude: ["node_modules", "static/tutorial", "static/svelte-logo-mask.svg"]
        })),
        ...(await walk(`content/tutorial/${part_dir}/common`))
      };

      for (const dir of chain) {
        Object.assign(a, await walk(dir));
      }

      const b = await walk(`${dir}/app-b`);
      const has_solution = Object.keys(b).length > 0;

      // ensure no duplicate content
      for (const key in b) {
        if (!a[key]) continue;
        if (b[key].type !== "file") continue;

        const a_ = a[key] as FileStub;
        const b_ = b[key];

        if (a_.contents === b_.contents) {
          throw new Error(`duplicate file: ${exercise_slug} ${key}`);
        }
      }

      const part_meta = await json(`content/tutorial/${part_dir}/meta.json`);
      const chapter_meta = await json(`content/tutorial/${part_dir}/${chapter_dir}/meta.json`);

      const exercise_meta_file = `content/tutorial/${part_dir}/${chapter_dir}/${exercise_dir}/meta.json`;
      const exercise_meta = (await exists(exercise_meta_file))
        ? await json(exercise_meta_file)
        : {};

      const scope = chapter_meta.scope ?? part_meta.scope;

      const text = await readFile(`${dir}/README.md`, "utf-8");
      const { frontmatter, markdown } = extract_frontmatter(text, dir);
      const { title, path = "/", focus } = frontmatter;

      const prev_slug = exercises[i - 1]?.split("/")[2].slice(3);
      const prev = prev_slug
        ? {
            slug: prev_slug
          }
        : null;

      let next = null;

      const next_exercise = exercises[i + 1];

      if (next_exercise) {
        let title: string;

        const dirs = next_exercise.split("/");
        if (dirs[0] !== part_dir) {
          title = (await json(`content/tutorial/${dirs[0]}/meta.json`)).title;
        } else if (dirs[1] !== chapter_dir) {
          title = (await json(`content/tutorial/${dirs[0]}/${dirs[1]}/meta.json`)).title;
        } else {
          title = extract_frontmatter(
            await readFile(`content/tutorial/${next_exercise}`, "utf-8"),
            next_exercise
          ).frontmatter.title;
        }

        next = {
          slug: next_exercise.split("/")[2].slice(3),
          title
        };
      }

      const editing_constraints = {
        create: new Set(exercise_meta.editing_constraints?.create ?? []),
        remove: new Set(exercise_meta.editing_constraints?.remove ?? [])
      };

      const solution = { ...a };

      for (const stub of Object.values(b)) {
        if (stub.type === "file" && stub.contents.startsWith("__delete")) {
          // remove file
          editing_constraints.remove.add(stub.name);
          delete solution[stub.name];
        } else if (stub.name.endsWith("/__delete")) {
          // remove directory
          const parent = stub.name.slice(0, stub.name.lastIndexOf("/"));
          editing_constraints.remove.add(parent);
          delete solution[parent];
          for (const k in solution) {
            if (k.startsWith(parent + "/")) {
              delete solution[k];
            }
          }
        } else {
          if (!solution[stub.name]) {
            editing_constraints.create.add(stub.name);
          }
          solution[stub.name] = stub;
        }
      }

      // ensure every code block for an exercise with multiple files has a `/// file:` annotation
      const filtered = Object.values(solution).filter((item) => {
        return item.type === "file" && item.name.startsWith(scope.prefix);
      });

      if (filtered.length > 0) {
        for (const match of markdown.matchAll(/```[a-z]+\n([\s\S]+?)\n```/g)) {
          const content = match[1];
          if (!content.includes("/// file") && !content.includes("/// no-file")) {
            throw new Error(`Code block lacks a \`/// file: ...\` annotation: ${dir}/README.md`);
          }
        }
      }

      const all_files = { ...a, ...solution };
      const filenames = new Set(
        Object.keys(all_files)
          .filter(
            (filename) => filename.startsWith(scope.prefix) && all_files[filename].type === "file"
          )
          .map((filename) => filename.slice(scope.prefix.length))
      );

      return {
        part: {
          slug: part_dir,
          title: `Part ${part_dir.slice(1, 2)}`,
          label: part_meta.title
        },
        chapter: {
          slug: chapter_dir,
          title: chapter_meta.title
        },
        scope,
        focus: focus ?? chapter_meta.focus ?? part_meta.focus,
        title,
        path,
        slug: exercise_slug,
        prev,
        next,
        dir,
        editing_constraints,
        markdown,
        html: await transform(markdown, {
          codespan: (text) =>
            filenames.size > 1 && filenames.has(text)
              ? `<code data-file="${scope.prefix + text}">${text}</code>`
              : `<code>${text}</code>`
        }),
        a,
        b: solution,
        has_solution
      };
    }

    chain.push(`${dir}/app-b`);
  }
}

/**
 * new
 */
export async function get_exercise_2(slug: string): Promise<Exercise2 | undefined> {
  const parts = (await readdir("content")).filter(is_md_file);

  for (const part of parts) {
    if (slug === part.slice(0, -3)) {
      const dir = `content/${part}`;
      const text = await readFile(`${dir}`, "utf-8");
      const { frontmatter, markdown } = extract_frontmatter(text, dir);
      const { title, description } = frontmatter;

      return {
        // slug: part,
        title: title,
        html: await transform(markdown, {
          codespan: (text) => `<code>${text}</code>`
        }),
        meta: frontmatter
      };
    }
  }
}

function extract_frontmatter(markdown: string, dir: string) {
  const match = /---\n([^]+?)\n---\n([^]+)/.exec(markdown);
  if (!match) {
    throw new Error(`bad markdown for ${dir}`);
  }

  const frontmatter: Record<string, string> = {};

  for (const line of match[1].split("\n")) {
    const index = line.indexOf(":");
    if (index !== -1) {
      frontmatter[line.slice(0, index).trim()] = line.slice(index + 1).trim();
    }
  }

  return { frontmatter, markdown: match[2] };
}

/**
 * Get a list of all files in a directory
 */
async function walk(cwd: string, options: { exclude?: string[] } = {}) {
  const result: Record<string, FileStub | DirectoryStub> = {};

  if (!(await exists(cwd))) return result;

  async function walk_dir(dir: string, depth: number) {
    const files = (await readdir(path.join(cwd, dir))).map(posixify);

    for (const basename of files) {
      if (excluded.has(basename)) continue;

      const name = dir + basename;

      if (options.exclude?.some((exclude) => posixify(name).endsWith(exclude))) continue;

      const resolved = path.join(cwd, name);
      const stats = await stat(resolved);

      if (stats.isDirectory()) {
        result[name] = {
          type: "directory",
          name,
          basename
        };

        await walk_dir(name + "/", depth + 1);
      } else {
        const text = text_files.has(path.extname(name) || path.basename(name));
        const contents = await readFile(resolved, text ? "utf-8" : "base64");

        result[name] = {
          type: "file",
          name,
          basename,
          text,
          contents
        };
      }
    }
  }

  return await walk_dir("/", 1), result;
}
