import React from 'react';
import { Article } from 'src/types/Article.types';
import ArticlePreviewCard from '../ArticlePreviewCard';
import { StyledArticleWrapperDiv, StyledGridDiv } from './ArticlesGrid.styles';

export interface ArticlesGridProp {
  articles: Article[];
}

const ArticlesGrid: React.FC<ArticlesGridProp> = ({ articles }) => {
  return (
    <StyledGridDiv>
      {articles.map((article) => (
        <StyledArticleWrapperDiv key={article.id}>
          <ArticlePreviewCard
            title={article.title}
            description={article.description}
            imageSrc={article.urlToImage}
          />
        </StyledArticleWrapperDiv>
      ))}
    </StyledGridDiv>
  );
};

export default ArticlesGrid;
