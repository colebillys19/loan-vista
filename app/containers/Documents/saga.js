import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';

import { REQUEST_ERROR_MESSAGE } from 'utils/globalConstants';
import { formatFilterState } from 'utils/globalHelpers';
import { get } from 'utils/request';
// import makeSelectMain from 'containers/Main/selectors';
import { selectListFilterDomain } from 'containers/ListFilter/selectors';

import {
  fetchDocumentsDataFailure,
  fetchDocumentsDataSuccess,
} from './actions';
import makeSelectDocuments from './selectors';
import { FETCH_DOCUMENTS_DATA } from './constants';

export function* fetchDocumentsDataSaga({ payload }) {
  try {
    // hard-coded temporarily
    const loanNumber = '9937485204';
    // const loanNumber = yield select(makeSelectMain('loanNumber'));
    const itemsPerPage = yield select(makeSelectDocuments('itemsPerPage'));

    const { pageToFetch = 1, sortCol, sortOrder } = payload;
    const filterState = yield select(selectListFilterDomain);
    const lastFetchParams = yield select(
      makeSelectDocuments('lastFetchParams'),
    );
    const newParams =
      sortCol && sortOrder
        ? { sortCol, sortOrder }
        : formatFilterState(filterState.documents);

    const queryParams = {
      ...lastFetchParams,
      ...newParams,
      itemsPerPage,
      loanNumber,
      pageToFetch,
    };
    const endpoint = `/api/documents/?${querystring.stringify(queryParams)}`;

    const { pageData, params, totalPages } = yield call(get, endpoint);

    yield put(
      fetchDocumentsDataSuccess({
        pageData,
        pageNum: pageToFetch,
        params,
        totalPages,
      }),
    );
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
