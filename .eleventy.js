const path = require("path");
const { DateTime } = require("luxon");

const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItEmoji = require("markdown-it-emoji");
const htmlmin = require("html-minifier");

const pluginImage = require("@11ty/eleventy-img");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginTimeToRead = require("eleventy-plugin-time-to-read");

module.exports = function (eleventyConfig) {
  // plugins
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginTimeToRead, {
    speed: "250 words a minute",
  });

  // transform: minify HTML
  eleventyConfig.addTransform("htmlmin", minifyHTML);

  // shortcode: image
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  // filter: valid date string, used by datetime attribute
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // filter: readable date string
  eleventyConfig.addFilter("readableDate", readableDate);

  // filter: tags
  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
    );
  }
  eleventyConfig.addFilter("filterTagList", filterTagList);

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

  // global data: "generated" contains complete date string at build time
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
    typographer: true,
  })
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.linkInsideHeader({
        class: "heading-anchor",
        symbol: "#",
      }),
      level: [1, 2, 3, 4, 5, 6],
      slugify: eleventyConfig.getFilter("slugify"),
    })
    .use(markdownItFootnote)
    .use(markdownItEmoji);
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

  let imageMetadata = await pluginImage(src, {
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
  return pluginImage.generateHTML(imageMetadata, imageAttributes, {
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

function readableDate(dateObj) {
  const pr = new Intl.PluralRules("en-US", { type: "ordinal" });
  const dateOrdinals = new Map([
    ["one", "st"],
    ["two", "nd"],
    ["few", "rd"],
    ["other", "th"],
  ]);
  const date_d = DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("d");
  const date_m = DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLL");
  const date_y = DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy");

  return `${date_m} ${date_d}${dateOrdinals.get(pr.select(date_d))}, ${date_y}`;
}
