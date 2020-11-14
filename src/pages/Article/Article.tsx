import React from 'react';
import articles from '../../components/ArticlesGrid/mock-data/articles.mock';
import ArticleComponent from '../../components/Article';

const Article: React.FC = () => {
  const article = articles[0];

  return (
    <ArticleComponent
      title={article.title}
      imageSrc={article.urlToImage}
      description={article.description}
      content={article.content}
    />
  );
};

export default Article;
