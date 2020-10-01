import React from 'react';
import { render } from 'react-testing-library';

import ListRenderFallback from '../index';

describe('<ListRenderFallback />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ListRenderFallback />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(<ListRenderFallback />);
    expect(container.firstChild).toBeDefined();
  });
});
