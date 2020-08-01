import { createSelector } from 'reselect';

import { initialState } from './reducer';
import { getEmailsData } from './helpers';

const selectEmailsDomain = (state) => state.emails || initialState;

const makeSelectEmails = (prop) =>
  createSelector(
    selectEmailsDomain,
    (substate) => substate[prop],
  );

/**
 * makeSelectEmailsData
 * @description ...
 */
const makeSelectEmailsData = () =>
  createSelector(
    makeSelectEmails('emailsData'),
    (emailsData) => getEmailsData(emailsData),
  );

export default makeSelectEmails;
export { makeSelectEmailsData, selectEmailsDomain };
