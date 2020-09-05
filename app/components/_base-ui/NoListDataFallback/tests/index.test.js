import React from 'react';
import { render } from 'react-testing-library';

import NoListDataFallback from '../index';

describe('<NoListDataFallback />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<NoListDataFallback />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(<NoListDataFallback />);
    expect(container.firstChild).toBeDefined();
  });
});
