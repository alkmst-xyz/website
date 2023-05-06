<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex space-x-1">
	{#each data.categories as category}
		<a
			href="/categories/{category}"
			class="
      rounded bg-gray-200 px-2 py-1
      "
		>
			<h1>{category}</h1>
		</a>
	{/each}
</div>
