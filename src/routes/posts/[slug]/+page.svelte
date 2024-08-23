<script lang="ts">
  import Tag from "$lib/components/Tag.svelte";
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
  const { meta, html } = data.post;
</script>

<svelte:head>
  <title>Posts | {meta.title}</title>
  <meta name="Post" content="Post" />
</svelte:head>

<div>
  <div class="flex flex-col space-y-1">
    <h1 class="font-serif text-4xl">{meta.title}</h1>

    <div class="flex space-x-4 text-lg">
      <p>{meta.date}</p>
      <a class="rounded-lg bg-lightHighlight/15 px-2" href="/posts/categories">{meta.category}</a>
    </div>

    {#if meta.tags.length}
      <ul class="flex space-x-2">
        {#each meta.tags as tag}
          <li>
            <Tag tagsPage="/posts/tags" {tag} />
          </li>
        {/each}
      </ul>
    {/if}

    <span class="font-serif italic">
      {meta.description}
    </span>
  </div>

  <article class="markdown">
    {@html html}
  </article>
</div>
