# josephsebastian.me (WIP)

<p align="center">
    <img width="100" src="./img/indigo-to-blue-to-green_512x512x32.png" alt="logo">
    </a>
</p>

> Note:
>
> 2022-05-19: Migrated from Hugo to 11ty.

## Clone repo

```sh
git clone https://github.com/jspsv/website
```

## Run locally

```sh
# Install dependencies
npm install
# Run development server
npm run dev
# Run production server
npm run build
```

## TODO

- [ ] Update styling
- [ ] Convert images to .webp during build (while retaining lazy-loading), similar to what [@11ty/eleventy-img](https://www.11ty.dev/docs/plugins/image/) offers.
- [ ] RSS feed

## Credits

- Favicon generated from icons created by [GitHub - covahn](https://github.com/covahn/very-colorful-terminal-icons)
- Light theme based on [Happy Hues - Palette 6](https://www.happyhues.co/palettes/6).

##

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Ref

1. [Josh Collinsworth Blog - Let's learn SvelteKit by building a static Markdown blog from scratch](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog)
