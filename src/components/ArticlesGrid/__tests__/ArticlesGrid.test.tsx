/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import renderTestElement from '../../../utils/renderTestComponent';
import ArticlesGrid from '../ArticlesGrid';
import articles from '../mock-data/articles.mock';

describe('ArticlesGrid component', () => {
  it('renders all articles', () => {
    const { queryAllByTestId } = renderTestElement(<ArticlesGrid articles={articles} />);
    expect(queryAllByTestId('article')).toHaveLength(articles.length);
  });

  it("doesn't display the pages navigation if the callbacks are missing", () => {
    const { queryByTestId } = renderTestElement(<ArticlesGrid articles={[]} />);
    expect(queryByTestId('pages-navigation')).toBeNull();
  });

  it('display the pages navigation if the callbacks are provided', () => {
    const { queryAllByTestId } = renderTestElement(
      <ArticlesGrid articles={[]} isFirstPage={false} onLoadPreviousPage={() => undefined} />
    );

    renderTestElement(
      <ArticlesGrid articles={[]} isLastPage={false} onLoadNextPage={() => undefined} />
    );

    expect(queryAllByTestId('pages-navigation')).toHaveLength(2);
  });

  it('hides the arrows when the page is first/last page', () => {
    const { queryByTestId } = renderTestElement(
      <ArticlesGrid
        articles={[]}
        isFirstPage
        isLastPage
        onLoadPreviousPage={() => undefined}
        onLoadNextPage={() => undefined}
      />
    );

    expect(queryByTestId('previous-page-arrow')).toBeNull();
    expect(queryByTestId('next-page-arrow')).toBeNull();
  });

  it('displays the arrows when the page is not a first/last page', () => {
    const { queryByTestId } = renderTestElement(
      <ArticlesGrid
        articles={[]}
        isFirstPage={false}
        isLastPage={false}
        onLoadPreviousPage={() => undefined}
        onLoadNextPage={() => undefined}
      />
    );

    expect(queryByTestId('previous-page-arrow')).not.toBeNull();
    expect(queryByTestId('next-page-arrow')).not.toBeNull();
  });

  it('calls the pages navigation callbacks on arrow click', () => {
    const callback = jest.fn();

    const { queryByTestId } = renderTestElement(
      <ArticlesGrid
        articles={[]}
        isFirstPage={false}
        isLastPage={false}
        onLoadPreviousPage={callback}
        onLoadNextPage={callback}
      />
    );

    queryByTestId('previous-page-arrow')?.click();
    queryByTestId('next-page-arrow')?.click();
    expect(callback).toBeCalledTimes(2);
  });
});
