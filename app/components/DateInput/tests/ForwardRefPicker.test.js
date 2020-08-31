import React from 'react';
import { render } from 'react-testing-library';

import ForwardRefPicker from '../ForwardRefPicker';

const mockProps = {
  isError: false,
  onChange: jest.fn(),
  value: new Date(),
};

const Component = <ForwardRefPicker {...mockProps} />;

describe('<ForwardRefPicker />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
