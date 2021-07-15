import React, { Fragment, useContext } from 'react';
import T from 'prop-types';

import Context from 'Context';
import ConditionalRender from 'components/_shared/ConditionalRender';
import { StyledTable, StyledTableBody } from 'components/_shared/ListTable';
import ListSkeleton from 'components/_shared/ListSkeleton';

import { StopsListContainer, StopsListHeading } from './styledComponents';
import StopsListRow from './StopsListRow';

const StopsList = ({ data, headers }) => {
  const [{ mainError, mainLoading }] = useContext(Context);

  return (
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
            FallbackComponent={
              <ListSkeleton isError={mainError} isTable numRows={12} />
            }
            shouldRender={!mainLoading && !mainError}
          />
        </StyledTableBody>
      </StyledTable>
    </StopsListContainer>
  );
};

StopsList.propTypes = { data: T.array, headers: T.array };

StopsList.defaultProps = {
  headers: ['name', 'desc', 'date'],
};

export default StopsList;
