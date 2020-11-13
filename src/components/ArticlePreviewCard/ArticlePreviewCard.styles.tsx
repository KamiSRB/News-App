import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { Theme } from '../../types/Theme.types';

export const StyledCardDiv = styled.div<Record<never, never>, Theme>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  height: 300px;
  border: ${({ theme }) => `solid 1px ${transparentize(0.6)(theme.color.border)}`};
  border-radius: 5%;
  padding: 20px;
  font-family: ${({ theme }) => theme.fontFamily.sansSerif};
  cursor: pointer;
  overflow: hidden;

  :hover {
    box-shadow: ${({ theme }) => `1px 1px 10px ${transparentize(0.8)(theme.color.border)}`};
  }
`;

export const StyledTitleDiv = styled.div<Record<never, never>, Theme>`
  flex-basis: 10%;
  flex-grow: 1;
  flex-shrink: 0;
  font-weight: bold;

  :hover {
    color: ${({ theme }) => theme.color.hoverLink};
  }
`;

export const StyledDescriptionDiv = styled.div<Record<never, never>, Theme>`
  flex-basis: 20%;
  flex-grow: 1;
  flex-shrink: 1;
  position: relative;
  overflow: hidden;
  text-align: justify;

  :after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.2em;
    background: ${({ theme }) =>
      `linear-gradient(to right, ${transparentize(1)(theme.color.background)}, ${transparentize(0)(
        theme.color.background
      )} 80%)`};
  }
`;

export const StyledPreviewImg = styled.img`
  flex-basis: 60%;
  flex-shrink: 2;
  flex-grow: 0;
  width: 100%;
  min-height: 0px;
  object-fit: cover;
  padding: 5px 0px;
`;

export const StyledMoreLinkDiv = styled.div<Record<never, never>, Theme>`
  text-align: right;
  flex-basis: 10%;
  flex-shrink: 0%;
  padding-top: 10px;

  :hover {
    color: ${({ theme }) => theme.color.hoverLink};
  }
`;
