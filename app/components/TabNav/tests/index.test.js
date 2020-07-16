import React from 'react';
import { render } from 'react-testing-library';

import TabNav from '../index';

const mockProps = { dispatchNavigation: jest.fn(), pathname: 'pathname' };

const Component = <TabNav {...mockProps} />;

describe('<TabNav />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(Component);
    expect(firstChild).toMatchSnapshot();
  });
});
