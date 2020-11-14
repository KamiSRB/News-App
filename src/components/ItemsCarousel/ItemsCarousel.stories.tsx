/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DISABLED_STORYBOOK_CONTROL } from '../../constants';
import ItemsCarousel, { ItemsCarouselProps } from './ItemsCarousel';
import items from './mock-data/items.mock';

export default {
  title: 'Molecules/ItemsCarousel',
  component: ItemsCarousel,
  // args: {
  //   items,
  // },
  argTypes: {
    itemsToDisplay: DISABLED_STORYBOOK_CONTROL,
    onLoadNext: DISABLED_STORYBOOK_CONTROL,
    items: DISABLED_STORYBOOK_CONTROL,
    areAllItemsLoaded: DISABLED_STORYBOOK_CONTROL,
  },
} as Meta<ItemsCarouselProps>;

// const Template: Story<ItemsCarouselProps> = (props) => <ItemsCarousel {...props} />;

// export const WithoutLoadingNewItems = Template.bind({});
// WithoutLoadingNewItems.args = {
//   areAllItemsLoaded: true,
// };

export const WithoutLoadingNewIteme: Story = () => (
  <ItemsCarousel items={items} areAllItemsLoaded />
);

// export const WithLoadingNewItems = Template.bind({});
// WithLoadingNewItems.args = {
//   onLoadNext: () => alert('load next'),
// };

export const WithLoadingNewItems: Story = () => (
  <ItemsCarousel items={items} onLoadNext={() => alert('load next')} />
);

// export const WithFewerItems = Template.bind({});
// WithFewerItems.args = {
//   areAllItemsLoaded: false,
//   itemsToDisplay: 3,
// };
// WithFewerItems.argTypes = {
//   itemsToDisplay: {
//     table: {
//       disable: false,
//     },
//   },
// };

export const WithFewerItems: Story = () => <ItemsCarousel items={items} itemsToDisplay={3} />;
