<script>
	import PostItem from '$lib/components/PostItem.svelte';

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
				<PostItem url={post.path} title={post.meta.title} date={post.meta.date} />
			</li>
		{/each}
	</ul>
</div>
