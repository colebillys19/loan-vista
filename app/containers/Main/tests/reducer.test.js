import mainReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('mainReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // default state params here
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(mainReducer(undefined, {})).toEqual(expectedResult);
  });
});
