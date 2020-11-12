/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import HeaderButton, { HeaderButtonProps } from './HeaderButton';

export default {
  title: 'Atoms/HeaderButton',
  component: HeaderButton,
  args: {
    onClick: () => alert('Button clicked'),
  },
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
    isDisabled: {
      table: {
        disable: true,
      },
    },
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
