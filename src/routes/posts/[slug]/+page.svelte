<script>
	export let data;

	// Content is capitalized as it is a component
	const { title, date, categories, tags, Content } = data;
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

	{#if tags.length}
		<aside>
			<h3>Tags:</h3>
			<ul>
				{#each tags as tag}
					<li>
						<a href="/posts/tags/{tag}">
							{tag}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}

	<article class="markdown">
		<svelte:component this={Content} />
	</article>
</article>
