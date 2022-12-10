<script>
	import { fade } from 'svelte/transition';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/styles.css';
	import 'uno.css';

	export let data;
	const { currentRoute } = data;
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

		{#key currentRoute}
			<main class="px-2" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
				<slot />
			</main>
		{/key}

		<Footer />
	</body>
</div>
