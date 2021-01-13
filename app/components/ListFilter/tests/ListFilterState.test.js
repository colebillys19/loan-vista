import React from 'react';
import { render } from 'react-testing-library';

import ListFilterState from '../ListFilterState';

const mockProps = {
  dispatchFetchData: jest.fn(),
  fetchParams: {},
  render: () => <div />,
};

const Component = <ListFilterState {...mockProps} />;

describe('<ListFilterState />', () => {
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
