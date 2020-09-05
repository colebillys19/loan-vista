import React from 'react';
import { render } from 'react-testing-library';

import Spinner from '../index';

describe('<Spinner />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Spinner />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toBeDefined();
  });
});
