import React from 'react';
import { render } from 'react-testing-library';

import TextInput from '../TextInput';

describe('<TextInput />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<TextInput />);
    expect(spy).not.toHaveBeenCalled();
  });
});
