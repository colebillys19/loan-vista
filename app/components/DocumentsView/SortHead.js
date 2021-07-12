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

import { DocumentsTableHead } from './styledComponents';

const SortHead = ({
  dispatchFetchDocumentsData,
  headers,
  lastSortCol,
  lastSortOrder,
  sortLoading,
}) => {
  const handleSortClick = (header) => {
    const newSortCol = header;
    const newSortOrder =
      header === lastSortCol && lastSortOrder === 'desc' ? 'asc' : 'desc';

    dispatchFetchDocumentsData(newSortCol, newSortOrder);
  };

  return (
    <DocumentsTableHead>
      <StyledTableRow>
        {headers.map((header) => {
          if (['date sent', 'type', 'from'].includes(header)) {
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
    </DocumentsTableHead>
  );
};

SortHead.propTypes = {
  dispatchFetchDocumentsData: T.func.isRequired,
  headers: T.arrayOf(T.string).isRequired,
  lastSortCol: T.string.isRequired,
  lastSortOrder: T.string.isRequired,
  sortLoading: T.oneOfType([T.bool, T.string]).isRequired,
};

export default SortHead;
