const { DateTime } = require("luxon");

const htmlmin = require("html-minifier");
const pluginLazyImages = require("eleventy-plugin-lazyimages");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginLazyImages, {
    cacheFile: "", // turns off cache .lazyimages.json
    transformImgPath: (imgPath) => {
      if (imgPath.startsWith("http://") || imgPath.startsWith("https://")) {
        // Handle remote file
        return imgPath;
      } else {
        return `./src/${imgPath}`;
      }
    },
  });
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  // Shortcodes

  // Filters

  // date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // tags
  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
    );
  }
  eleventyConfig.addFilter("filterTagList", filterTagList);

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Others

  eleventyConfig.addWatchTarget("./src/css/styles.css");
  eleventyConfig.addPassthroughCopy("./src/static");
  eleventyConfig.addPassthroughCopy("./src/img");

  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addGlobalData("generated", () => {
    let now = new Date();
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: "long",
    }).format(now);
  });

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
};
