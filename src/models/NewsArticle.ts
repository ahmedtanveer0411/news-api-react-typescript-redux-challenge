export interface NewsArticle {
  title: string;
  url: string;
  urlToImage: string;
  content: string;
  author: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

export interface NewsState {
  search: { term: string };
  news: { items: NewsArticle[] } | null;
}

export interface ActionType {
  type: String;
  news: NewsArticle[];
}
