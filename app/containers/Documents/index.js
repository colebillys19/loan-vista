/**
 * Documents
 * @description ...
 */

import React, { useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectPathname } from 'containers/App/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { usePrevious } from 'utils/customHooks';
import DocumentsView from 'components/DocumentsView';
import makeSelectMain from 'containers/Main/selectors';

import makeSelectDocuments, {
  makeSelectDocumentsData,
  makeSelectSortValues,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchDocumentsData, onUnmount, setLoadingTrue } from './actions';

export const Documents = ({
  dispatchFetchDocumentsData,
  dispatchOnUnmount,
  dispatchSetLoadingTrue,
  documentsData,
  error,
  fetchParams,
  loading,
  loanNumber,
  mainError,
  noDataFetched,
  pathname,
  sortLoading,
  sortValues,
}) => {
  useInjectReducer({ key: 'documents', reducer });
  useInjectSaga({ key: 'documents', saga });

  const prevLoanNumber = usePrevious(loanNumber);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => dispatchOnUnmount(), []);

  useEffect(() => {
    if (!loanNumber) {
      dispatchSetLoadingTrue();
    } else if (loanNumber !== prevLoanNumber) {
      dispatchFetchDocumentsData();
    }
  }, [
    dispatchFetchDocumentsData,
    dispatchSetLoadingTrue,
    loanNumber,
    pathname,
    prevLoanNumber,
  ]);

  return (
    <DocumentsView
      dispatchFetchDocumentsData={dispatchFetchDocumentsData}
      documentsData={documentsData}
      error={mainError || error}
      fetchParams={fetchParams}
      loading={loading}
      noDataFetched={noDataFetched}
      pathname={pathname}
      sortLoading={sortLoading}
      sortValues={sortValues}
    />
  );
};

Documents.propTypes = {
  dispatchFetchDocumentsData: T.func.isRequired,
  dispatchOnUnmount: T.func.isRequired,
  dispatchSetLoadingTrue: T.func.isRequired,
  documentsData: T.array.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  fetchParams: T.object.isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
  mainError: T.oneOfType([T.bool, T.string]).isRequired,
  noDataFetched: T.bool.isRequired,
  pathname: T.string.isRequired,
  sortLoading: T.bool.isRequired,
  sortValues: T.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  documentsData: makeSelectDocumentsData(),
  error: makeSelectDocuments('error'),
  fetchParams: makeSelectDocuments('fetchParams'),
  loading: makeSelectDocuments('loading'),
  loanNumber: makeSelectMain('loanNumber'),
  mainError: makeSelectMain('error'),
  noDataFetched: makeSelectDocuments('noDataFetched'),
  pathname: makeSelectPathname(),
  sortLoading: makeSelectDocuments('sortLoading'),
  sortValues: makeSelectSortValues(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchDocumentsData: (props) => dispatch(fetchDocumentsData(props)),
  dispatchOnUnmount: () => dispatch(onUnmount()),
  dispatchSetLoadingTrue: () => dispatch(setLoadingTrue()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Documents);
