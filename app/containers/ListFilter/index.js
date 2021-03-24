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
import { fetchDocumentsData } from 'containers/Documents/actions';
import { fetchPaymentsData } from 'containers/Payments/actions';
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
  targetFilterState,
  targetLastFetchParams,
}) => {
  useInjectReducer({ key: 'listFilter', reducer });

  const {
    state: { dateFrom, dateFromError, dateRange, dateTo, dateToError, keyword },
    targetId,
  } = targetFilterState;

  const dispatchFetchDataDict = {
    calls: dispatchFetchDataCalls,
    documents: dispatchFetchDataDocuments,
    payments: dispatchFetchDataPayments,
  };

  return (
    <HandlerLogic
      dispatchFetchData={dispatchFetchDataDict[targetId]}
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
  targetFilterState: T.shape({
    state: T.shape({
      dateFrom: T.object,
      dateFromError: T.string,
      dateRange: T.number,
      dateTo: T.object,
      dateToError: T.string,
      keyword: T.string,
    }),
    targetId: T.string,
  }).isRequired,
  targetLastFetchParams: T.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pathname: makeSelectPathname(),
  targetFilterState: makeSelectTargetFilterState(),
  targetLastFetchParams: makeSelectTargetLastFetchParams(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchDataCalls: (sortCol, sortOrder) =>
    dispatch(fetchCallsData(sortCol, sortOrder)),
  dispatchFetchDataDocuments: (sortCol, sortOrder) =>
    dispatch(fetchDocumentsData(sortCol, sortOrder)),
  dispatchFetchDataPayments: (sortCol, sortOrder) =>
    dispatch(fetchPaymentsData(sortCol, sortOrder)),
  dispatchUpdateFilterState: (substate, newValues) =>
    dispatch(updateFilterState(substate, newValues)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ListFilter);
