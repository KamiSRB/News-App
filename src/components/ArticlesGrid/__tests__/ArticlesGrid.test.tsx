import React from 'react';
import { render } from '@testing-library/react';
import ArticlesGrid from '../ArticlesGrid';
import articles from '../mock-data/articles.mock';

describe('ArticlesGrid component', () => {
  it('renders all articles', () => {
    const { queryAllByTestId } = render(<ArticlesGrid articles={articles} />);
    expect(queryAllByTestId('article')).toHaveLength(articles.length);
  });
});
