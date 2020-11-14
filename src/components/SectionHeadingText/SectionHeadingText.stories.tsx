/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import SectionHeadingText, { SectionHeadingTextProps } from './SectionHeadingText';

export default {
  title: 'Atoms/SectionHeadingText',
  component: SectionHeadingText,
  args: {
    content: 'Text content',
  },
} as Meta<SectionHeadingTextProps>;

const Template: Story<SectionHeadingTextProps> = ({ content, variant }) => (
  <SectionHeadingText content={content} variant={variant} />
);

export const Serif = Template.bind({});
Serif.args = {
  variant: 'serif',
};

export const SansSerif = Template.bind({});
SansSerif.args = {
  variant: 'sans-serif',
};
