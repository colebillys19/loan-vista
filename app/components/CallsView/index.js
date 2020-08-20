/**
 * CallsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import CallsList from 'components/CallsList';
import ListFilter from 'components/ListFilter';
import TabWrapper from 'components/_base-ui/TabWrapper';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import Spinner from 'components/_base-ui/Spinner';
import NoListDataFallback from 'components/_base-ui/NoListDataFallback';

const CallsView = ({ callsData, loading }) => {
  const noListData = !loading && callsData.length === 0;

  return (
    <TabWrapper aria-labelledby="calls-tab" id="calls-view">
      <ListFilter />
      <ConditionalRender
        Component={
          <ConditionalRender
            Component={<CallsList callsData={callsData} loading={loading} />}
            FallbackComponent={<Spinner />}
            shouldRender={!loading}
          />
        }
        FallbackComponent={<NoListDataFallback />}
        shouldRender={!noListData}
      />
    </TabWrapper>
  );
};

CallsView.propTypes = {
  callsData: T.array.isRequired,
  loading: T.bool.isRequired,
};

export default CallsView;
