import React, { useCallback } from 'react';
import { useTranslate, globalTranslations, namespaces } from '@translations';
import { useTheme } from 'emotion-theming';
import { useHistory } from 'react-router';
import {
  StyledCardDiv,
  StyledTitleDiv,
  StyledPreviewImg,
  StyledMoreLinkDiv,
  StyledDescriptionDiv,
  StyledMoreLink,
} from './ArticlePreviewCard.styles';
import { Theme } from '../../types/Theme.types';

export interface ArticlePreviewCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  articleRoute?: string;
  onClick?: () => void;
}

const ArticlePreviewCard: React.FC<ArticlePreviewCardProps> = ({
  title,
  description,
  imageSrc,
  articleRoute,
  onClick,
}) => {
  const theme = useTheme() as Theme;
  const translate = useTranslate(namespaces.global);
  const history = useHistory();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!articleRoute && !onClick) return;
      event.stopPropagation();

      if (onClick) {
        onClick();
      }

      if (articleRoute) {
        history.push(articleRoute, { parentRoute: history.location.pathname });
      }
    },
    [articleRoute, history, onClick]
  );

  const handleMoreLinkClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      if (onClick) onClick();
    },
    [onClick]
  );

  const readMoreText = `${translate(globalTranslations.DivReadMoreText)} >`;

  return (
    <StyledCardDiv onClick={handleClick} data-testid="article-preview" theme={theme}>
      <StyledTitleDiv theme={theme}>{title}</StyledTitleDiv>
      <StyledPreviewImg src={imageSrc} alt="" data-testid="article-preview-img" theme={theme} />
      <StyledDescriptionDiv theme={theme}>{description}</StyledDescriptionDiv>
      {articleRoute ? (
        <StyledMoreLink
          theme={theme}
          to={{ pathname: articleRoute, state: { parentRoute: history.location.pathname } }}
          data-testid="article-link"
          onClick={handleMoreLinkClick}
        >
          {readMoreText}
        </StyledMoreLink>
      ) : (
        <StyledMoreLinkDiv theme={theme} onClick={onClick}>
          {readMoreText}
        </StyledMoreLinkDiv>
      )}
    </StyledCardDiv>
  );
};

export default React.memo(ArticlePreviewCard);
