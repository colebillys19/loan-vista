import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';

import { REQUEST_ERROR_MESSAGE } from 'utils/globalConstants';
import { formatFilterState } from 'utils/globalHelpers';
import { get } from 'utils/request';
import makeSelectMain from 'containers/Main/selectors';
import { selectListFilterDomain } from 'containers/ListFilter/selectors';

import {
  fetchDocumentsDataFailure,
  fetchDocumentsDataSuccess,
} from './actions';
import makeSelectDocuments from './selectors';
import { FETCH_DOCUMENTS_DATA } from './constants';

export function* fetchDocumentsDataSaga({ payload }) {
  try {
    const loanNumber = yield select(makeSelectMain('loanNumber'));

    if (loanNumber) {
      const { sortCol, sortOrder } = payload;
      const filterState = yield select(selectListFilterDomain);
      const lastFetchParams = yield select(
        makeSelectDocuments('lastFetchParams'),
      );

      const newParams =
        sortCol && sortOrder
          ? { sortCol, sortOrder }
          : formatFilterState(filterState.documents);

      const queryParams = { ...lastFetchParams, ...newParams, loanNumber };
      const endpoint = `/api/documents/?${querystring.stringify(queryParams)}`;

      const { documentsData, params } = yield call(get, endpoint);

      yield put(fetchDocumentsDataSuccess(documentsData, params));
    }
  } catch (error) {
    console.error(error); // eslint-disable-line
    yield put(fetchDocumentsDataFailure(REQUEST_ERROR_MESSAGE));
  }
}

export function* fetchDocumentsData() {
  yield takeLatest(FETCH_DOCUMENTS_DATA, fetchDocumentsDataSaga);
}

export default function* watcherSaga() {
  yield all([fetchDocumentsData()]);
}
