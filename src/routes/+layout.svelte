<script lang="ts">
	import '$lib/styles/styles.css';
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data: PageData;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };
</script>

<div
	class="
  bg-slate-100 text-lightParagraph
  leading-relaxed tracking-normal subpixel-antialiased
  font-caskaydia_cove
  selection:bg-lightSecondary
  "
>
	<body class="max-w-screen-md mx-auto px-2">
		{#key data.path}
			<Nav activeUrl={data.path} />

			<main class="px-2" in:fade={transitionIn} out:fade={transitionOut}>
				<slot />
			</main>
		{/key}

		<Footer />
	</body>
</div>
