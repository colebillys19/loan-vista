import paymentsReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('paymentsReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // default state params here
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(paymentsReducer(undefined, {})).toEqual(expectedResult);
  });
});
