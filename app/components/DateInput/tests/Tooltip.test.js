import React from 'react';
import { render } from 'react-testing-library';

import Tooltip from '../Tooltip';

const Component = (
  <Tooltip title="title">
    <div />
  </Tooltip>
);

describe('<Tooltip />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
