import React, { useMemo, useState } from 'react';
import {
  StyledCarouselItemDiv,
  StyledCarouselWrapperDiv,
  StyledLeftArrowDiv,
  StyledRightArrowDiv,
} from './ItemsCarousel.styles';
import { CarouselItem } from './ItemsCarousel.types';

export interface ItemsCarouselProps {
  itemsToDisplay?: number;
  onLoadNext?: () => void;
  items: CarouselItem[];
  areAllItemsLoaded?: boolean;
}

const ItemsCarousel: React.FC<ItemsCarouselProps> = ({
  itemsToDisplay = 5,
  items,
  areAllItemsLoaded = false,
  onLoadNext,
}) => {
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(Math.min(items.length - 1, itemsToDisplay - 1));

  const handleLeftArrowClick = () => {
    if (firstIndex === 0) return;

    setFirstIndex((index) => index - 1);
    setLastIndex((index) => index - 1);
  };

  const handleRightArrowClick = () => {
    if (lastIndex === items.length - 1 && areAllItemsLoaded) return;

    if (lastIndex === items.length - 1) {
      if (onLoadNext) {
        onLoadNext();
        setFirstIndex((index) => index + 1);
        setLastIndex((index) => index + 1);
      }
    } else {
      setFirstIndex((index) => index + 1);
      setLastIndex((index) => index + 1);
    }
  };

  const displayedItems = useMemo(
    () =>
      items
        .slice(firstIndex, firstIndex + itemsToDisplay)
        .map((item) => <StyledCarouselItemDiv key={item.id}>{item.id}</StyledCarouselItemDiv>),
    [firstIndex, items, itemsToDisplay]
  );

  return (
    <StyledCarouselWrapperDiv>
      <StyledLeftArrowDiv onClick={handleLeftArrowClick}>&lt;</StyledLeftArrowDiv>
      {displayedItems}
      <StyledRightArrowDiv onClick={handleRightArrowClick}>&gt;</StyledRightArrowDiv>
    </StyledCarouselWrapperDiv>
  );
};

export default ItemsCarousel;
