import React from 'react';
import { render } from 'react-testing-library';

import ForwardRefPicker from '../ForwardRefPicker';

const mockProps = { onChange: jest.fn(), value: null };

const Component = <ForwardRefPicker {...mockProps} />;

describe('<ForwardRefPicker />', () => {
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
