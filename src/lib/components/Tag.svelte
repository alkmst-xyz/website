<script>
	export let tagsPage = '';
	export let tag = '';
</script>

<a
	class="
  text-sm 
  rounded-md
  px-2 py-1
  whitespace-normal
  font-mono
  bg-lightSecondary"
	href="{tagsPage}/{tag}"
>
	#{tag}
</a>
