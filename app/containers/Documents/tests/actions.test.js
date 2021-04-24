import {
  fetchDocumentsData,
  fetchDocumentsDataFailure,
  fetchDocumentsDataSuccess,
  setLoadingTrue,
} from '../actions';
import {
  FETCH_DOCUMENTS_DATA,
  FETCH_DOCUMENTS_DATA_FAILURE,
  FETCH_DOCUMENTS_DATA_SUCCESS,
  SET_LOADING_TRUE,
} from '../constants';
import { MOCK_DATA } from './mockData';

describe('fetchDocumentsData', () => {
  it('behaves as expected when no arguments passed', () => {
    const expected = {
      payload: { sortCol: undefined, sortOrder: undefined },
      type: FETCH_DOCUMENTS_DATA,
    };

    expect(fetchDocumentsData()).toEqual(expected);
  });

  it('behaves as expected when arguments passed', () => {
    const expected = {
      payload: { sortCol: 'date', sortOrder: 'desc' },
      type: FETCH_DOCUMENTS_DATA,
    };

    expect(fetchDocumentsData('date', 'desc')).toEqual(expected);
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
    const params = {
      dateFrom: '',
      dateTo: '',
      keyword: '',
      sortCol: 'date sent',
      sortOrder: 'desc',
    };
    const expected = {
      payload: { documentsData, params },
      type: FETCH_DOCUMENTS_DATA_SUCCESS,
    };

    expect(fetchDocumentsDataSuccess(documentsData, params)).toEqual(expected);
  });
});

describe('setLoadingTrue', () => {
  it('has correct type', () => {
    expect(setLoadingTrue()).toEqual({ type: SET_LOADING_TRUE });
  });
});
