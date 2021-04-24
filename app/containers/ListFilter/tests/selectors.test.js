import moment from 'moment';

import initialState from '../initialState';
import {
  makeSelectTargetDateErrors,
  makeSelectTargetLastFetchParams,
  makeSelectTargetState,
  selectListFilterDomain,
} from '../selectors';

describe('selectListFilterDomain', () => {
  const listFilterDomainState = {};
  const mockedState = { listFilter: listFilterDomainState };

  it('should select the list filter state', () => {
    expect(selectListFilterDomain(mockedState)).toEqual(listFilterDomainState);
  });
});

describe('makeSelectTargetDateErrors', () => {
  const targetDateErrorsSelector = makeSelectTargetDateErrors();
  const oldMoment = moment('1969-01-01', 'YYYY-MM-DD');
  const mockedState = {
    listFilter: {
      ...initialState,
      calls: {
        ...initialState.calls,
        dateFrom: oldMoment,
      },
    },
    router: { location: { pathname: '/calls' } },
  };
  const expected = ['pick a more recent date', ''];

  it('derives date errors from state', () => {
    expect(targetDateErrorsSelector(mockedState)).toEqual(expected);
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

describe('makeSelectTargetState', () => {
  const targetStateSelector = makeSelectTargetState();
  const mockedState = {
    listFilter: {
      ...initialState,
      calls: { ...initialState.calls, keyword: 'test' },
    },
    router: { location: { pathname: '/calls' } },
  };
  const expected = {
    dateFrom: null,
    dateRange: 0,
    dateTo: null,
    keyword: 'test',
  };

  it('derives correct substate', () => {
    expect(targetStateSelector(mockedState)).toEqual(expected);
  });
});
