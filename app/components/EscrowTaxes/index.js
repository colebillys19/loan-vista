/**
 * EscrowTaxes
 * @description ...
 */

import React, { useContext } from 'react';
import T from 'prop-types';

import Context from 'Context';
import { appColorB } from 'styleConstants';
import ConditionalRender from 'components/_shared/ConditionalRender';
import GradientCard from 'components/_shared/GradientCard';
import NoDataBlock from 'components/_shared/NoDataBlock';

import Table from './Table';

const EscrowTaxes = ({ data, headers }) => {
  const [{ mainError, mainLoading }] = useContext(Context);
  const useFallback = mainLoading || mainError;
  const isNoData = !useFallback && !data.length;

  return (
    <GradientCard color={appColorB} heading="Taxes" reduceBottomPadding>
      <ConditionalRender
        Component={Table}
        FallbackComponent={NoDataBlock}
        propsToPassDown={{
          data,
          headers,
          mainError,
          useFallback,
        }}
        shouldRender={!isNoData}
      />
    </GradientCard>
  );
};

EscrowTaxes.propTypes = { data: T.array, headers: T.array };

EscrowTaxes.defaultProps = {
  headers: ['Tax Type', 'Paid To', 'Tax ID', 'Next Due', 'Expected Amount'],
};

export default EscrowTaxes;
