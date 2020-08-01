/**
 * CallsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import CallsList from 'components/CallsList';
import TabWrapper from 'components/TabWrapper';
import ConditionalRender from 'components/_baseUI/ConditionalRender';
import Spinner from 'components/_baseUI/Spinner';
import NoListDataFallback from 'components/_baseUI/NoListDataFallback';

import { CallsViewWrapper } from './styledComponents';

const CallsView = ({ callsData, loading }) => {
  const noListData = !loading && callsData.length === 0;

  return (
    <TabWrapper aria-labelledby="calls-tab" id="calls-view">
      <CallsViewWrapper>
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
      </CallsViewWrapper>
    </TabWrapper>
  );
};

CallsView.propTypes = {
  callsData: T.array.isRequired,
  loading: T.bool.isRequired,
};

export default CallsView;
