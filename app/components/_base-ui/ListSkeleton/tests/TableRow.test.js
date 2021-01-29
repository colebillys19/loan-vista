import React from 'react';
import { render } from 'react-testing-library';

import TableRow from '../TableRow';

describe('<TableRow />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<TableRow />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(<TableRow />);
    expect(container.firstChild).toBeDefined();
  });
});
