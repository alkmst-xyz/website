<script lang="ts">
  import Prose from "$lib/components/Prose.svelte";
  import Tag from "$lib/components/Tag.svelte";
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
</script>

<svelte:head>
  <title>Posts | Tags</title>
  <meta name="Posts | Tags" content="Posts | Tags" />
</svelte:head>

<Prose>
  <h1 class="italic">Tags</h1>
</Prose>

<div class="flex flex-wrap gap-2">
  {#each data.tags as tag}
    <Tag standalone={true} {tag} tagsPage="/posts/tags" />
  {/each}
</div>
