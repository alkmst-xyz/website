<script>
	import NavItem from './NavItem.svelte';

	const items = [
		{ title: 'Posts', url: '/posts' },
		{ title: 'About', url: '/about' }
	];
</script>

<header class="flex justify-between py-10 text-lg">
	<NavItem title="Joseph Sebastian" url="/" />

	<nav class="hidden md:flex">
		<ul class="flex">
			{#each items as item}
				<li>
					<NavItem title={item.title} url={item.url} />
				</li>
			{/each}
		</ul>
	</nav>
</header>
