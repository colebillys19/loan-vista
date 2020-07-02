import React from 'react';
import { render } from 'react-testing-library';

import EmailsView from '../index';

describe('<EmailsView />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<EmailsView />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<EmailsView />);
    expect(firstChild).toMatchSnapshot();
  });
});
