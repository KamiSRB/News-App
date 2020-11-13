import { fireEvent } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import renderTestElement from '../../../utils/renderTestComponent';
import SearchInput from '../SearchInput';

describe('SearchInput component', () => {
  it('displays search text input', () => {
    const { queryByTestId } = renderTestElement(<SearchInput onChange={() => undefined} />);
    expect(queryByTestId('search-input')).not.toBeNull();
  });

  it('fires a change event on input change', () => {
    const onChange = jest.fn();
    const { queryByTestId } = renderTestElement(<SearchInput onChange={onChange} />);

    act(() => {
      const input = queryByTestId('search-input');

      if (input) {
        fireEvent.change(input, { target: { value: 't' } });
        fireEvent.change(input, { target: { value: 'te' } });
        fireEvent.change(input, { target: { value: 'tes' } });
        fireEvent.change(input, { target: { value: 'test' } });
      }
    });

    expect(onChange).toBeCalledTimes(4);
    expect(onChange).toBeCalledWith('test');
  });
});
