import React from 'react';
import { render } from 'react-testing-library';

import SelectInput from '../SelectInput';

const mockProps = { onChange: jest.fn(), value: 0 };

const Component = <SelectInput {...mockProps} />;

describe('<SelectInput />', () => {
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
