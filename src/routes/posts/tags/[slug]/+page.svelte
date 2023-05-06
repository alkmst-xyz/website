<script lang="ts">
	import PostsList from '$lib/components/PostsList.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex flex-col space-y-4">
	<PostsList posts={data.allMatchedMetdata} />
</div>
