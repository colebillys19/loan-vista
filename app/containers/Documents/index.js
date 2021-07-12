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
// import { usePrevious } from 'utils/customHooks';
import DocumentsView from 'components/DocumentsView';
import ConditionalRender from 'components/_shared/ConditionalRender';
import ListFallback from 'components/_shared/ListFallback';
import makeSelectMain from 'containers/Main/selectors';

import makeSelectDocuments, { makeSelectDocumentsData } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import { fetchDocumentsData, setLoadingTrue } from './actions';
import { fetchDocumentsData } from './actions';

export const Documents = ({
  dispatchFetchDocumentsData,
  // dispatchSetLoadingTrue,
  documentsData: { data, listHeaders },
  error,
  lastFetchParams: {
    // dateFrom: lastDateFrom,
    sortCol: lastSortCol,
    sortOrder: lastSortOrder,
  },
  loading,
  // loanNumber,
  mainError,
  sortLoading,
}) => {
  useInjectReducer({ key: 'documents', reducer });
  useInjectSaga({ key: 'documents', saga });

  // const prevLoanNumber = usePrevious(loanNumber);

  useEffect(() => {
    dispatchFetchDocumentsData();
  }, [dispatchFetchDocumentsData]);

  // useEffect(() => {
  //   if (!loanNumber) {
  //     dispatchSetLoadingTrue();
  //   } else if (
  //     !loading &&
  //     (!lastDateFrom || (prevLoanNumber && loanNumber !== prevLoanNumber))
  //   ) {
  //     dispatchFetchDocumentsData();
  //   }
  // }, [
  //   dispatchFetchDocumentsData,
  //   dispatchSetLoadingTrue,
  //   lastDateFrom,
  //   loading,
  //   loanNumber,
  //   prevLoanNumber,
  // ]);

  return (
    <ConditionalRender
      Component={
        <DocumentsView
          dispatchFetchDocumentsData={dispatchFetchDocumentsData}
          documentsData={data}
          lastSortCol={lastSortCol}
          lastSortOrder={lastSortOrder}
          listHeaders={listHeaders}
          sortLoading={sortLoading}
        />
      }
      FallbackComponent={<ListFallback error={error} loading={loading} />}
      shouldRender={!error && !mainError && !loading && !!data.length}
    />
  );
};

Documents.propTypes = {
  dispatchFetchDocumentsData: T.func.isRequired,
  // dispatchSetLoadingTrue: T.func.isRequired,
  documentsData: T.shape({ data: T.array, listHeaders: T.array }).isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  lastFetchParams: T.objectOf(T.string).isRequired,
  loading: T.bool.isRequired,
  // loanNumber: T.string.isRequired,
  mainError: T.oneOfType([T.bool, T.string]).isRequired,
  sortLoading: T.oneOfType([T.bool, T.string]).isRequired,
};

const mapStateToProps = createStructuredSelector({
  documentsData: makeSelectDocumentsData(),
  error: makeSelectDocuments('error'),
  lastFetchParams: makeSelectDocuments('lastFetchParams'),
  loading: makeSelectDocuments('loading'),
  // loanNumber: makeSelectMain('loanNumber'),
  mainError: makeSelectMain('error'),
  pathname: makeSelectPathname(),
  sortLoading: makeSelectDocuments('sortLoading'),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchDocumentsData: (sortCol, sortOrder) =>
    dispatch(fetchDocumentsData(sortCol, sortOrder)),
  // dispatchSetLoadingTrue: () => dispatch(setLoadingTrue()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Documents);
