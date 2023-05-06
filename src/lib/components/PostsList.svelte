<script lang="ts">
	import type { MdMeta } from '$lib/api/content/types';

	export let posts: MdMeta[];
	export let postsPath: string = '/posts';
</script>

{#each posts as postMeta}
	<a
		href="{postsPath}/{postMeta.slug}"
		class="
    rounded bg-gray-200 px-2 py-3
    "
	>
		<h1>{postMeta.title}</h1>
		<p>{postMeta.description}</p>
	</a>
{/each}
