import { AxiosResponse } from 'axios';
import { DEFAULT_PAGE_SIZE } from '../constants';
import mockedArticles from '../components/ArticlesGrid/mock-data/articles.mock';
import { Article, ArticlesResponse } from '../types/Article.types';
import newsAxiosInstance from './newsAxiosInstance';

const TOP_HEADLINES_ROUTE = '/top-headlines';

interface NewsApiResponseData {
  status: 'ok' | 'error';
  code?: string;
  totalResults: number;
  articles: Article[];
}

// Used only for the mocked data
const shuffleMockedData = ([...array]) => {
  let m = array.length;
  while (m) {
    // eslint-disable-next-line no-plusplus
    const i = Math.floor(Math.random() * m--);
    // eslint-disable-next-line no-param-reassign
    [array[m], array[i]] = [array[i], array[m]];
  }
  return array;
};

// Used only for the mocked data
const getMockedPage = (articles: Article[], page: number, pageSize: number): Article[] =>
  articles.slice((page - 1) * pageSize, page * pageSize);

const validateResponseData = (
  data: NewsApiResponseData,
  rejectCallback: (reason?: Error) => void
) => {
  if (data.status === 'error') {
    rejectCallback(Error(data.code));
  }
};

const handleArticlesResponse = (
  response: AxiosResponse<NewsApiResponseData>,
  resolve: (response: ArticlesResponse) => void,
  reject: (reason?: Error) => void
): void => {
  const { data } = response;
  validateResponseData(data, reject);

  const { articles, totalResults } = data;
  resolve({ articles, totalResults });
};

const handleSingleArticleResponse = (
  response: AxiosResponse<NewsApiResponseData>,
  resolve: (articles: Article) => void,
  reject: (reason?: Error) => void
): void => {
  const { data } = response;
  validateResponseData(data, reject);

  if (!data.totalResults || !data.articles.length) reject(Error('Not found'));

  resolve(data.articles[0]);
};

export const getTopNews = (
  country: string,
  page = 1,
  pageSize = DEFAULT_PAGE_SIZE
): Promise<ArticlesResponse> =>
  new Promise((resolve, reject) => {
    if (
      process.env.REACT_APP_USE_MOCK_DATA?.toLowerCase() === 'true' ||
      process.env.REACT_APP_USE_MOCK_DATA === '1'
    ) {
      const result = getMockedPage(mockedArticles, page, pageSize);
      resolve({ articles: shuffleMockedData(result), totalResults: mockedArticles.length });
      return;
    }

    newsAxiosInstance
      .get(TOP_HEADLINES_ROUTE, { params: { country, page, pageSize } })
      .then((response) => handleArticlesResponse(response, resolve, reject))
      .catch((error) => reject(Error(error.response)));
  });

export const getArticle = (title: string): Promise<Article> =>
  new Promise((resolve, reject) => {
    if (
      process.env.REACT_APP_USE_MOCK_DATA?.toLowerCase() === 'true' ||
      process.env.REACT_APP_USE_MOCK_DATA === '1'
    ) {
      resolve(mockedArticles[0]);
      return;
    }

    newsAxiosInstance
      .get(TOP_HEADLINES_ROUTE, { params: { q: title } })
      .then((response) => handleSingleArticleResponse(response, resolve, reject))
      .catch((error) => reject(Error(error.response)));
  });

export const getArticlesByCategory = (
  country: string,
  category: string,
  page = 1,
  pageSize = DEFAULT_PAGE_SIZE
): Promise<ArticlesResponse> =>
  new Promise((resolve, reject) => {
    if (
      process.env.REACT_APP_USE_MOCK_DATA?.toLowerCase() === 'true' ||
      process.env.REACT_APP_USE_MOCK_DATA === '1'
    ) {
      const result = getMockedPage(mockedArticles, page, pageSize);
      resolve({ articles: shuffleMockedData(result), totalResults: mockedArticles.length });
      return;
    }

    newsAxiosInstance
      .get(TOP_HEADLINES_ROUTE, { params: { country, category, page, pageSize } })
      .then((response) => handleArticlesResponse(response, resolve, reject))
      .catch((error) => reject(Error(error.response)));
  });

export const getArticlesByQuery = (
  country: string,
  query: string,
  page = 1,
  pageSize = DEFAULT_PAGE_SIZE
): Promise<ArticlesResponse> =>
  new Promise((resolve, reject) => {
    if (
      process.env.REACT_APP_USE_MOCK_DATA?.toLowerCase() === 'true' ||
      process.env.REACT_APP_USE_MOCK_DATA === '1'
    ) {
      const foundArticles = mockedArticles.filter(
        (article) =>
          article.content?.toLowerCase().includes(query.toLowerCase()) ||
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description.toLowerCase().includes(query.toLowerCase())
      );

      const result = getMockedPage(foundArticles, page, pageSize);
      resolve({ articles: result, totalResults: foundArticles.length });
      return;
    }

    newsAxiosInstance
      .get(TOP_HEADLINES_ROUTE, { params: { country, q: query, page, pageSize } })
      .then((response) => handleArticlesResponse(response, resolve, reject))
      .catch((error) => reject(Error(error.response)));
  });

export default { getTopNews, getArticle, getArticlesByCategory, getArticlesByQuery };
