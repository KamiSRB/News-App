/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from '@emotion/styled';
import ItemsCarousel from './ItemsCarousel';

const StyledNodeDiv = styled.div`
  height: 200px;
  width: 500px;
  background-color: gray;
`;

const items = [
  { id: '1', node: <StyledNodeDiv>1</StyledNodeDiv> },
  { id: '2', node: <StyledNodeDiv>2</StyledNodeDiv> },
  { id: '3', node: <StyledNodeDiv>3</StyledNodeDiv> },
  { id: '4', node: <StyledNodeDiv>4</StyledNodeDiv> },
  { id: '5', node: <StyledNodeDiv>5</StyledNodeDiv> },
  { id: '6', node: <StyledNodeDiv>6</StyledNodeDiv> },
  { id: '7', node: <StyledNodeDiv>7</StyledNodeDiv> },
];

export default {
  title: 'Molecules/ItemsCarousel',
  component: ItemsCarousel,
} as Meta;

const Template: Story = () => <ItemsCarousel items={items} onLoadNext={() => alert('loaaad')} />;

export const Example = Template.bind({});
