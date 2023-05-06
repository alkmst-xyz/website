<script lang="ts">
	import PostsList from '$lib/components/PostsList.svelte';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<div class="flex flex-col space-y-4">
	<PostsList posts={data.posts} />
</div>
