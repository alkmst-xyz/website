<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/styles.css';
	import 'uno.css';
</script>

<div
	class="bg-slate-100 text-lightParagraph
  leading-relaxed tracking-normal subpixel-antialiased
  font-caskaydia_cove
  selection:bg-lightSecondary"
>
	<body class="max-w-screen-md mx-auto px-2">
		<Header />

		<main class="px-2">
			<slot />
		</main>

		<Footer />
	</body>
</div>
