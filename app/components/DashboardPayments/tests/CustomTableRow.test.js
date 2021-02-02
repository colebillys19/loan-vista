import React from 'react';
import { render } from 'react-testing-library';

import CustomTableRow from '../CustomTableRow';
import { MOCK_DATA, MOCK_HEADERS } from './mockData';

const mockProps = { data: MOCK_DATA[0], headers: MOCK_HEADERS };

const Component = (
  <table>
    <tbody>
      <CustomTableRow {...mockProps} />
    </tbody>
  </table>
);

describe('<CustomTableRow />', () => {
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
