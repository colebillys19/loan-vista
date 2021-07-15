/**
 * SidebarSummary
 * @description ...
 */

import React, { Fragment, useContext } from 'react';
import T from 'prop-types';

import Context from 'Context';
import { BulletIcon } from 'images/iconComponents';
import { getHealthColor } from 'utils/globalHelpers';
import ConditionalRender from 'components/_shared/ConditionalRender';
import ListSkeleton from 'components/_shared/ListSkeleton';

import {
  Detail,
  DetailLabel,
  Row,
  SidebarSummaryContainer,
  StyledH5,
  SummaryTitleContainer,
} from './styledComponents';

const SidebarSummary = ({ data, health, numRows, title }) => {
  const [{ mainError, mainLoading }] = useContext(Context);

  return (
    <SidebarSummaryContainer>
      <SummaryTitleContainer>
        <BulletIcon size="1.2rem" />
        <StyledH5>{title}</StyledH5>
      </SummaryTitleContainer>
      <ConditionalRender
        Component={
          <Fragment>
            {data.map(({ label, value }) => {
              const statusHealthColor =
                label === 'Status' ? getHealthColor(health) : null;

              return (
                <Row key={label}>
                  <DetailLabel>{label}: </DetailLabel>
                  <Detail color={statusHealthColor}>{value}</Detail>
                </Row>
              );
            })}
          </Fragment>
        }
        FallbackComponent={
          <ListSkeleton isError={mainError} numRows={numRows} />
        }
        shouldRender={!mainLoading && !mainError}
      />
    </SidebarSummaryContainer>
  );
};

SidebarSummary.propTypes = {
  data: T.arrayOf(
    T.shape({ label: T.string, value: T.oneOfType([T.number, T.string]) }),
  ).isRequired,
  health: T.number,
  numRows: T.number,
  title: T.string.isRequired,
};

export default SidebarSummary;
