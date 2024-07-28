<script lang="ts">
  export let tagsPage = "";
  export let tag = "";
  export let standalone = false;
</script>

<a
  class="
  w-fit whitespace-normal
  rounded bg-gray-200
  px-2 py-1
  {standalone ? 'text-xl' : 'text-base'}
  "
  href="{tagsPage}/{tag}"
>
  {tag}
</a>
