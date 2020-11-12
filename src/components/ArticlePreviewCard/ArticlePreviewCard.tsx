import React from 'react';
import { useTranslate, globalTranslations, namespaces } from '@translations';
import { useTheme } from '@emotion/react';
import {
  StyledCardDiv,
  StyledTitleDiv,
  StyledPreviewImg,
  StyledMoreLinkDiv,
  StyledDescriptionDiv,
} from './ArticlePreviewCard.styles';
import { Theme } from '../../types/Theme.types';

export interface ArticlePreviewCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  onClick?: () => void;
}

const ArticlePreviewCard: React.FC<ArticlePreviewCardProps> = ({
  title,
  description,
  imageSrc,
  onClick,
}) => {
  const theme = useTheme() as Theme;
  const translate = useTranslate(namespaces.global);

  return (
    <StyledCardDiv onClick={onClick} data-testid="article-preview" theme={theme}>
      <StyledTitleDiv theme={theme}>{title}</StyledTitleDiv>
      <StyledPreviewImg src={imageSrc} alt="" data-testid="article-preview-img" theme={theme} />
      <StyledDescriptionDiv theme={theme}>{description}</StyledDescriptionDiv>
      <StyledMoreLinkDiv theme={theme}>
        {translate(globalTranslations.DivReadMoreText)} &gt;
      </StyledMoreLinkDiv>
    </StyledCardDiv>
  );
};

export default ArticlePreviewCard;
