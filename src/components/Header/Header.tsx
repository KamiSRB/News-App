import { useTheme } from 'emotion-theming';
import React, { useCallback } from 'react';
import { Theme } from 'src/types/Theme.types';
import { useLocation } from 'react-router-dom';
import { StyledHeaderDiv, StyledHeaderButtonGroupDiv, StyledLink } from './Header.styles';
import HeaderButton from './HeaderButton';
import { NavItem } from './Header.types';
import { Country } from '../../types/Country.types';

export interface HeaderProps {
  navItems?: NavItem[];
  countries: Country[];
  selectedCountry: Country;
  onCountryChange: (country: Country) => void;
  areCountriesDisabled?: boolean;
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  (
    { navItems, countries, selectedCountry, onCountryChange, areCountriesDisabled = false },
    ref
  ) => {
    const theme = useTheme() as Theme;
    const location = useLocation();

    const handleCountryChange = useCallback((country: Country) => () => onCountryChange(country), [
      onCountryChange,
    ]);

    return (
      <StyledHeaderDiv theme={theme} ref={ref}>
        <StyledHeaderButtonGroupDiv>
          {navItems?.map((item) => (
            <span data-testid="nav-item" key={item.route}>
              <StyledLink to={item.route}>
                <HeaderButton isActive={location.pathname.includes(item.route)}>
                  {item.title}
                </HeaderButton>
              </StyledLink>
            </span>
          ))}
        </StyledHeaderButtonGroupDiv>

        <StyledHeaderButtonGroupDiv>
          {countries.map((country) => (
            <span data-testid="country-btn" key={country.value}>
              <HeaderButton
                isActive={country === selectedCountry}
                isDisabled={areCountriesDisabled}
                onClick={handleCountryChange(country)}
              >
                {country.value.toUpperCase()}
              </HeaderButton>
            </span>
          ))}
        </StyledHeaderButtonGroupDiv>
      </StyledHeaderDiv>
    );
  }
);

export default React.memo(Header);
