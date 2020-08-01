import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from 'utils/request';

import { fetchEmailsDataFailure, fetchEmailsDataSuccess } from './actions';
import { FETCH_EMAILS_DATA } from './constants';

export function* fetchEmailsDataSaga() {
  try {
    const emailsData = yield call(get, '/api/emails');
    yield put(fetchEmailsDataSuccess(emailsData));
  } catch (error) {
    yield put(fetchEmailsDataFailure(error));
  }
}

export default function* watcherSaga() {
  yield takeLatest(FETCH_EMAILS_DATA, fetchEmailsDataSaga);
}
