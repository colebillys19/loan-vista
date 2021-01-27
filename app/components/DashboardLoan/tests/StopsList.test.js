import React from 'react';
import { render } from 'react-testing-library';

import StopsList from '../StopsList';
import { MOCK_STOPS_DATA } from './mockData';

const Component = <StopsList data={MOCK_STOPS_DATA} renderLoading={false} />;
const ComponentLoading = <StopsList data={[]} renderLoading />;

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

describe('<StopsList /> loading state', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(ComponentLoading);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(ComponentLoading);
    expect(container.firstChild).toBeDefined();
  });
});
