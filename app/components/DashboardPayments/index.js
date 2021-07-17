/**
 * DashboardPayments
 * @description ...
 */

import React, { useContext } from 'react';
import T from 'prop-types';

import Context from 'Context';
import { CashIcon } from 'images/iconComponents';
import { appColorB, iconColorB, textColorA } from 'styleConstants';
import ConditionalRender from 'components/_shared/ConditionalRender';
import GradientCard from 'components/_shared/GradientCard';
import NoDataBlock from 'components/_shared/NoDataBlock';
import ViewMoreBlock from 'components/_shared/ViewMoreBlock';

import Table from './Table';

const Icon = <CashIcon colorA={iconColorB} colorB={textColorA} size="4rem" />;

const DashboardPayments = ({
  data: { data, formattedHeaders, listHeaders },
  dispatchNavigation,
}) => {
  const [{ mainError, mainLoading }] = useContext(Context);
  const useFallback = mainLoading || mainError;
  const isNoData = !useFallback && !data.length;

  return (
    <GradientCard
      color={appColorB}
      heading="Payments"
      Icon={Icon}
      reduceBottomPadding
    >
      <ConditionalRender
        Component={Table}
        FallbackComponent={NoDataBlock}
        propsToPassDown={{
          data,
          formattedHeaders,
          listHeaders,
          mainError,
          useFallback,
        }}
        shouldRender={!isNoData}
      />
      <ViewMoreBlock
        isActive={!useFallback && !!data.length}
        navigate={() => dispatchNavigation('/payments')}
      />
    </GradientCard>
  );
};

DashboardPayments.propTypes = {
  data: T.shape({
    data: T.arrayOf(T.object),
    formattedHeaders: T.arrayOf(T.string),
    listHeaders: T.arrayOf(T.string),
  }).isRequired,
  dispatchNavigation: T.func.isRequired,
};

export default DashboardPayments;
