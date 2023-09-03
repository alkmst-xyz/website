<script lang="ts">
  import PostsList from '$lib/components/PostsList.svelte';
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<svelte:head>
  <title>Posts tagged #{data.tag}</title>
  <meta name="Posts per tag" content="Posts per tag" />
</svelte:head>

<div class="flex flex-col space-y-4">
  <PostsList posts={data.posts} />
</div>
