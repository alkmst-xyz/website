<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import '$lib/css/styles.css';
</script>

<div
	class="bg-lightBg text-lightParagraph
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
		<!-- <footer>
      <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
    </footer> -->
	</body>
</div>
