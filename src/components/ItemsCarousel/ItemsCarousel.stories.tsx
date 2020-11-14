/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import ItemsCarousel from './ItemsCarousel';

const items = [
  { id: '1', node: <></> },
  { id: '2', node: <></> },
  { id: '3', node: <></> },
  { id: '4', node: <></> },
  { id: '5', node: <></> },
  { id: '6', node: <></> },
  { id: '7', node: <></> },
];

export default {
  title: 'Molecules/ItemsCarousel',
  component: ItemsCarousel,
} as Meta;

const Template: Story = () => <ItemsCarousel items={items} onLoadNext={() => alert('loaaad')} />;

export const Example = Template.bind({});
