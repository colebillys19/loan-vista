import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from 'utils/request';

import {
  fetchDocumentsDataFailure,
  fetchDocumentsDataSuccess,
} from './actions';
import { FETCH_DOCUMENTS_DATA } from './constants';

export function* fetchDocumentsDataSaga() {
  try {
    const documentsData = yield call(get, '/api/documents');
    yield put(fetchDocumentsDataSuccess(documentsData));
  } catch (error) {
    yield put(fetchDocumentsDataFailure(error));
  }
}

export default function* watcherSaga() {
  yield takeLatest(FETCH_DOCUMENTS_DATA, fetchDocumentsDataSaga);
}
