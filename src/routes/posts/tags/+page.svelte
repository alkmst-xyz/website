<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex flex-wrap gap-2">
	{#each data.tags as tag}
		<a
			href="/posts/tags/{tag}"
			class="
      rounded bg-gray-200 px-2 py-1
      "
		>
			<h1>{tag}</h1>
		</a>
	{/each}
</div>
