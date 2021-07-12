/**
 * TableHead
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListSortButton from 'components/_shared/ListSortButton';
import {
  StyledTableHeader,
  StyledTableRow,
} from 'components/_shared/GradientListTable';

import { PaymentsTableHead } from './styledComponents';

const SortHead = ({
  dispatchFetchPaymentsData,
  headers,
  lastSortCol,
  lastSortOrder,
  sortLoading,
}) => {
  const handleSortClick = (header) => {
    const newSortCol = header;
    const newSortOrder =
      header === lastSortCol && lastSortOrder === 'desc' ? 'asc' : 'desc';

    dispatchFetchPaymentsData(newSortCol, newSortOrder);
  };

  return (
    <PaymentsTableHead>
      <StyledTableRow>
        {headers.map((header) => (
          <StyledTableHeader key={header} scope="col">
            <ListSortButton
              isActive={header === lastSortCol}
              isAscending={header === lastSortCol && lastSortOrder === 'asc'}
              loading={sortLoading === header}
              onClick={() => handleSortClick(header)}
              text={header}
            />
          </StyledTableHeader>
        ))}
        <StyledTableHeader scope="col" />
      </StyledTableRow>
    </PaymentsTableHead>
  );
};

SortHead.propTypes = {
  dispatchFetchPaymentsData: T.func.isRequired,
  headers: T.arrayOf(T.string).isRequired,
  lastSortCol: T.string.isRequired,
  lastSortOrder: T.string.isRequired,
  sortLoading: T.oneOfType([T.bool, T.string]).isRequired,
};

export default SortHead;
