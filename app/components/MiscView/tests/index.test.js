import React from 'react';
import { render } from 'react-testing-library';

import MiscView from '../index';

describe('<MiscView />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<MiscView />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<MiscView />);
    expect(firstChild).toMatchSnapshot();
  });
});