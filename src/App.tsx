import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n, namespaces, globalTranslations, useTranslate } from '@translations';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

const App: React.FC = () => {
  const translate = useTranslate(namespaces.global);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <div className="App" data-testid="App">
          {translate(globalTranslations.DivInitialAppText)}
        </div>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
