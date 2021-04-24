import { createSelector } from 'reselect';

import { getDocumentsData } from './helpers';
import initialState from './initialState';

const selectDocumentsDomain = (state) => state.documents || initialState;

const makeSelectDocuments = (prop) =>
  createSelector(
    selectDocumentsDomain,
    (substate) => substate[prop],
  );

/**
 * makeSelectDocumentsData
 * @description ...
 */
const makeSelectDocumentsData = () =>
  createSelector(
    makeSelectDocuments('documentsData'),
    (documentsData) => getDocumentsData(documentsData),
  );

export default makeSelectDocuments;
export { makeSelectDocumentsData, selectDocumentsDomain };
