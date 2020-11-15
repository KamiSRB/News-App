import React from 'react';
import { generatePath } from 'react-router';
import { Article } from '../../types/Article.types';
import ArticlePreviewCard from '../ArticlePreviewCard';
import { StyledArticleWrapperDiv, StyledGridDiv } from './ArticlesGrid.styles';

export interface ArticlesGridProp {
  articles: Article[];
  articlesDetailRoute?: string;
}

const ArticlesGrid: React.FC<ArticlesGridProp> = ({ articles, articlesDetailRoute }) => {
  return (
    <StyledGridDiv>
      {articles.map((article) => (
        <StyledArticleWrapperDiv key={article.id} data-testid="article">
          <ArticlePreviewCard
            title={article.title}
            description={article.description}
            imageSrc={article.urlToImage}
            articleRoute={
              articlesDetailRoute
                ? `${generatePath(`${articlesDetailRoute}/:articleId`, { articleId: article.id })}`
                : undefined
            }
          />
        </StyledArticleWrapperDiv>
      ))}
    </StyledGridDiv>
  );
};

export default React.memo(ArticlesGrid);
