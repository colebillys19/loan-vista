import React from 'react';
import { render } from 'react-testing-library';

import Table from '../index';
import { MOCK_DATA, MOCK_HEADERS } from '../../tests/mockData';

const Component = (
  <Table
    data={MOCK_DATA}
    headers={MOCK_HEADERS}
    mainError={false}
    useFallback={false}
  />
);

describe('<Table />', () => {
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
