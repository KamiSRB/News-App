import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('renders the application', () => {
    const { queryByTestId } = render(<App />);

    expect(queryByTestId('App')).not.toBeNull();
  });
});
