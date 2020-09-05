import React from 'react';
import { render } from 'react-testing-library';

import TableRow from '../TableRow';

import { MOCK_HEADERS, MOCK_ROW_DATA } from './mockData';

const mockProps = { data: MOCK_ROW_DATA, headers: MOCK_HEADERS };

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
