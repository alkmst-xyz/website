<script lang="ts">
  import { page } from '$app/stores';

  export let title: string;
  export let url: string;

  $: active = $page.url.pathname === url;
</script>

<div>
  <a
    class="
    decoration-lightHighlight
    decoration-dotted
    decoration-2
    underline-offset-4
    transition-colors
    ease-in-out
    hover:underline
    {active ? 'font-bold text-lightHighlight underline' : ''}
    "
    href={url}
  >
    <span>
      {title}
    </span>
  </a>
</div>
