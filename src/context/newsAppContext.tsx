import React, { createContext, PropsWithChildren, useState } from 'react';
import { Country } from '../types/Country.types';
import countries from '../mock-data/countries.mock';

interface NewsApplicationContextState {
  countries: typeof countries;
  selectedCountry: Country;
  changeCountry: (country: Country) => void;
}

const initialState: NewsApplicationContextState = {
  countries,
  selectedCountry: countries[0],
  changeCountry: () => undefined,
};

export const NewsApplicationContext = createContext<NewsApplicationContextState>(initialState);
const { Provider } = NewsApplicationContext;

export const NewsApplicationProvider: React.FC<PropsWithChildren<Record<never, never>>> = ({
  children,
}) => {
  const [selectedCountry, changeCountry] = useState(initialState.selectedCountry);

  return (
    <Provider value={{ ...initialState, selectedCountry, changeCountry }}>{children}</Provider>
  );
};

export default { NewsApplicationContext, NewsApplicationProvider };
