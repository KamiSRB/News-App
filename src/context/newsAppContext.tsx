import React, { createContext, PropsWithChildren, useState } from 'react';
import { Article } from '../types/Article.types';
import { Country } from '../types/Country.types';
import countries from '../mock-data/countries.mock';

interface NewsApplicationContextState {
  countries: typeof countries;
  selectedArticle?: Article;
  selectedCountry: Country;
  setSelectedArticle: (article: Article) => void;
  changeCountry: (country: Country) => void;
}

const initialState: NewsApplicationContextState = {
  countries,
  selectedCountry: countries[0],
  setSelectedArticle: () => undefined,
  changeCountry: () => undefined,
};

export const NewsApplicationContext = createContext<NewsApplicationContextState>(initialState);
const { Provider } = NewsApplicationContext;

export const NewsApplicationProvider: React.FC<PropsWithChildren<Record<never, never>>> = ({
  children,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<Article>();
  const [selectedCountry, changeCountry] = useState(initialState.selectedCountry);

  const contextValue: NewsApplicationContextState = {
    ...initialState,
    selectedArticle,
    selectedCountry,
    setSelectedArticle,
    changeCountry,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default { NewsApplicationContext, NewsApplicationProvider };
