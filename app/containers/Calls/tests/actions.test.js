import {
  fetchCallsData,
  fetchCallsDataFailure,
  fetchCallsDataSuccess,
  onUnmount,
} from '../actions';
import {
  FETCH_CALLS_DATA,
  FETCH_CALLS_DATA_FAILURE,
  FETCH_CALLS_DATA_SUCCESS,
  ON_UNMOUNT,
} from '../constants';
import { MOCK_DATA } from './mockData';

describe('fetchCallsData', () => {
  it('has correct payload and type', () => {
    const params = {
      dateFrom: '2020-01-01',
      dateTo: '2020-02-01',
      keyword: 'test',
    };
    const expected = { payload: { params }, type: FETCH_CALLS_DATA };

    expect(fetchCallsData(params)).toEqual(expected);
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
    const newFetchParams = {
      currentTotal: '80',
      dateFrom: '',
      dateTo: '',
      keyword: '',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = {
      payload: { callsData, newFetchParams },
      type: FETCH_CALLS_DATA_SUCCESS,
    };

    expect(fetchCallsDataSuccess(callsData, newFetchParams)).toEqual(expected);
  });
});

describe('onUnmount', () => {
  it('has correct type', () => {
    expect(onUnmount()).toEqual({ type: ON_UNMOUNT });
  });
});
