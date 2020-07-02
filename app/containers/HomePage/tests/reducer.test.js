import homepageReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('homepageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // default state params here
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(homepageReducer(undefined, {})).toEqual(expectedResult);
  });
});
