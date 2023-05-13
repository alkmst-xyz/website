<script lang="ts">
	import '$lib/styles/tailwind.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="mx-auto max-w-screen-sm px-2">
	<Nav />

	<main class="mb-8 px-2">
		<slot />
	</main>

	<Footer />
</div>
