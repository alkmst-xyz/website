<script lang="ts">
	import type { PageData } from './$types';
	import PostItem from '$lib/components/PostItem.svelte';

	export let data: PageData;
	const { posts } = data;
</script>

<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
	<h1>Posts</h1>

	<ul>
		{#each posts as post}
			<li>
				<PostItem url={post.path} title={post.meta.title} date={post.meta.date} />
			</li>
		{/each}
	</ul>

	<!-- TODO -->
	<!--
    <div>
    <ul>
		{% for post in posts %}
      <div class="flex text-lg justify-between">
        <div>
          <a href="{{ post.url | url }}">{{ post.data.title }}</a>
        </div>
        <div>
          <span>{{ post.date | readableDate }}</span>
        </div>
      </div>
    {% endfor %}
    </div>
	</ul> 
  -->

	<!-- TODO -->
	<!--
    <div class="pt-4">
     {% if pagination.previous %}
      <div>
        <a href="{{ pagination.previous.replace(index.html, "") | url }}"
          >← Newer Posts
        </a>
      </div>
    {% endif %}
    {% if pagination.next %}
      <div>
        <a href="{{ pagination.next.replace(index.html, "") | url }}"
          >Older Posts →
        </a>
      </div>
    {% endif %}
  </div>
  -->

	<h2>
		<a href="/posts/category">All categories</a>
	</h2>
	<h2>
		<a href="/posts/tags">All Tags</a>
	</h2>
</div>
