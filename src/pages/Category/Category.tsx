import { globalTranslations, namespaces, useTranslate } from '@translations';
import React, { useContext } from 'react';
import categories from '../../mock-data/categories.mock';
import ArticlesGrid from '../../components/ArticlesGrid';
import articles from '../../components/ArticlesGrid/mock-data/articles.mock';
import SectionHeadingText from '../../components/SectionHeadingText';
import { NewsApplicationContext } from '../../context/newsAppContext';
import { StyledNewsPageWrapper } from '../TopNews/TopNews.styles';

const Category: React.FC = () => {
  const translate = useTranslate(namespaces.global);
  const { selectedCountry } = useContext(NewsApplicationContext);
  const categoryName = categories[0];

  return (
    <StyledNewsPageWrapper>
      {
        // TODO: make country title multilangual too
      }
      <SectionHeadingText
        content={`${translate(globalTranslations.SectionHeadingTextCategoryContent, {
          country: selectedCountry.title,
          category: categoryName,
        })}:`}
      />
      <ArticlesGrid articles={articles} articlesDetailRoute="/news" />
    </StyledNewsPageWrapper>
  );
};

export default Category;
