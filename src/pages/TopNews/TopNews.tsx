import { globalTranslations, namespaces, useTranslate } from '@translations';
import React, { useContext } from 'react';
import ArticlesGrid from '../../components/ArticlesGrid';
import articles from '../../components/ArticlesGrid/mock-data/articles.mock';
import SectionHeadingText from '../../components/SectionHeadingText';
import { NewsApplicationContext } from '../../context/newsAppContext';
import { StyledNewsPageWrapper } from './TopNews.styles';

const TopNews: React.FC = () => {
  const translate = useTranslate(namespaces.global);
  const { selectedCountry } = useContext(NewsApplicationContext);

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
      <ArticlesGrid articles={articles} />
    </StyledNewsPageWrapper>
  );
};

export default TopNews;
