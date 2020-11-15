import { globalTranslations, namespaces, useTranslate } from '@translations';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { getArticlesByQuery } from '@clients';
import SearchInput from '../../components/SearchInput';
import ArticlesGrid from '../../components/ArticlesGrid';
import SectionHeadingText from '../../components/SectionHeadingText';
import { NewsApplicationContext } from '../../context/newsAppContext';
import { StyledNewsPageWrapper } from '../TopNews/TopNews.styles';
import { StyledSearchInputWrapper } from './Search.styles';
import { Article } from '../../types/Article.types';
import { SEARCH_DEBOUNCE_MILISECONDS } from '../../constants';

const Search: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [foundArticles, setFoundArticles] = useState<Article[]>([]);
  const translate = useTranslate(namespaces.global);
  const { selectedCountry } = useContext(NewsApplicationContext);

  const handleSearchInputChange = useCallback(setInput, [setInput]);

  // Fetch the results on changes
  useEffect(() => {
    getArticlesByQuery(selectedCountry.value, input)
      .then(setFoundArticles)
      .catch(() => setFoundArticles([]));
  }, [input, selectedCountry.value]);

  return (
    <StyledNewsPageWrapper>
      {
        // TODO: make country title multilangual too
      }
      <SectionHeadingText
        content={`${translate(globalTranslations.SectionHeadingTextSarchContent, {
          country: selectedCountry.title,
        })}:`}
      />

      <StyledSearchInputWrapper>
        <SearchInput
          onChange={handleSearchInputChange}
          debounceInterval={SEARCH_DEBOUNCE_MILISECONDS}
        />
      </StyledSearchInputWrapper>

      <ArticlesGrid articles={foundArticles} articlesDetailRoute="/news" />
    </StyledNewsPageWrapper>
  );
};

export default Search;
