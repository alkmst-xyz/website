<!-- layouts receive all values defined in frontmatter as props -->
<script>
  export let title;
  export let date;
</script>

<h1>{title}</h1>
<p>{date}</p>

<slot>
  <!-- mdsvex content will be slotted in here -->
</slot>
