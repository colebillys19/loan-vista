import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';

import { get } from 'utils/request';
import { REQUEST_ERROR_MESSAGE } from 'utils/globalConstants';
import makeSelectMain from 'containers/Main/selectors';

import {
  fetchDocumentsDataFailure,
  fetchDocumentsDataSuccess,
} from './actions';
import makeSelectDocuments from './selectors';
import { FETCH_DOCUMENTS_DATA } from './constants';

export function* fetchDocumentsDataSaga({ payload }) {
  try {
    const { params: payloadFetchParams } = payload;
    const stateFetchParams = yield select(makeSelectDocuments('fetchParams'));
    const loanNumber = yield select(makeSelectMain('loanNumber'));

    if (loanNumber) {
      const queryParams = Object.assign(
        {},
        { loanNumber },
        payloadFetchParams,
        stateFetchParams,
      );

      const { documentsData, newFetchParams } = yield call(
        get,
        `/api/documents/?${querystring.stringify(queryParams)}`,
      );

      yield put(fetchDocumentsDataSuccess(documentsData, newFetchParams));
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
