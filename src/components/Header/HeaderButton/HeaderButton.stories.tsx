/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DISABLED_STORYBOOK_CONTROL } from '../../../constants';
import HeaderButton, { HeaderButtonProps } from './HeaderButton';

export default {
  title: 'Atoms/HeaderButton',
  component: HeaderButton,
  args: {
    onClick: () => alert('Button clicked'),
  },
  argTypes: {
    onClick: DISABLED_STORYBOOK_CONTROL,
    isDisabled: DISABLED_STORYBOOK_CONTROL,
  },
} as Meta;

const Template: Story<HeaderButtonProps> = (props) => <HeaderButton {...props} />;

export const SimpleButton = Template.bind({});
SimpleButton.args = {
  children: 'Test',
};
SimpleButton.argTypes = {
  text: {
    table: {
      disable: true,
    },
  },
};

export const ButtonWithText = Template.bind({});
ButtonWithText.args = {
  text: 'Passed text',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  text: 'Disabled button',
  isDisabled: true,
};
