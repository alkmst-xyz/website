<script lang="ts">
	export let title: string;
	export let url: string;
	export let active: boolean;
</script>

<div>
	<a
		class="
    px-2 py-1
    rounded-lg
    transition-colors ease-in-out duration-300
  hover:bg-lightSecondary
    {active ? 'bg-lightSecondary' : ''}
    "
		href={url}
	>
		{title}
	</a>
</div>
