<script>
	/** @type {import('./$types').PageData} */
	export let data;

	const { category, posts } = data;
</script>

<svelte:head>
	<title>Posted in {category}</title>
	<meta name="Posts per category" content="Posts per category" />
</svelte:head>

<div>
	<h1>{category} Posts</h1>

	<ul>
		{#each posts as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				Published {post.meta.date}
			</li>
		{/each}
	</ul>
</div>
