import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { screenBreakpoints } from '../../constants';
import { Theme } from '../../types/Theme.types';

export const StyledHeaderDiv = styled.div<Record<never, never>, Theme>`
  min-height: 60px;
  width: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: ${({ theme }) => theme.color.foreground};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  border: ${({ theme }) => `solid 1px ${theme.color.border}`};
  z-index: 999;
`;

export const StyledHeaderButtonGroupDiv = styled.div`
  @media (max-width: ${screenBreakpoints.medium}px) {
    margin: 10px auto;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
`;
