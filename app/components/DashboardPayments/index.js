/**
 * DashboardPayments
 * @description ...
 */

import React, { Fragment, useContext } from 'react';
import T from 'prop-types';

import Context from 'Context';
import { CashIcon } from 'images/iconComponents';
import { StyledTable, StyledTableBody } from 'components/_shared/ListTable';
import { appColorB, iconColorB, textColorA } from 'styleConstants';
import ConditionalRender from 'components/_shared/ConditionalRender';
import GradientCard from 'components/_shared/GradientCard';
import ListSkeleton from 'components/_shared/ListSkeleton';
import NoDataBlock from 'components/_shared/NoDataBlock';
import ViewMoreBlock from 'components/_shared/ViewMoreBlock';

import CustomTableRow from './CustomTableRow';

const Icon = <CashIcon colorA={iconColorB} colorB={textColorA} size="4rem" />;

const DashboardPayments = ({
  data: { data, listHeaders },
  dispatchNavigation,
}) => {
  const [{ mainError, mainLoading }] = useContext(Context);
  const useFallback = mainLoading || mainError;

  return (
    <GradientCard
      color={appColorB}
      heading="Payments"
      Icon={Icon}
      reduceBottomPadding
    >
      <ConditionalRender
        Component={<NoDataBlock />}
        shouldRender={!useFallback && !data.length}
      />
      <StyledTable>
        <StyledTableBody>
          <ConditionalRender
            Component={
              <Fragment>
                {data.map(({ id, ...restData }) => (
                  <CustomTableRow
                    key={id}
                    data={restData}
                    headers={listHeaders}
                  />
                ))}
              </Fragment>
            }
            FallbackComponent={
              <ListSkeleton isError={mainError} isTable numRows={5} />
            }
            shouldRender={!useFallback}
          />
        </StyledTableBody>
      </StyledTable>
      <ViewMoreBlock
        isActive={!useFallback && !!data.length}
        navigate={() => dispatchNavigation('/payments')}
      />
    </GradientCard>
  );
};

DashboardPayments.propTypes = {
  data: T.shape({ data: T.arrayOf(T.object), listHeaders: T.arrayOf(T.string) })
    .isRequired,
  dispatchNavigation: T.func.isRequired,
};

export default DashboardPayments;
