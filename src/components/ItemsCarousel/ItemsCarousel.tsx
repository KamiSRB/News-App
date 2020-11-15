import { useTheme } from 'emotion-theming';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Theme } from '../../types/Theme.types';
import useComponentSize from '../../hooks/useComponentSize';
import {
  StyledCarouselFrameDiv,
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
  const theme = useTheme() as Theme;
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);

  useEffect(() => {}, [lastIndex]);

  const canMoveLeft = firstIndex !== 0;
  const canMoveRight = lastIndex !== items.length - 1 || !areAllItemsLoaded;

  // Calculate needed sizes and positions for transition
  const containerRef = useRef<HTMLDivElement>(null);
  const { width: containerWidth, height: containerHeight } = useComponentSize(containerRef);

  useEffect(() => {
    if (lastIndex <= 0) {
      setLastIndex(Math.min(items.length - 1, itemsToDisplay - 1));
    }
  }, [items.length, itemsToDisplay, lastIndex]);

  const displayedItemsCount = useMemo(() => Math.min(itemsToDisplay, lastIndex - firstIndex + 1), [
    firstIndex,
    lastIndex,
    itemsToDisplay,
  ]);

  const arrowsPosition = containerHeight / 2 - 15;
  const itemsSpacing = useMemo(() => containerWidth * 0.02, [containerWidth]);

  const itemWidth = useMemo(
    () => (containerWidth - (displayedItemsCount + 1) * itemsSpacing) / displayedItemsCount,
    [containerWidth, displayedItemsCount, itemsSpacing]
  );

  const offset = -1 * firstIndex * (itemWidth + itemsSpacing);

  // Handle moving
  const handleLeftArrowClick = () => {
    if (firstIndex === 0) return;

    setFirstIndex((index) => index - 1);
    setLastIndex((index) => index - 1);
  };

  const handleRightArrowClick = () => {
    if (!canMoveRight) return;

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

  return (
    <StyledCarouselWrapperDiv>
      {
        // TODO: style the arrow handlers better
        canMoveLeft && (
          <StyledLeftArrowDiv
            onClick={handleLeftArrowClick}
            data-testid="left-arrow"
            top={arrowsPosition}
            theme={theme}
          >
            ⮜
          </StyledLeftArrowDiv>
        )
      }

      <StyledCarouselFrameDiv
        style={{ display: 'flex', width: '100%', height: 'fit-content' }}
        offset={offset}
        ref={containerRef}
        data-testid="carousel-frame"
      >
        {items.map((item) => (
          <StyledCarouselItemDiv
            key={item.id}
            width={itemWidth}
            spacing={itemsSpacing}
            data-testid="carousel-item"
          >
            {item.node}
          </StyledCarouselItemDiv>
        ))}
      </StyledCarouselFrameDiv>

      {canMoveRight && (
        <StyledRightArrowDiv
          onClick={handleRightArrowClick}
          data-testid="right-arrow"
          top={arrowsPosition}
          theme={theme}
        >
          ⮞
        </StyledRightArrowDiv>
      )}
    </StyledCarouselWrapperDiv>
  );
};

export default React.memo(ItemsCarousel);
