# jspsv.dev

<p align="center">
    <img width="100" src="./src/lib/images/indigo-to-blue-to-green_512x512x32.png" alt="logo">
    </a>
</p>

## Run locally

```sh
pnpm install
pnpm run dev # or
pnpm run build
pnpm run preview
```

## TODO

- [ ] Update styling
- [ ] Convert images to .webp during build (while retaining lazy-loading), similar to what [@11ty/eleventy-img](https://www.11ty.dev/docs/plugins/image/) offers.
- [ ] RSS feed
- [ ] Tags with spaces are not supported yet
- [ ] Manage node versions using pnpm
- [x] Draft mode. (works now but requires at least 1 post to compile).

## Website metadata

```json
{
  "title": "Joseph Sebastian's website",
  "description": "Joseph Sebastian's website",
  "url": "https://jspsv.github.io/website",
  "lang": "en",
  "locale": "en_us",
  "author": "Joseph Sebastian"
}
```

## Routing (TODO)

- Currently the route `/api/content` will provide a list of `.md` files and their metadata.
- This is used by the `/posts` to generate a list of posts.
- When a post is clicked, this gets routed to `/api/content/{params}` which again pings `/api/content` for metadata.
- Option 1: combine both the routes.
- Option 2: pass the metadat to the slug route when its fetched.
- Generally, unify and simply `/api/content`.

## Ideas

- Dump vite, mdsvex for plain json api (node:fs + markdown compiler) like [svelte.dev](https://github.com/sveltejs/svelte/tree/master/sites/svelte.dev/src/routes/content.json).
- View transition into a post from posts list view.

## Resources

1. [Josh Collinsworth Blog - Let's learn SvelteKit by building a static Markdown blog from scratch](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog)
2. Favicon generated from icons created by [GitHub - covahn](https://github.com/covahn/very-colorful-terminal-icons)
3. Light theme based on [Happy Hues - Palette 6](https://www.happyhues.co/palettes/6).
