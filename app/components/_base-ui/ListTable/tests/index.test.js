import React from 'react';
import { render } from 'react-testing-library';

import ListTable from '../index';

describe('<ListTable />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ListTable />);
    expect(spy).not.toHaveBeenCalled();
  });
});
