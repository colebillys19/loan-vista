import React from 'react';
import { render } from 'react-testing-library';

import LinkButton from '../index';

const mockProps = { onClick: jest.fn(), text: 'text' };

const Component = <LinkButton {...mockProps} />;

describe('<LinkButton />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
