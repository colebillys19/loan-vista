import callsReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('callsReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // default state params here
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(callsReducer(undefined, {})).toEqual(expectedResult);
  });
});
