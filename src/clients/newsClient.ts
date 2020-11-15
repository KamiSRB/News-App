import { AxiosResponse } from 'axios';
import { Article } from 'src/types/Article.types';
import newsAxiosInstance from './newsAxiosInstance';

const TOP_HEADLINES_ROUTE = '/top-headlines';

interface NewsApiResponseData {
  status: 'ok' | 'error';
  code?: string;
  totalResults: number;
  articles: Article[];
}

const validateResponseData = (
  data: NewsApiResponseData,
  rejectCallback: (reason?: Error) => void
) => {
  if (data.status === 'error') {
    rejectCallback(Error(data.code));
  }
};

export const getTopNews = (country: string): Promise<Article[]> =>
  new Promise((resolve, reject) => {
    newsAxiosInstance
      .get(TOP_HEADLINES_ROUTE, { params: { country } })
      .then((repsonse: AxiosResponse<NewsApiResponseData>) => {
        const { data } = repsonse;
        validateResponseData(data, reject);

        resolve(data.articles);
      })
      .catch((error) => reject(error.response));
  });

export const getArticle = (title: string): Promise<Article> =>
  new Promise((resolve, reject) => {
    newsAxiosInstance
      .get(TOP_HEADLINES_ROUTE, { params: { q: title } })
      .then((response: AxiosResponse<NewsApiResponseData>) => {
        const { data } = response;
        validateResponseData(data, reject);

        if (!data.totalResults || !data.articles.length) reject(Error('Not found'));

        resolve(data.articles[0]);
      });
  });

export const getArticlesForCategory = (country: string, category: string): Promise<Article[]> =>
  new Promise((resolve, reject) => {
    newsAxiosInstance
      .get(TOP_HEADLINES_ROUTE, { params: { country, category } })
      .then((response: AxiosResponse<NewsApiResponseData>) => {
        const { data } = response;
        validateResponseData(data, reject);

        resolve(data.articles);
      });
  });

export default { getTopNews, getArticle, getArticlesForCategory };
