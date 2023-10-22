<script lang="ts">
  import PostsList from '$lib/components/PostsList.svelte';
  import Prose from '$lib/components/Prose.svelte';
  import type { LayoutServerData } from './$types';

  export let data: LayoutServerData;
</script>

<svelte:head>
  <title>Posts</title>
  <meta name="Posts" content="Posts" />
</svelte:head>

<Prose>
  <h1>Posts</h1>
</Prose>

<div class="flex flex-col space-y-4">
  <PostsList posts={data.posts} />
</div>
