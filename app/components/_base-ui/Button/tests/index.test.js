import React from 'react';
import { render } from 'react-testing-library';

import Button from '../index';

const mockProps = { onClick: jest.fn(), text: 'text' };

const Component = <Button {...mockProps} />;

describe('<Button />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
