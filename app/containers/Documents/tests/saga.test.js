import { all, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_ERROR_MESSAGE } from 'utils/globalConstants';

import { fetchDocumentsDataFailure } from '../actions';
import { FETCH_DOCUMENTS_DATA } from '../constants';
import initialState from '../initialState';
import watcherSaga, {
  fetchDocumentsData,
  fetchDocumentsDataSaga,
} from '../saga';

import { MOCK_DATA } from './mockData';

describe('fetchDocumentsData Saga', () => {
  const generator = fetchDocumentsData();

  it('calls fetchDocumentsDataSaga when FETCH_DOCUMENTS_DATA action is dispatched', () => {
    const expectedEffect = takeLatest(
      FETCH_DOCUMENTS_DATA,
      fetchDocumentsDataSaga,
    );

    expect(generator.next().value).toEqual(expectedEffect);
  });

  it('is done', () => {
    const isDone = generator.next().done;

    expect(isDone).toBe(true);
  });
});

describe('fetchDocumentsDataSaga Saga', () => {
  const params = { sortCol: '', sortOrder: '' };
  const generatorA = fetchDocumentsDataSaga({ payload: { params } });
  const generatorB = fetchDocumentsDataSaga({ payload: { params } });

  // it('selects loan number from state', () => {
  //   expect(generatorA.next().value.type).toEqual('SELECT');
  // });

  it('selects current filter values from state', () => {
    expect(generatorA.next({ loanNumber: '1234567890' }).value.type).toEqual(
      'SELECT',
    );
  });

  it('selects last fetch params from state', () => {
    expect(generatorA.next({ documents: initialState }).value.type).toEqual(
      'SELECT',
    );
  });

  it('fetches data from the server', () => {
    expect(generatorA.next().value.type).toEqual('CALL');
  });

  it('updates state with data fetched', () => {
    expect(
      generatorA.next({
        documentsData: MOCK_DATA,
        params: initialState.lastFetchParams,
      }).value.type,
    ).toEqual('PUT');
  });

  it('is done', () => {
    expect(generatorA.next().done).toBe(true);
  });

  it('updates state with error message if fetch unsuccessful', () => {
    generatorB.next();
    const err = REQUEST_ERROR_MESSAGE;
    const actualEffect = generatorB.throw(err).value;
    const expectedEffect = put(fetchDocumentsDataFailure(err));

    expect(actualEffect).toEqual(expectedEffect);
  });
});

describe('watcherSaga Saga', () => {
  const generator = watcherSaga();

  it('monitors all dispatched actions', () => {
    const expectedEffect = all([fetchDocumentsData()]);

    expect(generator.next().value).toEqual(expectedEffect);
  });

  it('is done', () => {
    expect(generator.next().done).toBe(true);
  });
});
