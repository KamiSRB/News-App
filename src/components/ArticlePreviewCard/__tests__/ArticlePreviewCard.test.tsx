import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ArticlePreviewCard from '../ArticlePreviewCard';

describe('ArticlePreviewCard component', () => {
  it('renders a card', () => {
    const { queryByTestId } = render(<ArticlePreviewCard title="" description="" />);
    expect(queryByTestId('article-preview')).not.toBeNull();
  });

  it('displays passed props', () => {
    const { queryByTestId, queryByText } = render(
      <ArticlePreviewCard title="title" description="description" imageSrc="img" />
    );

    expect(queryByText('title')).not.toBeNull();
    expect(queryByText('description')).not.toBeNull();
    expect(queryByTestId('article-preview-img')).not.toBeNull();
    expect(queryByTestId('article-preview-img')).toHaveAttribute('src', 'img');
  });

  it('fires a click event on click', () => {
    const onClick = jest.fn();

    const { queryByTestId } = render(
      <ArticlePreviewCard title="" description="" onClick={onClick} />
    );

    act(() => {
      const article = queryByTestId('article-preview');
      expect(article).not.toBeNull();

      article?.click();
    });

    expect(onClick).toBeCalledTimes(1);
  });
});
