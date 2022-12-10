<script>
	export let data;

	// Content is capitalized as it is a component
	const { title, date, categories, Content } = data;
</script>

<svelte:head>
	<title>Posts | {title}</title>
	<meta name="description" content="About this app" />
</svelte:head>

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>

	{#if categories.length}
		<aside>
			<h3>Posted in:</h3>
			<ul>
				{#each categories as category}
					<li>
						<a href="/posts/category/{category}">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}

	<svelte:component this={Content} />
</article>
