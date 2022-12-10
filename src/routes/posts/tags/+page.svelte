<script>
	/** @type {import('./$types').PageData} */
	export let data;
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
