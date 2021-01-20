/**
 * CallsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import CallsList from 'components/CallsList';
import ListFilter from 'components/ListFilter';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import ListFallback from 'components/_base-ui/ListFallback';
import TabContainer from 'components/_base-ui/TabContainer';

const CallsView = ({
  callsData,
  dispatchFetchCallsData,
  error,
  fetchParams,
  loading,
  sortLoading,
  sortValues,
}) => {
  const noListData = !loading && callsData.length === 0;

  return (
    <TabContainer aria-labelledby="calls-tab" id="calls-view">
      <ListFilter
        dispatchFetchData={dispatchFetchCallsData}
        fetchParams={fetchParams}
      />
      <ConditionalRender
        Component={
          <CallsList
            callsData={callsData}
            dispatchFetchCallsData={dispatchFetchCallsData}
            loading={loading}
            sortLoading={sortLoading}
            sortValues={sortValues}
          />
        }
        FallbackComponent={<ListFallback error={error} loading={loading} />}
        shouldRender={!error && !loading && !noListData}
      />
    </TabContainer>
  );
};

CallsView.propTypes = {
  callsData: T.array.isRequired,
  dispatchFetchCallsData: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  fetchParams: T.object.isRequired,
  loading: T.bool.isRequired,
  sortLoading: T.bool.isRequired,
  sortValues: T.object.isRequired,
};

export default CallsView;
