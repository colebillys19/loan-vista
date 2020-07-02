import React from 'react';
import { render } from 'react-testing-library';

import CallsView from '../index';

describe('<CallsView />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<CallsView />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<CallsView />);
    expect(firstChild).toMatchSnapshot();
  });
});
