import styled from '@emotion/styled';
import { Theme } from '../../types/Theme.types';

export const StyledGridDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const StyledArticleWrapperDiv = styled.div`
  margin-bottom: 50px;
`;

export const StyledNavigationDiv = styled.div`
  width: 100%;
  height: 1.5em;
`;

export const StyledNavigationArrowDiv = styled.div<Record<never, never>, Theme>`
  color: ${({ theme }) => theme.color.border};
  font-weight: bold;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.color.hoverLink};
  }
`;

export const StyledLeftArrowDiv = styled(StyledNavigationArrowDiv)`
  float: left;
`;

export const StyledRightArrowDiv = styled(StyledNavigationArrowDiv)`
  float: right;
`;
