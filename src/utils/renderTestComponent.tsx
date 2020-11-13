/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { render, RenderResult } from '@testing-library/react';
import { Route, Router } from 'react-router';
import { createMemoryHistory, History } from 'history';
import theme from '../theme';

interface CustomRenderResult extends RenderResult {
  history: History;
}

const renderTestElement = (element: JSX.Element): CustomRenderResult => {
  const history = createMemoryHistory();

  const renderResult = render(
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Route path="/">{element}</Route>
      </Router>
    </ThemeProvider>
  );

  return { ...renderResult, history };
};

export default renderTestElement;
