/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { act } from 'react-dom/test-utils';
import renderTestElement from '../../../utils/renderTestComponent';
import Article from '../Article';

const defaultProps = {
  title: '',
  description: '',
  content: '',
};

describe('Article component', () => {
  it('displays title', () => {
    const title = 'title';

    const { queryByText } = renderTestElement(<Article {...defaultProps} title={title} />);
    expect(queryByText(title)).not.toBeNull();
  });

  it('displays description', () => {
    const description = 'description';

    const { queryByText } = renderTestElement(
      <Article {...defaultProps} description={description} />
    );
    expect(queryByText(description)).not.toBeNull();
  });

  it('displays content', () => {
    const content = 'content';

    const { queryByText } = renderTestElement(<Article {...defaultProps} content={content} />);
    expect(queryByText(content)).not.toBeNull();
  });

  it('displays image', () => {
    const imageSrc = 'imageSrc';

    const { queryByTestId } = renderTestElement(<Article {...defaultProps} imageSrc={imageSrc} />);
    expect(queryByTestId('article-image')).toHaveAttribute('src', imageSrc);
  });

  it('routes to the passed route on the back link click', () => {
    const backLinkRoute = '/previous-route';

    const { queryByTestId, history } = renderTestElement(
      <Article title="" description="" content="" backLinkRoute={backLinkRoute} />
    );

    act(() => {
      const backLink = queryByTestId('back-link');
      backLink?.click();
    });

    expect(history.location.pathname).toEqual(backLinkRoute);
  });
});
