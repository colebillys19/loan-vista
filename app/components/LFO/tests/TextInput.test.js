import React from 'react';
import { render } from 'react-testing-library';

import TextInput from '../TextInput';

const mockProps = { onChange: jest.fn(), value: 'value' };

const Component = <TextInput {...mockProps} />;

describe('<TextInput />', () => {
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
