import React from 'react';
import { render } from 'react-testing-library';

import TextField from '../TextField';

describe('<TextField />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<TextField />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(<TextField />);
    expect(container.firstChild).toBeDefined();
  });
});
