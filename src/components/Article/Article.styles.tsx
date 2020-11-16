import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { screenBreakpoints } from '../../constants';
import { Theme } from '../../types/Theme.types';

export const StyledArticleWrapperDiv = styled.div<Record<never, never>, Theme>`
  font-family: ${({ theme }) => theme.fontFamily.sansSerif};

  @media (max-width: ${screenBreakpoints.medium - 1}px) {
    padding: 5px;
    width: calc(100% - 10px);
  }

  @media (min-width: ${screenBreakpoints.medium}px) and (max-width: ${screenBreakpoints.large -
    1}px) {
    padding: 50px;
    width: calc(100% - 100px);
  }

  @media (min-width: ${screenBreakpoints.large}px) {
    width: calc(100% - 400px);
    padding: 100px;
  }
`;

export const StyledArticleImg = styled.img`
  max-width: 100%;
  max-height: 400px;
`;

export const StyledContentDiv = styled.div<Record<never, never>, Theme>`
  width: 100%;
  text-align: justify;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 50px 0px;
`;

export const StyledBackLink = styled(Link)<Record<never, never>, Theme>`
  color: ${({ theme }) => theme.color.border};
  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.color.hoverLink};
  }
`;
