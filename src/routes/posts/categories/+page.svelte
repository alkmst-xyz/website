<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<svelte:head>
  <title>Posts | Categories</title>
  <meta name="Posts | Categories" content="Posts | Categories" />
</svelte:head>

<div class="flex flex-wrap gap-2">
  {#each data.categories as category}
    <a
      href="/posts/categories/{category}"
      class="
      rounded bg-gray-200 px-2 py-1
      "
    >
      <h1>{category}</h1>
    </a>
  {/each}
</div>
