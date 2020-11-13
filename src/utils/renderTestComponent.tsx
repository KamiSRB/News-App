/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { render, RenderResult } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import theme from '../theme';

const renderTestElement = (element: JSX.Element): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <Router history={createMemoryHistory()}>{element}</Router>
    </ThemeProvider>
  );

export default renderTestElement;
