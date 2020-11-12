import styled from '@emotion/styled';
import { Theme } from 'src/types/Theme.types';

interface StyledHeaderButtonWrapperDivProps {
  isActive: boolean;
  isDisabled: boolean;
}

export const StyledHeaderButtonWrapperDiv = styled.div<StyledHeaderButtonWrapperDivProps, Theme>`
  padding: 20px;
  height: 60px;
  box-sizing: border-box;
  border: ${({ theme }) => `solid 1px ${theme.color.border}`};
  width: fit-content;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  background-color: ${({ theme }) => theme.color.nav};
  ${({ isActive, theme }) =>
    isActive ? `background-color: ${theme.color.active}; color: ${theme.color.activeLink}` : ''}
  ${({ isDisabled, theme }) =>
    isDisabled
      ? `cursor: not-allowed; background-color: ${theme.color.disabled};`
      : `cursor: pointer; :hover { background-color: ${theme.color.hoverNav}; }`}
`;

export default {
  StyledHeaderButtonWrapperDiv,
};
