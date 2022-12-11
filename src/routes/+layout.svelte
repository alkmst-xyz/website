<script>
	import '$lib/styles/styles.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { fade } from 'svelte/transition';

	/** @type {import('./$types').PageData} */
	export let data;

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
		<Header />

		{#key data.path}
			<main class="px-2" in:fade={transitionIn} out:fade={transitionOut}>
				<slot />
			</main>
		{/key}

		<Footer />
	</body>
</div>
