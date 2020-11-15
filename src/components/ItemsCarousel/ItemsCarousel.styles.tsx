import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { Theme } from '../../types/Theme.types';

export const StyledCarouselWrapperDiv = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  overflow: hidden;
`;

interface StyledCarouselFrameDivProps {
  offset: number;
}

export const StyledCarouselFrameDiv = styled.div<StyledCarouselFrameDivProps>`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: row;
  transform: ${({ offset }) => `translate3d(${offset}px, 0px, 0px)`};
  transition: transform 0.5s ease;
`;

interface StyledCarouselItemDivProps {
  spacing: number;
  width: number;
}

export const StyledCarouselItemDiv = styled.div<StyledCarouselItemDivProps>`
  margin-left: ${({ spacing }) => `${spacing}px`};
  flex-basis: ${({ width }) => `${width}px`};
  flex-shrink: 0;
  flex-grow: 0;
  height: fit-content;
`;

interface StyledArrowProp {
  top: number;
}

const StyledArrowDiv = styled.div<StyledArrowProp, Theme>`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.handler};
  border-radius: 50%;
  color: ${({ theme }) => theme.color.handlerContent};
  padding-left: 6px;
  padding-top: 2px;
  box-sizing: border-box;
  font-weight: bold;
  position: absolute;
  top: ${({ top }) => `${top}px`};
  z-index: 1;

  :hover {
    box-shadow: ${({ theme }) => `1px 1px 10px ${transparentize(0.5)(theme.color.border)}`};
  }
`;

export const StyledLeftArrowDiv = styled(StyledArrowDiv)<StyledArrowProp>`
  left: 10px;
`;

export const StyledRightArrowDiv = styled(StyledArrowDiv)`
  right: 10px;
`;

export const StyledLibraryCarouselItemWrapper = styled.div`
  padding: 10px;
`;
