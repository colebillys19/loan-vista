import React from 'react';
import { render } from 'react-testing-library';

import ListFallback from '../index';

const mockProps = { loading: false };

describe('<ListFallback />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ListFallback {...mockProps} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(<ListFallback {...mockProps} />);
    expect(container.firstChild).toBeDefined();
  });
});
