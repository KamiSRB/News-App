import React, { useMemo, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { NavItem } from './components/Header/Header.types';
import countries from './mock-data/countries.mock';

const AppRouter: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const navItems: NavItem[] = useMemo(
    () => [
      { title: 'Top News', route: '/news' },
      { title: 'Categories', route: '/categories' },
      { title: 'Search', route: '/search' },
    ],
    []
  );

  return (
    <BrowserRouter>
      <Header
        navItems={navItems}
        countries={countries}
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
      />

      <Switch>
        <Route path="/news" component={React.Fragment} exact />
        <Route path="/news/:articleId" component={React.Fragment} exact />
        <Redirect from="/news" to="/news" />
        <Route path="/categories" component={React.Fragment} exact />
        <Route path="/categories/:categoryId" component={React.Fragment} exact />
        <Redirect from="categories" to="/categories" />
        <Route path="/search" component={React.Fragment} exact />
        <Redirect from="/search" to="/search" />
        <Redirect from="*" to="/news" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
