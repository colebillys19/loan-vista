import React from 'react';
import { render } from 'react-testing-library';

import ListTableBody from '../index';

describe('<ListTableBody />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ListTableBody />);
    expect(spy).not.toHaveBeenCalled();
  });
});
