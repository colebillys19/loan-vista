import { call, put, select, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';

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
    yield put(fetchDocumentsDataFailure(error));
  }
}

export default function* watcherSaga() {
  yield takeLatest(FETCH_DOCUMENTS_DATA, fetchDocumentsDataSaga);
}
