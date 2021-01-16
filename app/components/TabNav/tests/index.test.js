import React from 'react';
import { render } from 'react-testing-library';

import TabNav from '../index';

const mockProps = { dispatchNavigation: jest.fn(), pathname: '/calls' };

const Component = <TabNav {...mockProps} />;

describe('<TabNav />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(Component);
    expect(firstChild).toMatchSnapshot();
  });
});
