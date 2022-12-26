<div>
	<header class="text-lg">
		<div class="flex justify-between py-10">
			<div>
				<!-- TODO -->
				<!-- {%- set isHome = (page.url == '/') -%}
        <a
          class="{% if isHome %} bg-lightSecondary {% else %} hover:bg-lightSecondary {% endif %}"
          href="{% if isHome %}#main{% else %}{{ '/' | url }}{% endif %}"
          {% if isHome %} aria-current="page" {% endif %}
          >Joseph Sebastian
        </a> -->

				<a class="hover:bg-lightSecondary" href="/">Joseph Sebastian</a>
			</div>
			<div class="hidden md:flex">
				<nav>
					<ul class="flex">
						<!-- TODO -->
						<!-- {%- for item in collections.all | eleventyNavigation -%}
              {%- if item.url -%}
                {%- set isCurrent = (item.url == page.url) -%}
                <li>
                  <a
                    class="ml-4 {% if isCurrent %} bg-lightSecondary {% else %} hover:bg-lightSecondary {% endif %}"
                    href="{% if isCurrent %}#main{% else %}{{ item.url | url }}{% endif %}"
                    {% if isCurrent %} aria-current="page" {% endif %}
                    >{{ item.title }}
                  </a>
                </li>
              {%- endif -%}
            {%- endfor -%} -->

						<li>
							<a class="ml-4 hover:bg-lightSecondary" href="/posts">Posts</a>
						</li>
						<li>
							<a class="ml-4 hover:bg-lightSecondary" href="/about">About</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</div>

<!-- <style>
	header {
		padding: 1rem;
		background: lightskyblue;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style> -->
