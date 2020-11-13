import styled from '@emotion/styled';
import { Theme } from '../../types/Theme.types';

export const StyledSearchWrapperDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledSearchInput = styled.input<Record<never, never>, Theme>`
  flex-basis: 500px;
  flex-grow: 0;
  flex-shrink: 1;
  font-size: 1.5em;
  background-color: ${({ theme }) => theme.color.nav};
`;

export default { StyledSearchWrapperDiv };
