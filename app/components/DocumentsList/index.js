/**
 * DocumentsList
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import ListSortButton from 'components/_base-ui/ListSortButton';
import ListTable from 'components/_base-ui/ListTable';
import ListTableBody from 'components/_base-ui/ListTableBody';
import ListTableHead from 'components/_base-ui/ListTableHead';

import TableRow from './TableRow';
import { StyledTableHeader } from './styledComponents';

const DocumentsList = ({ documentsData, headers, sortAsc, sortColumn }) => (
  <ListTable>
    <ListTableHead>
      <tr>
        {headers.map((header) => {
          if (['date sent', 'type', 'from'].indexOf(header) !== -1) {
            return (
              <StyledTableHeader key={header} scope="col">
                <ListSortButton
                  isActive={header === sortColumn}
                  isAscending={sortAsc}
                  onClick={() => null}
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
      </tr>
    </ListTableHead>
    <ListTableBody>
      {documentsData.map(({ id, ...restData }) => (
        <TableRow data={restData} headers={headers} key={id} />
      ))}
    </ListTableBody>
  </ListTable>
);

DocumentsList.propTypes = {
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
  sortAsc: T.bool,
  sortColumn: T.string.isRequired,
};

DocumentsList.defaultProps = {
  headers: ['date sent', 'time sent', 'type', 'from', 'desc', 'pdf'],
  sortAsc: false,
};

export default DocumentsList;
