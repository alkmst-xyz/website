<script lang="ts">
	import NavItem from './NavItem.svelte';

	export let activeUrl: string;

	const navItems = [
		{ title: 'Posts', url: '/posts' },
		{ title: 'Categories', url: '/posts/categories' },
		{ title: 'Tags', url: '/posts/tags' },
		{ title: 'About', url: '/about' }
	];

	const isUrlActive = (url: string) => {
		return url === activeUrl;
	};
</script>

<header
	class="
  flex flex-col justify-between
  space-y-2
  py-10 text-lg md:flex-row
  md:space-y-0"
>
	<NavItem title="Joseph Sebastian" url="/" active={isUrlActive('/')} />

	<nav>
		<ul class="flex space-x-1">
			{#each navItems as item}
				<li>
					<NavItem title={item.title} url={item.url} active={isUrlActive(item.url)} />
				</li>
			{/each}
		</ul>
	</nav>
</header>
