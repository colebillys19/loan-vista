import React from 'react';
import { render } from 'react-testing-library';

import Header from '../index';

describe('<Header />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Header />);
    expect(spy).not.toHaveBeenCalled();
  });
});
