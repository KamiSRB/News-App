import { v4 as uuidv4 } from 'uuid';
import { MOCK_ARTICLE_IMAGE } from '../../../constants';
import { Article } from '../../../types/Article.types';

const articleMock: Article = {
  id: '',
  title: 'Article title',
  description: 'Article title',
  urlToImage: MOCK_ARTICLE_IMAGE,
  content: '',
};

const articles: Article[] = [
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
];

export default articles;
