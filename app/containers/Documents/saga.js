import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';

import { REQUEST_ERROR_MESSAGE } from 'utils/globalConstants';
import { get } from 'utils/request';

import {
  fetchDocumentsDataFailure,
  fetchDocumentsDataSuccess,
} from './actions';
import makeSelectDocuments from './selectors';
import { FETCH_DOCUMENTS_DATA } from './constants';

export function* fetchDocumentsDataSaga({ payload }) {
  try {
    const { params: newParams } = payload;
    const stateParams = yield select(makeSelectDocuments('fetchParams'));
    const combinedParams = Object.assign({}, stateParams, newParams);

    const { documentsData, newFetchParams } = yield call(
      get,
      `/api/documents/?${querystring.stringify(combinedParams)}`,
    );

    yield put(fetchDocumentsDataSuccess(documentsData, newFetchParams));
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
