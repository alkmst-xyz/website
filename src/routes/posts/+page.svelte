<script lang="ts">
	import PostsList from '$lib/components/PostsList.svelte';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<svelte:head>
	<title>Posts</title>
	<meta name="Posts" content="Posts" />
</svelte:head>

<div>
	<h1 class="mb-8 px-2">Posts</h1>

	<div class="flex flex-col space-y-4">
		<PostsList posts={data.posts} />
	</div>
</div>
