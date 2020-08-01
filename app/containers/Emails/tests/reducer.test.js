import emailsReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('emailsReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // default state params here
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(emailsReducer(undefined, {})).toEqual(expectedResult);
  });
});
