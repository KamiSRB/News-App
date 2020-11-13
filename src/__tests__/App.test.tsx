import React from 'react';
import renderTestElement from '../utils/renderTestComponent';
import App from '../App';

describe('App component', () => {
  it('renders the application', () => {
    const { queryByTestId } = renderTestElement(<App />);

    expect(queryByTestId('App')).not.toBeNull();
  });
});
