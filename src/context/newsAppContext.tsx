import React, { createContext, PropsWithChildren, useCallback, useState } from 'react';
import { Article } from '../types/Article.types';
import { Country } from '../types/Country.types';
import countries from '../mock-data/countries.mock';

interface NewsApplicationContextState {
  countries: typeof countries;
  selectedArticle?: Article;
  selectedCountry: Country;
  isCountrySelectionEnabled: boolean;
  setSelectedArticle: (article: Article) => void;
  changeCountry: (country: Country) => void;
  enableCountrySelection: () => void;
  disableCountrySelection: () => void;
}

const initialState: NewsApplicationContextState = {
  countries,
  selectedCountry: countries[0],
  isCountrySelectionEnabled: true,
  setSelectedArticle: () => undefined,
  changeCountry: () => undefined,
  enableCountrySelection: () => undefined,
  disableCountrySelection: () => undefined,
};

export const NewsApplicationContext = createContext<NewsApplicationContextState>(initialState);
const { Provider } = NewsApplicationContext;

export const NewsApplicationProvider: React.FC<PropsWithChildren<Record<never, never>>> = ({
  children,
}) => {
  // If this grows, switch to the useReducer hook
  const [selectedArticle, setSelectedArticle] = useState<Article>();
  const [selectedCountry, changeCountry] = useState(initialState.selectedCountry);
  const [isCountrySelectionEnabled, setIsCountrySelectionEnabled] = useState<boolean>(true);

  const enableCountrySelection = useCallback(() => {
    setIsCountrySelectionEnabled(true);
  }, []);

  const disableCountrySelection = useCallback(() => {
    setIsCountrySelectionEnabled(false);
  }, []);

  const contextValue: NewsApplicationContextState = {
    ...initialState,
    selectedArticle,
    selectedCountry,
    isCountrySelectionEnabled,
    setSelectedArticle,
    changeCountry,
    enableCountrySelection,
    disableCountrySelection,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default { NewsApplicationContext, NewsApplicationProvider };
