<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { tags } = data;
</script>

<svelte:head>
	<title>Tags</title>
	<meta name="Tags" content="Tags" />
</svelte:head>

<div>
	<h1>All Tags</h1>

	<ul>
		{#each tags as tag}
			<li>
				<h2>
					<a href="/posts/tags/{tag}">
						{tag}
					</a>
				</h2>
			</li>
		{/each}
	</ul>
</div>
