# My personal website (WIP)

## To install tailwind, postcss, etc.

```sh
npm init --yes
npm install --save-dev autoprefixer postcss postcss-cli tailwindcss
```

> 1. postcss - a tool for transforming CSS with JavaScript
> 2. postcss-cli - CLI tool to execute Postcss commands in the terminal
> 3. postcss-import - to resolve the path of an @import rule
> 4. autoprefixer - helps to add vendor prefixes to CSS
> 5. tailwindcss - CSS library containing utility class

## Start server

```sh
hugo server -D
# Start in production mode
NODE_ENV=production hugo server -D
```

## References

1. [Hugo+Tailwind+Netlify](https://jamespleger.com/blog/2020/hugo-tailwind-netlify/)
2. [NPM as build tool for Hugo](https://thecodestead.com/post/how-to-use-npm-as-a-build-tool-with-hugo/)
