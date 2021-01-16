import React from 'react';
import { render } from 'react-testing-library';

import CallsView from '../index';

import { MOCK_DATA } from './mockData';

const mockProps = {
  callsData: MOCK_DATA,
  dispatchFetchCallsData: jest.fn(),
  error: false,
  fetchParams: {},
  loading: false,
  sortLoading: false,
  sortValues: {},
};

const Component = <CallsView {...mockProps} />;

describe('<CallsView />', () => {
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
