import { get_exercise, get_index } from "$lib/server/content.js";
import { json } from "@sveltejs/kit";
import { type Renderer, type TokenizerObject, Marked, type Tokens } from "marked";
export const prerender = true;

export const GET = async () => {
  return json(await content());
};

export interface Block {
  breadcrumbs: string[];
  href: string;
  content: string;
  rank: number;
}

async function content() {
  const blocks: Block[] = [];

  for (const { chapters } of await get_index()) {
    for (const { exercises } of chapters) {
      for (const { slug, title } of exercises) {
        const exercise_content = await get_exercise(slug);

        if (exercise_content) {
          exercise_content.markdown = exercise_content.markdown.replace(/(\+\+\+|---|:::)/g, "");

          blocks.push({
            href: `/tutorial/${slug}`,
            breadcrumbs: [title],
            content: await plaintext(exercise_content.markdown),
            rank: 0
          });
        }
      }
    }
  }

  return { blocks };
}

const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};

const getEscapeReplacement = (ch: keyof typeof escapeReplacements) => escapeReplacements[ch];

function escape(html: string, encode: boolean = false) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

const tokenizer: TokenizerObject = {
  url(src) {
    // if `src` is a package version string, eg: adapter-auto@1.2.3
    // do not tokenize it as email
    if (/@\d+\.\d+\.\d+/.test(src)) {
      return undefined;
    }
    // else, use the default tokenizer behavior
    return false;
  }
};

const default_renderer: Partial<Renderer> = {
  code({ text, lang: infostring, escaped }) {
    const lang_info = infostring?.match(/\S*/)?.[0];

    text = text.replace(/\n$/, "") + "\n";

    if (!lang_info) {
      return "<pre><code>" + (escaped ? text : escape(text, true)) + "</code></pre>\n";
    }

    return (
      '<pre><code class="language-' +
      escape(lang_info, true) +
      '">' +
      (escaped ? text : escape(text, true)) +
      "</code></pre>\n"
    );
  },

  blockquote(quote) {
    return "<blockquote>\n" + quote + "</blockquote>\n";
  },

  html({ text }) {
    return text;
  },

  heading({ tokens, depth }) {
    return "<h" + depth + ">" + tokens + "</h" + depth + ">\n";
  },

  hr() {
    return "<hr>\n";
  },

  list({ raw: body, ordered, start }) {
    const type = ordered ? "ol" : "ul",
      startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  },

  listitem(text) {
    return "<li>" + text + "</li>\n";
  },

  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + "" + "> ";
  },

  paragraph(text) {
    return "<p>" + text + "</p>\n";
  },

  table({ header, raw: body }) {
    if (body) body = "<tbody>" + body + "</tbody>";

    return "<table>\n" + "<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  },

  tablerow(content) {
    return "<tr>\n" + content + "</tr>\n";
  },

  tablecell({ text: content, header, align }) {
    const type = header ? "th" : "td";
    const tag = align ? "<" + type + ' align="' + align + '">' : "<" + type + ">";
    return tag + content + "</" + type + ">\n";
  },

  // span level renderer
  strong(text) {
    return "<strong>" + text + "</strong>";
  },

  em(text) {
    return "<em>" + text + "</em>";
  },

  codespan(text) {
    return "<code>" + text + "</code>";
  },

  br() {
    return "<br>";
  },

  del(text) {
    return "<del>" + text + "</del>";
  },

  link({ href, title, text }) {
    if (href === null) {
      return text;
    }
    let out = '<a href="' + escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  },

  image({ href, title, text }) {
    if (href === null) {
      return text;
    }

    let out = '<img src="' + href + '" alt="' + text + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">";
    return out;
  },

  text({ text }) {
    return text;
  }
};

export async function markedTransform(markdown: string, renderer: Partial<Renderer> = {}) {
  const marked = new Marked({
    renderer: {
      ...default_renderer,
      ...renderer
    },
    tokenizer
  });

  return (await marked.parse(markdown)) ?? "";
}

async function plaintext(markdown: string) {
  const block = (text: any) => `${text}\n`;

  const inline = (text: any) => text;

  return (
    await markedTransform(markdown, {
      code: (source) => source.split("// ---cut---\n").pop() ?? "",
      blockquote: block,
      html: () => "\n",
      heading: (text) => `${text}\n`,
      hr: () => "",
      list: block,
      listitem: block,
      checkbox: block,
      paragraph: (text) => `${text}\n\n`,
      table: block,
      tablerow: block,
      tablecell: (text, opts) => {
        return text + " ";
      },
      strong: inline,
      em: inline,
      codespan: inline,
      br: () => "",
      del: inline,
      link: (href, title, text) => text,
      image: (href, title, text) => text,
      text: inline
    })
  )
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (match, code) => {
      return String.fromCharCode(code);
    })
    .trim();
}
