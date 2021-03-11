import React from 'react';
import { render } from 'react-testing-library';

import DateRangeField from '../DateRangeField';

const mockProps = {
  dateRange: 0,
  disabled: false,
  onChange: jest.fn(),
};

const Component = <DateRangeField {...mockProps} />;

describe('<DateRangeField />', () => {
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
