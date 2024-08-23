<script lang="ts">
  import type { PostStub } from "$lib/server/types";

  import type { MdMeta } from "../../routes/api/content/types";

  export let posts: PostStub[];
  export let postsPath: string = "/posts";
</script>

{#each posts as postMeta}
  <a
    href="{postsPath}/{postMeta.slug}"
    class="
    rounded bg-gray-200 px-2 py-3
    "
  >
    <div class="flex items-center justify-between">
      <h2 class="">{postMeta.title}</h2>
      {#if postMeta.draft}
        <span
          class="
          rounded-md border border-gray-600
          px-1 font-mono text-sm
          text-gray-600
          "
        >
          draft
        </span>
      {/if}
    </div>

    <p>{postMeta.description}</p>
  </a>
{/each}
