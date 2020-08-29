import React from 'react';
import { render } from 'react-testing-library';

import Tabs from '../Tabs';

const mockProps = { handleChange: jest.fn(), value: 0 };

const Component = <Tabs {...mockProps} />;

describe('<Tabs />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
