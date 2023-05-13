<script lang="ts">
	import '$lib/styles/styles.css';
	import type { PageData } from './$types';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data: PageData;
</script>

<div class="mx-auto max-w-screen-sm px-2">
	<Nav activeUrl={data.path} />

	<main class="my-8">
		<slot />
	</main>

	<Footer />
</div>
