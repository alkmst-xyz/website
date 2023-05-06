<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<article class="prose">
	{@html data.postBody.html}
</article>
