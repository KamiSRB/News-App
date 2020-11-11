import React from 'react';
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
}) => (
  <StyledCardDiv onClick={onClick}>
    <StyledTitleDiv>{title}</StyledTitleDiv>
    <StyledPreviewImg src={imageSrc} alt="" />
    <StyledDescriptionDiv>{description}</StyledDescriptionDiv>
    <StyledMoreLinkDiv>More &gt;</StyledMoreLinkDiv>
  </StyledCardDiv>
);

export default ArticlePreviewCard;
