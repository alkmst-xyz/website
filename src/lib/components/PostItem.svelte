<script>
	export let url = '';
	export let title = '';
	export let date = '';
</script>

<div
	class="
  px-2 py-3
  flex flex-col 
  hover:bg-lightSecondary/50 
  transition-all ease-in-out duration-300
  rounded hover:shadow-sm
  "
>
	<span class="text-2xl font-bold">
		<a href={url}>
			{title}
		</a>
	</span>
	<span>
		{date}
	</span>
</div>
