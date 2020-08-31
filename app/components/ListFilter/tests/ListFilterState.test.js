import React from 'react';
import { render } from 'react-testing-library';

import ListFilterState from '../ListFilterState';

const mockProps = { render: () => <div /> };

const Component = <ListFilterState {...mockProps} />;

describe('<ListFilterState />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });
});
