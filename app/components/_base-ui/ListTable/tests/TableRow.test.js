import React from 'react';
import { render } from 'react-testing-library';

import TableRow from '../TableRow';

const mockProps = { data: { a: 'a', b: 'b' }, headers: ['a', 'b'] };

const Component = (
  <table>
    <tbody>
      <TableRow {...mockProps} />
    </tbody>
  </table>
);

describe('<TableRow />', () => {
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
