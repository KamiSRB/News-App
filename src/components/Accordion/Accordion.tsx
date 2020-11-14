import { useTheme } from 'emotion-theming';
import React, { PropsWithChildren, useRef, useState } from 'react';
import { Theme } from '../../types/Theme.types';
import {
  StyledAccordionContentDiv,
  StyledAccordionContentWrapperDiv,
  StyledAccordionHeadingDiv,
  StyledAccordionWrapperDiv,
  StyledExpandCollapseDiv,
  StyledAccordionTitleLink,
} from './Accordion.styles';

export interface AccordionProps {
  title: string;
  titleLinkRoute?: string;
}

const Accordion: React.FC<PropsWithChildren<AccordionProps>> = ({
  title,
  titleLinkRoute,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const theme = useTheme() as Theme;

  return (
    <StyledAccordionWrapperDiv>
      <StyledAccordionHeadingDiv theme={theme}>
        {
          titleLinkRoute ? (
            <StyledAccordionTitleLink to={titleLinkRoute}>{title}</StyledAccordionTitleLink>
          ) : (
            title
          )
          // TODO: Style icons better
        }
        <StyledExpandCollapseDiv
          onClick={() => setIsOpen((opened) => !opened)}
          data-testid="accordion-expand-icon"
        >
          {isOpen ? '-' : '+'}
        </StyledExpandCollapseDiv>
      </StyledAccordionHeadingDiv>
      <StyledAccordionContentWrapperDiv
        isOpen={isOpen}
        height={contentRef.current?.clientHeight ?? 0}
        theme={theme}
        data-testid="accordion-panel"
      >
        <StyledAccordionContentDiv ref={contentRef}>{children}</StyledAccordionContentDiv>
      </StyledAccordionContentWrapperDiv>
    </StyledAccordionWrapperDiv>
  );
};

export default Accordion;
