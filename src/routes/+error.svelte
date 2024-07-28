<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Page Error</title>
  <meta name="description" content="Page Error." />
</svelte:head>

<h1>Yup, you ran into an error, sorry for that :(</h1>
<div class="markdown">
  {#if $page?.error}
    <h3>{$page.status} : {$page.error?.message}</h3>
  {/if}
  <span>
    Return to
    <a href="/">home</a>
  </span>
</div>
