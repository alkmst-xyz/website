export type MdsvexEntry = {
	default: {
		render: Function;
	};
	metadata: MdMeta;
};

export type MdMeta = {
	title: string;
	date: Date;
	description: string;
	category: string[];
	tags: string[];
	slug?: string;
	readingTime?: string;
	filePath?: string;
};

export type MdBody = {
	meta: MdMeta;
	html: string;
};
