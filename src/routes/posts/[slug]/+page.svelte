<script>
	export let data;
	const { title, date, Content } = data;
</script>

<svelte:head>
	<title>Posts | {title}</title>
	<meta name="description" content="About this app" />
</svelte:head>

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<!-- Content is capitalized as it is a component -->
	<svelte:component this={Content} />
</article>
