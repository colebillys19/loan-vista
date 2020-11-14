/**
 * DocumentsList
 * @description ...
 */

import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import ListBorders from 'components/_base-ui/ListBorders';
import ListSortButton from 'components/_base-ui/ListSortButton';
import {
  StyledTable,
  StyledTableBody,
  StyledTableHeader,
  StyledTableRow,
  TableFooter,
  TableWrapper,
} from 'components/_base-ui/ListTable';

import TableRow from './TableRow';
import { CustomTableHead } from './styledComponents';

const DocumentsList = ({
  documentsData,
  dispatchFetchDocumentsData,
  headers,
  sortLoading,
  sortValues: { sortCol, sortOrder },
}) => {
  const [colClicked, setColClicked] = useState('');

  useEffect(() => {
    setColClicked('');
  }, [sortCol, sortOrder]);

  const handleSortClick = (header) => {
    setColClicked(header);

    if (header !== sortCol) {
      dispatchFetchDocumentsData({ sortCol: header, sortOrder: 'desc' });
    } else {
      dispatchFetchDocumentsData({
        sortOrder: sortOrder === 'desc' ? 'asc' : 'desc',
      });
    }
  };

  return (
    <TableWrapper>
      <ListBorders />
      <StyledTable>
        <CustomTableHead>
          <StyledTableRow>
            {headers.map((header) => {
              if (['date sent', 'type', 'from'].indexOf(header) !== -1) {
                return (
                  <StyledTableHeader key={header} scope="col">
                    <ListSortButton
                      isActive={header === sortCol}
                      isAscending={header === sortCol && sortOrder === 'asc'}
                      loading={sortLoading && header === colClicked}
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
            <TableRow data={restData} headers={headers} key={id} />
          ))}
        </StyledTableBody>
        <TableFooter />
      </StyledTable>
    </TableWrapper>
  );
};

DocumentsList.propTypes = {
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
  sortLoading: T.bool.isRequired,
  sortValues: T.shape({ sortCol: T.string, sortOrder: T.string }).isRequired,
};

DocumentsList.defaultProps = {
  headers: ['date sent', 'time sent', 'type', 'from', 'desc', 'pdf'],
};

export default DocumentsList;
