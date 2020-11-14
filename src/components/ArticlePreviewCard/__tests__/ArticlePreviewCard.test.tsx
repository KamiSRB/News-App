import React from 'react';
import { act } from 'react-dom/test-utils';
import renderTestElement from '../../../utils/renderTestComponent';
import ArticlePreviewCard from '../ArticlePreviewCard';

describe('ArticlePreviewCard component', () => {
  it('renders a card', () => {
    const { queryByTestId } = renderTestElement(<ArticlePreviewCard title="" description="" />);
    expect(queryByTestId('article-preview')).not.toBeNull();
  });

  it('displays passed props', () => {
    const { queryByTestId, queryByText } = renderTestElement(
      <ArticlePreviewCard title="title" description="description" imageSrc="img" />
    );

    expect(queryByText('title')).not.toBeNull();
    expect(queryByText('description')).not.toBeNull();
    expect(queryByTestId('article-preview-img')).not.toBeNull();
    expect(queryByTestId('article-preview-img')).toHaveAttribute('src', 'img');
  });

  it('fires a click event on click', () => {
    const onClick = jest.fn();

    const { queryByTestId } = renderTestElement(
      <ArticlePreviewCard title="" description="" onClick={onClick} />
    );

    act(() => {
      const article = queryByTestId('article-preview');
      expect(article).not.toBeNull();

      article?.click();
    });

    expect(onClick).toBeCalledTimes(1);
  });

  it('uses a article when provided', () => {
    const articleRouter = '/article-route';

    const { queryByTestId, history } = renderTestElement(
      <ArticlePreviewCard title="" description="" articleRoute={articleRouter} />
    );

    const articleLink = queryByTestId('article-link');
    expect(articleLink).not.toBeNull();
    expect(articleLink).toHaveAttribute('href', articleRouter);

    act(() => {
      articleLink?.click();
    });

    expect(history.location.pathname).toBe(articleRouter);
  });
});
