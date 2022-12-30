import { siteTitle, siteDescription, siteURL } from '$lib/config';

export const prerender = true;

// TODO: use library function
export const GET = async () => {
	const data = await Promise.all(
		Object.entries(import.meta.glob('/src/routes/posts/*.md')).map(async ([path, page]) => {
			const { metadata } = await page();
			const slug = path.split('/').pop().split('.').shift();
			return { ...metadata, slug };
		})
	).then((posts) => {
		return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	});

	const body = render(data);
	const options = {
		headers: {
			'Cache-Control': `max-age=0, s-max-age=${600}`,
			'Content-Type': 'application/xml'
		}
	};
	return new Response(body, options);
};

const render = (posts) => `<?xml version="1.0" encoding="utf-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteTitle}</title>
    <link>${siteURL}</link>
    <description>${siteDescription}</description>
    <atom:link href="https://${siteURL}/api/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
			.map(
				(post) => `<item>
          <title>${post.title}</title>
          <description>${post.description}</description>
          <link>https://${siteURL}/posts/${post.slug}</link>
          <guid isPermaLink="true">https://${siteURL}/posts/${post.slug}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>`
			)
			.join('')}
  </channel>
</rss>
`;
