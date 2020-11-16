import styled from '@emotion/styled';
import { Theme } from '../../types/Theme.types';
import { screenBreakpoints } from '../../constants';

export const StyledCategoriesWrapperDiv = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${screenBreakpoints.medium}px) {
    margin: 20px;
  }
`;

export const StyledHeadingWrapperDiv = styled.div`
  flex-basis: 10%;
  flex-shrink: 0;
  flex-grow: 0;
`;

export const StyledAccordionsFrameDiv = styled.div<Record<never, never>, Theme>`
  flex-basis: 90%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.nav};
`;

export const StyledCategoryAccordionWraperDiv = styled.div`
  margin-bottom: 5px;
`;

export const StyledItemsCarouselWrapperDiv = styled.div`
  padding: 20px 0px;
`;
