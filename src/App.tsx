import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from '@translations';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import theme from './theme';
import AppRouter from './AppRouter';
import { NewsApplicationProvider } from './context/newsAppContext';

const App: React.FC = () => {
  const StyledAppDiv = styled.div`
    margin-top: 60px;
  `;

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <NewsApplicationProvider>
          <StyledAppDiv className="App" data-testid="App">
            <AppRouter />
          </StyledAppDiv>
        </NewsApplicationProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
