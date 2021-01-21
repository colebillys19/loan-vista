import React from 'react';
import { render } from 'react-testing-library';

import StopsList from '../StopsList';
import { MOCK_STOPS_DATA } from './mockData';

const mockProps = { data: MOCK_STOPS_DATA };

const Component = <StopsList {...mockProps} />;

describe('<StopsList />', () => {
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
