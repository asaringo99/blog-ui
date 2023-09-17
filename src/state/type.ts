export interface Article {
  title: string;
  tags: string[];
  content: string;
  isPrivate: boolean;
  isEdit: boolean;
};

export interface Articles {
  topic: string;
  contents: Article[];
};

export interface Topic {
  title: string;
  releaseDate: string;
  updatedDate: string;
  url: string;
  isPrivate: boolean;
}

export interface Dashboard {
  topics: Topic[];
}