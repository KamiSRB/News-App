import styled from '@emotion/styled';

interface StyledHeaderButtonWrapperDivProps {
  isActive: boolean;
  isDisabled: boolean;
}

export const StyledHeaderButtonWrapperDiv = styled.div<StyledHeaderButtonWrapperDivProps>`
  padding: 20px;
  height: 60px;
  box-sizing: border-box;
  border: solid 1px black;
  width: fit-content;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  background-color: #dddddd;
  ${({ isActive }) => (isActive ? 'background-color: #9c9c9c; color: white;' : '')}
  ${({ isDisabled }) =>
    isDisabled
      ? `cursor: not-allowed; background-color: #ff6347;`
      : 'cursor: pointer; :hover { background-color: #c7c7c7; }'}
`;

export default {
  StyledHeaderButtonWrapperDiv,
};
