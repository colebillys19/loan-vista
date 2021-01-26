import {
  fetchDocumentsData,
  fetchDocumentsDataFailure,
  fetchDocumentsDataSuccess,
  onUnmount,
  setLoadingTrue,
} from '../actions';
import {
  FETCH_DOCUMENTS_DATA,
  FETCH_DOCUMENTS_DATA_FAILURE,
  FETCH_DOCUMENTS_DATA_SUCCESS,
  ON_UNMOUNT,
  SET_LOADING_TRUE,
} from '../constants';
import { MOCK_DATA } from './mockData';

describe('fetchDocumentsData', () => {
  it('has correct payload and type', () => {
    const params = {
      dateFrom: '2020-10-13',
      dateTo: '2020-11-18',
      keyword: 'test',
    };
    const expected = { payload: { params }, type: FETCH_DOCUMENTS_DATA };

    expect(fetchDocumentsData(params)).toEqual(expected);
  });
});

describe('fetchDocumentsDataFailure', () => {
  it('has correct payload and type', () => {
    const error = 'error';
    const expected = { payload: { error }, type: FETCH_DOCUMENTS_DATA_FAILURE };

    expect(fetchDocumentsDataFailure(error)).toEqual(expected);
  });
});

describe('fetchDocumentsDataSuccess', () => {
  it('has correct payload and type', () => {
    const documentsData = MOCK_DATA;
    const newFetchParams = {
      currentTotal: '80',
      dateFrom: '',
      dateTo: '',
      keyword: '',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = {
      payload: { documentsData, newFetchParams },
      type: FETCH_DOCUMENTS_DATA_SUCCESS,
    };

    expect(fetchDocumentsDataSuccess(documentsData, newFetchParams)).toEqual(
      expected,
    );
  });
});

describe('onUnmount', () => {
  it('has correct type', () => {
    expect(onUnmount()).toEqual({ type: ON_UNMOUNT });
  });
});

describe('setLoadingTrue', () => {
  it('has correct type', () => {
    expect(setLoadingTrue()).toEqual({ type: SET_LOADING_TRUE });
  });
});
