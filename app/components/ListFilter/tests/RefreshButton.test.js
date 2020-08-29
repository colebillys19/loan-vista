import React from 'react';
import { render } from 'react-testing-library';

import RefreshButton from '../RefreshButton';

describe('<RefreshButton />', () => {
  it.skip('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<RefreshButton />);
    expect(spy).not.toHaveBeenCalled();
  });
});
