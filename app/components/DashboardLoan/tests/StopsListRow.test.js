import React from 'react';
import { render } from 'react-testing-library';

import StopsListRow from '../StopsListRow';
import { MOCK_STOPS_DATA } from './mockData';

const mockProps = {
  data: MOCK_STOPS_DATA[0],
  headers: ['name', 'desc', 'date'],
};

const Component = (
  <table>
    <tbody>
      <StopsListRow {...mockProps} />
    </tbody>
  </table>
);

describe('<StopsListRow />', () => {
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
