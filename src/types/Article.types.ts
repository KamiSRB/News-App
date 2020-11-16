export interface Article {
  title: string;
  urlToImage: string;
  description: string;
  content?: string;
  url: string;
}

export interface ArticlesResponse {
  totalResults: number;
  articles: Article[];
}
