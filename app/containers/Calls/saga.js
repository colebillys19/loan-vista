import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';

import { REQUEST_ERROR_MESSAGE } from 'utils/globalConstants';
import { get } from 'utils/request';
import makeSelectMain from 'containers/Main/selectors';

import { fetchCallsDataFailure, fetchCallsDataSuccess } from './actions';
import makeSelectCalls from './selectors';
import { FETCH_CALLS_DATA } from './constants';

export function* fetchCallsDataSaga() {
  try {
    const loanNumber = yield select(makeSelectMain('loanNumber'));

    if (loanNumber) {
      const currentFilterParams = yield select(
        makeSelectCalls('currentFilterParams'),
      );
      const currentSortParams = yield select(
        makeSelectCalls('currentSortParams'),
      );
      const oldFilterParams = yield select(makeSelectCalls('oldFilterParams'));
      const oldSortParams = yield select(makeSelectCalls('oldSortParams'));

      const currentParams = { ...currentFilterParams, ...currentSortParams };
      const oldParams = { ...oldFilterParams, ...oldSortParams };

      const queryParams = Object.assign(
        {},
        { loanNumber },
        oldParams,
        currentParams,
      );

      const { callsData, newFetchParams } = yield call(
        get,
        `/api/calls/?${querystring.stringify(queryParams)}`,
      );

      yield put(fetchCallsDataSuccess(callsData, newFetchParams));
    }
  } catch (error) {
    console.error(error); // eslint-disable-line
    yield put(fetchCallsDataFailure(REQUEST_ERROR_MESSAGE));
  }
}

export function* fetchCallsData() {
  yield takeLatest(FETCH_CALLS_DATA, fetchCallsDataSaga);
}

export default function* watcherSaga() {
  yield all([fetchCallsData()]);
}
