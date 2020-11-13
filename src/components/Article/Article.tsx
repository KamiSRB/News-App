import React from 'react';
import { useTheme } from 'emotion-theming';
import { Theme } from 'src/types/Theme.types';
import { namespaces, useTranslate, globalTranslations } from '@translations';
import {
  StyledArticleImg,
  StyledArticleWrapperDiv,
  StyledBackLink,
  StyledContentDiv,
} from './Article.styles';

export interface ArticleProps {
  title: string;
  imageSrc?: string;
  description: string;
  content: string;
  backLinkRoute?: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  imageSrc,
  description,
  content,
  backLinkRoute,
}) => {
  const translate = useTranslate(namespaces.global);
  const theme = useTheme() as Theme;

  return (
    <StyledArticleWrapperDiv theme={theme}>
      <h1>{title}</h1>
      {imageSrc && <StyledArticleImg src={imageSrc} alt="" data-testid="article-image" />}

      <StyledContentDiv>
        <p>{description}</p>
        <p>{content}</p>
      </StyledContentDiv>

      {backLinkRoute && (
        <StyledBackLink to={backLinkRoute} data-testid="back-link">
          &lt; {translate(globalTranslations.LinkBackToListText)}
        </StyledBackLink>
      )}
    </StyledArticleWrapperDiv>
  );
};

export default Article;
