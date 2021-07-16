import React from 'react';
import T from 'prop-types';

import Spinner from 'components/_shared/Spinner';

import { SpinnerContainer, StyledTableRow } from './styledComponents';

/* eslint-disable react/no-array-index-key */
const ListLoader = ({ numCells }) => (
  <thead>
    <StyledTableRow>
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

ListLoader.propTypes = { numCells: T.number.isRequired };

export default ListLoader;
