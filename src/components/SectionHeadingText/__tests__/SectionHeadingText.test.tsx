import React from 'react';
import theme from '../../../theme';
import renderTestElement from '../../../utils/renderTestComponent';
import SectionHeadingText from '../SectionHeadingText';

describe('SectionHeadingText component', () => {
  it('renders a text', () => {
    const { queryByText } = renderTestElement(<SectionHeadingText content="Text content" />);
    expect(queryByText('Text content')).not.toBeNull();
  });

  it('renders a serif text', () => {
    const { queryByTestId } = renderTestElement(<SectionHeadingText content="" variant="serif" />);
    expect(queryByTestId('heading-text')).toHaveStyle(`font-family: ${theme.fontFamily.serif}`);
  });

  it('renders a sans serif text', () => {
    const { queryByTestId } = renderTestElement(
      <SectionHeadingText content="" variant="sans-serif" />
    );
    expect(queryByTestId('heading-text')).toHaveStyle(`font-family: ${theme.fontFamily.sansSerif}`);
  });
});
