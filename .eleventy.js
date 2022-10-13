const path = require("path");
const { DateTime } = require("luxon");

const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItEmoji = require("markdown-it-emoji");
const markdownItTexmath = require("markdown-it-texmath");
const htmlmin = require("html-minifier");

const Image = require("@11ty/eleventy-img");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  // plugins
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  // transform: minify HTML
  eleventyConfig.addTransform("htmlmin", minifyHTML);

  // shortcode: image
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  // filter: date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // filter: tags
  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
    );
  }
  eleventyConfig.addFilter("filterTagList", filterTagList);

  // filter: date string
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // collection: create an array of all tags
  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // force 11ty to watch CSS and JS files
  eleventyConfig.addWatchTarget("./tailwind.config.js");
  eleventyConfig.addWatchTarget("./src/css/styles.css");

  // pass through static files
  eleventyConfig.addPassthroughCopy("./src/static");

  eleventyConfig.addGlobalData("generated", () => {
    let now = new Date();
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: "long",
    }).format(now);
  });

  // customize markdown library and settings:
  let mdLib = markdownIt({
    html: true,
    linkify: true,
  })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: "after",
        class: "direct-link",
        symbol: "∮",
      }),
      level: [1, 2, 3, 4],
      slugify: eleventyConfig.getFilter("slugify"),
    })
    .use(markdownItFootnote)
    .use(markdownItEmoji)
    .use(markdownItTexmath, {
      engine: require("katex"),
      delimiters: "dollars",
    });
  eleventyConfig.setLibrary("md", mdLib);

  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
    },
  };
};

async function imageShortcode(src, alt, sizes) {
  console.log(`Generating image(s) from:  ${src}`);

  let imageMetadata = await Image(src, {
    formats: ["webp"],
    urlPath: "img/",
    outputDir: "_site/img/",
    filenameFormat: function (id, src, width, format, options) {
      const { name } = path.parse(src);
      return `${name}-${width}w.${format}`;
    },
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(imageMetadata, imageAttributes, {
    whitespaceMode: "inline",
  });
}

function minifyHTML(content, outputPath) {
  return outputPath.endsWith(".html")
    ? htmlmin.minify(content, {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        sortAttributes: true,
        sortClassName: true,
        useShortDoctype: true,
      })
    : content;
}
