import { globalTranslations, namespaces, useTranslate } from '@translations';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { getArticlesByQuery } from '@clients';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import SearchInput from '../../components/SearchInput';
import ArticlesGrid from '../../components/ArticlesGrid';
import SectionHeadingText from '../../components/SectionHeadingText';
import { NewsApplicationContext } from '../../context/newsAppContext';
import { StyledNewsPageWrapper } from '../TopNews/TopNews.styles';
import { StyledSearchInputWrapper } from './Search.styles';
import { Article } from '../../types/Article.types';
import { DEFAULT_PAGE_SIZE, SEARCH_DEBOUNCE_MILISECONDS } from '../../constants';
import usePagination from '../../hooks/usePagination';

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const translate = useTranslate(namespaces.global);
  const { selectedCountry } = useContext(NewsApplicationContext);
  const history = useHistory();
  const match = useRouteMatch();
  const { search } = useLocation();

  const [foundArticles, setFoundArticles] = useState<Article[]>([]);
  const {
    pageNo,
    pagesCount,
    setPageNo,
    setPagesCount,
    loadPreviousPage,
    loadNextPage,
  } = usePagination();

  // Update the URL query parameter on input change
  const handleSearchInputChange = useCallback(
    (input: string) => {
      history.push(`${match.path}?q=${input}`);
    },
    [history, match.path]
  );

  // Set query using the URL
  useEffect(() => {
    setPageNo(1);
    const searchQuery = new URLSearchParams(search).get('q');
    setQuery(decodeURIComponent(searchQuery || ''));
  }, [search, setPageNo]);

  // Fetch/refetch results on query/country/page change
  useEffect(() => {
    getArticlesByQuery(selectedCountry.value, query, pageNo, DEFAULT_PAGE_SIZE)
      .then((response) => {
        setFoundArticles(response.articles);
        setPagesCount(Math.ceil(response.totalResults / DEFAULT_PAGE_SIZE));
      })
      .catch(() => setFoundArticles([]));
  }, [query, selectedCountry.value, pageNo, setPagesCount]);

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
          placeholder={query}
        />
      </StyledSearchInputWrapper>

      <ArticlesGrid
        articles={foundArticles}
        articlesDetailRoute="/news"
        isFirstPage={pageNo === 1}
        isLastPage={!pagesCount || pageNo === pagesCount}
        onLoadNextPage={loadNextPage}
        onLoadPreviousPage={loadPreviousPage}
      />
    </StyledNewsPageWrapper>
  );
};

export default Search;
