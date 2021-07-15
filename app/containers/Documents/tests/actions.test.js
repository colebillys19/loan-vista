import {
  fetchDocumentsData,
  fetchDocumentsDataFailure,
  fetchDocumentsDataSuccess,
} from '../actions';
import {
  FETCH_DOCUMENTS_DATA,
  FETCH_DOCUMENTS_DATA_FAILURE,
  FETCH_DOCUMENTS_DATA_SUCCESS,
} from '../constants';

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
      payload: { pageToFetch: 1, sortCol: 'date', sortOrder: 'desc' },
      type: FETCH_DOCUMENTS_DATA,
    };

    expect(
      fetchDocumentsData({
        pageToFetch: 1,
        sortCol: 'date',
        sortOrder: 'desc',
      }),
    ).toEqual(expected);
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
    const params = {
      dateFrom: '',
      dateTo: '',
      keyword: '',
      sortCol: 'date sent',
      sortOrder: 'desc',
    };
    const expected = {
      payload: {
        pageData: [],
        pageNum: 1,
        params,
        totalPages: 1,
      },
      type: FETCH_DOCUMENTS_DATA_SUCCESS,
    };

    expect(
      fetchDocumentsDataSuccess({
        pageData: [],
        pageNum: 1,
        params,
        totalPages: 1,
      }),
    ).toEqual(expected);
  });
});
