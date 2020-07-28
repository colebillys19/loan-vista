import corrReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('corrReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // default state params here
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(corrReducer(undefined, {})).toEqual(expectedResult);
  });
});
