import React, { PropsWithChildren, useCallback } from 'react';
import { useTheme } from 'emotion-theming';
import { Theme } from 'src/types/Theme.types';
import { StyledHeaderButtonWrapperDiv } from './HeaderButton.styles';

interface Props {
  text?: string;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}

export type HeaderButtonProps = PropsWithChildren<Props>;

const HeaderButton: React.FC<HeaderButtonProps> = ({
  text,
  onClick,
  isActive = false,
  isDisabled = false,
  children,
}) => {
  const theme = useTheme() as Theme;
  const emptyCallback = useCallback(() => undefined, []);

  return (
    <StyledHeaderButtonWrapperDiv
      onClick={isDisabled ? emptyCallback : onClick}
      isActive={isActive}
      isDisabled={isDisabled}
      data-testid="header-button"
      theme={theme}
    >
      {children || text}
    </StyledHeaderButtonWrapperDiv>
  );
};

export default HeaderButton;
