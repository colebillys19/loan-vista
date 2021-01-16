import React from 'react';
import { render } from 'react-testing-library';

import DashboardView from '../index';

describe('<DashboardView />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<DashboardView />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<DashboardView />);
    expect(firstChild).toMatchSnapshot();
  });
});
