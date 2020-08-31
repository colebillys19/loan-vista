import React from 'react';
import { render } from 'react-testing-library';

import TabWrapper from '../index';

const Component = (
  <TabWrapper>
    <div />
  </TabWrapper>
);

describe('<TabWrapper />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});