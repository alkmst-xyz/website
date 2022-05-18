const htmlmin = require("html-minifier");
const pluginLazyImages = require("eleventy-plugin-lazyimages");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginLazyImages, {
    transformImgPath: (imgPath) => {
      if (imgPath.startsWith("http://") || imgPath.startsWith("https://")) {
        // Handle remote file
        return imgPath;
      } else {
        return `./src/${imgPath}`;
      }
    },
  });

  eleventyConfig.addWatchTarget("./src/css/tailwind.css");
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

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
};
