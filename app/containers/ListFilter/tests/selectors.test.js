import moment from 'moment';

import initialState from '../initialState';
import {
  // makeSelectListFilterState,
  makeSelectTargetFilterState,
  makeSelectTargetLastFetchParams,
  selectListFilterDomain,
} from '../selectors';

describe('selectCallsDomain', () => {
  const listFilterDomainState = {};
  const mockedState = { listFilter: listFilterDomainState };

  it('should select the list filter state', () => {
    expect(selectListFilterDomain(mockedState)).toEqual(listFilterDomainState);
  });
});

// needed?
// describe('makeSelectListFilterState', () => {});

describe('makeSelectTargetFilterState', () => {
  const targetFilterStateSelector = makeSelectTargetFilterState();

  it('should format state with date errors and target id', () => {
    const mockedState = {
      listFilter: {
        ...initialState,
        calls: {
          dateFrom: null,
          dateRange: 0,
          dateTo: null,
          keyword: '',
        },
      },
      router: { location: { pathname: '/calls' } },
    };
    const expected = {
      state: {
        dateFrom: null,
        dateFromError: '',
        dateRange: 0,
        dateTo: null,
        dateToError: '',
        keyword: '',
      },
      targetId: 'calls',
    };

    expect(targetFilterStateSelector(mockedState)).toEqual(expected);
  });

  it('should derive date error from date object', () => {
    const oldMoment = moment('1969-01-01', 'YYYY-MM-DD');
    const mockedState = {
      listFilter: {
        ...initialState,
        calls: {
          dateFrom: oldMoment,
          dateRange: 0,
          dateTo: null,
          keyword: '',
        },
      },
      router: { location: { pathname: '/calls' } },
    };
    const expected = {
      state: {
        dateFrom: oldMoment,
        dateFromError: 'pick a more recent date',
        dateRange: 0,
        dateTo: null,
        dateToError: '',
        keyword: '',
      },
      targetId: 'calls',
    };

    expect(targetFilterStateSelector(mockedState)).toEqual(expected);
  });
});

describe('makeSelectTargetLastFetchParams', () => {
  const targetLastFetchParamsSelector = makeSelectTargetLastFetchParams();

  it('should select last fetch params based on current location', () => {
    const mockedState = {
      calls: {
        lastFetchParams: {
          dateFrom: '',
          dateTo: '',
          keyword: '',
          sortCol: 'date',
          sortOrder: 'desc',
        },
      },
      documents: { lastFetchParams: {} },
      payments: { lastFetchParams: {} },
      router: { location: { pathname: '/calls' } },
    };
    const expected = {
      dateFrom: '',
      dateTo: '',
      keyword: '',
      sortCol: 'date',
      sortOrder: 'desc',
    };

    expect(targetLastFetchParamsSelector(mockedState)).toEqual(expected);
  });
});
