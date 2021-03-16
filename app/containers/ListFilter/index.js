/**
 * ListFilter
 * @description ...
 */

import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import ListFilterView from 'components/ListFilterView';
import { makeSelectPathname } from 'containers/App/selectors';

import { makeSelectListFilterState } from './selectors';
import { updateFilterState } from './actions';
import HandlerLogic from './HandlerLogic';
import reducer from './reducer';

export const ListFilter = ({
  dispatchUpdateFilterState,
  listFilterState,
  location: { pathname },
}) => {
  useInjectReducer({ key: 'listFilter', reducer });

  //
  const targetContainer = pathname.slice(1);

  //
  const {
    dateFrom,
    dateFromError,
    dateRange,
    dateTo,
    dateToError,
    keyword,
  } = listFilterState[targetContainer];

  return (
    <HandlerLogic
      dispatchFetchData={null} // uses targetContainer
      dispatchUpdateFilterState={dispatchUpdateFilterState}
      filterState={listFilterState[targetContainer]}
      lastFetchParams={null} // uses targetContainer
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
  dispatchUpdateFilterState: T.func.isRequired,
  listFilterState: T.object.isRequired,
  location: T.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listFilterState: () => makeSelectListFilterState(),
  pathname: makeSelectPathname(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateFilterState: dispatch((substate, param, value) =>
    updateFilterState(substate, param, value),
  ),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ListFilter);
