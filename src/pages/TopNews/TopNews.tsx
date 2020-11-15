import { globalTranslations, namespaces, useTranslate } from '@translations';
import React, { useContext, useEffect, useState } from 'react';
import { Article } from '../../types/Article.types';
import ArticlesGrid from '../../components/ArticlesGrid';
import SectionHeadingText from '../../components/SectionHeadingText';
import { NewsApplicationContext } from '../../context/newsAppContext';
import { StyledNewsPageWrapper } from './TopNews.styles';
import { getTopNews } from '../../clients';

const TopNews: React.FC = () => {
  const translate = useTranslate(namespaces.global);
  const { selectedCountry } = useContext(NewsApplicationContext);

  const [articles, setArticles] = useState<Article[]>([]);

  // Fetch news
  // Could be optimized usin some caching mechanism (React Query, Apollo ....)
  useEffect(() => {
    getTopNews(selectedCountry.value)
      .then((data: Article[]) => {
        setArticles(data);
      })
      .catch(() => undefined);
  }, [selectedCountry.value]);

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
      <ArticlesGrid articles={articles} articlesDetailRoute="/news" />
    </StyledNewsPageWrapper>
  );
};

export default TopNews;
