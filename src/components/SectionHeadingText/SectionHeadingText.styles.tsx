import styled from '@emotion/styled';
import { Theme } from '../../types/Theme.types';

interface StyledHeadingTextH1Props {
  isSerif: boolean;
}

export const StyledHeadingTextH1 = styled.h1<StyledHeadingTextH1Props, Theme>`
  font-family: ${({ theme, isSerif }) =>
    isSerif ? theme.fontFamily.serif : theme.fontFamily.sansSerif};
`;

export default {
  StyledHeadingTextH1,
};
