/**
 * DashboardCalls
 * @description ...
 */

import React, { useContext } from 'react';
import T from 'prop-types';

import Context from 'Context';
import { CallIcon } from 'images/iconComponents';
import { appColorB, iconColorB, textColorA } from 'styleConstants';
import ConditionalRender from 'components/_shared/ConditionalRender';
import GradientCard from 'components/_shared/GradientCard';
import NoDataBlock from 'components/_shared/NoDataBlock';
import ViewMoreBlock from 'components/_shared/ViewMoreBlock';

import Table from './Table';

const Icon = <CallIcon colorA={iconColorB} colorB={textColorA} size="4rem" />;

const DashboardCalls = ({
  data: { data, formattedHeaders, listHeaders },
  dispatchNavigation,
  dispatchSetAudioModalData,
}) => {
  const [{ mainError, mainLoading }] = useContext(Context);
  const useFallback = mainLoading || mainError;
  const isNoData = !useFallback && !data.length;

  return (
    <GradientCard
      color={appColorB}
      heading="Calls"
      Icon={Icon}
      reduceBottomPadding
    >
      <ConditionalRender
        Component={Table}
        FallbackComponent={NoDataBlock}
        propsToPassDown={{
          data,
          dispatchSetAudioModalData,
          formattedHeaders,
          listHeaders,
          mainError,
          useFallback,
        }}
        shouldRender={!isNoData}
      />
      <ViewMoreBlock
        isActive={!useFallback && !!data.length}
        navigate={() => dispatchNavigation('/calls')}
      />
    </GradientCard>
  );
};

DashboardCalls.propTypes = {
  data: T.shape({
    data: T.arrayOf(T.object),
    formattedHeaders: T.arrayOf(T.string),
    listHeaders: T.arrayOf(T.string),
  }).isRequired,
  dispatchNavigation: T.func.isRequired,
  dispatchSetAudioModalData: T.func.isRequired,
};

export default DashboardCalls;
