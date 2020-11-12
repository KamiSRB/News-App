/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Article } from 'src/types/Article.types';
import { v4 as uuidv4 } from 'uuid';
import ArticlesGrid, { ArticlesGridProp } from './ArticlesGrid';

const articleMock: Article = {
  id: '',
  title: 'Article title',
  description: 'Article title',
  urlToImage:
    'https://htecgroup.com/static/HTEC_SMMpreview_HOME-2ff9fbd8f5c082f2924d4a124a98a487.png',
  content: '',
};

const articles: Article[] = [
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
  { ...articleMock, id: uuidv4() },
];

export default {
  title: 'Organisms/ArticlesGrid',
  component: ArticlesGrid,
  args: {
    articles,
  },
} as Meta<ArticlesGridProp>;

const Template: Story<ArticlesGridProp> = (props) => <ArticlesGrid {...props} />;

export const Grid = Template.bind({});
