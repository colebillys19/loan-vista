import React from 'react';
import { render } from 'react-testing-library';

import PieChart from '../PieChart';
import { CURRENT_PIE_MOCK_DATA } from './mockData';

const mockProps = {
  data: CURRENT_PIE_MOCK_DATA,
  heading: 'heading',
  id: 'current',
  renderLoading: false,
};

const Component = <PieChart {...mockProps} />;

describe('<PieChart />', () => {
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
