<script lang="ts">
  import PostsList from '$lib/components/PostsList.svelte';
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<svelte:head>
  <title>Posts in {data.category}</title>
  <meta name="Posts per category" content="Posts per category" />
</svelte:head>

<div class="flex flex-col space-y-4">
  <PostsList posts={data.posts} />
</div>
