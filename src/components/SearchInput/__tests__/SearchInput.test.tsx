import { fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import renderTestElement from '../../../utils/renderTestComponent';
import SearchInput from '../SearchInput';

describe('SearchInput component', () => {
  it('displays search text input', () => {
    const { queryByTestId } = renderTestElement(<SearchInput onChange={() => undefined} />);
    expect(queryByTestId('search-input')).not.toBeNull();
  });

  it('fires a debounced change event on input change', async () => {
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

    await waitFor(() => {
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).not.toBeCalledWith('t');
      expect(onChange).not.toBeCalledWith('te');
      expect(onChange).not.toBeCalledWith('tes');
      expect(onChange).toBeCalledWith('test');
    });
  });

  it('displays a placeholder if it is passed through the props', () => {
    const { queryByPlaceholderText } = renderTestElement(
      <SearchInput placeholder="test placeholder" onChange={() => undefined} />
    );

    expect(queryByPlaceholderText('test placeholder')).not.toBeNull();
  });
});
