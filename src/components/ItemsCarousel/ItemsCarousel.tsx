import React, { useMemo, useRef, useState } from 'react';
import { useTransition } from 'react-spring';
import useComponentSize from '../../hooks/useComponentSize';
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

  // Calculate needed sizes and positions for transitions
  const containerRef = useRef<HTMLDivElement>(null);
  const { width: containerWidth } = useComponentSize(containerRef);

  const displayedItemsCount = useMemo(() => Math.min(itemsToDisplay, lastIndex - firstIndex + 1), [
    firstIndex,
    lastIndex,
    itemsToDisplay,
  ]);

  const itemsSpacing = useMemo(() => containerWidth * 0.02, [containerWidth]);

  const itemWidth = useMemo(
    () => (containerWidth - (displayedItemsCount + 1) * itemsSpacing) / displayedItemsCount,
    [containerWidth, displayedItemsCount, itemsSpacing]
  );

  // Handle moving
  const handleLeftArrowClick = () => {
    if (firstIndex === 0) return;

    setFirstIndex((index) => index - 1);
    setLastIndex((index) => index - 1);
  };

  const handleRightArrowClick = () => {
    if (lastIndex === items.length - 1 && areAllItemsLoaded) return;

    if (lastIndex === items.length - 1) {
      if (onLoadNext) {
        onLoadNext(); // TODO: Debounce this later
        setFirstIndex((index) => index + 1);
        setLastIndex((index) => index + 1);
      }
    } else {
      setFirstIndex((index) => index + 1);
      setLastIndex((index) => index + 1);
    }
  };

  // Prepare items
  const displayedItems = useMemo(() => items.slice(firstIndex, firstIndex + itemsToDisplay), [
    firstIndex,
    items,
    itemsToDisplay,
  ]);

  // Prepare transitions
  let width = 0;
  const offset = itemWidth + itemsSpacing;

  const transitions = useTransition(
    // eslint-disable-next-line no-return-assign
    displayedItems.map((item) => ({ ...item, delta: (width += offset) - itemWidth })),
    (item) => item.id,
    {
      from: { opacity: 0 },
      leave: { opacity: 0 },
      enter: ({ delta }) => ({ delta, width: itemWidth, opacity: 1 }),
      update: ({ delta }) => ({
        delta,
        width: itemWidth,
        opacity: 1,
        transition: 'opacity 1s',
      }),
    }
  );

  return (
    <StyledCarouselWrapperDiv ref={containerRef}>
      <StyledLeftArrowDiv onClick={handleLeftArrowClick}>&lt;</StyledLeftArrowDiv>
      {
        // Delta is not part of the interface, ignore typescript warnings here for now
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        transitions.map(({ item, key, props: { delta, ...rest } }, index) => (
          <StyledCarouselItemDiv
            key={key}
            style={{
              zIndex: displayedItems.length - index,
              transform: delta.interpolate((x: number) => `translate3d(${x}px,0,0)`),
              ...rest,
            }}
          >
            {item.node}
          </StyledCarouselItemDiv>
        ))
      }
      <StyledRightArrowDiv onClick={handleRightArrowClick}>&gt;</StyledRightArrowDiv>
    </StyledCarouselWrapperDiv>
  );
};

export default ItemsCarousel;
