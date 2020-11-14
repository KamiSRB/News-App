import styled from '@emotion/styled';
import { animated } from 'react-spring';

export const StyledCarouselWrapperDiv = styled.div`
  width: 100%;
  background-color: gray;
  justify-content: space-evenly;
`;

export const StyledCarouselItemDiv = styled(animated.div)`
  position: absolute;
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
