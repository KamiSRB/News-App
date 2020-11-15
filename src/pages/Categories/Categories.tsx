import { globalTranslations, namespaces, useTranslate } from '@translations';
import React, { useContext, useMemo } from 'react';
import { generatePath, useRouteMatch } from 'react-router';
import SectionHeadingText from '../../components/SectionHeadingText';
import Accordion from '../../components/Accordion';
import ArticlePreviewCard from '../../components/ArticlePreviewCard';
import articles from '../../components/ArticlesGrid/mock-data/articles.mock';
import ItemsCarousel from '../../components/ItemsCarousel';
import { CarouselItem } from '../../components/ItemsCarousel/ItemsCarousel.types';
import { NEWS_PER_CATEGORY_COUNT } from '../../constants';
import { NewsApplicationContext } from '../../context/newsAppContext';
import categories from '../../mock-data/categories.mock';
import {
  StyledAccordionsFrame,
  StyledCategoriesWrapper,
  StyledCategoryAccordionWraperDiv,
} from './Categories.styles';

const Categories: React.FC = () => {
  const translate = useTranslate(namespaces.global);
  const { selectedCountry } = useContext(NewsApplicationContext);
  const match = useRouteMatch();

  const carouselItems: CarouselItem[] = useMemo(
    () =>
      articles.map((article) => ({
        id: article.url,
        node: (
          <ArticlePreviewCard
            title={article.title}
            description={article.description}
            imageSrc={article.urlToImage}
            articleRoute={`/news/${article.url}`}
          />
        ),
      })),
    []
  );

  return (
    <StyledCategoriesWrapper>
      <SectionHeadingText
        content={`${translate(globalTranslations.SectionHeadingTextCategoriesContent, {
          count: NEWS_PER_CATEGORY_COUNT,
          country: selectedCountry.title,
        })}:`}
      />
      <StyledAccordionsFrame>
        {categories.map((category) => (
          <StyledCategoryAccordionWraperDiv key={category.value}>
            <Accordion
              title={category.title}
              titleLinkRoute={generatePath(`${match?.path}/:categoryId`, {
                categoryId: category.value,
              })}
            >
              <ItemsCarousel items={carouselItems} itemsToDisplay={NEWS_PER_CATEGORY_COUNT} />
            </Accordion>
          </StyledCategoryAccordionWraperDiv>
        ))}
      </StyledAccordionsFrame>
    </StyledCategoriesWrapper>
  );
};

export default Categories;
