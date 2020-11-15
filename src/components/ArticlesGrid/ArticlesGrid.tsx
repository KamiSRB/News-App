import React, { useCallback } from 'react';
import { generatePath } from 'react-router';
import { Article } from '../../types/Article.types';
import ArticlePreviewCard from '../ArticlePreviewCard';
import { StyledArticleWrapperDiv, StyledGridDiv } from './ArticlesGrid.styles';

export interface ArticlesGridProp {
  articles: Article[];
  articlesDetailRoute?: string;
  onArticleClick?: (article: Article) => void;
}

const ArticlesGrid: React.FC<ArticlesGridProp> = ({
  articles,
  articlesDetailRoute,
  onArticleClick,
}) => {
  const handleArticleClick = useCallback(
    (article: Article) => () => {
      if (onArticleClick) {
        onArticleClick(article);
      }
    },
    [onArticleClick]
  );

  return (
    <StyledGridDiv>
      {articles.map((article) => (
        <StyledArticleWrapperDiv key={article.url} data-testid="article">
          <ArticlePreviewCard
            title={article.title}
            description={article.description}
            imageSrc={article.urlToImage}
            onClick={handleArticleClick(article)}
            articleRoute={
              articlesDetailRoute
                ? `${generatePath(`${articlesDetailRoute}/:title`, {
                    title: article.title,
                  })}`
                : undefined
            }
          />
        </StyledArticleWrapperDiv>
      ))}
    </StyledGridDiv>
  );
};

export default React.memo(ArticlesGrid);
