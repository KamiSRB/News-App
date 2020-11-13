import React from 'react';
import renderTestElement from '../../../utils/renderTestComponent';
import ArticlesGrid from '../ArticlesGrid';
import articles from '../mock-data/articles.mock';

describe('ArticlesGrid component', () => {
  it('renders all articles', () => {
    const { queryAllByTestId } = renderTestElement(<ArticlesGrid articles={articles} />);
    expect(queryAllByTestId('article')).toHaveLength(articles.length);
  });
});
