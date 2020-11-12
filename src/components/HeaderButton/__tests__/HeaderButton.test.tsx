import { render } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import HeaderButton from '../HeaderButton';

describe('HeaderButton component', () => {
  it('displays a text', () => {
    const text = 'Button text';
    const { queryByText } = render(<HeaderButton text={text} />);
    expect(queryByText(text)).not.toBeNull();
  });

  it('displays a text from children', () => {
    const text = 'Button text';
    const { queryByText } = render(<HeaderButton>{text}</HeaderButton>);
    expect(queryByText(text)).not.toBeNull();
  });

  it('fires a click event', () => {
    const callback = jest.fn();
    const { queryByTestId } = render(<HeaderButton onClick={callback} />);

    act(() => {
      const button = queryByTestId('header-button');
      button?.click();
    });

    expect(callback).toBeCalledTimes(1);
  });

  it("doesn't fire a click event when the button is disabled", () => {
    const callback = jest.fn();
    const { queryByTestId } = render(<HeaderButton onClick={callback} isDisabled />);

    act(() => {
      const button = queryByTestId('header-button');
      button?.click();
    });

    expect(callback).toBeCalledTimes(0);
  });
});
