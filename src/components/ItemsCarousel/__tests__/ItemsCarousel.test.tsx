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

  it("displays passed number of items if they can't fit all", () => {
    const { queryAllByTestId } = renderTestElement(
      <ItemsCarousel items={items} itemsToDisplay={5} />
    );

    expect(queryAllByTestId('carousel-item')).toHaveLength(5);
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
