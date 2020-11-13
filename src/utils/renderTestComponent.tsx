/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { render, RenderResult } from '@testing-library/react';
import theme from '../theme';

const renderTestElement = (element: JSX.Element): RenderResult =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);

export default renderTestElement;
