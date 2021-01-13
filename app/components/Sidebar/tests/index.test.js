import React from 'react';
import { render } from 'react-testing-library';

import Sidebar from '../index';

const mockProps = {
  error: false,
  loading: false,
  loanNumber: '',
  pathname: '/',
  sidebarHeaderData: {
    address1: 'address1',
    address2: 'address2',
    health: 0,
    loanNumber: 'loanNumber',
    name: 'name',
  },
  sidebarSummariesData: {
    callsSummaryData: [{ label: 'label', value: 'value' }],
    health: 0,
    loanSummaryData: [{ label: 'label', value: 'value' }],
    paymentSummaryData: [{ label: 'label', value: 'value' }],
    serviceSummaryData: [{ label: 'label', value: 'value' }],
  },
};

const Component = <Sidebar {...mockProps} />;

describe('<Sidebar />', () => {
  it('Expect not to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(Component);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render', () => {
    const { container } = render(Component);
    expect(container.firstChild).toBeDefined();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(Component);
    expect(firstChild).toMatchSnapshot();
  });
});
