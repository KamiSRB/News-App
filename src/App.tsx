import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n, namespaces, globalTranslations, useTranslate } from '@translations';

const App: React.FC = () => {
  const translate = useTranslate(namespaces.global);

  return (
    <I18nextProvider i18n={i18n}>
      <div className="App" data-testid="App">
        {translate(globalTranslations.DivInitialAppText)}
      </div>
    </I18nextProvider>
  );
};

export default App;
