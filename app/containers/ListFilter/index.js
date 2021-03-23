/**
 * ListFilter
 * @description ...
 */

import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { fetchCallsData } from 'containers/Calls/actions';
// import { fetchDocumentsData } from 'containers/Documents/actions';
// import { fetchPaymentsData } from 'containers/Payments/actions';
import { makeSelectPathname } from 'containers/App/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import ListFilterView from 'components/ListFilterView';

import {
  makeSelectTargetFilterState,
  makeSelectTargetLastFetchParams,
} from './selectors';
import { updateFilterState } from './actions';
import HandlerLogic from './HandlerLogic';
import reducer from './reducer';

export const ListFilter = ({
  dispatchFetchDataCalls,
  dispatchFetchDataDocuments,
  dispatchFetchDataPayments,
  dispatchUpdateFilterState,
  pathname,
  targetFilterState,
  targetLastFetchParams,
}) => {
  useInjectReducer({ key: 'listFilter', reducer });

  const {
    dateFrom,
    dateFromError,
    dateRange,
    dateTo,
    dateToError,
    keyword,
  } = targetFilterState;

  const dispatchFetchDataDict = {
    calls: dispatchFetchDataCalls,
    documents: dispatchFetchDataDocuments,
    payments: dispatchFetchDataPayments,
  };

  return (
    <HandlerLogic
      dispatchFetchData={dispatchFetchDataDict[pathname.slice(1)]}
      dispatchUpdateFilterState={dispatchUpdateFilterState}
      filterState={targetFilterState}
      lastFetchParams={targetLastFetchParams}
      render={({
        handleDateFromChange,
        handleDateRangeChange,
        handleDateToChange,
        handleKeywordChange,
        handleRefreshClick,
        handleSubmitClick,
        setDateFromError,
        setDateToError,
      }) => (
        <ListFilterView
          dateFrom={dateFrom}
          dateFromError={dateFromError}
          dateRange={dateRange}
          dateTo={dateTo}
          dateToError={dateToError}
          handleDateFromChange={handleDateFromChange}
          handleDateRangeChange={handleDateRangeChange}
          handleDateToChange={handleDateToChange}
          handleKeywordChange={handleKeywordChange}
          handleRefreshClick={handleRefreshClick}
          handleSubmitClick={handleSubmitClick}
          keyword={keyword}
          setDateFromError={setDateFromError}
          setDateToError={setDateToError}
        />
      )}
    />
  );
};

ListFilter.propTypes = {
  dispatchFetchDataCalls: T.func.isRequired,
  dispatchFetchDataDocuments: T.func.isRequired,
  dispatchFetchDataPayments: T.func.isRequired,
  dispatchUpdateFilterState: T.func.isRequired,
  pathname: T.string.isRequired,
  targetFilterState: T.shape({
    dateFrom: T.string,
    dateFromError: T.string,
    dateRange: T.string,
    dateTo: T.string,
    dateToError: T.string,
    keyword: T.string,
  }).isRequired,
  targetLastFetchParams: T.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pathname: makeSelectPathname(),
  targetFilterState: makeSelectTargetFilterState(),
  targetLastFetchParams: makeSelectTargetLastFetchParams(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchDataCalls: dispatch((sortCol, sortOrder) =>
    fetchCallsData(sortCol, sortOrder),
  ),
  // temp using calls
  dispatchFetchDataDocuments: dispatch((sortCol, sortOrder) =>
    fetchCallsData(sortCol, sortOrder),
  ),
  // temp using calls
  dispatchFetchDataPayments: dispatch((sortCol, sortOrder) =>
    fetchCallsData(sortCol, sortOrder),
  ),
  dispatchUpdateFilterState: dispatch((substate, param, value) =>
    updateFilterState(substate, param, value),
  ),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ListFilter);
