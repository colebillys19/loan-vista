import React from 'react';
import { render } from 'react-testing-library';

import Tooltip from '../Tooltip';

const mockProps = {};

const Component = <Tooltip {...mockProps} />;

describe('<Tooltip />', () => {
  it.skip('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
