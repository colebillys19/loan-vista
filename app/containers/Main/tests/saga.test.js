import { all, call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_ERROR_MESSAGE } from 'utils/globalConstants';
import { get } from 'utils/request';

import { fetchLoanDataFailure } from '../actions';
import { FETCH_LOAN_DATA } from '../constants';
import watcherSaga, { fetchLoanData, fetchLoanDataSaga } from '../saga';

describe('fetchLoanData Saga', () => {
  const generator = fetchLoanData();

  it('should yield takeLatest FETCH_LOAN_DATA', () => {
    const expectedEffect = takeLatest(FETCH_LOAN_DATA, fetchLoanDataSaga);

    expect(generator.next().value).toEqual(expectedEffect);
  });

  it('should be done', () => {
    const isDone = generator.next().done;

    expect(isDone).toBe(true);
  });
});

describe('fetchLoanDataSaga Saga', () => {
  const generatorA = fetchLoanDataSaga();
  const generatorB = fetchLoanDataSaga();

  it('sends a get request to the server', () => {
    const expectedEffect = call(get, '/api/loan');

    expect(generatorA.next().value).toEqual(expectedEffect);
  });

  // revisit this
  it('updates state with data returned (if request successful)', () => {
    const {
      payload: {
        action: { type: actionType },
      },
      type: effectType,
    } = generatorA.next({}).value;

    expect(effectType).toEqual('PUT');
    expect(actionType).toEqual('app/Main/FETCH_LOAN_DATA_SUCCESS');
  });

  it('is done', () => {
    expect(generatorA.next().done).toBe(true);
  });

  it('updates state with error message (if request unsuccessful)', () => {
    generatorB.next();
    const err = REQUEST_ERROR_MESSAGE;
    const actualEffect = generatorB.throw(err).value;
    const expectedEffect = put(fetchLoanDataFailure(err));

    expect(actualEffect).toEqual(expectedEffect);
  });
});

describe('watcherSaga Saga', () => {
  const generator = watcherSaga();

  it('should yield watcher saga', () => {
    const expectedEffect = all([fetchLoanData()]);

    expect(generator.next().value).toEqual(expectedEffect);
  });
});
