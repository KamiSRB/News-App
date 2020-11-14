import styled from '@emotion/styled';

export const StyledCarouselWrapperDiv = styled.div`
  width: 100%;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const StyledCarouselItemDiv = styled.div`
  flex-basis: 15%;
  flex-shrink: 0;
  flex-grow: 0;
  background-color: brown;
  height: 200px;
`;

export const StyledLeftArrowDiv = styled.div`
  float: left;
  cursor: pointer;
`;

export const StyledRightArrowDiv = styled.div`
  float: right;
  cursor: pointer;
`;
