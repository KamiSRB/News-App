import React from 'react';
import renderTestElement from '../../../utils/renderTestComponent';
import Accordion from '../Accordion';

describe('Accordion component', () => {
  it('displays a title', () => {
    const { queryByText } = renderTestElement(<Accordion title="title" />);
    expect(queryByText('title')).not.toBeNull();
  });

  it('displays a title with a route', () => {
    const { queryByText } = renderTestElement(
      <Accordion title="title" titleLinkRoute="/test-route" />
    );

    const link = queryByText('title');
    expect(link).not.toBeNull();
    expect(link?.getAttribute('href')).toBe('/test-route');
  });

  it('hides a content initially', () => {
    const { queryByTestId } = renderTestElement(
      <Accordion title="title">
        <div style={{ height: '500px' }} />
      </Accordion>
    );

    expect(queryByTestId('accordion-panel')?.clientHeight).toBe(0);
  });
});
