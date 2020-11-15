import { useTheme } from 'emotion-theming';
import React from 'react';
import { Theme } from '../../types/Theme.types';
import { StyledHeadingTextH1 } from './SectionHeadingText.styles';

export interface SectionHeadingTextProps {
  content: string;
  variant?: 'serif' | 'sans-serif';
}

const SectionHeadingText: React.FC<SectionHeadingTextProps> = ({
  content,
  variant = 'sans-serif',
}) => {
  const theme = useTheme() as Theme;

  return (
    <StyledHeadingTextH1 isSerif={variant === 'serif'} theme={theme} data-testid="heading-text">
      {content}
    </StyledHeadingTextH1>
  );
};

export default React.memo(SectionHeadingText);
