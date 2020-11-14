import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Theme } from '../../types/Theme.types';

export const StyledAccordionWrapperDiv = styled.div`
  height: fit-content;
  width: 100%;
`;

export const StyledAccordionHeadingDiv = styled.div<Record<never, never>, Theme>`
  width: 100%;
  height: 1.75em;
  font-size: 1.6em;
  padding: 0.37em;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.hoverNav};
`;

export const StyledAccordionTitleLink = styled(Link)<Record<never, never>, Theme>`
  text-decoration: none;
  color: ${({ theme }) => theme.color.border};

  :hover {
    color: ${({ theme }) => theme.color.hoverLink};
  }
`;

interface StyledAccordionContentWrapperDivProps {
  isOpen: boolean;
  height: number;
}

export const StyledAccordionContentWrapperDiv = styled.div<
  StyledAccordionContentWrapperDivProps,
  Theme
>`
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.nav};
  height: ${({ isOpen, height }) => (isOpen ? `${height}px` : 0)};
  transition: ease 1s;
`;

export const StyledAccordionContentDiv = styled.div`
  width: 100%;
  height: fit-content;
`;

export const StyledExpandCollapseDiv = styled.div`
  font-weight: 900;
  float: right;
  cursor: pointer;
`;
