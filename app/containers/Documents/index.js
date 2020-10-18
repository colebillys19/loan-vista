/**
 * Documents
 * @description ...
 */

import React, { useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import DocumentsView from 'components/DocumentsView';
import { makeSelectPathname } from 'containers/App/selectors';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDocuments, {
  makeSelectDocumentsData,
  makeSelectSortValues,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchDocumentsData, onUnmount } from './actions';

export const Documents = ({
  documentsData,
  dispatchFetchDocumentsData,
  dispatchOnUnmount,
  error,
  fetchParams,
  loading,
  pathname,
  sortLoading,
  sortValues,
}) => {
  useInjectReducer({ key: 'documents', reducer });
  useInjectSaga({ key: 'documents', saga });

  useEffect(() => {
    dispatchFetchDocumentsData();

    return () => dispatchOnUnmount();
  }, []);

  return (
    <DocumentsView
      dispatchFetchDocumentsData={dispatchFetchDocumentsData}
      documentsData={documentsData}
      error={error}
      fetchParams={fetchParams}
      loading={loading}
      pathname={pathname}
      sortLoading={sortLoading}
      sortValues={sortValues}
    />
  );
};

Documents.propTypes = {
  documentsData: T.array.isRequired,
  dispatchFetchDocumentsData: T.func.isRequired,
  dispatchOnUnmount: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  fetchParams: T.object.isRequired,
  loading: T.bool.isRequired,
  pathname: T.string.isRequired,
  sortLoading: T.bool.isRequired,
  sortValues: T.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  documentsData: makeSelectDocumentsData(),
  error: makeSelectDocuments('error'),
  fetchParams: makeSelectDocuments('fetchParams'),
  loading: makeSelectDocuments('loading'),
  pathname: makeSelectPathname(),
  sortLoading: makeSelectDocuments('sortLoading'),
  sortValues: makeSelectSortValues(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchDocumentsData: (props) => dispatch(fetchDocumentsData(props)),
  dispatchOnUnmount: () => dispatch(onUnmount()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Documents);
