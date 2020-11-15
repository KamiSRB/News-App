import styled from '@emotion/styled';
import { animated } from 'react-spring';

export const StyledCarouselWrapperDiv = styled.div`
  width: 100%;
  background-color: gray;
  justify-content: space-evenly;
`;

export const StyledCarouselItemDiv = styled(animated.div)`
  position: absolute;
  overflow: hidden;
`;

const StyledArrowDiv = styled.div`
  cursor: pointer;
  margin-top: 70px;
  width: 30px;
  height: 30px;
  background-color: darkslategray;
  border-radius: 50%;
  color: darkgray;
  padding-left: 6px;
  padding-top: 2px;
  box-sizing: border-box;
  font-weight: bold;
`;

export const StyledLeftArrowDiv = styled(StyledArrowDiv)`
  float: left;
`;

export const StyledRightArrowDiv = styled(StyledArrowDiv)`
  float: right;
`;

export const StyledLibraryCarouselItemWrapper = styled.div`
  padding: 10px;
`;
