import React from 'react';
import { render } from 'react-testing-library';

import AppHeader from '../index';

describe('<AppHeader />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<AppHeader />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(<AppHeader />);
    expect(container.firstChild).toBeDefined();
  });
});
