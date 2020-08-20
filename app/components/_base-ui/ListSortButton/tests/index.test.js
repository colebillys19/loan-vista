import React from 'react';
import { render } from 'react-testing-library';

import ListTableHead from '../index';

describe('<ListTableHead />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ListTableHead />);
    expect(spy).not.toHaveBeenCalled();
  });
});
