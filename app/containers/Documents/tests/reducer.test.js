import produce from 'immer';

import {
  fetchDocumentsData,
  fetchDocumentsDataFailure,
  fetchDocumentsDataSuccess,
  onUnmount,
} from '../actions';
import initialState from '../initialState';
import documentsReducer from '../reducer';
import { MOCK_DATA } from './mockData';

/* eslint-disable no-param-reassign */
describe('documentsReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expected = state;
    expect(documentsReducer(undefined, {})).toEqual(expected);
  });

  it('should handle fetchDocumentsData correctly when no arguments are passed', () => {
    const expected = produce(state, (draft) => {
      draft.loading = true;
    });

    expect(documentsReducer(state, fetchDocumentsData())).toEqual(expected);
  });

  it('should handle fetchDocumentsData correctly when filter arguments are passed', () => {
    const params = {
      dateFrom: '2020-01-01',
      dateTo: '2020-02-01',
      keyword: 'test',
    };
    const expected = produce(state, (draft) => {
      draft.loading = true;
    });

    expect(documentsReducer(state, fetchDocumentsData(params))).toEqual(
      expected,
    );
  });

  it('should handle fetchDocumentsData correctly when sort arguments are passed', () => {
    const params = { sortOrder: 'asc' };
    const expected = produce(state, (draft) => {
      draft.sortLoading = true;
    });

    expect(documentsReducer(state, fetchDocumentsData(params))).toEqual(
      expected,
    );
  });

  it('should handle fetchDocumentsDataFailure correctly', () => {
    const error = 'error';
    const expected = produce(state, (draft) => {
      draft.error = 'error';
    });

    expect(documentsReducer(state, fetchDocumentsDataFailure(error))).toEqual(
      expected,
    );
  });

  it('should handle fetchDocumentsDataSuccess correctly', () => {
    const documentsData = MOCK_DATA;
    const newFetchParams = {
      currentTotal: '80',
      dateFrom: '2020-01-01',
      dateTo: '2020-02-01',
      keyword: 'test',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = produce(state, (draft) => {
      draft.documentsData = documentsData;
      draft.fetchParams = newFetchParams;
    });

    expect(
      documentsReducer(
        state,
        fetchDocumentsDataSuccess(documentsData, newFetchParams),
      ),
    ).toEqual(expected);
  });

  it('should handle onUnmount correctly', () => {
    expect(documentsReducer(state, onUnmount())).toEqual(initialState);
  });
});
