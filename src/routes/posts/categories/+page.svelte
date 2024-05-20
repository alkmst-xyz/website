<script lang="ts">
  import Prose from '$lib/components/Prose.svelte';
  import Tag from '$lib/components/Tag.svelte';
  import type { PageServerData } from './$types';
  export let data: PageServerData;
</script>

<svelte:head>
  <title>Posts | Categories</title>
  <meta name="Posts | Categories" content="Posts | Categories" />
</svelte:head>

<Prose>
  <h1 class="italic">Categories</h1>
</Prose>

<div class="flex flex-wrap gap-2">
  {#each data.categories as category}
    <Tag standalone={true} tag={category} tagsPage="/posts/categories" />
  {/each}
</div>
