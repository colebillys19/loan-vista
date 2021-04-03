import {
  fetchCallsData,
  fetchCallsDataFailure,
  fetchCallsDataSuccess,
  setLoadingTrue,
} from '../actions';
import {
  FETCH_CALLS_DATA,
  FETCH_CALLS_DATA_FAILURE,
  FETCH_CALLS_DATA_SUCCESS,
  SET_LOADING_TRUE,
} from '../constants';
import { MOCK_DATA } from './mockData';

describe('fetchCallsData', () => {
  it('behaves as expected when no arguments passed', () => {
    const expected = {
      payload: { sortCol: undefined, sortOrder: undefined },
      type: FETCH_CALLS_DATA,
    };

    expect(fetchCallsData()).toEqual(expected);
  });

  it('behaves as expected when arguments passed', () => {
    const expected = {
      payload: { sortCol: 'date', sortOrder: 'desc' },
      type: FETCH_CALLS_DATA,
    };

    expect(fetchCallsData('date', 'desc')).toEqual(expected);
  });
});

describe('fetchCallsDataFailure', () => {
  it('has correct payload and type', () => {
    const error = 'error';
    const expected = { payload: { error }, type: FETCH_CALLS_DATA_FAILURE };

    expect(fetchCallsDataFailure(error)).toEqual(expected);
  });
});

describe('fetchCallsDataSuccess', () => {
  it('has correct payload and type', () => {
    const callsData = MOCK_DATA;
    const params = {
      dateFrom: '',
      dateTo: '',
      keyword: '',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = {
      payload: { callsData, params },
      type: FETCH_CALLS_DATA_SUCCESS,
    };

    expect(fetchCallsDataSuccess(callsData, params)).toEqual(expected);
  });
});

describe('setLoadingTrue', () => {
  it('has correct type', () => {
    expect(setLoadingTrue()).toEqual({ type: SET_LOADING_TRUE });
  });
});
