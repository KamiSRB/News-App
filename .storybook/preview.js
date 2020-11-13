import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../src/theme';
import { createMemoryHistory } from 'history';
import { Switch, Router, Route } from 'react-router-dom';

const history = createMemoryHistory();

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route path="/route1" component={Story} />
          <Route path="/route2" component={Story} />
          <Route path="/route3" component={Story} />
          <Route path="/" component={Story} />
        </Switch>
      </Router>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
