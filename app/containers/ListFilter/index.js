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
  makeSelectTargetDateErrors,
  makeSelectTargetId,
  makeSelectTargetLastFetchParams,
  makeSelectTargetState,
} from './selectors';
import { updateFilterState } from './actions';
import HandlerLogic from './HandlerLogic';
import reducer from './reducer';

export const ListFilter = ({
  dispatchFetchDataCalls,
  dispatchFetchDataDocuments,
  dispatchFetchDataPayments,
  dispatchUpdateFilterState,
  targetDateErrors,
  targetId,
  targetLastFetchParams,
  targetState,
}) => {
  useInjectReducer({ key: 'listFilter', reducer });

  const { dateFrom, dateRange, dateTo, keyword } = targetState;
  const [dateFromError, dateToError] = targetDateErrors;

  const dispatchFetchDataDict = {
    calls: dispatchFetchDataCalls,
    documents: dispatchFetchDataDocuments,
    payments: dispatchFetchDataPayments,
  };

  return (
    <HandlerLogic
      dateErrors={targetDateErrors}
      dispatchFetchData={dispatchFetchDataDict[targetId]}
      dispatchUpdateFilterState={dispatchUpdateFilterState}
      lastFetchParams={targetLastFetchParams}
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
      targetId={targetId}
    />
  );
};

ListFilter.propTypes = {
  dispatchFetchDataCalls: T.func.isRequired,
  dispatchFetchDataDocuments: T.func.isRequired,
  dispatchFetchDataPayments: T.func.isRequired,
  dispatchUpdateFilterState: T.func.isRequired,
  targetDateErrors: T.arrayOf(T.string).isRequired,
  targetId: T.string.isRequired,
  targetLastFetchParams: T.object.isRequired,
  targetState: T.shape({
    dateFrom: T.object,
    dateRange: T.number,
    dateTo: T.object,
    keyword: T.string,
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  pathname: makeSelectPathname(),
  targetDateErrors: makeSelectTargetDateErrors(),
  targetId: makeSelectTargetId(),
  targetLastFetchParams: makeSelectTargetLastFetchParams(),
  targetState: makeSelectTargetState(),
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
