/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DISABLED_STORYBOOK_CONTROL } from '../../constants';
import ArticlePreviewCard, { ArticlePreviewCardProps } from './ArticlePreviewCard';

const imageSrc =
  'https://htecgroup.com/static/HTEC_SMMpreview_HOME-2ff9fbd8f5c082f2924d4a124a98a487.png';

export default {
  title: 'Molecules/ArticlePreviewCard',
  component: ArticlePreviewCard,
  argTypes: {
    onClick: DISABLED_STORYBOOK_CONTROL,
  },
} as Meta;

const Template: Story<ArticlePreviewCardProps> = (props) => (
  <ArticlePreviewCard {...props} onClick={() => alert('Article opened')} />
);

export const BasicArticle = Template.bind({});
BasicArticle.args = {
  title: 'Title',
  description: 'Description',
  imageSrc,
};

export const ArticleWithLongTitle = Template.bind({});
ArticleWithLongTitle.args = {
  title:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris justo lectus, viverra ultrices cursus in, vehicula ut quam. Vivamus tristique felis interdum luctus vestibulum.',
  description: 'Description',
  imageSrc,
};

export const ArticleWithLongDescription = Template.bind({});
ArticleWithLongDescription.args = {
  title: 'Title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris justo lectus, viverra ultrices cursus in, vehicula ut quam. Vivamus tristique felis interdum luctus vestibulum.',
  imageSrc,
};
