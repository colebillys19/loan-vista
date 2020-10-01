import { call, put, select, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';

import { get } from 'utils/request';

import { fetchCallsDataFailure, fetchCallsDataSuccess } from './actions';
import makeSelectCalls from './selectors';
import { FETCH_CALLS_DATA } from './constants';

export function* fetchCallsDataSaga({ payload }) {
  try {
    const { params: newParams } = payload;
    const stateParams = yield select(makeSelectCalls('fetchParams'));
    const combinedParams = Object.assign({}, stateParams, newParams);

    const { callsData, newFetchParams } = yield call(
      get,
      `/api/calls/?${querystring.stringify(combinedParams)}`,
    );

    yield put(fetchCallsDataSuccess(callsData, newFetchParams));
  } catch (error) {
    console.error(error); // eslint-disable-line
    yield put(
      fetchCallsDataFailure(
        'something unexpected happened while retrieving data from the server',
      ),
    );
  }
}

export default function* watcherSaga() {
  yield takeLatest(FETCH_CALLS_DATA, fetchCallsDataSaga);
}
