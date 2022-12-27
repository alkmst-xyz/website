<script lang="ts">
	import NavItem from './NavItem.svelte';

	export let activeUrl: string;

	const navItems = [
		{ title: 'Posts', url: '/posts' },
		{ title: 'About', url: '/about' }
	];

	const isUrlActive = (url: string) => {
		return url === activeUrl;
	};
</script>

<header
	class="
  flex flex-col md:flex-row 
  justify-between 
  py-10 space-y-2 md:space-y-0 
  text-lg"
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
