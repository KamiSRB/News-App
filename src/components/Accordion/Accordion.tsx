import { useTheme } from 'emotion-theming';
import React, { PropsWithChildren, useRef, useState } from 'react';
import useComponentSize from '../../hooks/useComponentSize';
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

  const { height: contentHeight } = useComponentSize(contentRef);

  return (
    <StyledAccordionWrapperDiv>
      <StyledAccordionHeadingDiv theme={theme} isOpen={isOpen}>
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
        height={contentHeight}
        theme={theme}
        data-testid="accordion-panel"
      >
        <StyledAccordionContentDiv ref={contentRef}>{children}</StyledAccordionContentDiv>
      </StyledAccordionContentWrapperDiv>
    </StyledAccordionWrapperDiv>
  );
};

export default React.memo(Accordion);
