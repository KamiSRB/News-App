/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { act } from 'react-dom/test-utils';
import renderTestElement from '../../../utils/renderTestComponent';
import ItemsCarousel from '../ItemsCarousel';
import items from '../mock-data/items.mock';

describe('ItemsCarousel component', () => {
  it('displays all items if they can fit', () => {
    const { queryAllByTestId } = renderTestElement(
      <ItemsCarousel items={items} itemsToDisplay={10} />
    );

    expect(queryAllByTestId('carousel-item')).toHaveLength(items.length);
  });

  it('renders all the passed items to the DOM', () => {
    const { queryAllByTestId } = renderTestElement(<ItemsCarousel items={items} />);

    expect(queryAllByTestId('carousel-item')).toHaveLength(items.length);
  });

  it('calls a onLoadNext callback', () => {
    const onLoadNext = jest.fn();

    const { queryByTestId } = renderTestElement(
      <ItemsCarousel items={items} itemsToDisplay={items.length} onLoadNext={onLoadNext} />
    );

    act(() => {
      queryByTestId('right-arrow')?.click();
    });

    expect(onLoadNext).toBeCalledTimes(1);
  });
});
