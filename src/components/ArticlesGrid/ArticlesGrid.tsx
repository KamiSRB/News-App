/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useTheme } from 'emotion-theming';
import React, { useCallback } from 'react';
import { generatePath } from 'react-router';
import { Theme } from '../../types/Theme.types';
import { Article } from '../../types/Article.types';
import ArticlePreviewCard from '../ArticlePreviewCard';
import {
  StyledArticleWrapperDiv,
  StyledGridDiv,
  StyledLeftArrowDiv,
  StyledNavigationDiv,
  StyledRightArrowDiv,
} from './ArticlesGrid.styles';

export interface ArticlesGridProp {
  articles: Article[];
  articlesDetailRoute?: string;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  onArticleClick?: (article: Article) => void;
  onLoadPreviousPage?: () => void;
  onLoadNextPage?: () => void;
}

const ArticlesGrid: React.FC<ArticlesGridProp> = ({
  articles,
  articlesDetailRoute,
  isFirstPage = true,
  isLastPage = true,
  onArticleClick,
  onLoadPreviousPage,
  onLoadNextPage,
}) => {
  const theme = useTheme() as Theme;

  const isNavigationVisible =
    (!isFirstPage && onLoadPreviousPage) || (!isLastPage && onLoadNextPage);

  const handleArticleClick = useCallback(
    (article: Article) => () => {
      if (onArticleClick) {
        onArticleClick(article);
      }
    },
    [onArticleClick]
  );

  return (
    <>
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
      {isNavigationVisible && (
        <StyledNavigationDiv>
          {!isFirstPage && (
            <StyledLeftArrowDiv onClick={onLoadPreviousPage} theme={theme}>
              &lt; Previous
            </StyledLeftArrowDiv>
          )}
          {!isLastPage && (
            <StyledRightArrowDiv onClick={onLoadNextPage} theme={theme}>
              Next &gt;
            </StyledRightArrowDiv>
          )}
        </StyledNavigationDiv>
      )}
    </>
  );
};

export default React.memo(ArticlesGrid);
