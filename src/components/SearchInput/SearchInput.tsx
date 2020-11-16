import { namespaces, useTranslate, globalTranslations } from '@translations';
import { useTheme } from 'emotion-theming';
import React, { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce/lib';
import { Theme } from '../../types/Theme.types';
import { StyledSearchInput, StyledSearchWrapperDiv } from './SearchInput.styles';

export interface SearchInputProps {
  onChange: (value: string) => void;
  debounceInterval?: number;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onChange,
  debounceInterval = 200,
  placeholder,
}) => {
  const translate = useTranslate(namespaces.global);
  const theme = useTheme() as Theme;
  const { callback: debouncedOnChange } = useDebouncedCallback(onChange, debounceInterval);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    debouncedOnChange(event.target.value);
  };

  return (
    <StyledSearchWrapperDiv>
      <StyledSearchInput
        type="text"
        placeholder={placeholder || translate(globalTranslations.InputSearchPlaceholder)}
        theme={theme}
        onChange={handleInputChange}
        data-testid="search-input"
      />
    </StyledSearchWrapperDiv>
  );
};

export default React.memo(SearchInput);
