<script lang="ts">
	import type { Metadata } from '$lib/server/types';

	export let postsMeta: Metadata[];
	export let postsPath: string = '/posts';
</script>

{#each postsMeta as metadata}
	<a
		href="{postsPath}/{metadata.slug}"
		class="
    rounded bg-gray-200 px-2 py-3
    "
	>
		<h1>{metadata.title}</h1>
		<p>{metadata.description}</p>
	</a>
{/each}
