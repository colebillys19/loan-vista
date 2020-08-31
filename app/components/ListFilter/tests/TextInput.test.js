import React from 'react';
import { render } from 'react-testing-library';

import TextInput from '../TextInput';

const mockProps = { onChange: jest.fn(), value: 'value' };

const Component = <TextInput {...mockProps} />;

describe('<TextInput />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
