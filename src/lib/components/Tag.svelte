<script>
	export let tagsPage = '';
	export let tag = '';
</script>

<a
	class="
  whitespace-normal
  rounded-md
  bg-lightSecondary px-2
  py-1
  font-mono
  text-sm"
	href="{tagsPage}/{tag}"
>
	#{tag}
</a>
