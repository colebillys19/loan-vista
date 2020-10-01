/**
 * CallsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import CallsList from 'components/CallsList';
import ListFilter from 'components/ListFilter';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import ListRenderFallback from 'components/_base-ui/ListRenderFallback';
import TableHeadBorder from 'components/_base-ui/TableHeadBorder';
import TabWrapper from 'components/_base-ui/TabWrapper';

const CallsView = ({
  callsData,
  dispatchFetchCallsData,
  error,
  loading,
  sortValues,
}) => {
  const noListData = !loading && callsData.length === 0;

  return (
    <TabWrapper aria-labelledby="calls-tab" id="calls-view">
      <ListFilter dispatchFetchData={dispatchFetchCallsData} />
      <TableHeadBorder hideBottom={noListData} />
      <ConditionalRender
        Component={
          <CallsList
            callsData={callsData}
            dispatchFetchCallsData={dispatchFetchCallsData}
            loading={loading}
            sortValues={sortValues}
          />
        }
        FallbackComponent={<ListRenderFallback error={error} />}
        shouldRender={!error && !noListData}
      />
    </TabWrapper>
  );
};

CallsView.propTypes = {
  callsData: T.array.isRequired,
  dispatchFetchCallsData: T.func.isRequired,
  error: T.oneOfType([T.bool, T.string]).isRequired,
  loading: T.bool.isRequired,
  sortValues: T.object.isRequired,
};

export default CallsView;
