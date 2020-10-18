import React from 'react';
import { render } from 'react-testing-library';

import ListFallback from '../index';

describe('<ListFallback />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ListFallback />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(<ListFallback />);
    expect(container.firstChild).toBeDefined();
  });
});
