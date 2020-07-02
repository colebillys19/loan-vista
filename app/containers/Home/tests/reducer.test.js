import homeReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // default state params here
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });
});
