/**
 * DocumentsView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListBorders from 'components/_shared/ListBorders';
import ListSortButton from 'components/_shared/ListSortButton';
import {
  StyledTable,
  StyledTableBody,
  StyledTableHeader,
  StyledTableRow,
  TableContainer,
  TableFooter,
} from 'components/_shared/GradientListTable';

import TableRow from './TableRow';
import { CustomTableHead } from './styledComponents';

const DocumentsView = ({
  dispatchFetchDocumentsData,
  documentsData,
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
    <TableContainer>
      <ListBorders />
      <StyledTable>
        <CustomTableHead>
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
        </CustomTableHead>
        <StyledTableBody>
          {documentsData.map(({ id, ...restData }) => (
            <TableRow key={id} data={restData} headers={headers} />
          ))}
        </StyledTableBody>
        <TableFooter />
      </StyledTable>
    </TableContainer>
  );
};

DocumentsView.propTypes = {
  dispatchFetchDocumentsData: T.func.isRequired,
  documentsData: T.arrayOf(
    T.shape({
      'date sent': T.string,
      desc: T.string,
      from: T.string,
      id: T.string,
      pdf: T.string,
      'time sent': T.string,
      type: T.string,
    }),
  ).isRequired,
  headers: T.arrayOf(T.string),
  lastSortCol: T.string.isRequired,
  lastSortOrder: T.string.isRequired,
  sortLoading: T.oneOfType([T.bool, T.string]).isRequired,
};

DocumentsView.defaultProps = {
  headers: ['date sent', 'time sent', 'type', 'from', 'desc', 'pdf'],
};

export default DocumentsView;
