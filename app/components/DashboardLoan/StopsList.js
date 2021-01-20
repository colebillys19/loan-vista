import React from 'react';
import T from 'prop-types';

import { StyledTable, StyledTableBody } from 'components/_base-ui/ListTable';

import { StopsListContainer, StopsListHeading } from './styledComponents';
import StopsListRow from './StopsListRow';

const StopsList = ({ data, headers }) => { // eslint-disable-line
  //

  return (
    <StopsListContainer>
      <StopsListHeading>Stops</StopsListHeading>
      <StyledTable>
        <StyledTableBody>
          {data.map(({ id, ...restData }) => (
            <StopsListRow key={id} data={restData} headers={headers} />
          ))}
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
