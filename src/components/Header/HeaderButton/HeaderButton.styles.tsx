import styled from '@emotion/styled';
import { Theme } from 'src/types/Theme.types';

interface StyledHeaderButtonWrapperDivProps {
  isActive: boolean;
  isDisabled: boolean;
}

export const StyledHeaderButtonWrapperDiv = styled.div<StyledHeaderButtonWrapperDivProps, Theme>`
  display: inline-block;
  padding: 20px;
  height: 60px;
  box-sizing: border-box;
  border: ${({ theme }) => `solid 1px ${theme.color.border}`};
  width: fit-content;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.color.border};
  vertical-align: top;
  font-family: ${({ theme }) => theme.fontFamily.sansSerif};

  background-color: ${({ theme }) => theme.color.foreground};
  ${({ isActive, theme }) =>
    isActive ? `background-color: ${theme.color.active}; color: ${theme.color.activeLink};` : ''}
  ${({ isDisabled, theme }) =>
    isDisabled
      ? `cursor: not-allowed; background-color: ${theme.color.disabled};`
      : `cursor: pointer; :hover { background-color: ${theme.color.foregroundHover}; };`}
`;

export default {
  StyledHeaderButtonWrapperDiv,
};
