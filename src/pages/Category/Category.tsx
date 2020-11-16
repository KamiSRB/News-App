import { globalTranslations, namespaces, useTranslate } from '@translations';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { getArticlesByCategory } from '@clients';
import categories from '../../mock-data/categories.mock';
import ArticlesGrid from '../../components/ArticlesGrid';
import SectionHeadingText from '../../components/SectionHeadingText';
import { NewsApplicationContext } from '../../context/newsAppContext';
import { StyledNewsPageWrapper } from '../TopNews/TopNews.styles';
import { Category } from '../../types/Category.types';
import { Article } from '../../types/Article.types';
import { DEFAULT_PAGE_SIZE } from '../../constants';
import usePagination from '../../hooks/usePagination';

interface RouteParams {
  categoryId: string;
}

const CategoryPage: React.FC = () => {
  const [category, setCategory] = useState<Category>();

  const translate = useTranslate(namespaces.global);
  const { selectedCountry, setSelectedArticle } = useContext(NewsApplicationContext);
  const { categoryId } = useParams<RouteParams>();
  const history = useHistory();

  const [articles, setArticles] = useState<Article[]>([]);
  const {
    pageNo,
    setPageNo,
    pagesCount,
    setPagesCount,
    loadPreviousPage,
    loadNextPage,
  } = usePagination();

  // Check if the requested category exists
  useEffect(() => {
    const foundCategory = categories.find((current) => current.value === categoryId);
    if (!foundCategory) history.push('/categories');

    setCategory(foundCategory);
  }, [categoryId, history]);

  // Fetch the articles from the server
  useEffect(() => {
    if (!category) return;

    getArticlesByCategory(selectedCountry.value, category.value, pageNo, DEFAULT_PAGE_SIZE)
      .then(({ articles: foundArticles, totalResults }) => {
        if (foundArticles.length) {
          setArticles(foundArticles);
          setPagesCount(Math.ceil(totalResults / DEFAULT_PAGE_SIZE));
        } else if (totalResults > 0) {
          setPageNo(Math.ceil(totalResults / DEFAULT_PAGE_SIZE));
        }
      })
      .catch(() => history.push('/categories'));
  }, [category, history, selectedCountry.value, setPagesCount, pageNo, setPageNo]);

  return (
    <StyledNewsPageWrapper>
      {
        // TODO: make country title multilangual too
      }
      <SectionHeadingText
        content={`${translate(globalTranslations.SectionHeadingTextCategoryContent, {
          country: selectedCountry.title,
          category: category?.title.toLowerCase(),
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

export default CategoryPage;
