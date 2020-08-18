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
import makeSelectDocuments, { makeSelectDocumentsData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchDocumentsData, onUnmount } from './actions';

export const Documents = ({
  documentsData,
  dispatchFetchDocumentsData,
  dispatchOnUnmount,
  loading,
  pathname,
}) => {
  useInjectReducer({ key: 'documents', reducer });
  useInjectSaga({ key: 'documents', saga });

  useEffect(() => {
    dispatchFetchDocumentsData();

    return () => {
      dispatchOnUnmount();
    };
  }, []);

  return (
    <DocumentsView
      documentsData={documentsData}
      loading={loading}
      pathname={pathname}
    />
  );
};

Documents.propTypes = {
  documentsData: T.array.isRequired,
  dispatchFetchDocumentsData: T.func.isRequired,
  dispatchOnUnmount: T.func.isRequired,
  loading: T.bool.isRequired,
  pathname: T.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  documentsData: makeSelectDocumentsData(),
  loading: makeSelectDocuments('loading'),
  pathname: makeSelectPathname(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchDocumentsData: () => dispatch(fetchDocumentsData()),
  dispatchOnUnmount: () => dispatch(onUnmount()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Documents);