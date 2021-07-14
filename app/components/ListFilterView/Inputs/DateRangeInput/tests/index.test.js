import React from 'react';
import { render } from 'react-testing-library';

import DateRangeInput from '../index';

const mockProps = { disabled: false, onChange: jest.fn(), value: 0 };

const Component = <DateRangeInput {...mockProps} />;

describe('<DateRangeInput />', () => {
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
