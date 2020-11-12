/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import ArticlesGrid, { ArticlesGridProp } from './ArticlesGrid';
import articles from './mock-data/articles.mock';

export default {
  title: 'Organisms/ArticlesGrid',
  component: ArticlesGrid,
  args: {
    articles,
  },
  argTypes: {
    articles: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ArticlesGridProp>;

const Template: Story<ArticlesGridProp> = (props) => <ArticlesGrid {...props} />;

export const Grid = Template.bind({});
