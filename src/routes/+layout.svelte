<script lang="ts">
  import "$lib/assets/styles/styles.css";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="mx-auto max-w-screen-lg px-8">
  <Nav />

  <main>
    <slot />
  </main>

  <Footer />
</div>
