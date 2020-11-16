import React, { useContext, useMemo, useRef } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import Header from './components/Header';
import { NavItem } from './components/Header/Header.types';
import { NewsApplicationContext } from './context/newsAppContext';
import { Article, Categories, Category, Search, TopNews } from './pages';
import useTranslate from './translations/hooks/useTranslate';
import namespaces from './translations/namespaces';
import navigationTranslations from './translations/values/dev/navigation.translation';
import useComponentSize from './hooks/useComponentSize';

const AppRouter: React.FC = () => {
  const { countries, selectedCountry, isCountrySelectionEnabled, changeCountry } = useContext(
    NewsApplicationContext
  );
  const translate = useTranslate(namespaces.navigation);

  const headerRef = useRef<HTMLDivElement>(null);
  const { height: headerHeight } = useComponentSize(headerRef);

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
        onCountryChange={changeCountry}
        ref={headerRef}
        areCountriesDisabled={!isCountrySelectionEnabled}
      />

      <Scrollbars
        autoHide
        style={{
          marginTop: headerHeight,
          height: `calc(100vh - ${headerHeight}px - 8px)`,
          overflow: 'hidden',
        }}
      >
        <Switch>
          <Route path="/news" component={TopNews} exact />
          <Route path="/news/:title" component={Article} exact />
          <Redirect from="/news" to="/news" />
          <Route path="/categories" component={Categories} exact />
          <Route path="/categories/:categoryId" component={Category} exact />
          <Redirect from="categories" to="/categories" />
          <Route path="/search" component={Search} exact />
          <Redirect from="/search" to="/search" />
          <Redirect from="*" to="/news" />
        </Switch>
      </Scrollbars>
    </BrowserRouter>
  );
};

export default AppRouter;
