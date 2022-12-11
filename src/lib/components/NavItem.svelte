<script>
	export let title = '';
	export let url = '';
</script>

<div>
	<a
		class="
    px-2 py-1 
    rounded-lg
    transition-colors duration-300
  hover:bg-lightSecondary
    "
		href={url}
	>
		{title}
	</a>
</div>
