/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DISABLED_STORYBOOK_CONTROL } from '../../constants';
import ArticlesGrid, { ArticlesGridProp } from './ArticlesGrid';
import articles from './mock-data/articles.mock';

export default {
  title: 'Organisms/ArticlesGrid',
  component: ArticlesGrid,
  args: {
    articles,
  },
  argTypes: {
    articles: DISABLED_STORYBOOK_CONTROL,
  },
} as Meta<ArticlesGridProp>;

const Template: Story<ArticlesGridProp> = (props) => <ArticlesGrid {...props} />;

export const Grid = Template.bind({});
