import React from 'react';
import { render } from 'react-testing-library';

import ListFilter from '../index';

describe('<ListFilter />', () => {
  it.skip('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ListFilter />);
    expect(spy).not.toHaveBeenCalled();
  });
});
