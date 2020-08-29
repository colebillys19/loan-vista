import React from 'react';
import { render } from 'react-testing-library';

import SelectInput from '../SelectInput';

describe('<SelectInput />', () => {
  it.skip('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<SelectInput />);
    expect(spy).not.toHaveBeenCalled();
  });
});
