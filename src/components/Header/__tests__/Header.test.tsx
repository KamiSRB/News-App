import React from 'react';
import renderTestElement from '../../../utils/renderTestComponent';
import Header from '../Header';
import navItems from '../mock-data/navItems.mock';
import countries from '../../../mock-data/countries.mock';

describe('Header component', () => {
  it('renders all navigation items', () => {
    const { queryAllByTestId } = renderTestElement(
      <Header
        navItems={navItems}
        countries={[]}
        selectedCountry={{ title: '', value: '' }}
        onCountryChange={() => undefined}
      />
    );

    expect(queryAllByTestId('nav-item')).toHaveLength(navItems.length);
  });

  it('renders all country buttons', () => {
    const { queryAllByTestId } = renderTestElement(
      <Header
        navItems={navItems}
        countries={countries}
        selectedCountry={{ title: '', value: '' }}
        onCountryChange={() => undefined}
      />
    );

    expect(queryAllByTestId('country-btn')).toHaveLength(countries.length);
  });

  it('fires country change event on a country button click', () => {
    const onCountryChange = jest.fn();

    const { queryAllByTestId } = renderTestElement(
      <Header
        navItems={navItems}
        countries={countries}
        selectedCountry={{ title: '', value: '' }}
        onCountryChange={onCountryChange}
      />
    );

    const countryBtns = queryAllByTestId('country-btn');
    const lastCountryBtn = countryBtns[countryBtns.length - 1].children[0] as HTMLElement;
    lastCountryBtn.click();

    expect(onCountryChange).toBeCalledTimes(1);
  });
});
