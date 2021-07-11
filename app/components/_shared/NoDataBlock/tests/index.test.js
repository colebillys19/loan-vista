import React from 'react';
import { render } from 'react-testing-library';

import NoDataBlock from '../index';

describe('<NoDataBlock />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<NoDataBlock />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(<NoDataBlock />);
    expect(container.firstChild).toBeDefined();
  });
});
