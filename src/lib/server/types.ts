// Needed to resolve unknown type error
export type MdsvexEntry = {
	default: {
		render: Function;
	};
	metadata: Metadata;
};

export type Metadata = {
	title: string;
	date: Date;
	description: string;
	category: string[];
	tags: string[];
	slug?: string;
	readingTime?: string;
	filePath?: string;
};

// export type ContentItem = {
// 	type: 'blog';
// 	content: string;
// 	frontmatter: {
// 		[key: string]: string;
// 	};
// 	title: string;
// 	subtitle: string;
// 	description: string;
// 	category: string;
// 	tags: string[];
// 	image: string;
// 	canonical: string;
// 	slug: string;
// 	date: Date;
// 	readingTime: string;
// };
