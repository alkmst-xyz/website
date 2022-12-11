<script>
	import PostItem from '$lib/components/PostItem.svelte';

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
				<PostItem url={post.path} title={post.meta.title} date={post.meta.date} />
			</li>
		{/each}
	</ul>
</div>
