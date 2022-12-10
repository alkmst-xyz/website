<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const { tags, posts } = data;
</script>

<svelte:head>
	<title>Posted in {tags}</title>
	<meta name="Posts per tag" content="Posts per tag" />
</svelte:head>

<div>
	<h1>Posts tagged "{tags}"</h1>

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
