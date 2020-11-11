import React from 'react';
import { useTranslate, globalTranslations, namespaces } from '@translations';
import {
  StyledCardDiv,
  StyledTitleDiv,
  StyledPreviewImg,
  StyledMoreLinkDiv,
  StyledDescriptionDiv,
} from './ArticlePreviewCard.styles';

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
  const translate = useTranslate(namespaces.global);

  return (
    <StyledCardDiv onClick={onClick}>
      <StyledTitleDiv>{title}</StyledTitleDiv>
      <StyledPreviewImg src={imageSrc} alt="" />
      <StyledDescriptionDiv>{description}</StyledDescriptionDiv>
      <StyledMoreLinkDiv>{translate(globalTranslations.DivReadMoreText)} &gt;</StyledMoreLinkDiv>
    </StyledCardDiv>
  );
};

export default ArticlePreviewCard;
