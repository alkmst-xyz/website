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
