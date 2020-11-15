import { globalTranslations, namespaces, useTranslate } from '@translations';
import React, { useCallback, useContext, useState } from 'react';
import { generatePath, useRouteMatch } from 'react-router';
import { useDebouncedCallback } from 'use-debounce/lib';
import { getArticlesByCategory } from '@clients';
import SectionHeadingText from '../../components/SectionHeadingText';
import Accordion from '../../components/Accordion';
import ItemsCarousel from '../../components/ItemsCarousel';
import { NEWS_PER_CATEGORY_COUNT } from '../../constants';
import { NewsApplicationContext } from '../../context/newsAppContext';
import categories from '../../mock-data/categories.mock';
import {
  StyledAccordionsFrame,
  StyledCategoriesWrapper,
  StyledCategoryAccordionWraperDiv,
  StyledItemsCarouselWrapperDiv,
} from './Categories.styles';
import { Article } from '../../types/Article.types';
import { CarouselItem } from '../../components/ItemsCarousel/ItemsCarousel.types';
import ArticlePreviewCard from '../../components/ArticlePreviewCard';

type ArticlesRecordMap = Record<string, Article[]>;

const Categories: React.FC = () => {
  const [articles, setArticles] = useState<ArticlesRecordMap>({});
  const translate = useTranslate(namespaces.global);
  const { selectedCountry, setSelectedArticle } = useContext(NewsApplicationContext);
  const match = useRouteMatch();

  // Fetch the articles list
  const getCategoyArticles = useCallback(
    (category: string) => {
      getArticlesByCategory(selectedCountry.value, category).then((foundArticles: Article[]) => {
        setArticles({ ...articles, [category]: foundArticles });
      });
    },
    [articles, selectedCountry]
  );

  const { callback: debouncedSetCategoryArticles } = useDebouncedCallback(getCategoyArticles, 500);

  // Handle events
  const handleCarouselOpen = useCallback(
    (category: string) => () => debouncedSetCategoryArticles(category),
    [debouncedSetCategoryArticles]
  );

  const handleArticleClick = useCallback((article: Article) => () => setSelectedArticle(article), [
    setSelectedArticle,
  ]);

  // Map the article object to the corresponding carousel item component
  const prepareArticleForCarousel = (article: Article): CarouselItem => ({
    id: article.url,
    node: (
      <ArticlePreviewCard
        title={article.title}
        description={article.description}
        imageSrc={article.urlToImage}
        articleRoute={generatePath('/news/:title', { title: article.title })}
        onClick={handleArticleClick(article)}
      />
    ),
  });

  return (
    <StyledCategoriesWrapper>
      {
        // TODO: translate the country name too
      }
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
              onOpen={handleCarouselOpen(category.value)}
            >
              <StyledItemsCarouselWrapperDiv>
                <ItemsCarousel
                  items={articles[category.value]?.map(prepareArticleForCarousel) ?? []}
                  itemsToDisplay={NEWS_PER_CATEGORY_COUNT}
                  areAllItemsLoaded
                />
              </StyledItemsCarouselWrapperDiv>
            </Accordion>
          </StyledCategoryAccordionWraperDiv>
        ))}
      </StyledAccordionsFrame>
    </StyledCategoriesWrapper>
  );
};

export default Categories;
