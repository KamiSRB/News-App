import { AxiosResponse } from 'axios';
import { Article } from 'src/types/Article.types';
import newAxiosInstance from './newAxiosInstance';

interface NewsApiResponseData {
  status: 'ok' | 'error';
  code?: string;
  articles: Article[];
}

export const getTopNews = (country: string): Promise<Article[]> =>
  new Promise((resolve, reject) => {
    newAxiosInstance
      .get('/top-headlines', { params: { country } })
      .then((repsonse: AxiosResponse<NewsApiResponseData>) => {
        const { data } = repsonse;

        if (data.status === 'error') {
          reject(data.code);
        }

        resolve(data.articles);
      })
      .catch((error) => reject(error.response));
  });

export default { getTopNews };
