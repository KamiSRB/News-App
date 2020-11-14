import { useTheme } from 'emotion-theming';
import React, { useCallback } from 'react';
import { Theme } from 'src/types/Theme.types';
import { useLocation } from 'react-router-dom';
import { StyledHeaderDiv, StyledHeaderButtonGroupDiv, StyledLink } from './Header.styles';
import HeaderButton from './HeaderButton';
import { NavItem } from './Header.types';

export interface HeaderProps {
  navItems?: NavItem[];
  countries: string[];
  selectedCountry: string;
  onCountryChange: (country: string) => void;
  areCountriesDisabled?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  navItems,
  countries,
  selectedCountry,
  onCountryChange,
  areCountriesDisabled = false,
}) => {
  const theme = useTheme() as Theme;
  const location = useLocation();

  const handleCountryChange = useCallback((country: string) => () => onCountryChange(country), [
    onCountryChange,
  ]);

  return (
    <StyledHeaderDiv theme={theme}>
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
          <span data-testid="country-btn" key={country}>
            <HeaderButton
              isActive={country === selectedCountry}
              isDisabled={areCountriesDisabled}
              onClick={handleCountryChange(country)}
            >
              {country.toUpperCase()}
            </HeaderButton>
          </span>
        ))}
      </StyledHeaderButtonGroupDiv>
    </StyledHeaderDiv>
  );
};

export default Header;
