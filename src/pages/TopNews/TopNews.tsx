import { globalTranslations, namespaces, useTranslate } from '@translations';
import React, { useContext, useEffect, useState } from 'react';
import { Article } from '../../types/Article.types';
import ArticlesGrid from '../../components/ArticlesGrid';
import SectionHeadingText from '../../components/SectionHeadingText';
import { NewsApplicationContext } from '../../context/newsAppContext';
import { StyledNewsPageWrapper } from './TopNews.styles';
import { getTopNews } from '../../clients';
import { DEFAULT_PAGE_SIZE } from '../../constants';
import usePagination from '../../hooks/usePagination';

const TopNews: React.FC = () => {
  const translate = useTranslate(namespaces.global);
  const { selectedCountry, setSelectedArticle } = useContext(NewsApplicationContext);

  const [articles, setArticles] = useState<Article[]>([]);
  const {
    pageNo,
    setPageNo,
    pagesCount,
    setPagesCount,
    loadPreviousPage,
    loadNextPage,
  } = usePagination();

  // Fetch news
  // Could be optimized usin some caching mechanism (React Query, Apollo ....)
  useEffect(() => {
    getTopNews(selectedCountry.value, pageNo, DEFAULT_PAGE_SIZE)
      .then(({ articles: foundArticles, totalResults }) => {
        if (foundArticles.length) {
          setArticles(foundArticles);
          setPagesCount(Math.ceil(totalResults / DEFAULT_PAGE_SIZE));
        } else if (totalResults > 0) {
          setPageNo(Math.ceil(totalResults / DEFAULT_PAGE_SIZE));
        }
      })
      .catch(() => undefined);
  }, [selectedCountry.value, pageNo, setPagesCount, setPageNo]);

  return (
    <StyledNewsPageWrapper>
      {
        // TODO: make country title multilangual too
      }
      <SectionHeadingText
        content={`${translate(globalTranslations.SectionHeadingTextTopNewsContent, {
          country: selectedCountry.title,
        })}:`}
      />
      <ArticlesGrid
        articles={articles}
        articlesDetailRoute="/news"
        onArticleClick={setSelectedArticle}
        isFirstPage={pageNo === 1}
        isLastPage={!pagesCount || pageNo === pagesCount}
        onLoadNextPage={loadNextPage}
        onLoadPreviousPage={loadPreviousPage}
      />
    </StyledNewsPageWrapper>
  );
};

export default TopNews;
