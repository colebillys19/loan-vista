import React from 'react';
import { render } from 'react-testing-library';

import DashboardView from '../index';

const mockProps = {
  dashboardBorrowerData: [{ listData: [], title: 'title' }],
  dashboardListsData: {
    callsData: { data: [], listHeaders: ['header'] },
    documentsData: { data: [], listHeaders: ['header'] },
    paymentsData: { data: [], listHeaders: ['header'] },
  },
  dashboardLoanData: {
    balancesData: { listData: [], title: 'title' },
    paymentData: { listData: [], title: 'title' },
    stopsData: [],
  },
  dispatchNavigation: jest.fn(),
  error: false,
  loading: false,
  loanNumber: '1234567890',
};

const Component = <DashboardView {...mockProps} />;

describe('<DashboardView />', () => {
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
