import { namespaces, useTranslate, globalTranslations } from '@translations';
import { useTheme } from 'emotion-theming';
import React, { ChangeEvent } from 'react';
import { Theme } from '../../types/Theme.types';
import { StyledSearchInput, StyledSearchWrapperDiv } from './SearchInput.styles';

export interface SearchInputProps {
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  const translate = useTranslate(namespaces.global);
  const theme = useTheme() as Theme;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledSearchWrapperDiv>
      <StyledSearchInput
        type="text"
        placeholder={translate(globalTranslations.InputSearchPlaceholder)}
        theme={theme}
        onChange={handleInputChange}
        data-testid="search-input"
      />
    </StyledSearchWrapperDiv>
  );
};

export default SearchInput;
