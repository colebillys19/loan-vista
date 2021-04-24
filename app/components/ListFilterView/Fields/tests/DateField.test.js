import React from 'react';
import { render } from 'react-testing-library';

import DateField from '../DateField';

const mockProps = {
  disabled: false,
  error: '',
  label: 'from',
  onChange: jest.fn(),
  setError: jest.fn(),
  value: null,
};

const Component = <DateField {...mockProps} />;

describe('<DateField />', () => {
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
