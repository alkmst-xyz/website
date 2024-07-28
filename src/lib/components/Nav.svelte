<script lang="ts">
  import NavItem from "./NavItem.svelte";

  const navItems = [
    { title: "Posts", url: "/posts" },
    { title: "Categories", url: "/posts/categories" },
    { title: "Tags", url: "/posts/tags" },
    { title: "About", url: "/about" }
  ];
</script>

<header
  class="
  flex flex-col justify-between
  space-y-2
  px-2 py-10
  text-lg
  md:flex-row
  md:space-y-0"
>
  <NavItem title="jspsv" url="/" />

  <nav>
    <ul class="flex space-x-2">
      {#each navItems as item}
        <li>
          <NavItem title={item.title} url={item.url} />
        </li>
      {/each}
    </ul>
  </nav>
</header>
