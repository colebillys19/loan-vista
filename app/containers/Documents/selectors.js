import { createSelector } from 'reselect';

import { initialState } from './reducer';
import { getDocumentsData } from './helpers';

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

/**
 * makeSelectSortValues
 * @description ...
 */
const makeSelectSortValues = () =>
  createSelector(
    makeSelectDocuments('fetchParams'),
    ({ sortCol, sortOrder }) => ({ sortCol, sortOrder }),
  );

export default makeSelectDocuments;
export { makeSelectDocumentsData, selectDocumentsDomain, makeSelectSortValues };
