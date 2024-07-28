<script lang="ts">
  import PostsList from "$lib/components/PostsList.svelte";
  import Prose from "$lib/components/Prose.svelte";
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
</script>

<svelte:head>
  <title>Posts tagged #{data.tag}</title>
  <meta name="Posts per tag" content="Posts per tag" />
</svelte:head>

<div class="flex flex-col">
  <Prose>
    <h1>
      <div class="flex items-baseline space-x-1">
        <span>Tags</span>
        <span class="font-medium">/</span>
        <span class="text-3xl font-medium">{data.tag}</span>
      </div>
    </h1>
  </Prose>
</div>

<div class="flex flex-col space-y-4">
  <PostsList posts={data.posts} />
</div>
