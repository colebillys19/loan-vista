import React, { Fragment } from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_shared/ConditionalRender';
import { StyledTable, StyledTableBody } from 'components/_shared/ListTable';
import ListSkeleton from 'components/_shared/ListSkeleton';

import { StopsListContainer, StopsListHeading } from './styledComponents';
import StopsListRow from './StopsListRow';

const StopsList = ({ data, headers, renderLoading }) => (
  <StopsListContainer>
    <StopsListHeading>Stops</StopsListHeading>
    <StyledTable>
      <StyledTableBody>
        <ConditionalRender
          Component={
            <Fragment>
              {data.map((rowData) => (
                <StopsListRow
                  key={rowData.name}
                  data={rowData}
                  headers={headers}
                />
              ))}
            </Fragment>
          }
          FallbackComponent={<ListSkeleton isTable numRows={12} />}
          shouldRender={!renderLoading}
        />
      </StyledTableBody>
    </StyledTable>
  </StopsListContainer>
);

StopsList.propTypes = {
  data: T.array,
  headers: T.array,
  renderLoading: T.bool.isRequired,
};

StopsList.defaultProps = {
  headers: ['name', 'desc', 'date'],
};

export default StopsList;
