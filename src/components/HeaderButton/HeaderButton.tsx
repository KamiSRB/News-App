import React, { PropsWithChildren, useCallback } from 'react';
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
  const emptyCallback = useCallback(() => undefined, []);

  return (
    <StyledHeaderButtonWrapperDiv
      onClick={isDisabled ? emptyCallback : onClick}
      isActive={isActive}
      isDisabled={isDisabled}
      data-testid="header-button"
    >
      {children || text}
    </StyledHeaderButtonWrapperDiv>
  );
};

export default HeaderButton;
