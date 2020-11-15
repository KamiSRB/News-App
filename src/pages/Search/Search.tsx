import { globalTranslations, namespaces, useTranslate } from '@translations';
import React, { useCallback, useContext, useState } from 'react';
import SearchInput from '../../components/SearchInput';
import ArticlesGrid from '../../components/ArticlesGrid';
import articles from '../../components/ArticlesGrid/mock-data/articles.mock';
import SectionHeadingText from '../../components/SectionHeadingText';
import { NewsApplicationContext } from '../../context/newsAppContext';
import { StyledNewsPageWrapper } from '../TopNews/TopNews.styles';
import { StyledSearchInputWrapper } from './Search.styles';

const Search: React.FC = () => {
  const [foundArticles, setFoundArticles] = useState(articles);
  const translate = useTranslate(namespaces.global);
  const { selectedCountry } = useContext(NewsApplicationContext);

  const handleSearchInputChange = useCallback((input: string) => {
    const updateArticlesList = articles.filter((article) =>
      `${article.title} ${article.description} ${article.content}`
        .toLowerCase()
        .includes(input.toLowerCase())
    );

    setFoundArticles(updateArticlesList);
  }, []);

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
        <SearchInput onChange={handleSearchInputChange} />
      </StyledSearchInputWrapper>

      <ArticlesGrid articles={foundArticles} articlesDetailRoute="/news" />
    </StyledNewsPageWrapper>
  );
};

export default Search;
