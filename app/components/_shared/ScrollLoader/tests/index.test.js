import React from 'react';
import { render } from 'react-testing-library';

import ScrollLoader from '../index';

const mockProps = { numCells: 3 };

const Component = (
  <table>
    <ScrollLoader {...mockProps} />
  </table>
);

describe('<ScrollLoader />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(Component);
    expect(container.firstChild).toBeDefined();
  });
});
