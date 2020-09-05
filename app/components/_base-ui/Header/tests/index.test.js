import React from 'react';
import { render } from 'react-testing-library';

import Header from '../index';

describe('<Header />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Header />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toBeDefined();
  });
});
