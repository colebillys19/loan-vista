import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';

import { get } from 'utils/request';
import { REQUEST_ERROR_MESSAGE } from 'utils/globalConstants';
import makeSelectMain from 'containers/Main/selectors';

import { fetchPaymentsDataFailure, fetchPaymentsDataSuccess } from './actions';
import makeSelectPayments from './selectors';
import { FETCH_PAYMENTS_DATA } from './constants';

export function* fetchPaymentsDataSaga({ payload }) {
  try {
    const { params: payloadFetchParams } = payload;
    const stateFetchParams = yield select(makeSelectPayments('fetchParams'));
    const loanNumber = yield select(makeSelectMain('loanNumber'));

    if (loanNumber) {
      const queryParams = Object.assign(
        {},
        { loanNumber },
        payloadFetchParams,
        stateFetchParams,
      );

      const { newFetchParams, paymentsData } = yield call(
        get,
        `/api/payments/?${querystring.stringify(queryParams)}`,
      );

      yield put(fetchPaymentsDataSuccess(paymentsData, newFetchParams));
    }
  } catch (error) {
    console.error(error); // eslint-disable-line
    yield put(fetchPaymentsDataFailure(REQUEST_ERROR_MESSAGE));
  }
}

export function* fetchPaymentsData() {
  yield takeLatest(FETCH_PAYMENTS_DATA, fetchPaymentsDataSaga);
}

export default function* watcherSaga() {
  yield all([fetchPaymentsData()]);
}
