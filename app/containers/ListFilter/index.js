/**
 * ListFilter
 * @description ...
 */

import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  fetchCallsData,
  setIsFilteredData as setIsFilteredDataCalls,
} from 'containers/Calls/actions';
import {
  fetchDocumentsData,
  setIsFilteredData as setIsFilteredDataDocuments,
} from 'containers/Documents/actions';
import {
  fetchPaymentsData,
  setIsFilteredData as setIsFilteredDataPayments,
} from 'containers/Payments/actions';
import { useInjectReducer } from 'utils/injectReducer';
import ListFilterView from 'components/ListFilterView';

import {
  makeSelectIsFilteredData,
  makeSelectTargetDateErrors,
  makeSelectTargetState,
} from './selectors';
import { updateFilterState } from './actions';
import HandlerLogic from './HandlerLogic';
import reducer from './reducer';

export const ListFilter = ({
  dispatchFetchDataCalls,
  dispatchFetchDataDocuments,
  dispatchFetchDataPayments,
  dispatchSetIsFilteredCalls,
  dispatchSetIsFilteredDocuments,
  dispatchSetIsFilteredPayments,
  dispatchUpdateFilterState,
  isFilteredData,
  tabId,
  targetDateErrors,
  targetState,
}) => {
  useInjectReducer({ key: 'listFilter', reducer });

  const { dateFrom, dateRange, dateTo, keyword } = targetState;
  const [dateFromError, dateToError] = targetDateErrors;

  const tabDispatchDict = {
    calls: {
      fetch: dispatchFetchDataCalls,
      setIsFiltered: dispatchSetIsFilteredCalls,
    },
    documents: {
      fetch: dispatchFetchDataDocuments,
      setIsFiltered: dispatchSetIsFilteredDocuments,
    },
    payments: {
      fetch: dispatchFetchDataPayments,
      setIsFiltered: dispatchSetIsFilteredPayments,
    },
  };

  return (
    <HandlerLogic
      dateErrors={targetDateErrors}
      dispatchFetchData={tabDispatchDict[tabId].fetch}
      dispatchSetIsFiltered={tabDispatchDict[tabId].setIsFiltered}
      dispatchUpdateFilterState={dispatchUpdateFilterState}
      isFilteredData={isFilteredData}
      render={({
        handleDateFromChange,
        handleDateRangeChange,
        handleDateToChange,
        handleKeywordChange,
        handleRefreshClick,
        handleSubmitClick,
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
        />
      )}
      state={targetState}
      tabId={tabId}
    />
  );
};

ListFilter.propTypes = {
  dispatchFetchDataCalls: T.func.isRequired,
  dispatchFetchDataDocuments: T.func.isRequired,
  dispatchFetchDataPayments: T.func.isRequired,
  dispatchSetIsFilteredCalls: T.func.isRequired,
  dispatchSetIsFilteredDocuments: T.func.isRequired,
  dispatchSetIsFilteredPayments: T.func.isRequired,
  dispatchUpdateFilterState: T.func.isRequired,
  isFilteredData: T.bool.isRequired,
  tabId: T.string.isRequired,
  targetDateErrors: T.arrayOf(T.string).isRequired,
  targetState: T.shape({
    dateFrom: T.object,
    dateRange: T.number,
    dateTo: T.object,
    keyword: T.string,
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  isFilteredData: makeSelectIsFilteredData(),
  targetDateErrors: makeSelectTargetDateErrors(),
  targetState: makeSelectTargetState(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchDataCalls: (sortCol, sortOrder) =>
    dispatch(fetchCallsData(sortCol, sortOrder)),
  dispatchFetchDataDocuments: (sortCol, sortOrder) =>
    dispatch(fetchDocumentsData(sortCol, sortOrder)),
  dispatchFetchDataPayments: (sortCol, sortOrder) =>
    dispatch(fetchPaymentsData(sortCol, sortOrder)),
  dispatchSetIsFilteredCalls: (value) =>
    dispatch(setIsFilteredDataCalls(value)),
  dispatchSetIsFilteredDocuments: (value) =>
    dispatch(setIsFilteredDataDocuments(value)),
  dispatchSetIsFilteredPayments: (value) =>
    dispatch(setIsFilteredDataPayments(value)),
  dispatchUpdateFilterState: (substate, newValues) =>
    dispatch(updateFilterState(substate, newValues)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ListFilter);
