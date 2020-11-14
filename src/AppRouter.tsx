import React, { useMemo, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { NavItem } from './components/Header/Header.types';
import countries from './mock-data/countries.mock';
import { Article, Categories, Category, Search, TopNews } from './pages';
import useTranslate from './translations/hooks/useTranslate';
import namespaces from './translations/namespaces';
import navigationTranslations from './translations/values/dev/navigation.translation';

const AppRouter: React.FC = () => {
  const translate = useTranslate(namespaces.navigation);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const navItems: NavItem[] = useMemo(
    () => [
      { title: translate(navigationTranslations.NavItemTopNewsTitle), route: '/news' },
      { title: translate(navigationTranslations.NavItemCategoriesTitle), route: '/categories' },
      { title: translate(navigationTranslations.NavItemSearchTitle), route: '/search' },
    ],
    [translate]
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
        <Route path="/news" component={TopNews} exact />
        <Route path="/news/:articleId" component={Article} exact />
        <Redirect from="/news" to="/news" />
        <Route path="/categories" component={Categories} exact />
        <Route path="/categories/:categoryId" component={Category} exact />
        <Redirect from="categories" to="/categories" />
        <Route path="/search" component={Search} exact />
        <Redirect from="/search" to="/search" />
        <Redirect from="*" to="/news" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
