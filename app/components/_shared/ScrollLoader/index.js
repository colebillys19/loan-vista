import React from 'react';
import T from 'prop-types';

import Spinner from 'components/_shared/Spinner';

import { SpinnerContainer, StyledTableRow } from './styledComponents';

/* eslint-disable react/no-array-index-key */
const ListLoader = ({ isEven, numCells }) => (
  <thead>
    <StyledTableRow isEven={isEven}>
      <td>
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      </td>
      {new Array(numCells - 1).fill(null).map((v, i) => (
        <td key={i} />
      ))}
    </StyledTableRow>
  </thead>
);

ListLoader.propTypes = {
  isEven: T.bool.isRequired,
  numCells: T.number.isRequired,
};

export default ListLoader;
