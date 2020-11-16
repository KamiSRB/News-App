import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from '@translations';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import AppRouter from './AppRouter';
import { NewsApplicationProvider } from './context/newsAppContext';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <NewsApplicationProvider>
          <div className="App" data-testid="App">
            <AppRouter />
          </div>
        </NewsApplicationProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
