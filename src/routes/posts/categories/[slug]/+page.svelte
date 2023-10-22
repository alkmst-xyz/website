<script lang="ts">
  import PostsList from '$lib/components/PostsList.svelte';
  import Prose from '$lib/components/Prose.svelte';
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<svelte:head>
  <title>Posts in {data.category}</title>
  <meta name="Posts per category" content="Posts per category" />
</svelte:head>

<div class="flex flex-col">
  <Prose>
    <h1>
      <div class="flex items-baseline space-x-1">
        <span>Categories</span>
        <span class="font-medium">/</span>
        <span class="text-3xl font-medium">{data.category}</span>
      </div>
    </h1>
  </Prose>
</div>

<div class="flex flex-col space-y-4">
  <PostsList posts={data.posts} />
</div>
