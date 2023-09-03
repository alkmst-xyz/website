<script lang="ts">
  import Tag from '$lib/components/Tag.svelte';
  import type { PageServerData } from './$types';

  export let data: PageServerData;
  const { meta, html } = data.postBody;
</script>

<svelte:head>
  <title>Posts | {meta.title}</title>
  <meta name="Post" content="Post" />
</svelte:head>

<div>
  <div class="flex flex-col">
    <h1>{meta.title}</h1>

    <div class="flex space-x-4">
      <p>{meta.date}</p>
      <a href="/posts/categories">{meta.category}</a>
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
  </div>

  <span>
    {meta.description}
  </span>

  <article class="prose">
    {@html html}
  </article>
</div>
