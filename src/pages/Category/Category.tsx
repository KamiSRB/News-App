import { globalTranslations, namespaces, useTranslate } from '@translations';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { getArticlesForCategory } from '@clients';
import categories from '../../mock-data/categories.mock';
import ArticlesGrid from '../../components/ArticlesGrid';
import SectionHeadingText from '../../components/SectionHeadingText';
import { NewsApplicationContext } from '../../context/newsAppContext';
import { StyledNewsPageWrapper } from '../TopNews/TopNews.styles';
import { Category } from '../../types/Category.types';
import { Article } from '../../types/Article.types';

interface RouteParams {
  categoryId: string;
}

const CategoryPage: React.FC = () => {
  const [category, setCategory] = useState<Category>();
  const [articles, setArticles] = useState<Article[]>([]);
  const translate = useTranslate(namespaces.global);
  const { selectedCountry, setSelectedArticle } = useContext(NewsApplicationContext);
  const { categoryId } = useParams<RouteParams>();
  const history = useHistory();

  // Check if the requested category exists
  useEffect(() => {
    const foundCategory = categories.find((current) => current.value === categoryId);
    if (!foundCategory) history.push('/categories');

    setCategory(foundCategory);
  }, [categoryId, history]);

  // Fetch the articles from the server
  useEffect(() => {
    if (!category) return;

    getArticlesForCategory(selectedCountry.value, category.value)
      .then(setArticles)
      .catch(() => history.push('/categories'));
  }, [category, history, selectedCountry.value]);

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
      />
    </StyledNewsPageWrapper>
  );
};

export default CategoryPage;
