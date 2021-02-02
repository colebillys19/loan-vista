import React from 'react';
import { render } from 'react-testing-library';

import MiscHomeowners from '../index';
import { MOCK_DATA } from './mockData';

const mockProps = { data: MOCK_DATA, renderLoading: false };

const Component = <MiscHomeowners {...mockProps} />;

describe('<MiscHomeowners />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(Component);
    expect(container.firstChild).toBeDefined();
  });
});
