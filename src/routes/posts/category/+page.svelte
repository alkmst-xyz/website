<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { categories } = data;
</script>

<svelte:head>
	<title>Categories</title>
	<meta name="Categories" content="Categories" />
</svelte:head>

<div>
	<h1>Categories</h1>

	<ul>
		{#each categories as category}
			<li>
				<h2>
					<a href="/posts/category/{category}">
						{category}
					</a>
				</h2>
			</li>
		{/each}
	</ul>
</div>
