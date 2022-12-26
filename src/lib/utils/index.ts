export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();

			// trimming "/src/routes" and ".md" from the path
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
