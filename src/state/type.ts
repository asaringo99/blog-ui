export interface Article {
  topic: string;
  title: string;
  tags: string[];
  content: string;
  isPrivate: boolean;
  isEdit: boolean;
};

export interface Articles {
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