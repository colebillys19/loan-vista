import documentsReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('documentsReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // default state params here
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(documentsReducer(undefined, {})).toEqual(expectedResult);
  });
});
