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

import { CallsTableHead } from './styledComponents';

const SortHead = ({
  dispatchFetchCallsData,
  headers,
  lastSortCol,
  lastSortOrder,
  sortLoading,
}) => {
  const handleSortClick = (header) => {
    const newSortCol = header;
    const newSortOrder =
      header === lastSortCol && lastSortOrder === 'desc' ? 'asc' : 'desc';

    dispatchFetchCallsData(newSortCol, newSortOrder);
  };

  return (
    <CallsTableHead>
      <StyledTableRow>
        {headers.map((header) => {
          if (['date', 'dept', 'rep'].includes(header)) {
            return (
              <StyledTableHeader key={header} scope="col">
                <ListSortButton
                  isActive={header === lastSortCol}
                  isAscending={
                    header === lastSortCol && lastSortOrder === 'asc'
                  }
                  loading={sortLoading === header}
                  onClick={() => handleSortClick(header)}
                  text={header}
                />
              </StyledTableHeader>
            );
          }

          return (
            <StyledTableHeader key={header} scope="col">
              {header}
            </StyledTableHeader>
          );
        })}
      </StyledTableRow>
    </CallsTableHead>
  );
};

SortHead.propTypes = {
  dispatchFetchCallsData: T.func.isRequired,
  headers: T.arrayOf(T.string).isRequired,
  lastSortCol: T.string.isRequired,
  lastSortOrder: T.string.isRequired,
  sortLoading: T.oneOfType([T.bool, T.string]).isRequired,
};

export default SortHead;
