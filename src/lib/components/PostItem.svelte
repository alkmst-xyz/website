<script>
	export let url = '';
	export let title = '';
	export let date = '';
</script>

<div class="flex flex-col my-2">
	<span class="text-2xl font-bold">
		<a href={url}>
			{title}
		</a>
	</span>
	<span>
		{date}
	</span>
</div>
