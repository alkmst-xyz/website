import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeInferReadingTimeMeta from 'rehype-infer-reading-time-meta';

export default {
	extensions: ['.md'],
	rehypePlugins: [
		rehypeSlug,
		[rehypeAutolinkHeadings, { behavior: 'append', content: '#' }],
		rehypeInferReadingTimeMeta
	]
};
