/**
 * CallsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import CallsList from 'components/CallsList';
import ListFilterCalls from 'components/ListFilterCalls';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import ListFallback from 'components/_base-ui/ListFallback';
import TabContainer from 'components/_base-ui/TabContainer';

const CallsView = ({
  callsData,
  dispatchFetchCallsData,
  dispatchUpdateFilterState,
  error,
  filterState,
  lastFetchParams,
  loading,
  sortLoading,
}) => {
  const { dateFrom, dateTo, keyword, sortCol, sortOrder } = lastFetchParams;

  return (
    <TabContainer aria-labelledby="calls-tab" id="calls-view">
      <ListFilterCalls
        dispatchFetchData={dispatchFetchCallsData}
        dispatchUpdateFilterState={dispatchUpdateFilterState}
        filterState={filterState}
        lastFetchParams={{ dateFrom, dateTo, keyword }}
      />
      <ConditionalRender
        Component={
          <CallsList
            callsData={callsData}
            dispatchFetchCallsData={dispatchFetchCallsData}
            lastFetchParams={{ sortCol, sortOrder }}
            sortLoading={sortLoading}
          />
        }
        FallbackComponent={<ListFallback error={error} loading={loading} />}
        shouldRender={!error && !loading && !!callsData.length}
      />
    </TabContainer>
  );
};

CallsView.propTypes = {
  callsData: T.array.isRequired,
  dispatchFetchCallsData: T.func.isRequired,
  dispatchUpdateFilterState: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  filterState: T.object.isRequired,
  lastFetchParams: T.shape({
    dateFrom: T.string,
    dateTo: T.string,
    keyword: T.string,
    sortCol: T.string,
    sortOrder: T.string,
  }).isRequired,
  loading: T.bool.isRequired,
  sortLoading: T.oneOfType([T.bool, T.string]).isRequired,
};

export default CallsView;
