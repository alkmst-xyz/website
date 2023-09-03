export type MdsvexEntry = {
  metadata: MdMeta;
  default: any;
};

export type MdMeta = {
  title: string;
  date: Date;
  description: string;
  category: string;
  tags: string[];
  slug?: string;
  readingTime?: string;
  fileName?: string;
};

export type MdBody = {
  meta: MdMeta;
  html: string;
};
