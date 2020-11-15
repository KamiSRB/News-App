import { MOCK_ARTICLE_IMAGE } from '../../../constants';
import { Article } from '../../../types/Article.types';

const articleMock: Article = {
  title: 'Article title',
  description: 'Article title',
  urlToImage: MOCK_ARTICLE_IMAGE,
  content: '',
  url: '',
};

const articles: Article[] = [
  { ...articleMock, url: `article-${Math.random()}` },
  { ...articleMock, url: `article-${Math.random()}` },
  { ...articleMock, url: `article-${Math.random()}` },
  { ...articleMock, url: `article-${Math.random()}` },
  { ...articleMock, url: `article-${Math.random()}` },
  { ...articleMock, url: `article-${Math.random()}` },
  { ...articleMock, url: `article-${Math.random()}` },
  { ...articleMock, url: `article-${Math.random()}` },
  { ...articleMock, url: `article-${Math.random()}` },
];

export default articles;
