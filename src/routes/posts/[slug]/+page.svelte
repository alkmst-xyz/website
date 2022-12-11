<script>
	export let data;
	import Tag from '$lib/components/Tag.svelte';

	// Content is capitalized as it is a component
	const { title, date, categories, tags, Content } = data;
</script>

<svelte:head>
	<title>Posts | {title}</title>
	<meta name="description" content="About this app" />
</svelte:head>

<article>
	<div class="flex flex-col">
		<h1>{title}</h1>

		<div class="flex space-x-4">
			<p>{date}</p>
			{#if categories.length}
				<ul class="flex">
					{#each categories as category}
						<li>
							<a href="/posts/category/{category}">
								{category}
							</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
		{#if tags.length}
			<ul class="flex space-x-2">
				{#each tags as tag}
					<li>
						<Tag tagsPage="/posts/tags" {tag} />
					</li>
				{/each}
			</ul>
		{/if}
	</div>

	<article class="markdown">
		<svelte:component this={Content} />
	</article>
</article>
