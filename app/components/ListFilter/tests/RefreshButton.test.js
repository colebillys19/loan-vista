import React from 'react';
import { render } from 'react-testing-library';

import RefreshButton from '../RefreshButton';

const mockProps = { onClick: jest.fn() };

const Component = <RefreshButton {...mockProps} />;

describe('<RefreshButton />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
