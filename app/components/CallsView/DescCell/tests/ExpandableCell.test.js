import React from 'react';
import { render } from 'react-testing-library';

import ExpandableCell from '../ExpandableCell';

const Component = (
  <table>
    <tbody>
      <tr>
        <ExpandableCell>testing</ExpandableCell>
      </tr>
    </tbody>
  </table>
);

describe('<ExpandableCell />', () => {
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
