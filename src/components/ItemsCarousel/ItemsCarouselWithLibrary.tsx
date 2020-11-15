import React from 'react';
import Carousel from 'react-multi-carousel';
import { screenBreakpoints } from '../../constants';
import { CarouselItem } from './ItemsCarousel.types';
import { StyledLibraryCarouselItemWrapper } from './ItemsCarousel.styles';
import 'react-multi-carousel/lib/styles.css';

export interface ItemsCarouselProps {
  itemsToDisplay?: number;
  items: CarouselItem[];
}

const responsive = {
  desktop: {
    breakpoint: { max: screenBreakpoints.large * 2, min: screenBreakpoints.large },
    items: 5,
    paritialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: screenBreakpoints.large, min: screenBreakpoints.small },
    items: 3,
    paritialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: screenBreakpoints.small, min: 0 },
    items: 1,
    paritialVisibilityGutter: 0,
  },
};

const ItemsCarouselWithLibrary: React.FC<ItemsCarouselProps> = ({ items }) => {
  return (
    <Carousel responsive={responsive}>
      {items.map((item) => (
        <StyledLibraryCarouselItemWrapper key={item.id} style={{ padding: '10px' }}>
          {item.node}
        </StyledLibraryCarouselItemWrapper>
      ))}
    </Carousel>
  );
};

export default React.memo(ItemsCarouselWithLibrary);
