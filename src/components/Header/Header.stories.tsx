/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DISABLED_STORYBOOK_CONTROL } from '../../constants';
import Header, { HeaderProps } from './Header';
import navItems from './mock-data/navItems.mock';
import countries from '../../mock-data/countries.mock';

const ref = React.createRef<HTMLDivElement>();

export default {
  title: 'Organisms/Header',
  component: Header,
  args: {
    navItems,
    countries,
    selectedCountry: 'US',
    onCountryChange: (country: string) => alert(`${country} selected`),
  },
  argTypes: {
    navItems: DISABLED_STORYBOOK_CONTROL,
    countries: DISABLED_STORYBOOK_CONTROL,
    onCountryChange: DISABLED_STORYBOOK_CONTROL,
  },
} as Meta;

const Template: Story<HeaderProps> = (props) => <Header {...props} ref={ref} />;

export const Example = Template.bind({});
