<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let url: string;

	$: active = $page.url.pathname === url;
</script>

<div>
	<a
		class="
    rounded-lg px-2
    py-1
    transition-colors duration-300 ease-in-out
    hover:bg-lightSecondary
    {active ? 'bg-lightSecondary' : ''}
    "
		href={url}
	>
		{title}
	</a>
</div>
