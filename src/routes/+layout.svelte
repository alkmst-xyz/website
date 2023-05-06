<script lang="ts">
	import '$lib/styles/styles.css';
	import type { PageData } from './$types';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data: PageData;
</script>

<body class="mx-auto my-2 max-w-screen-sm p-2">
	<Nav activeUrl={data.path} />

	<main class="my-8">
		<slot />
	</main>

	<Footer />
</body>
