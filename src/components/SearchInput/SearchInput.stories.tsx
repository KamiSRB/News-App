/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchInput, { SearchInputProps } from './SearchInput';
import { DISABLED_STORYBOOK_CONTROL } from '../../constants';

export default {
  title: 'Atoms/SearchInput',
  component: SearchInput,
  args: {
    onChange: (value) => alert(value),
  },
  argTypes: {
    onChange: DISABLED_STORYBOOK_CONTROL,
  },
} as Meta<SearchInputProps>;

const Template: Story<SearchInputProps> = ({ onChange, placeholder }) => (
  <SearchInput onChange={onChange} placeholder={placeholder} />
);

export const SimpleExample = Template.bind({});

export const DebouncedOnSecond = Template.bind({});
DebouncedOnSecond.args = {
  debounceInterval: 1000,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Your placeholder goes here',
};
